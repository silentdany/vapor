import { useEffect, useState } from "react";

const KEY = "vapor.saved";

export function readSaved(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function useSaved() {
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSaved(readSaved());
    setReady(true);
  }, []);

  function toggle(slug: string) {
    setSaved((prev) => {
      const next = prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug];
      window.localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }

  return { saved, toggle, ready };
}
