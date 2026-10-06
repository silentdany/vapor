import type { Platform } from "@/data/games";

export function Cover({
  slug,
  className,
  priority,
}: {
  slug: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={`/capsules/${slug}.jpg`}
      alt=""
      width={1280}
      height={720}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`block h-full w-full object-cover ${className ?? ""}`}
    />
  );
}

export function PlatformBadge({ platform }: { platform: Platform }) {
  return (
    <span className="inline-flex size-7 items-center justify-center rounded-sm bg-header/90 text-bright ring-1 ring-white/15">
      <Mark platform={platform} />
      <span className="sr-only">{platform}</span>
    </span>
  );
}

export function CapsuleCaption({ title }: { title: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-2 pt-8 pb-1.5">
      <p className="truncate text-sm font-semibold text-bright">{title}</p>
    </div>
  );
}

function Mark({ platform }: { platform: Platform }) {
  if (platform === "N64") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="1.5" fill="currentColor" />
        <rect x="8.5" y="6" width="7" height="4.5" fill="#171a21" />
        <path d="M9 15.5h6M9 18h6" stroke="#171a21" strokeWidth="1.2" />
      </svg>
    );
  }
  if (platform === "Game Boy") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="1.5" fill="#c6e07a" />
        <rect x="9" y="4.5" width="6" height="5" fill="#1b2838" />
        <circle cx="10" cy="13.5" r="1" fill="#1b2838" />
        <circle cx="14.2" cy="15.2" r="0.7" fill="#1b2838" />
      </svg>
    );
  }
  if (platform === "Xbox 360") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="1" fill="currentColor" />
      <rect x="5" y="6" width="14" height="8" fill="#171a21" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
