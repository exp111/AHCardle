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
  CoreSet = "core",
  RevisedCoreSet = "rcore",
  CoreSet2026 = "core_2026",
  DunwichLegacy = "dwl",
  MiskatonicMuseum = "tmm",
  EssexCountyExpress = "tece",
  BloodOnTheAltar = "bota",
  UndimensionedAndUnseen = "uau",
  WhereDoomAwaits = "wda",
  LostInTimeAndSpace = "litas",
  PathToCarcosa = "ptc",
  EchoesOfThePast = "eotp",
  UnspeakableOath = "tuo",
  APhantomOfTruth = "apot",
  ThePallidMask = "tpm",
  BlackStarsRise = "bsr",
  DimCarcosa = "dca",
  TheForgottenAge = "tfa",
  ThreadsOfFate = "tof",
  TheBoundaryBeyond = "tbb",
  HeartOfTheElders = "hote",
  TheCityOfArchives = "tcoa",
  TheDepthsOfYoth = "tdoy",
  ShatteredAeons = "sha",
  TheCircleUndone = "tcu",
  TheSecretName = "tsn",
  WagesOfSin = "wos",
  ForTheGreaterGood = "fgg",
  UnionAndDisillusion = "uad",
  InTheClutchesOfChaos = "icc",
  BeforeTheBlackThrone = "bbt",
  TheDreamEaters = "tde",
  TheSearchForKadath = "sfk",
  AThousandShapesOfHorror = "tsh",
  DarkSideOfTheMoon = "dsm",
  PointOfNoReturn = "pnr",
  WhereTheGodsDwell = "wgd",
  WeaverOfTheCosmos = "woc",
  TheInnsmouthConspiracy = "tic",
  InTooDeep = "itd",
  DevilReef = "def",
  HorrorInHighGear = "hhg",
  ALightInTheFog = "lif",
  LairOfDagon = "lod",
  IntotheMaelstrom = "itm",
  EdgeOfTheEarthInvestigatorExpansion = "eoep",
  EdgeOfTheEarthCampaignExpansion = "eoec",
  TheScarletKeysInvestigatorExpansion = "tskp",
  TheScarletKeysCampaignExpansion = "tskc",
  TheFeastOfHemlockValeInvestigatorExpansion = "fhvp",
  TheFeastOfHemlockValeCampaignExpansion = "fhvc",
  TheDrownedCityInvestigatorExpansion = "tdcp",
  TheDrownedCityCampaignExpansion = "tdcc",
  CurseOfTheRougarou = "cotr",
  CarnevaleOfHorrors = "coh",
  TheLabyrinthsOfLunacy = "lol",
  GuardiansOfTheAbyss = "guardians",
  MurderAtTheExcelsiorHotel = "hotel",
  TheBlobThatAteEverything = "blob",
  WarOfTheOuterGods = "wog",
  MachinationsThroughTime = "mtt",
  FortuneAndFolly = "fof",
  TheBlobThatAteEverythingELSE = "blbe",
  HourOfTheHuntress = "hoth",
  TheDirgeOfReason = "tdor",
  IreOfTheVoid = "iotv",
  TheDeepGate = "tdg",
  ToFightTheBlackWind = "tftbw",
  BloodOfBaalshandor = "bob",
  DarkRevelations = "dre",
  Promo = "promo",
  ReturnToTheNightOfTheZealot = "rtnotz",
  ReturnToTheDunwichLegacy = "rtdwl",
  ReturnToThePathToCarcosa = "rtptc",
  ReturnToTheForgottenAge = "rttfa",
  ReturnToTheCircleUndone = "rttcu",
  NathanielCho = "nat",
  HarveyWalters = "har",
  WinifredHabbamock = "win",
  JacquelineFine = "jac",
  StellaClark = "ste",
  ReadOrDie = "rod",
  AllOrNothing = "aon",
  BadBlood = "bad",
  ByTheBook = "btb",
  RedTideRising = "rtr",
  OnTheRoadAgain = "otr",
  LaidToRest = "ltr",
  PathOfTheRighteous = "ptr",
  RelicsOfThePast = "rop",
  HuntingForAnswers = "hfa",
  PistolsAndPearls = "pap",
  EnthrallingEncore = "enc",
  TheMidwinterGala = "tmg",
  AuraOfFaith = "aof",
  FilmFatale = "film_fatale"
}
