import Image from 'next/image';

interface BlogPost {
  category: string;
  title: string;
  imageUrl: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    category: 'Ad Films',
    title: 'The Art Of Brand Storytelling',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/cinematic-film-production-behind-the-sce-400a158f-20251127153035.jpg',
    href: '#',
  },
  {
    category: 'Marketing',
    title: 'Digital Strategy That Works',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/modern-marketing-campaign-photoshoot-set-d15bf6f1-20251127153034.jpg',
    href: '#',
  },
  {
    category: 'Entertainment',
    title: 'Creating Memorable Experiences',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/live-entertainment-show-recording-with-p-75a890c9-20251127153034.jpg',
    href: '#',
  },
  {
    category: 'Social Awareness',
    title: 'Content With Purpose',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/documentary-interview-setup-with-profess-1535752b-20251127153034.jpg',
    href: '#',
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <a href={post.href} className="group block overflow-hidden rounded-xl border border-border bg-black transition-colors duration-300 hover:border-primary">
    <div className="overflow-hidden">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={580}
        height={350}
        className="h-[350px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-[1.2]"
      />
    </div>
    <div className="flex flex-col items-start gap-5 p-[30px]">
      <p className="font-body text-sm font-medium uppercase tracking-[1px] text-primary">{post.category}</p>
      <h4 className="font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#A78BFA] xl:text-[28px]">{post.title}</h4>
    </div>
  </a>
);

export default function BlogGrid() {
  return (
    <section className="relative bg-black py-[120px]">
      <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/kHwH61aBGlH2T6lGq1QO3c7OQ.jpg')] bg-cover bg-center opacity-15" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-[60px] px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
          <div className="flex-1">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.01em] text-white md:text-5xl xl:max-w-[800px] xl:text-[64px] xl:leading-[1.1] xl:tracking-[-2px]">
              Creating Content Magic: Insights and Stories from the Industry
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-start gap-[30px] lg:items-end">
            <p className="max-w-[450px] text-body-lg text-text-secondary">
              Welcome to our blog, where the world of creative content comes to life. At Anand, we&apos;re passionate about storytelling, innovation, and the art of communication.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#" className="inline-block whitespace-nowrap rounded-full bg-gray-100 px-8 py-[18px] text-center text-base font-medium text-black transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90">
                READ ALL NEWS
              </a>
              <a href="#" className="inline-block whitespace-nowrap rounded-full border border-white bg-transparent px-8 py-[18px] text-center text-base font-medium text-white transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}