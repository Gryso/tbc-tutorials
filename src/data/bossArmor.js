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

const bossArmor = {
  magtheridonsLair: {
    name: "Magtheridon's Lair",
    component: MagtheridonsLair,
    encounters: {
      magtheridon: {
        magtheridon: 7700
      }
    }
  },
  serpentshrineCavern: {
    name: "Serpentshrine Cavern",
    component: SerpentshrineCavern,
    encounters: {
      hydross: {
        hydross: 7700
      },
      lurker: {
        lurker: 7700
      },
      leotheras: {
        leotheras: 7700
      },
      karathress: {
        karathress: 6200
      },
      morogrim: {
        morogrim: 7700
      },
      vashj: {
        vashj: 6200
      }
    }
  },
  hyjalSummit: {
    name: "Hyjal Summit",
    component: HyjalSummit,
    encounters: {
      winterchill: {
        winterchill: 6200
      },
      anetheron: {
        anetheron: 6200
      },
      kazrogal: {
        kazrogal: 6200
      },
      azgalor: {
        azgalor: 6200
      },
      archimonde: {
        archimonde: 6200
      }
    }
  },
  theEye: {
    name: "The Eye",
    component: TempestKeep,
    encounters: {
      alar: {
        alar: 7700
      },
      voidReaver: {
        voidReaver: 8800
      },
      solarian: {
        solarian: 6200
      },
      kaelthas: {
        kaelthas: 6200
      },
    }
  },
  karazhan: {
    name: "Karazhan",
    component: Karazhan,
    encounters: {
      attumen: {
        attumen: 7500,
        midnight: 8200
      },
      moroes: {
        moroes: "neviem kolko"
      },
      maiden: {
        maiden: 6700
      },
      operaEvent: {
        strawman: 7300,
        romulo: 7600,
        julianne: 6100,
        roar: 4700
      },
      curator: {
        curator: 6100
      },
      illhoof: {
        kilrrek: 3400,
        illhoof: 6700
      },
      aran: {
        aran: 3800
      },
      netherspite: {
        netherspite: 5500
      },
      nightbane: {
        nightbane: 7600
      },
      prince: {
        prince: 7600
      }
    }
  },
  gruulsLair: {
    name: "Gruul's Lair",
    component: GruulsLair,
    encounters: {
      highKingMaulgar: {
        highKingMaulgar: 7700,
      },
      gruul: {
        gruul: 7700
      }
    }
  },
  blackTemple: {
    name: "Black Temple",
    component: BlackTemple,
    encounters: {
      najentus: {
        najentus: 7700
      },
      supremus: {
        supremus: 7700
      },
      gorefiend: {
        gorefiend: 6200
      },
      bloodboil: {
        bloodboil: 7700
      },
      akama: {
        akama: 7700
      },
      essencofSouls: {
        essenceOfSuffering: 0,
        essenceOfDesire: 7700,
        essenceOfAnger: 7700
      },
      shahraz: {
        shahraz: 6200
      },
      council: {
        gathiosTheShatterer: 6200
      },
      illidanStormrage: {
        illidanStormrage: 7700
      },
    }
  },
  zulAman: {
    name: "Zul'Aman",
    component: ZulAman,
    encounters: {
      nalorakk: {
        nalorakk: 7700
      },
      akilZon: {
        akilZon: 7700
      },
      janAlai: {
        janAlai: 7700
      },
      halazzi: {
        halazzi: 7700
      },
      malacrass: {
        malacrass: 6200
      },
      zuljin: {
        zuljin: 7700
      }
    }
  },
  sunwellPlateau: {
    name: "Sunwell Plateau",
    component: SunwellPlateau,
    encounters: {
      kalecgos: {
        kalecgos: 6200,
        sathrovarrTheCorruptor: 6200
      },
      brutallus: {
        brutallus: 7700
      },
      felmyst: {
        felmyst: 6200
      },
      eredarTwins: {
        grandWarlockAlythess: 6200,
        ladySacrolash: 6200
      },
      muru: {
        muru: 7700,
        entropius: 7700,
        shadowswordFuryMage: 5700,
        shadowswordBerserker: 7100,
        voidSentinel: 6800
      },
      kiljaeden: {
        kiljaeden: 6200,
        handOfTheDeceiver: 5900,
        sinisterReflection: 5475
      }
    }
  }
};

export default bossArmor;
