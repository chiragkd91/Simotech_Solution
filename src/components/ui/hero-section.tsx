import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  children,
  className,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 px-4 overflow-hidden",
        backgroundImage ? "text-foreground" : "bg-background text-foreground",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/50"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Truck Background Element */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 z-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M20 60 L80 60 L80 40 L60 40 L60 20 L40 20 L40 40 L20 40 Z" fill="currentColor" />
          <circle cx="30" cy="75" r="8" fill="currentColor" />
          <circle cx="70" cy="75" r="8" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-title text-foreground">{title}</h1>
          {subtitle && (
            <p className="hero-subtitle">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
