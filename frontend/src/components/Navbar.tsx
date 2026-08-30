import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import brandVisualImage from "@/assets/david-macedo-brand-emblem-transparent.png";
import content from "@/data/content.json";

const { navigation } = content;
const navLinks = navigation.links;

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const transparentHeader = !menuOpen && (active === "home" || active === "contactos");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      for (const { href } of [...navLinks].reverse()) {
        const element = document.getElementById(href);
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActive(href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  const desktopLinkClass = (isActive: boolean) =>
    [
      "relative px-3.5 py-2 text-sm tracking-[0.015em] transition-colors duration-300",
      "after:absolute after:inset-x-3.5 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full",
      "after:bg-[linear-gradient(90deg,var(--primary),var(--accent))] after:transition-transform after:duration-300",
      isActive
        ? "font-semibold text-primary after:scale-x-100"
        : "font-medium text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100",
    ].join(" ");

  const mobileLinkClass = (isActive: boolean) =>
    [
      "relative w-full px-2 py-4 text-left text-lg tracking-[0.015em] transition-colors duration-300",
      "after:absolute after:bottom-2 after:left-2 after:h-0.5 after:w-14 after:origin-left after:rounded-full",
      "after:bg-[linear-gradient(90deg,var(--primary),var(--accent))] after:transition-transform after:duration-300",
      isActive
        ? "font-semibold text-primary after:scale-x-100"
        : "font-medium text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100",
    ].join(" ");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparentHeader
            ? "border-b border-border bg-background/92 shadow-sm backdrop-blur-md lg:border-transparent lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
            : scrolled || menuOpen
              ? "border-b border-border bg-background/92 shadow-sm backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="flex h-[72px] w-full items-center justify-between px-5 sm:px-8 lg:px-10">
          <button
            onClick={() => handleNav("home")}
            className="group flex items-center gap-3.5 text-left leading-none"
            aria-label={navigation.ariaHome}
          >
            <span className="h-8 w-1 shrink-0 rounded-full bg-[linear-gradient(180deg,var(--primary),var(--accent))] transition-transform group-hover:scale-y-110 lg:hidden" />
            <span className="navbar-brand-mark hidden h-8 w-12 shrink-0 items-center justify-center overflow-visible transition-transform group-hover:scale-105 lg:flex">
              <img
                src={brandVisualImage}
                alt=""
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </span>
            <span className="bg-[linear-gradient(135deg,var(--primary),var(--accent-foreground))] bg-clip-text text-base font-semibold tracking-tight text-transparent">
              {navigation.brandName}
            </span>
          </button>

          <nav className="desktop-nav hidden items-center gap-1 lg:flex" aria-label={navigation.ariaDesktop}>
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={desktopLinkClass(active === href)}
              >
                {label}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="mobile-nav-toggle lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={navigation.ariaMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      <div
        className={`mobile-menu fixed inset-0 z-40 bg-background pt-[72px] lg:hidden ${
          menuOpen ? "mobile-menu-opened" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-5" aria-label={navigation.ariaMobile}>
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className={mobileLinkClass(active === href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
