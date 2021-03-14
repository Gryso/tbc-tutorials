import {
  BlackTemple,
  GruulsLair,
  HyjalSummit,
  Karazhan,
  MagtheridonsLair,
  SerpentshrineCavern,
  SunwellPlateau,
  TempestKeep,
  ZulAman
} from "../components/gameElements/instance/Instances";
import {
  Akilzon,
  Alar,
  Anetheron,
  Archimonde,
  AttumenTheHuntsman,
  Azgalor,
  Brutallus,
  Entropius,
  FathomLordKarathress,
  Felmyst,
  Generic,
  GrandWarlockAlythess,
  GruulTheDragonkiller,
  GurtoggBloodboil,
  Halazzi,
  HandOfTheDeceiver,
  HexLordMalacrass,
  HighAstromancerSolarian,
  HighKingMaulgar,
  HighWarlordNajentus,
  HydrossTheUnstable,
  IllidanStormrage,
  IllidariCouncil,
  Janalai,
  KaelthasSunstrider,
  Kalecgos,
  Kazrogal,
  Kiljaeden,
  Kilrek,
  LadySacrolash,
  LadyVashj,
  LeotherasTheBlind,
  Magtheridon,
  MaidenOfVirtue,
  Midnight,
  MorogrimTidewalker,
  MotherShahraz,
  Muru,
  Nalorakk,
  Netherspite,
  Nightbane,
  PrinceMalchezaar,
  RageWinterchill,
  SathrovarrTheCorruptor,
  ShadeOfAkama,
  ShadeOfAran,
  ShadowswordBerserker,
  ShadowswordFuryMage,
  Supremus,
  TerestianIllhoof,
  TeronGorefiend,
  TheCurator,
  TheLurkerBelow,
  VoidReaver,
  VoidSentinel,
  Zuljin
} from "../components/gameElements/boss/bosses";
import round from "../utils/round";

