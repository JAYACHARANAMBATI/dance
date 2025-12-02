import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const eventSubmissions = sqliteTable('event_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  eventType: text('event_type').notNull(),
  attendees: text('attendees').notNull(),
  eventDate: text('event_date').notNull(),
  budget: text('budget'),
  message: text('message').notNull(),
  createdAt: text('created_at').notNull(),
});