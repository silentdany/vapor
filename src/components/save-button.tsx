import { Heart } from "lucide-react";

export function SaveButton({
  saved,
  title,
  onToggle,
  compact,
}: {
  saved: boolean;
  title: string;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from saved` : `Save ${title}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onToggle();
      }}
      className={
        compact
          ? "grid size-9 place-items-center rounded-sm bg-header/80 text-fg"
          : "grid size-11 shrink-0 place-items-center rounded-sm text-muted hover:text-bright"
      }
    >
      <Heart className={saved ? "size-4 fill-accent text-accent" : "size-4"} strokeWidth={1.75} />
    </button>
  );
}
