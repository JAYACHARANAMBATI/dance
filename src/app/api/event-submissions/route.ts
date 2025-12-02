import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { eventSubmissions } from '@/db/schema';
import { eq, like, or, desc, and, SQL } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, attendees, eventDate, message, budget } = body;

    // Validate required fields
    const missingFields: string[] = [];
    if (!name || name.trim() === '') missingFields.push('name');
    if (!email || email.trim() === '') missingFields.push('email');
    if (!phone || phone.trim() === '') missingFields.push('phone');
    if (!eventType || eventType.trim() === '') missingFields.push('eventType');
    if (!attendees || attendees.trim() === '') missingFields.push('attendees');
    if (!eventDate || eventDate.trim() === '') missingFields.push('eventDate');
    if (!message || message.trim() === '') missingFields.push('message');

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: `Missing required fields: ${missingFields.join(', ')}`,
          code: 'MISSING_REQUIRED_FIELDS'
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      eventType: eventType.trim(),
      attendees: attendees.trim(),
      eventDate: eventDate.trim(),
      message: message.trim(),
      budget: budget ? budget.trim() : null,
      createdAt: new Date().toISOString()
    };

    // Insert into database
    const newSubmission = await db.insert(eventSubmissions)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(newSubmission[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Pagination parameters
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    
    // Search and filter parameters
    const search = searchParams.get('search');
    const eventTypeFilter = searchParams.get('event_type');

    // Build where conditions
    const conditions: SQL[] = [];

    // Apply search filter
    if (search) {
      const searchTerm = `%${search}%`;
      conditions.push(
        or(
          like(eventSubmissions.name, searchTerm),
          like(eventSubmissions.email, searchTerm),
          like(eventSubmissions.eventType, searchTerm)
        )!
      );
    }

    // Apply event type filter
    if (eventTypeFilter) {
      conditions.push(eq(eventSubmissions.eventType, eventTypeFilter));
    }

    // Build and execute query
    const results = await db
      .select()
      .from(eventSubmissions)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(desc(eventSubmissions.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}