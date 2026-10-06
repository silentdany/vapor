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
  const label = platform === "Game Boy" ? "GB" : platform === "Xbox 360" ? "360" : platform;
  return (
    <span className="inline-flex h-6 items-center rounded-sm bg-header/90 px-1.5 text-[11px] font-bold tracking-wide text-bright">
      {label}
      {label === platform ? null : <span className="sr-only"> {platform}</span>}
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
