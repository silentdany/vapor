const shots = new Set(["freedoom", "openttd", "opentyrian"]);

const plates = ["#1b2838", "#243447", "#1e3344", "#2a3f53", "#16202d"];

function plate(slug: string) {
  let hash = 0;
  for (const char of slug) hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  return plates[hash % plates.length];
}

export function Cover({
  slug,
  className,
  priority,
}: {
  slug: string;
  className?: string;
  priority?: boolean;
}) {
  if (shots.has(slug)) {
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

  return (
    <div
      className={`block h-full w-full ${className ?? ""}`}
      style={{ background: plate(slug) }}
    />
  );
}
