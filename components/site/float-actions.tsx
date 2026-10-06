import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("size-[18px]", className)} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20.5 3.5A11.7 11.7 0 0 0 12.2 0C5.7 0 .5 5.2.5 11.7c0 2.1.6 4.2 1.7 6L.4 24l6.5-1.7a11.7 11.7 0 0 0 5.3 1.3h.1c6.4 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6.1-3.5-8.4Zm-8.3 18.1h-.1c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.9 1 1-3.8-.2-.3a9.5 9.5 0 0 1-1.5-5.2C2.5 6.5 6.8 2.2 12.2 2.2c2.6 0 5 1 6.8 2.8a9.5 9.5 0 0 1 2.8 6.8c0 5.4-4.3 9.8-9.6 9.8Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.2 4.9 4.5 1.8.8 2.5.9 3.4.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.3-.4-.3-.7-.4Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden className="size-[18px]" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="float-instagram-gradient" x1="0%" x2="100%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="45%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect
        fill="none"
        height="18"
        rx="5"
        stroke="url(#float-instagram-gradient)"
        strokeWidth="1.75"
        width="18"
        x="3"
        y="3"
      />
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="4"
        stroke="url(#float-instagram-gradient)"
        strokeWidth="1.75"
      />
      <circle cx="17.45" cy="6.55" fill="url(#float-instagram-gradient)" r="1.05" stroke="none" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("size-[18px]", className)} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6.6 2.5 9 2l2.1 5.1-1.7 1.7a16 16 0 0 0 5.8 5.8l1.7-1.7L22 15l-.5 2.4c-.3 1.3-1.5 2.2-2.8 2.1C9.5 18.7 5.3 14.5 4.5 5.3 4.4 4 5.3 2.8 6.6 2.5Z"
      />
    </svg>
  );
}

const floatButtonBase =
  "grid size-[38px] place-items-center rounded-full border bg-[#fffaf3] shadow-[0_6px_18px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-x-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf3]";

export function FloatActions() {
  return (
    <div
      className="fixed right-3 bottom-[4.75rem] z-30 flex flex-col gap-2.5 md:right-5 md:bottom-4"
      aria-label="Contact links"
    >
      <a
        href={`https://wa.me/${site.phone.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={cn(floatButtonBase, "border-[#25D366]/45 text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:ring-[#25D366]/50")}
      >
        <WhatsAppIcon />
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={cn(floatButtonBase, "border-[#DD2A7B]/40 hover:border-[#DD2A7B] hover:bg-[#DD2A7B]/8 focus-visible:ring-[#DD2A7B]/45")}
      >
        <InstagramIcon />
      </a>
      <a
        href={`tel:${site.phone}`}
        aria-label="Call"
        className={cn(floatButtonBase, "border-[#2563EB]/45 text-[#2563EB] hover:border-[#2563EB] hover:bg-[#2563EB]/10 focus-visible:ring-[#2563EB]/45")}
      >
        <PhoneIcon />
      </a>
    </div>
  );
}
