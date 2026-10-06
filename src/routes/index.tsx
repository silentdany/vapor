import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Cover } from "@/components/cover";
import { SaveButton } from "@/components/save-button";
import { featuredGames, games, type Game } from "@/data/games";
import { useSaved } from "@/lib/saved";

export const Route = createFileRoute("/")({
  component: Store,
});

const FILTERS = ["all", "here", "n64", "pc", "gb", "x360", "saved"] as const;
type Filter = (typeof FILTERS)[number];

const chipLabel: Record<Filter, string> = {
  all: "All",
  here: "Plays here",
  n64: "N64",
  pc: "PC",
  gb: "Game Boy",
  x360: "Xbox 360",
  saved: "Saved",
};

function matches(game: Game, q: string, f: Filter, saved: string[]): boolean {
  if (f === "here" && !game.play) return false;
  if (f === "n64" && game.platform !== "N64") return false;
  if (f === "pc" && game.platform !== "PC") return false;
  if (f === "gb" && game.platform !== "Game Boy") return false;
  if (f === "x360" && game.platform !== "Xbox 360") return false;
  if (f === "saved" && !saved.includes(game.slug)) return false;
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  return [game.title, game.genre, game.platform, game.kind, String(game.year)]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

function Store() {
  const [q, setQ] = useState("");
  const [f, setF] = useState<Filter>("all");
  const { saved, toggle, ready } = useSaved();
  const featured = featuredGames();
  const spotlight = featured[0];
  const shown = useMemo(() => games.filter((game) => matches(game, q, f, saved)), [q, f, saved]);
  const browsing = f === "all" && q.trim() === "";

  return (
    <div className="min-h-dvh bg-bg">
      <header className="sticky top-0 z-30 border-b border-raised bg-header">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-3">
          <Link to="/" className="flex shrink-0 items-center gap-2 text-bright" aria-label="Vapor home">
            <VaporMark />
            <span className="text-lg font-bold tracking-widest">VAPOR</span>
          </Link>
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Search games</span>
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-bright/80" />
            <input
              value={q}
              autoComplete="off"
              placeholder="Search the store"
              onChange={(event) => setQ(event.target.value)}
              className="h-9 w-full rounded-sm bg-search pr-3 pl-8 text-base text-bright placeholder:text-bright/70"
            />
          </label>
        </div>
        <div className="scroller mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2">
          {FILTERS.map((id) => {
            const active = f === id;
            const label = id === "saved" && ready ? `Saved ${saved.length}` : chipLabel[id];
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setF(id)}
                className={
                  active
                    ? "h-11 shrink-0 border-b-2 border-accent px-3 text-sm text-bright"
                    : "h-11 shrink-0 px-3 text-sm text-muted"
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-3 pt-4 pb-16">
        {browsing && spotlight ? (
          <section>
            <Link
              to="/g/$slug"
              params={{ slug: spotlight.slug }}
              className="relative block overflow-hidden rounded-sm ring-1 ring-header"
            >
              <Cover slug={spotlight.slug} priority className="aspect-video" />
              <div className="hero-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-accent uppercase">Featured</p>
                  <h2 className="truncate text-2xl font-semibold text-bright">{spotlight.title}</h2>
                  <p className="text-sm text-fg">
                    {spotlight.platform} · {spotlight.year}
                  </p>
                </div>
                <span className="inline-flex h-11 shrink-0 items-center bg-play px-5 text-sm font-bold tracking-wide text-play-fg uppercase">
                  Play
                </span>
              </div>
            </Link>
            <h2 className="mt-6 mb-3 text-sm text-bright">Start here</h2>
            <div className="scroller -mx-3 flex gap-3 overflow-x-auto px-3 pb-1">
              {featured.map((game) => (
                <Link key={game.slug} to="/g/$slug" params={{ slug: game.slug }} className="w-56 shrink-0">
                  <div className="overflow-hidden rounded-sm ring-1 ring-header">
                    <Cover slug={game.slug} className="aspect-video" />
                  </div>
                  <span className="mt-2 block truncate text-sm text-fg">{game.title}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className={browsing ? "mt-6" : ""}>
          <h2 className="mb-3 text-sm text-bright">
            {shown.length === games.length ? "All builds" : `${shown.length} games`}
          </h2>
          {f === "saved" && ready && saved.length === 0 ? (
            <p className="text-sm text-muted">Nothing saved. Use the heart on a capsule.</p>
          ) : shown.length === 0 ? (
            <div>
              <p className="text-sm text-muted">Nothing matches.</p>
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setF("all");
                }}
                className="mt-3 h-11 px-2 text-sm text-accent"
              >
                Clear search
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((game) => (
                <li key={game.slug} className="relative">
                  <Link to="/g/$slug" params={{ slug: game.slug }} className="group block">
                    <div className="overflow-hidden rounded-sm ring-1 ring-header group-hover:ring-accent">
                      <Cover
                        slug={game.slug}
                        className="aspect-video transition duration-200 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 block truncate text-sm text-fg group-hover:text-bright">
                      {game.title}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {game.platform} · {game.year} · {game.genre}
                    </span>
                  </Link>
                  <div className="absolute top-2 right-2">
                    <SaveButton
                      compact
                      saved={saved.includes(game.slug)}
                      title={game.title}
                      onToggle={() => toggle(game.slug)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <footer className="mt-10 max-w-xl text-xs leading-relaxed text-faint">
          Capsules are original stand-in scenes in the look of that machine, not photos and not
          retail covers. A place or an object, no characters. Vapor does not host game data. Builds are
          unofficial. Names belong to their owners.{" "}
          <a
            className="text-accent"
            href="https://decompgames.com/clean-room/"
            target="_blank"
            rel="noreferrer"
          >
            How a clean-room build works
          </a>
          .
        </footer>
      </main>
    </div>
  );
}

function VaporMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
      <path
        fill="#c7d5e0"
        fillRule="evenodd"
        d="M4.6 21.4a7.2 7.2 0 1 0 14.4 0a7.2 7.2 0 1 0-14.4 0zm3.7 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0z"
      />
      <path
        fill="none"
        stroke="#c7d5e0"
        strokeWidth="4"
        strokeLinecap="round"
        d="M15.4 16.2 22.6 8.2"
      />
      <path
        fill="none"
        stroke="#c7d5e0"
        strokeWidth="4"
        strokeLinecap="round"
        d="M19.2 8.2H28.4"
      />
    </svg>
  );
}
