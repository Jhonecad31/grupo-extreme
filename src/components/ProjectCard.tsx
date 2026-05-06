import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
}

export default function ProjectCard({ title, location, image }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-dark aspect-[4/5] clip-notched cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
        <div className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
          {location}
        </div>
        <h3 className="text-2xl md:text-3xl text-white font-display font-bold leading-tight mb-4">
          {title}
        </h3>
        <Link 
          href="#" 
          className="inline-flex items-center text-white text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          Explorar Proyecto
          <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
