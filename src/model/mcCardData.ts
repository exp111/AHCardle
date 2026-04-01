import {CardData} from './cardData';

export interface McCardData extends CardData {
  cost?: number;
  type: McCardType;
  faction: McCardFaction;
  year: number;
  resources: McCardResource[];
  traits: string[];
  packs: McPack[];
  img: string;
  // these are both incomplete
  sets: string[];
  illustrators: string[];
  // ally related
  health: number;
  attack: number;
  thwart: number;
}

export type McCardDataArrayField = "resources" | "packs" | "traits";

export enum McCardType {
  Event = "event",
  Resource = "resource",
  Ally = "ally",
  PlayerSideScheme = "player_side_scheme",
  Support = "support",
  Upgrade = "upgrade",
  // shouldnt be necessary?
  Attachment = "attachment",
  Obligation = "obligation",
  Treachery = "treachery",
  Minion = "minion",
  Hero = "hero",
  AlterEgo = "alter_ego",
  MainScheme = "main_scheme",
  SideScheme = "side_scheme",
  Environment = "environment",
  EvidenceMeans = "evidence_means",
  EvidenceMotive = "evidence_motive",
  EvidenceOpportunity = "evidence_opportunity",
}

export enum McCardFaction {
  Hero = "hero",
  Basic = "basic",
  Aggression = "aggression",
  Protection = "protection",
  Justice = "justice",
  Leadership = "leadership",
  Pool = "pool",
  Campaign = "campaign",
  // shouldnt be necessary?
  Encounter = "encounter",
}

export enum McCardResource {
  Energy = "e",
  Mental = "m",
  Physical = "p",
  Wild = "w"
}

export enum McPack {
  Core = "core",
  GreenGoblin = "gob",
  CaptainAmerica = "cap",
  MsMarvel = "msm",
  WreckingCrew = "twc",
  Thor = "thor",
  BlackWidow = "bkw",
  DoctorStrange = "drs",
  Hulk = "hlk",
  RonanModular = "ron",
  RiseOfRedSkull = "trors",
  OnceAndFutureKang = "toafk",
  AntMan = "ant",
  Wasp = "wsp",
  Quicksilver = "qsv",
  ScarletWitch = "scw",
  GalaxysMostWanted = "gmw",
  StarLord = "stld",
  Gamora = "gam",
  Drax = "drax",
  Venom = "vnm",
  MadTitansShadow = "mts",
  Nebula = "nebu",
  WarMachine = "warm",
  Hood = "hood",
  Valkyrie = "valk",
  Vision = "vision",
  SinisterMotives = "sm",
  Nova = "nova",
  Ironheart = "ironheart",
  SpiderHam = "spiderham",
  SPdr = "spdr",
  MutantGenesis = "mut_gen",
  Cyclops = "cyclops",
  Phoenix = "phoenix",
  Wolverine = "wolv",
  Storm = "storm",
  Gambit = "gambit",
  Rogue = "rogue",
  MojoMania = "mojo",
  NextEvolution = "next_evol",
  Psylocke = "psylocke",
  Angel = "angel",
  X23 = "x23",
  Deadpool = "deadpool",
  AgeOfApocalypse = "aoa",
  Iceman = "iceman",
  Jubilee = "jubilee",
  Nightcrawler = "ncrawler",
  Magneto = "magneto",
  AgentsOfSHIELD = "aos",
  BlackPanther = "bp",
  Silk = "silk",
  Falcon = "falcon",
  WinterSoldier = "winter",
  TricksterTakeover = "tt",
  CivilWar = "cw",
  WonderMan = "wonder_man",
  Hercules = "hercules"
}
