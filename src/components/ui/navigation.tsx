import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
    <nav className="fixed top-0 inset-x-0 z-50 bg-black text-white border-b border-white/10" aria-label="Primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label={`${siteConfig.siteName} - Home`} title={siteConfig.siteName}>
            <img
              src={siteConfig.logoPath}
              className="h-28 md:h-32 w-auto object-contain"
              alt={`${siteConfig.siteName} logo`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-base font-medium transition-all duration-200 text-white/70 hover:text-white relative group",
                  isActive(item.href)
                    ? "text-primary"
                    : ""
                )}
              >
                {item.name}
                {/* Active underline */}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/0 group-hover:bg-primary/50 rounded-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link to="/pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black text-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-all duration-200 text-white/80 hover:text-white relative",
                    isActive(item.href)
                      ? "text-primary bg-primary/10 rounded-md"
                      : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {/* Mobile active indicator */}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                  )}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/pricing">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    {/* Spacer to prevent content jump below fixed header */}
    <div className="h-20" />
    </>
  );
}
