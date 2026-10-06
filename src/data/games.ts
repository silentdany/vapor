export type Platform = "N64" | "PC" | "Game Boy" | "Xbox 360"
export type Status = "playable" | "boots" | "untested"
export type Kind = "Decompilation" | "Recompilation" | "Source port" | "Engine recreation"

export type Game = {
  slug: string
  title: string
  year: number
  platform: Platform
  genre: string
  kind: Kind
  status: Status
  blurb: string
  /** Direct build that allows framing. Null when the player cannot be embedded. */
  play: string | null
  /** Public build page, opens in a new tab. */
  page: string
  repo: string
  /** True when the build reads a local file from a copy the player already owns. */
  needsFiles: boolean
  /** Shown when the capsule is a screenshot someone else licensed. */
  credit?: string
}

export const games: Game[] = [
  {
    "slug": "diddy-kong-racing",
    "title": "Diddy Kong Racing",
    "year": 1997,
    "platform": "N64",
    "genre": "Racing",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Kart racing from its decompilation and SDL port. Marked playable. Art is regenerated.",
    "play": "https://andrewnakas.github.io/dkr-cleanroom/",
    "page": "https://decompgames.com/games/diddy-kong-racing/",
    "repo": "https://github.com/andrewnakas/dkr-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "dr-mario-64",
    "title": "Dr. Mario 64",
    "year": 2001,
    "platform": "N64",
    "genre": "Puzzle",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Pill matching from the drmario64 decompilation. Marked playable.",
    "play": "https://andrewnakas.github.io/drmario64-cleanroom/",
    "page": "https://decompgames.com/games/dr-mario-64/",
    "repo": "https://github.com/andrewnakas/drmario64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "f-zero-x",
    "title": "F-Zero X",
    "year": 1998,
    "platform": "N64",
    "genre": "Racing",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Anti-gravity racing from the fzerox decompilation. Marked playable.",
    "play": "https://andrewnakas.github.io/fzerox-cleanroom/",
    "page": "https://decompgames.com/games/f-zero-x/",
    "repo": "https://github.com/andrewnakas/fzerox-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "goldeneye-007",
    "title": "GoldenEye 007",
    "year": 1997,
    "platform": "N64",
    "genre": "Shooter",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "The 1997 shooter from the 007 decompilation. Marked playable. Looks and sounds are stand-ins.",
    "play": "https://andrewnakas.github.io/goldeneye-cleanroom/",
    "page": "https://decompgames.com/games/goldeneye-007/",
    "repo": "https://github.com/andrewnakas/goldeneye-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "digger",
    "title": "Open Digger",
    "year": 1983,
    "platform": "PC",
    "genre": "Arcade",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Eight new mazes on the Digger engine. Tiles, font, and tune are new CC0 work, not the 1983 set.",
    "play": null,
    "page": "https://decompgames.com/games/digger/",
    "repo": "https://github.com/sobomax/digger",
    "needsFiles": false
  },
  {
    "slug": "shortline",
    "title": "Open Junction",
    "year": 1992,
    "platform": "PC",
    "genre": "Simulation",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "A small railway dispatcher on the ShortLine engine, with new CC0 art and a six-station network.",
    "play": null,
    "page": "https://decompgames.com/games/shortline/",
    "repo": "https://github.com/konovalov-aleks/reSL",
    "needsFiles": false
  },
  {
    "slug": "supaplex",
    "title": "Open Paths",
    "year": 2026,
    "platform": "PC",
    "genre": "Puzzle",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Six new circuit mazes on the OpenSupaplex engine. Levels and tiles are CC0, not the 1991 set.",
    "play": null,
    "page": "https://decompgames.com/games/supaplex/",
    "repo": "https://github.com/sergiou87/open-supaplex",
    "needsFiles": false
  },
  {
    "slug": "skyways",
    "title": "Open Skyways",
    "year": 1993,
    "platform": "PC",
    "genre": "Arcade racing",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Sky-road racing on a disassembly-derived engine and thirty new roads. The original game data is not included.",
    "play": null,
    "page": "https://decompgames.com/games/skyways/",
    "repo": "https://github.com/haroldo-ok/skyroads-32x",
    "needsFiles": false
  },
  {
    "slug": "perfect-dark",
    "title": "Perfect Dark",
    "year": 2000,
    "platform": "N64",
    "genre": "Shooter",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "The combat-spy shooter from its PC port. Marked playable. Assets are regenerated.",
    "play": "https://andrewnakas.github.io/pd-cleanroom/",
    "page": "https://decompgames.com/games/perfect-dark/",
    "repo": "https://github.com/andrewnakas/pd-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "skate-3",
    "title": "Skate 3",
    "year": 2010,
    "platform": "Xbox 360",
    "genre": "Sports",
    "kind": "Engine recreation",
    "status": "playable",
    "blurb": "A from-scratch skate engine in the browser, eight parks, regenerated gear. Marked playable.",
    "play": "https://andrewnakas.github.io/skate3-cleanroom/",
    "page": "https://decompgames.com/games/skate-3/",
    "repo": "https://github.com/andrewnakas/skate3-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "star-fox-64",
    "title": "Star Fox 64",
    "year": 1997,
    "platform": "N64",
    "genre": "Shooter",
    "kind": "Decompilation",
    "status": "playable",
    "blurb": "Rail shooting from the sf64 decompilation. Marked playable. Models and voices are stand-ins.",
    "play": "https://andrewnakas.github.io/sf64-cleanroom/",
    "page": "https://decompgames.com/games/star-fox-64/",
    "repo": "https://github.com/andrewnakas/sf64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "1080-snowboarding",
    "title": "1080° Snowboarding",
    "year": 1998,
    "platform": "N64",
    "genre": "Sports",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Downhill racing from 1998. The course logic runs in the browser; pictures and sounds are regenerated, not from the cart.",
    "play": "https://andrewnakas.github.io/1080-cleanroom/",
    "page": "https://decompgames.com/games/1080-snowboarding/",
    "repo": "https://github.com/andrewnakas/1080-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "banjo-kazooie",
    "title": "Banjo-Kazooie",
    "year": 1998,
    "platform": "N64",
    "genre": "Platformer",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Bear, bird, and a very large world, from the banjo-kazooie decompilation. Art and audio are clean-room stand-ins.",
    "play": "https://andrewnakas.github.io/bk-cleanroom/",
    "page": "https://decompgames.com/games/banjo-kazooie/",
    "repo": "https://github.com/andrewnakas/bk-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "banjo-tooie",
    "title": "Banjo-Tooie",
    "year": 2000,
    "platform": "N64",
    "genre": "Platformer",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The sequel's world logic in the browser. Assets were regenerated, so it will not look like the cartridge.",
    "play": "https://andrewnakas.github.io/banjotooie-cleanroom/",
    "page": "https://decompgames.com/games/banjo-tooie/",
    "repo": "https://github.com/andrewnakas/banjotooie-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "beneath-a-steel-sky",
    "title": "Beneath a Steel Sky",
    "year": 1994,
    "platform": "PC",
    "genre": "Adventure",
    "kind": "Engine recreation",
    "status": "boots",
    "blurb": "Revolution's freeware point-and-click, floppy edition, running in ScummVM. No disc to hunt down.",
    "play": null,
    "page": "https://decompgames.com/games/beneath-a-steel-sky/",
    "repo": "https://github.com/scummvm/scummvm",
    "needsFiles": false
  },
  {
    "slug": "conkers-bad-fur-day",
    "title": "Conker’s Bad Fur Day",
    "year": 2001,
    "platform": "N64",
    "genre": "Platformer",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The N64 platformer booting from a clean-room rebuild. Treat it as lightly tested.",
    "play": "https://andrewnakas.github.io/conker-cleanroom/",
    "page": "https://decompgames.com/games/conkers-bad-fur-day/",
    "repo": "https://github.com/andrewnakas/conker-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "donkey-kong-64",
    "title": "Donkey Kong 64",
    "year": 1999,
    "platform": "N64",
    "genre": "Platformer",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The 3D collectathon, booting in the browser. Textures and sound were regenerated from coarse outlines.",
    "play": "https://andrewnakas.github.io/dk64-cleanroom/",
    "page": "https://decompgames.com/games/donkey-kong-64/",
    "repo": "https://github.com/andrewnakas/dk64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "doom",
    "title": "Doom",
    "year": 1993,
    "platform": "PC",
    "genre": "Shooter",
    "kind": "Source port",
    "status": "boots",
    "blurb": "The Doom engine, compiled to WebAssembly. Point it at an IWAD from a copy you own. The file stays on your machine.",
    "play": null,
    "page": "https://decompgames.com/games/doom/",
    "repo": "https://github.com/GMH-Code/Dwasm",
    "needsFiles": true
  },
  {
    "slug": "doom-64",
    "title": "Doom 64",
    "year": 1997,
    "platform": "N64",
    "genre": "Shooter",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "N64 Doom's combat logic, with clean-room art. It does not ship the cartridge.",
    "play": "https://andrewnakas.github.io/doom64-cleanroom/",
    "page": "https://decompgames.com/games/doom-64/",
    "repo": "https://github.com/andrewnakas/doom64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "duke-nukem-zero-hour",
    "title": "Duke Nukem: Zero Hour",
    "year": 1999,
    "platform": "N64",
    "genre": "Shooter",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The N64 shooter, booting inside a browser emulator. Pictures and audio are regenerated.",
    "play": "https://andrewnakas.github.io/dukezh-cleanroom/",
    "page": "https://decompgames.com/games/duke-nukem-zero-hour/",
    "repo": "https://github.com/andrewnakas/dukezh-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "freedoom",
    "title": "Freedoom",
    "year": 2019,
    "platform": "PC",
    "genre": "Shooter",
    "kind": "Source port",
    "status": "boots",
    "blurb": "An open Doom campaign: original levels, art, and music on a Doom engine. No commercial WAD.",
    "play": null,
    "page": "https://decompgames.com/games/freedoom/",
    "repo": "https://github.com/freedoom/freedoom",
    "needsFiles": false,
    "credit": "Screenshot by Hugo Locurcio, BSD."
  },
  {
    "slug": "harvest-moon-64",
    "title": "Harvest Moon 64",
    "year": 1999,
    "platform": "N64",
    "genre": "Simulation",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Farm-life logic from the hm64 decompilation. The pictures are regenerated, so the farm will look unfamiliar.",
    "play": "https://andrewnakas.github.io/hm64-cleanroom/",
    "page": "https://decompgames.com/games/harvest-moon-64/",
    "repo": "https://github.com/andrewnakas/hm64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "mario-kart-64",
    "title": "Mario Kart 64",
    "year": 1996,
    "platform": "N64",
    "genre": "Racing",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Kart logic from the mk64 decompilation. Courses are the geometry; skins and music are regenerated.",
    "play": "https://andrewnakas.github.io/mk64-cleanroom/",
    "page": "https://decompgames.com/games/mario-kart-64/",
    "repo": "https://github.com/andrewnakas/mk64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "mario-party",
    "title": "Mario Party",
    "year": 1998,
    "platform": "N64",
    "genre": "Party",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Board-game party mode booting in the browser. Lightly tested, assets regenerated.",
    "play": "https://andrewnakas.github.io/marioparty-cleanroom/",
    "page": "https://decompgames.com/games/mario-party/",
    "repo": "https://github.com/andrewnakas/marioparty-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "open-cadet",
    "title": "Open Cadet",
    "year": 1995,
    "platform": "PC",
    "genre": "Arcade",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Space-cadet pinball on the reverse-engineered engine, with a new neon table. Microsoft's table data is not included.",
    "play": null,
    "page": "https://decompgames.com/games/open-cadet/",
    "repo": "https://github.com/andrewnakas/open-cadet",
    "needsFiles": false
  },
  {
    "slug": "openttd",
    "title": "OpenTTD",
    "year": 2004,
    "platform": "PC",
    "genre": "Strategy",
    "kind": "Engine recreation",
    "status": "boots",
    "blurb": "Trains, roads, ships, planes. Open engine, community graphics. Transport Tycoon Deluxe files are not required.",
    "play": null,
    "page": "https://decompgames.com/games/openttd/",
    "repo": "https://github.com/OpenTTD/OpenTTD",
    "needsFiles": false,
    "credit": "Screenshot by Theki, GPL-2.0."
  },
  {
    "slug": "opentyrian",
    "title": "OpenTyrian",
    "year": 1995,
    "platform": "PC",
    "genre": "Shooter",
    "kind": "Engine recreation",
    "status": "boots",
    "blurb": "A vertical shooter on the Tyrian 2.1 engine, using the freeware data release.",
    "play": null,
    "page": "https://decompgames.com/games/opentyrian/",
    "repo": "https://github.com/opentyrian/opentyrian",
    "needsFiles": false,
    "credit": "Screenshot by the OpenTyrian developers, CC BY 3.0."
  },
  {
    "slug": "pilotwings-64",
    "title": "Pilotwings 64",
    "year": 1996,
    "platform": "N64",
    "genre": "Flight",
    "kind": "Recompilation",
    "status": "boots",
    "blurb": "Flight lessons from an N64 recompilation, software graphics. Lightly tested.",
    "play": "https://andrewnakas.github.io/pilotwings64-cleanroom/",
    "page": "https://decompgames.com/games/pilotwings-64/",
    "repo": "https://github.com/andrewnakas/pilotwings64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "pokemon-red-blue",
    "title": "Pokémon Red and Blue",
    "year": 1996,
    "platform": "Game Boy",
    "genre": "RPG",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Kanto from the pokered disassembly. Sprites, including all 151, were redrawn. This is not the retail cart.",
    "play": "https://andrewnakas.github.io/pokered-cleanroom/",
    "page": "https://decompgames.com/games/pokemon-red-blue/",
    "repo": "https://github.com/andrewnakas/pokered-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "pokemon-snap",
    "title": "Pokémon Snap",
    "year": 1999,
    "platform": "N64",
    "genre": "Simulation",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "On-rails photo safari from the pokemonsnap decompilation. Art and audio are stand-ins.",
    "play": "https://andrewnakas.github.io/pokemonsnap-cleanroom/",
    "page": "https://decompgames.com/games/pokemon-snap/",
    "repo": "https://github.com/andrewnakas/pokemonsnap-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "pokemon-stadium-2",
    "title": "Pokémon Stadium 2",
    "year": 2000,
    "platform": "N64",
    "genre": "Strategy",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Stadium battles booting in the browser. Lightly tested. Assets are regenerated.",
    "play": "https://andrewnakas.github.io/pokestadium2-cleanroom/",
    "page": "https://decompgames.com/games/pokemon-stadium-2/",
    "repo": "https://github.com/andrewnakas/pokestadium2-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "super-mario-64",
    "title": "Super Mario 64",
    "year": 1996,
    "platform": "N64",
    "genre": "Platformer",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Peach's castle from the sm64 decompilation. Jump is on L. Pictures and sounds were regenerated on purpose.",
    "play": "https://andrewnakas.github.io/sm64-cleanroom/",
    "page": "https://decompgames.com/games/super-mario-64/",
    "repo": "https://github.com/andrewnakas/sm64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "super-smash-bros",
    "title": "Super Smash Bros.",
    "year": 1999,
    "platform": "N64",
    "genre": "Fighting",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The N64 fighter from its decompilation. Lightly tested. Fighters will not match the retail models.",
    "play": "https://andrewnakas.github.io/ssb64-cleanroom/",
    "page": "https://decompgames.com/games/super-smash-bros/",
    "repo": "https://github.com/andrewnakas/ssb64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "majoras-mask",
    "title": "The Legend of Zelda: Majora's Mask",
    "year": 2000,
    "platform": "N64",
    "genre": "Action adventure",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Termina from 2 Ship 2 Harkinian on WebGL. The clock is in the code; the art is clean-room.",
    "play": "https://andrewnakas.github.io/mm-cleanroom/",
    "page": "https://decompgames.com/games/majoras-mask/",
    "repo": "https://github.com/andrewnakas/mm-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "ocarina-of-time",
    "title": "The Legend of Zelda: Ocarina of Time",
    "year": 1998,
    "platform": "N64",
    "genre": "Action adventure",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The 1998 adventure via Ship of Harkinian on WebGL. No retail ROM is in the build.",
    "play": "https://andrewnakas.github.io/oot-cleanroom/",
    "page": "https://decompgames.com/games/ocarina-of-time/",
    "repo": "https://github.com/andrewnakas/oot-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "wave-race-64",
    "title": "Wave Race 64",
    "year": 1996,
    "platform": "N64",
    "genre": "Racing",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "Jet-ski racing, booting in the browser. Lightly tested, assets regenerated.",
    "play": "https://andrewnakas.github.io/waverace64-cleanroom/",
    "page": "https://decompgames.com/games/wave-race-64/",
    "repo": "https://github.com/andrewnakas/waverace64-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "yoshis-story",
    "title": "Yoshi’s Story",
    "year": 1997,
    "platform": "N64",
    "genre": "Platformer",
    "kind": "Decompilation",
    "status": "boots",
    "blurb": "The side-scrolling platformer, booting from a clean-room rebuild. Lightly tested.",
    "play": "https://andrewnakas.github.io/yoshistory-cleanroom/",
    "page": "https://decompgames.com/games/yoshis-story/",
    "repo": "https://github.com/andrewnakas/yoshistory-cleanroom",
    "needsFiles": false
  },
  {
    "slug": "flight-of-the-amazon-queen",
    "title": "Flight of the Amazon Queen",
    "year": 1995,
    "platform": "PC",
    "genre": "Adventure",
    "kind": "Engine recreation",
    "status": "untested",
    "blurb": "Joe King's jungle adventure, floppy edition with text instead of CD voices, via ScummVM. Listed as untested.",
    "play": null,
    "page": "https://decompgames.com/games/flight-of-the-amazon-queen/",
    "repo": "https://github.com/scummvm/scummvm",
    "needsFiles": false
  },
  {
    "slug": "lure-of-the-temptress",
    "title": "Lure of the Temptress",
    "year": 1992,
    "platform": "PC",
    "genre": "Adventure",
    "kind": "Engine recreation",
    "status": "untested",
    "blurb": "Revolution's freeware adventure, the Virtual Theatre one, via ScummVM. Listed as untested.",
    "play": null,
    "page": "https://decompgames.com/games/lure-of-the-temptress/",
    "repo": "https://github.com/scummvm/scummvm",
    "needsFiles": false
  },
  {
    "slug": "quake",
    "title": "Quake",
    "year": 1996,
    "platform": "PC",
    "genre": "Shooter",
    "kind": "Source port",
    "status": "untested",
    "blurb": "The 1996 engine in WebAssembly. It reads PAK files from your own install and does not upload them.",
    "play": null,
    "page": "https://decompgames.com/games/quake/",
    "repo": "https://github.com/GMH-Code/Qwasm",
    "needsFiles": true
  },
  {
    "slug": "soltys",
    "title": "Sołtys",
    "year": 1995,
    "platform": "PC",
    "genre": "Adventure",
    "kind": "Engine recreation",
    "status": "untested",
    "blurb": "A comic village adventure by L.K. Avalon. English freeware, through ScummVM. Listed as untested.",
    "play": null,
    "page": "https://decompgames.com/games/soltys/",
    "repo": "https://github.com/scummvm/scummvm",
    "needsFiles": false
  }
]

const bySlug = new Map(games.map((game) => [game.slug, game]))

export function getGame(slug: string): Game | undefined {
  return bySlug.get(slug)
}

export const featuredSlugs = [
  "super-mario-64",
  "ocarina-of-time",
  "goldeneye-007",
  "mario-kart-64",
  "super-smash-bros",
  "star-fox-64",
  "perfect-dark",
  "f-zero-x",
] as const

export function featuredGames(): Game[] {
  return featuredSlugs.map((slug) => bySlug.get(slug)).filter((game): game is Game => Boolean(game))
}

export const controlsFor: Record<Platform, string> = {
  N64: "Click the picture first. WASD moves. L is the A button, comma is B, K is Z, arrows are the C buttons, Space is Start. A gamepad is picked up on its own. Phones get an on-screen pad.",
  PC: "Click the picture first. Shooters lean on the mouse and WASD. Adventures usually save from their own menu.",
  "Game Boy": "Click the picture first. Arrows move. Z and X cover the face buttons. A gamepad works too.",
  "Xbox 360": "Click the picture first. Mouse, keyboard, or a gamepad. This build renders with WebGPU, so a current desktop browser behaves best.",
}

