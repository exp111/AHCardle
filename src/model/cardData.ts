export interface CardData {
  code: string;
  cost?: number;
  type: CardType;
  faction: CardFaction;
  name: string;
  name_de?: string;
  year: number;
  xp: number;
  skills: CardSkill[];
  traits: string[];
  packs: Pack[];
  img: string;
  illustrators: string[];
}

export type CardDataArrayField = "skills" | "packs" | "traits";

export enum CardType {
  Event = "event",
  Asset = "asset",
  Skill = "skill"
}

export enum CardFaction {
  Mystic = "mystic",
  Survivor = "survivor",
  Neutral = "neutral",
  Guardian = "guardian",
  Seeker = "seeker",
  Rogue = "rogue",

  // shouldnt be in data
  Mythos = "mythos"
}

export enum CardSkill {
  Willpower = "p",
  Intellect = "b",
  Combat = "c",
  Agility = "a",
  Wild = "?"
}

export enum Pack {
  Core = "core",
}
