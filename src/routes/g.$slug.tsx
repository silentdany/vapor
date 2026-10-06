import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Info, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Cover, PlatformBadge } from "@/components/cover";
import { SaveButton } from "@/components/save-button";
import { controlsFor, getGame, type Game, type Status } from "@/data/games";
import { useSaved } from "@/lib/saved";

export const Route = createFileRoute("/g/$slug")({
  head: ({ params }) => {
    const game = getGame(params.slug);
    return {
      meta: [{ title: game ? `${game.title} — Vapor` : "Not in the store — Vapor" }],
    };
  },
  component: GameScreen,
});

function statusLabel(status: Status): string {
  if (status === "playable") return "Marked playable";
  if (status === "boots") return "Boots, lightly tested";
  return "Listed, not yet tested";
}

function GameScreen() {
  const { slug } = Route.useParams();
  const game = getGame(slug);
  if (!game) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center bg-bg px-5">
        <h1 className="text-3xl font-semibold text-bright">Not in the store</h1>
        <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent">
          Back to Vapor
        </Link>
      </main>
    );
  }
  return game.play ? <Embedded game={game} /> : <External game={game} />;
}

function Bar({
  title,
  subtitle,
  extra,
}: {
  title: string;
  subtitle: string;
  extra?: ReactNode;
}) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-1 border-b border-raised bg-header pr-1 pl-1">
      <Link
        to="/"
        aria-label="Back to the store"
        className="grid size-11 place-items-center text-fg"
      >
        <ArrowLeft className="size-5" />
      </Link>
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-sm font-semibold text-bright">{title}</h1>
        <p className="truncate text-xs text-muted">{subtitle}</p>
      </div>
      {extra}
    </header>
  );
}

function Embedded({ game }: { game: Game }) {
  const [loaded, setLoaded] = useState(false);
  const [about, setAbout] = useState(false);
  const { saved, toggle } = useSaved();

  return (
    <div className="relative flex h-dvh flex-col bg-header">
      <Bar
        title={game.title}
        subtitle={loaded ? `${game.platform} · ${game.year}` : "Loading the build…"}
        extra={
          <>
            <button
              type="button"
              aria-expanded={about}
              aria-label="About this build"
              onClick={() => setAbout(true)}
              className="grid size-11 place-items-center text-muted"
            >
              <Info className="size-5" />
            </button>
            <SaveButton
              saved={saved.includes(game.slug)}
              title={game.title}
              onToggle={() => toggle(game.slug)}
            />
          </>
        }
      />
      <div className="relative min-h-0 flex-1 bg-header">
        <iframe
          title={`Play ${game.title}`}
          src={game.play ?? undefined}
          onLoad={() => setLoaded(true)}
          allow="fullscreen; gamepad; autoplay; pointer-lock"
          className="h-full w-full border-0"
        />
      </div>
      {about ? <AboutSheet game={game} onClose={() => setAbout(false)} /> : null}
    </div>
  );
}

function External({ game }: { game: Game }) {
  const { saved, toggle } = useSaved();
  return (
    <main className="min-h-dvh bg-bg">
      <Bar
        title="Vapor"
        subtitle="Store"
        extra={
          <SaveButton saved={saved.includes(game.slug)} title={game.title} onToggle={() => toggle(game.slug)} />
        }
      />
      <div className="relative">
        <Cover slug={game.slug} priority className="aspect-video max-h-96" />
        <div className="hero-shade absolute inset-0" />
        <div className="absolute top-3 left-3 z-10">
          <PlatformBadge platform={game.platform} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h1 className="text-3xl font-semibold text-bright">{game.title}</h1>
          <p className="text-sm text-fg">
            {game.platform} · {game.year} · {game.genre}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-4">
        <a
          href={game.page}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 bg-play px-6 text-sm font-bold tracking-wide text-play-fg uppercase"
        >
          Play
          <ArrowUpRight className="size-4" />
        </a>
        {game.needsFiles ? (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
            The build will ask for files from a copy you own. They are read in your browser and are not
            uploaded.
          </p>
        ) : (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
            This player cannot be framed, so Play opens the build’s own page.
          </p>
        )}
        <div className="mt-6 bg-surface p-4 ring-1 ring-header">
          <Facts game={game} />
        </div>
      </div>
    </main>
  );
}

function AboutSheet({ game, onClose }: { game: Game; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-20 flex items-end bg-header/80" onClick={onClose}>
      <div
        role="dialog"
        aria-labelledby="about-title"
        className="max-h-[75dvh] w-full overflow-auto border-t border-line bg-surface px-5 pt-3 pb-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between">
          <h2 id="about-title" className="text-sm font-semibold text-bright">
            About this build
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid size-11 place-items-center text-muted"
          >
            <X className="size-5" />
          </button>
        </div>
        <Facts game={game} />
      </div>
    </div>
  );
}

function Facts({ game }: { game: Game }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed">
      <p className="text-fg">{game.blurb}</p>
      {game.credit ? <p className="text-muted">{game.credit}</p> : null}
      <p className="text-muted">
        {game.kind} · {statusLabel(game.status)}
      </p>
      <p className="text-muted">{controlsFor[game.platform]}</p>
      {game.needsFiles ? (
        <p className="text-muted">
          Bring files from a copy you own. Vapor never sees them; the build reads them locally.
        </p>
      ) : null}
      <div className="flex flex-col items-start gap-1">
        <a className="inline-flex h-11 items-center text-accent" href={game.repo} target="_blank" rel="noreferrer">
          Source
        </a>
        <a className="inline-flex h-11 items-center text-accent" href={game.page} target="_blank" rel="noreferrer">
          Build page
        </a>
        {game.play ? (
          <a className="inline-flex h-11 items-center text-accent" href={game.play} target="_blank" rel="noreferrer">
            Open the build in its own tab
          </a>
        ) : null}
      </div>
    </div>
  );
}