const bossArmor = {
  magtheridonsLair: {
    name: "Magtheridon's Lair",
    component: MagtheridonsLair,
    encounters: {
      magtheridon: {
        magtheridon: {
          component: Magtheridon,
          name: "Magtheridon",
          armor: 7700
        },
      }
    }
  },
  serpentshrineCavern: {
    name: "Serpentshrine Cavern",
    component: SerpentshrineCavern,
    encounters: {
      hydrossTheUnstable: {
        hydrossTheUnstable: {
          component: HydrossTheUnstable,
          name: "Hydross The Unstable",
          armor: 7700
        }
      },
      theLurkerBelow: {
        theLurkerBelow: {
          component: TheLurkerBelow,
          name: "The Lurker Below",
          armor: 7700
        }
      },
      leotherasTheBlind: {
        leotherasTheBlind: {
          component: LeotherasTheBlind,
          name: "Leotheras The Blind",
          armor: 7700
        }
      },
      fathomLordKarathress: {
        fathomLordKarathress: {
          component: FathomLordKarathress,
          name: "Fathom Lord Karathress",
          armor: 6200
        }
      },
      morogrimTidewalker: {
        morogrimTidewalker: {
          component: MorogrimTidewalker,
          name: "Morogrim Tidewalker",
          armor: 7700
        }
      },
      ladyVashj: {
        ladyVashj: {
          component: LadyVashj,
          name: "Lady Vashj",
          armor: 6200
        }
      }
    }
  },
  hyjalSummit: {
    name: "Hyjal Summit",
    component: HyjalSummit,
    encounters: {
      rageWinterchillchill: {
        rageWinterchillchill: {
          component: RageWinterchill,
          name: "Akil'zon",
          armor: 6200
        }
      },
      anetheron: {
        anetheron: {
          component: Anetheron,
          name: "Akil'zon",
          armor: 6200
        }
      },
      kazrogal: {
        kazrogal: {
          component: Kazrogal,
          name: "Kaz'rogal",
          armor: 6200
        }
      },
      azgalor: {
        azgalor: {
          component: Azgalor,
          name: "Akil'zon",
          armor: 6200
        }
      },
      archimonde: {
        archimonde: {
          component: Archimonde,
          name: "Archimonde",
          armor: 6200
        }
      }
    }
  },
  theEye: {
    name: "The Eye",
    component: TempestKeep,
    encounters: {
      alar: {
        alar: {
          component: Alar,
          name: "Al'ar",
          armor: 7700
        }
      },
      voidReaver: {
        voidReaver: {
          component: VoidReaver,
          name: "Void Reaver",
          armor: 8800
        }
      },
      highAstromancerSolarian: {
        highAstromancerSolarian: {
          component: HighAstromancerSolarian,
          name: "High Astromancer Solarian",
          armor: 6200
        }
      },
      KaelthasSunstriderthas: {
        KaelthasSunstriderthas: {
          component: KaelthasSunstrider,
          name: "Kael'thas Sunstrider",
          armor: 6200
        }
      },
    }
  },
  karazhan: {
    name: "Karazhan",
    component: Karazhan,
    encounters: {
      attumenTheHuntsman: {
        attumenTheHuntsman: {
          component: AttumenTheHuntsman,
          name: "Attumen the Huntsman",
          armor: 7500
        },
        midnight: {
          component: Midnight,
          name: "Midnight",
          armor: 8200
        }
      },
      moroes: {
        // moroes: {
        //   component: Moroes,
        //   name: "Moroes",
        //   armor: null
        // }
      },
      maidenOfVirtue: {
        maidenOfVirtue: {
          component: MaidenOfVirtue,
          name: "Maiden of Virtue",
          armor: 6700
        }
      },
      operaEvent: {
        strawman: {
          component: Generic,
          name: "Strawman",
          armor: 7300
        },
        romulo: {
          component: Generic,
          name: "Romulo",
          armor: 7600
        },
        julianne: {
          component: Generic,
          name: "Julianne",
          armor: 6100
        },
        roar: {
          component: Generic,
          name: "Roar",
          armor: 4700
        }
      },
      theCurator: {
        theCurator: {
          component: TheCurator,
          name: "The Curator",
          armor: 6100
        }
      },
      terestianIllhoof: {
        kilrek: {
          component: Kilrek,
          name: "Kil'rek",
          armor: 3400
        },
        terestianIllhoof: {
          component: TerestianIllhoof,
          name: "Terestian Illhoof",
          armor: 6700
        }
      },
      shadeOfAran: {
        shadeOfAran: {
          component: ShadeOfAran,
          name: "Shade Of Aran",
          armor: 3800
        }
      },
      netherspite: {
        netherspite: {
          component: Netherspite,
          name: "Netherspite",
          armor: 5500
        }
      },
      nightbane: {
        nightbane: {
          component: Nightbane,
          name: "Nightbane",
          armor: 7600
        }
      },
      princeMalchezaar: {
        princeMalchezaar: {
          component: PrinceMalchezaar,
          name: "Prince Malchezaar",
          armor: 7600
        }
      }
    }
  },
  gruulsLair: {
    name: "Gruul's Lair",
    component: GruulsLair,
    encounters: {
      highKingMaulgar: {
        highKingMaulgar: {
          component: HighKingMaulgar,
          name: "High King Maulgar",
          armor: 7700
        },
      },
      gruul: {
        gruul: {
          component: GruulTheDragonkiller,
          name: "Gruul the Dragonkiller",
          armor: 7700
        },
      }
    }
  },
  blackTemple: {
    name: "Black Temple",
    component: BlackTemple,
    encounters: {
      highWarlordNajentus: {
        highWarlordNajentus: {
          component: HighWarlordNajentus,
          name: "High Warlord Naj'entus",
          armor: 7700
        }
      },
      supremus: {
        supremus: {
          component: Supremus,
          name: "Supremus",
          armor: 7700
        }
      },
      teronGorefiend: {
        teronGorefiend: {
          component: TeronGorefiend,
          name: "Teron Gorefiend",
          armor: 6200
        }
      },
      gurtoggBloodboil: {
        gurtoggBloodboil: {
          component: GurtoggBloodboil,
          name: "Gurtogg Bloodboil",
          armor: 7700
        }
      },
      shadeOfAkama: {
        shadeOfAkama: {
          component: ShadeOfAkama,
          name: "Shade of Akama",
          armor: 7700
        }
      },
      essencofSouls: {
        essenceOfSuffering: {
          component: Generic,
          name: "Essence Of Suffering",
          armor: 0
        },
        essenceOfDesire: {
          component: Generic,
          name: "Essence Of Desire",
          armor: 7700
        },
        essenceOfAnger: {
          component: Generic,
          name: "Essence Of Anger",
          armor: 7700
        }
      },
      shahraz: {
        shahraz: {
          component: MotherShahraz,
          name: "Mother Shahraz",
          armor: 6200
        }
      },
      council: {
        gathiosTheShatterer: {
          component: IllidariCouncil,
          name: "Gathios the Shatterer",
          armor: 6200
        }
      },
      illidanStormrage: {
        illidanStormrage: {
          component: IllidanStormrage,
          name: "Illidan Stormrage",
          armor: 7700
        }
      },
    }
  },
  zulAman: {
    name: "Zul'Aman",
    component: ZulAman,
    encounters: {
      nalorakk: {
        nalorakk: {
          component: Nalorakk,
          name: "Akil'zon",
          armor: 7700
        }
      },
      akilZon: {
        akilZon: {
          component: Akilzon,
          name: "Halazzi",
          armor: 7700
        }
      },
      janAlai: {
        janAlai: {
          component: Janalai,
          name: "Jan'alai",
          armor: 7700
        }
      },
      halazzi: {
        halazzi: {
          component: Halazzi,
          name: "Nalorakk",
          armor: 7700
        }
      },
      hexLordMalacrass: {
        hexLordMalacrass: {
          component: HexLordMalacrass,
          name: "Hex Lord Malacrass",
          armor: 6200
        }
      },
      zuljin: {
        zuljin: {
          component: Zuljin,
          name: "Zul'jin",
          armor: 7700
        }
      }
    }
  },
  sunwellPlateau: {
    name: "Sunwell Plateau",
    component: SunwellPlateau,
    encounters: {
      kalecgos: {
        kalecgos: {
          component: Kalecgos,
          name: "Kalecgos",
          armor: 6200
        },
        sathrovarrTheCorruptor: {
          component: SathrovarrTheCorruptor,
          name: "Sathrovarr the Corruptor",
          armor: 6200
        }
      },
      brutallus: {
        brutallus: {
          component: Brutallus,
          name: "Brutallus",
          armor: 7700
        }
      },
      felmyst: {
        felmyst: {
          component: Felmyst,
          name: "Felmyst",
          armor: 6200
        }
      },
      eredarTwins: {
        grandWarlockAlythess: {
          component: GrandWarlockAlythess,
          name: "Grand Warlock Alythess",
          armor: 6200
        }
        ,
        ladySacrolash: {
          component: LadySacrolash,
          name: "Lady Sacrolash",
          armor: 6200
        }
      },
      muru: {
        muru: {
          component: Muru,
          name: "M'uru",
          armor: 7700
        },
        entropius: {
          component: Entropius,
          name: "Entropius",
          armor: 7700
        },
        shadowswordFuryMage: {
          component: ShadowswordFuryMage,
          name: "Shadowsword Fury Mage",
          armor: 5700
        },
        shadowswordBerserker: {
          component: ShadowswordBerserker,
          name: "Shadowsword Berserker",
          armor: 7100
        },
        voidSentinel: {
          component: VoidSentinel,
          name: "Void Sentinel",
          armor: 6800
        }
      },
      kiljaeden: {
        kiljaeden: {
          component: Kiljaeden,
          name: "Kil'jaeden",
          armor: 6200
        },
        handOfTheDeceiver: {
          component: HandOfTheDeceiver,
          name: "Hand of the Deceiver",
          armor: 5900
        },
        sinisterReflection: {
          component: Generic,
          name: "Sinister Reflection",
          armor: 5475
        }
      }
    }
  }
};

export default bossArmor;

let armorAmounts = {};
let bossCount = 0;
Object.keys(bossArmor).forEach((instanceName) => {
  let encounters = bossArmor[instanceName].encounters;
  Object.keys(encounters).forEach((encounterName) => {
    let encounter = encounters[encounterName];
    Object.keys(encounter).forEach((bossName) => {
      let boss = encounter[bossName];
      bossCount++;
      armorAmounts[boss.armor] = (armorAmounts[boss.armor] || 0) + 1;
    });
  });
});

export const orderedArmorAmounts = Object.entries(armorAmounts)
  .sort((a, b) => b[1] - a[1])
  .map((armorAmountPair) => ({
    amount: armorAmountPair[1],
    armor: armorAmountPair[0],
    proportion: round(armorAmountPair[1] / (bossCount / 100), 1)
  }));
