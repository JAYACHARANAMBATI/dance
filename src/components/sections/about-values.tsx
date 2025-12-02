"use client";

import Image from "next/image";

interface ValueCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

const valuesData: ValueCardProps[] = [
  {
    number: '01',
    title: 'Creativity',
    description: 'Innovative storytelling and visual excellence in every project.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-film-camera-setup-on-produc-66608a86-20251127153034.jpg',
  },
  {
    number: '02',
    title: 'Excellence',
    description: 'Professional production quality from highly skilled creative team.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-video-editing-suite-with-mu-a227ef7a-20251127153034.jpg',
  },
  {
    number: '03',
    title: 'Impact',
    description: 'Creating meaningful content that inspires and engages audiences.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/broadcasting-studio-with-professional-li-4232ba25-20251127153034.jpg',
  },
];

const ValueCard = ({ number, title, description, imageUrl }: ValueCardProps) => (
  <div className="group relative flex h-[520px] flex-col justify-end overflow-hidden rounded-xl border border-border bg-background-secondary p-8 transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary">
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="absolute inset-0 -z-20 object-cover transition-transform duration-300 ease-in-out"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

    <div className="absolute left-8 right-8 top-8 flex items-center gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border bg-black/30">
        <h6 className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{number}</h6>
      </div>
      <div className="h-px flex-1 bg-border"></div>
    </div>

    <div className="relative z-10 flex flex-col gap-4">
      <h4 className="font-display text-[28px] font-semibold leading-tight text-text-primary">{title}</h4>
      <p className="max-w-[320px] font-body text-base leading-relaxed text-text-secondary">{description}</p>
    </div>
  </div>
);

const AboutValues = () => {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="container">
        <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
          <h6 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground lg:text-[14px]">
            About Us
          </h6>
          <h2 className="max-w-[900px] font-display text-4xl font-bold leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[1.2]">
            Discover The Heart And Soul Of Anand Media
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valuesData.map((value, index) => (
            <div
              key={value.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ValueCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;