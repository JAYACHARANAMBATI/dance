const EventsGrid = () => {
  const events = [
    {
      date: "May 5, 2025",
      category: "CORPORATE",
      title: "Business Conference Production",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-corporate-event-production--4083c66b-20251127153136.jpg",
      aspectRatio: "tall"
    },
    {
      date: "May 5, 2025",
      category: "TALK SHOW",
      title: "Live Studio Recording",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/live-talk-show-recording-with-profession-2ec6c494-20251127153136.jpg",
      aspectRatio: "wide"
    },
    {
      date: "May 5, 2025",
      category: "ENTERTAINMENT",
      title: "Music Video Production",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/music-video-production-shoot-with-perfor-fbd595ae-20251127153137.jpg",
      aspectRatio: "wide"
    },
    {
      date: "May 5, 2025",
      category: "AWARDS",
      title: "Gala Ceremony Coverage",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/award-ceremony-stage-production-with-spo-7ed3128f-20251127153136.jpg",
      aspectRatio: "tall"
    }
  ];

  return (
    <section id="events" className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <a
              key={index}
              href="#"
              className={`group relative border border-[#333333] rounded-xl overflow-hidden hover:border-[#8B5CF6] transition-all duration-500 ${
                event.aspectRatio === 'tall' ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                event.aspectRatio === 'tall' ? 'aspect-[3/4] md:aspect-[2/3]' : 'aspect-[4/3]'
              }`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
                  <p className="text-white text-xs lg:text-sm font-medium">{event.date}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-[#8B5CF6]/80 backdrop-blur-sm rounded-full">
                  <p className="text-white text-xs lg:text-sm font-semibold tracking-wider">{event.category}</p>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold group-hover:text-[#8B5CF6] transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;