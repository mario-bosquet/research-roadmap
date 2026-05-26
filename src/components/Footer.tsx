import { Scale, Facebook, Linkedin, Youtube } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/keenfunnel",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/keen-funnel",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@keenfunnel",
    icon: <Youtube className="h-5 w-5" />,
  },
  {
    label: "X",
    href: "https://x.com/keenfunnel",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-6 py-7">
        <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:items-center md:gap-0">

          {/* Left — Legal */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://legal-center.keenfunnel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-[#93ADFF]"
            >
              <Scale className="h-4 w-4" />
              <span>Legal Center</span>
            </a>
          </div>

          {/* Center — Social icons */}
          <div className="flex items-center justify-center gap-7">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 transition-colors duration-300 hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Right — Copyright */}
          <div className="flex justify-center md:justify-end">
            <span className="text-[11px] tracking-widest text-slate-500">
              © 2026 Keenfunnel | All Rights Reserved
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
