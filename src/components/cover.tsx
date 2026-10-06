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
