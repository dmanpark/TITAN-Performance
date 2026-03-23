import Link from "next/link";
import Image from "next/image";

const footerNav = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Stacks", href: "/stacks" },
      { label: "Foundation", href: "/product/foundation" },
      { label: "Prime", href: "/product/prime" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Philosophy", href: "/philosophy" },
      { label: "Our Approach", href: "/philosophy" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-container border-t border-navy/5 px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <Link href="/" aria-label="TITAN Performance">
              <Image
                src="/assets/logo.png"
                alt="TITAN Performance"
                width={120}
                height={28}
                className="h-7 w-auto opacity-70"
              />
            </Link>
            <p className="mt-4 text-xs text-steel/60 max-w-[280px] leading-relaxed">
              A system built for strength, not hype. Structured supplementation
              for real progression.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            {footerNav.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <span className="font-heading font-extrabold text-[11px] uppercase tracking-[0.2em] text-navy mb-2">
                  {group.title}
                </span>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-steel hover:text-navy transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-navy/5 gap-4 text-center md:text-left">
          <span className="text-[11px] text-steel/60 tracking-[0.1em] uppercase">
            &copy; {new Date().getFullYear()} TITAN Performance. Architectural
            Strength.
          </span>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[11px] text-steel/60 tracking-[0.1em] uppercase hover:text-navy transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[11px] text-steel/60 tracking-[0.1em] uppercase hover:text-navy transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
