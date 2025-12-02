const Instructors = () => {
  const instructors = [
    {
      name: "Sarah Johns",
      title: "Creative Director",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/302f2eb8-c880-421b-a1bb-6288ea042554-dancer-template-framer-website/assets/images/7solzDoK4cm2P0cL53lmw4PXhp8-4.jpg"
    },
    {
      name: "David Chen",
      title: "Production Manager",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/302f2eb8-c880-421b-a1bb-6288ea042554-dancer-template-framer-website/assets/images/n14fTiUgtbphYwzUztX9JgBgDl8-5.jpg"
    },
    {
      name: "Emily Lewis",
      title: "Marketing Lead",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/302f2eb8-c880-421b-a1bb-6288ea042554-dancer-template-framer-website/assets/images/8uL94Zlmkm402wENZJND3AHuBuQ-6.jpg"
    },
    {
      name: "Daniel Miller",
      title: "Content Specialist",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/302f2eb8-c880-421b-a1bb-6288ea042554-dancer-template-framer-website/assets/images/6jWwOffgRGHXTBcglQdyb5aW1rQ-7.jpg"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h6 className="mb-4">Best Team</h6>
          <h2 className="max-w-5xl mx-auto">
            Our Professional Team Brings Your Vision To Life
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative border border-[#333333] rounded-xl overflow-hidden hover:border-[#8B5CF6] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Name Overlay - appears on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white text-xl lg:text-2xl">
                    {instructor.name}
                  </h4>
                </div>
              </div>

              {/* Title */}
              <div className="p-6 bg-black/50">
                <p className="text-[#999999] text-xs lg:text-sm uppercase tracking-wider font-semibold">
                  {instructor.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;