import {Alliance, Horde} from "../components/gameElements/faction/factions";
import {Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior} from "../components/gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../components/gameElements/race/races";

const raceStats = {
  "alliance": {
    component: Alliance,
    "druid": {
      component: Druid,
      "nightelf": {
        component: Nightelf,
        "health": 4254,
        "mana": 3890,
        "baseStats": {
          "strength": 73,
          "agility": 75,
          "stamina": 82,
          "intellect": 120,
          "spirit": 133,
          "armor": 150
        },
        "melee": {
          "power": 126,
          "crit": 3.96
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.35,
          "regen": 67
        },
        "defenses": {
          "armor": 150,
          "defense": 350,
          "dodge": 4.23,
          "parry": null,
          "block": null
        }
      }
    },
    "hunter": {
      component: Hunter,
      "draenei": {
        component: Draenei,
        "health": 4458,
        "mana": 4273,
        "baseStats": {
          "strength": 65,
          "agility": 148,
          "stamina": 107,
          "intellect": 78,
          "spirit": 85,
          "armor": 296
        },
        "melee": {
          "power": 333,
          "crit": 2.17
        },
        "ranged": {
          "power": 278,
          "crit": 2.17
        },
        "spell": {
          "crit": 4.58,
          "regen": 35
        },
        "defenses": {
          "armor": 296,
          "defense": 350,
          "dodge": 0.47,
          "parry": 5.00,
          "block": null
        }
      },
      "dwarf": {
        component: Dwarf,
        "health": 4498,
        "mana": 4243,
        "baseStats": {
          "strength": 66,
          "agility": 147,
          "stamina": 111,
          "intellect": 76,
          "spirit": 82,
          "armor": 294
        },
        "melee": {
          "power": 333,
          "crit": 2.14
        },
        "ranged": {
          "power": 277,
          "crit": 2.14
        },
        "spell": {
          "crit": 4.55,
          "regen": 33
        },
        "defenses": {
          "armor": 294,
          "defense": 350,
          "dodge": 0.43,
          "parry": 5.00,
          "block": null
        }
      },
      "nightelf": {
        component: Nightelf,
        "health": 4458,
        "mana": 4258,
        "baseStats": {
          "strength": 61,
          "agility": 156,
          "stamina": 107,
          "intellect": 77,
          "spirit": 83,
          "armor": 312
        },
        "melee": {
          "power": 337,
          "crit": 2.37
        },
        "ranged": {
          "power": 286,
          "crit": 2.37
        },
        "spell": {
          "crit": 4.56,
          "regen": 33
        },
        "defenses": {
          "armor": 312,
          "defense": 350,
          "dodge": 1.79,
          "parry": 5.00,
          "block": null
        }
      }
    },
    "mage": {
      component: Mage,
      "draenei": {
        component: Draenei,
        "health": 3713,
        "mana": 4241,
        "baseStats": {
          "strength": 34,
          "agility": 36,
          "stamina": 50,
          "intellect": 152,
          "spirit": 147,
          "armor": 72
        },
        "melee": {
          "power": 24,
          "crit": 4.90
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 2.81,
          "regen": 84
        },
        "defenses": {
          "armor": 72,
          "defense": 350,
          "dodge": 4.90,
          "parry": null,
          "block": null
        }
      },
      "gnome": {
        component: Gnome,
        "health": 3713,
        "mana": 4391,
        "baseStats": {
          "strength": 28,
          "agility": 42,
          "stamina": 50,
          "intellect": 162,
          "spirit": 145,
          "armor": 84
        },
        "melee": {
          "power": 18,
          "crit": 5.14
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 2.93,
          "regen": 86
        },
        "defenses": {
          "armor": 84,
          "defense": 350,
          "dodge": 5.14,
          "parry": null,
          "block": null
        }
      },
      "human": {
        component: Human,
        "health": 3723,
        "mana": 4226,
        "baseStats": {
          "strength": 33,
          "agility": 39,
          "stamina": 51,
          "intellect": 151,
          "spirit": 159,
          "armor": 78
        },
        "melee": {
          "power": 23,
          "crit": 5.02
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 2.80,
          "regen": 91
        },
        "defenses": {
          "armor": 78,
          "defense": 350,
          "dodge": 5.02,
          "parry": null,
          "block": null
        }
      }
    },
    "paladin": {
      component: Paladin,
      "draenei": {
        component: Draenei,
        "health": 4387,
        "mana": 3933,
        "baseStats": {
          "strength": 127,
          "agility": 74,
          "stamina": 119,
          "intellect": 84,
          "spirit": 91,
          "armor": 148
        },
        "melee": {
          "power": 444,
          "crit": 3.61
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 4.39,
          "regen": 38
        },
        "defenses": {
          "armor": 148,
          "defense": 350,
          "dodge": 3.61,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "dwarf": {
        component: Dwarf,
        "health": 4477,
        "mana": 3903,
        "baseStats": {
          "strength": 128,
          "agility": 73,
          "stamina": 123,
          "intellect": 82,
          "spirit": 88,
          "armor": 146
        },
        "melee": {
          "power": 446,
          "crit": 3.57
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 4.36,
          "regen": 37
        },
        "defenses": {
          "armor": 146,
          "defense": 350,
          "dodge": 3.57,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "human": {
        component: Human,
        "health": 4397,
        "mana": 3918,
        "baseStats": {
          "strength": 126,
          "agility": 77,
          "stamina": 120,
          "intellect": 83,
          "spirit": 97,
          "armor": 154
        },
        "melee": {
          "power": 442,
          "crit": 3.73
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 4.37,
          "regen": 41
        },
        "defenses": {
          "armor": 154,
          "defense": 350,
          "dodge": 3.73,
          "parry": 5.00,
          "block": 5.00
        }
      }
    },
    "priest": {
      component: Priest,
      "draenei": {
        component: Draenei,
        "health": 3781,
        "mana": 4530,
        "baseStats": {
          "strength": 40,
          "agility": 42,
          "stamina": 57,
          "intellect": 146,
          "spirit": 153,
          "armor": 84
        },
        "melee": {
          "power": 30,
          "crit": 4.86
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.06,
          "regen": 86
        },
        "defenses": {
          "armor": 84,
          "defense": 350,
          "dodge": 4.86,
          "parry": null,
          "block": null
        }
      },
      "dwarf": {
        component: Dwarf,
        "health": 3821,
        "mana": 4500,
        "baseStats": {
          "strength": 41,
          "agility": 41,
          "stamina": 61,
          "intellect": 144,
          "spirit": 150,
          "armor": 82
        },
        "melee": {
          "power": 31,
          "crit": 4.82
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.04,
          "regen": 83
        },
        "defenses": {
          "armor": 82,
          "defense": 350,
          "dodge": 4.82,
          "parry": null,
          "block": null
        }
      },
      "human": {
        component: Human,
        "health": 3791,
        "mana": 4515,
        "baseStats": {
          "strength": 39,
          "agility": 45,
          "stamina": 58,
          "intellect": 145,
          "spirit": 166,
          "armor": 90
        },
        "melee": {
          "power": 29,
          "crit": 4.98
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.05,
          "regen": 93
        },
        "defenses": {
          "armor": 90,
          "defense": 350,
          "dodge": 4.98,
          "parry": null,
          "block": null
        }
      },
      "nightelf": {
        component: Nightelf,
        "health": 3781,
        "mana": 4515,
        "baseStats": {
          "strength": 36,
          "agility": 50,
          "stamina": 57,
          "intellect": 145,
          "spirit": 151,
          "armor": 100
        },
        "melee": {
          "power": 26,
          "crit": 5.18
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.05,
          "regen": 84
        },
        "defenses": {
          "armor": 100,
          "defense": 350,
          "dodge": 6.18,
          "parry": null,
          "block": null
        }
      }
    },
    "rogue": {
      component: Rogue,
      "dwarf": {
        component: Dwarf,
        "health": 4444,
        "mana": null,
        "baseStats": {
          "strength": 97,
          "agility": 154,
          "stamina": 92,
          "intellect": 38,
          "spirit": 57,
          "armor": 308
        },
        "melee": {
          "power": 371,
          "crit": 3.56
        },
        "ranged": {
          "power": 214,
          "crit": 3.56
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 308,
          "defense": 350,
          "dodge": 7.11,
          "parry": 5.00,
          "block": null
        }
      },
      "gnome": {
        component: Gnome,
        "health": 4404,
        "mana": null,
        "baseStats": {
          "strength": 90,
          "agility": 161,
          "stamina": 88,
          "intellect": 45,
          "spirit": 58,
          "armor": 322
        },
        "melee": {
          "power": 371,
          "crit": 3.73
        },
        "ranged": {
          "power": 221,
          "crit": 3.73
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 322,
          "defense": 350,
          "dodge": 7.46,
          "parry": 5.00,
          "block": null
        }
      },
      "human": {
        component: Human,
        "health": 4414,
        "mana": null,
        "baseStats": {
          "strength": 95,
          "agility": 158,
          "stamina": 89,
          "intellect": 39,
          "spirit": 63,
          "armor": 316
        },
        "melee": {
          "power": 373,
          "crit": 3.65
        },
        "ranged": {
          "power": 218,
          "crit": 3.65
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 316,
          "defense": 350,
          "dodge": 7.31,
          "parry": 5.00,
          "block": null
        }
      },
      "nightelf": {
        component: Nightelf,
        "health": 4404,
        "mana": null,
        "baseStats": {
          "strength": 92,
          "agility": 163,
          "stamina": 88,
          "intellect": 39,
          "spirit": 58,
          "armor": 326
        },
        "melee": {
          "power": 375,
          "crit": 3.78
        },
        "ranged": {
          "power": 223,
          "crit": 3.78
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 326,
          "defense": 350,
          "dodge": 8.56,
          "parry": 5.00,
          "block": null
        }
      }
    },
    "shaman": {
      component: Shaman,
      "draenei": {
        component: Draenei,
        "health": 4109,
        "mana": 4313,
        "baseStats": {
          "strength": 103,
          "agility": 61,
          "stamina": 113,
          "intellect": 109,
          "spirit": 122,
          "armor": 122
        },
        "melee": {
          "power": 326,
          "crit": 4.11
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.56,
          "regen": 59
        },
        "defenses": {
          "armor": 122,
          "defense": 350,
          "dodge": 4.11,
          "parry": null,
          "block": 5.00
        }
      }
    },
    "warlock": {
      component: Warlock,
      "gnome": {
        component: Gnome,
        "health": 4060,
        "mana": 4480,
        "baseStats": {
          "strength": 46,
          "agility": 61,
          "stamina": 75,
          "intellect": 143,
          "spirit": 131,
          "armor": 122
        },
        "melee": {
          "power": 36,
          "crit": 4.47
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": 3.44,
          "regen": 73
        },
        "defenses": {
          "armor": 122,
          "defense": 350,
          "dodge": 4.48,
          "parry": null,
          "block": null
        }
      },
      "human": {
        component: Human,
        "health": 4070,
        "mana": 4330,
        "baseStats": {
          "strength": 51,
          "agility": 58,
          "stamina": 76,
          "intellect": 133,
          "spirit": 144,
          "armor": 116
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": 41,
          "crit": 4.35
        },
        "spell": {
          "crit": 3.32,
          "regen": 77
        },
        "defenses": {
          "armor": 116,
          "defense": 350,
          "dodge": 4.36,
          "parry": null,
          "block": null
        }
      }
    },
    "warrior": {
      component: Warrior,
      "draenei": {
        component: Draenei,
        "health": 5584,
        "mana": null,
        "baseStats": {
          "strength": 146,
          "agility": 93,
          "stamina": 132,
          "intellect": 34,
          "spirit": 53,
          "armor": 186
        },
        "melee": {
          "power": 482,
          "crit": 3.96
        },
        "ranged": {
          "power": 153,
          "crit": 3.96
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 186,
          "defense": 350,
          "dodge": 3.85,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "dwarf": {
        component: Dwarf,
        "health": 5624,
        "mana": null,
        "baseStats": {
          "strength": 147,
          "agility": 92,
          "stamina": 136,
          "intellect": 32,
          "spirit": 50,
          "armor": 184
        },
        "melee": {
          "power": 484,
          "crit": 3.93
        },
        "ranged": {
          "power": 152,
          "crit": 3.93
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 184,
          "defense": 350,
          "dodge": 3.82,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "gnome": {
        component: Gnome,
        "health": 5584,
        "mana": null,
        "baseStats": {
          "strength": 140,
          "agility": 99,
          "stamina": 132,
          "intellect": 38,
          "spirit": 51,
          "armor": 198
        },
        "melee": {
          "power": 470,
          "crit": 4.14
        },
        "ranged": {
          "power": 159,
          "crit": 4.14
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 198,
          "defense": 350,
          "dodge": 4.05,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "human": {
        component: Human,
        "health": 5594,
        "mana": null,
        "baseStats": {
          "strength": 145,
          "agility": 96,
          "stamina": 133,
          "intellect": 33,
          "spirit": 56,
          "armor": 192
        },
        "melee": {
          "power": 480,
          "crit": 4.05
        },
        "ranged": {
          "power": 156,
          "crit": 4.05
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 192,
          "defense": 350,
          "dodge": 3.95,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "nightelf": {
        component: Nightelf,
        "health": 5584,
        "mana": null,
        "baseStats": {
          "strength": 142,
          "agility": 101,
          "stamina": 132,
          "intellect": 33,
          "spirit": 51,
          "armor": 202
        },
        "melee": {
          "power": 474,
          "crit": 4.20
        },
        "ranged": {
          "power": 161,
          "crit": 4.20
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 202,
          "defense": 350,
          "dodge": 5.12,
          "parry": 5.00,
          "block": 5.00
        }
      }
    }
  },
  "horde": {
    component: Horde,
    "druid": {
      component: Druid,
      "tauren": {
        component: Tauren,
        "health": 4498,
        "mana": 3815,
        "baseStats": {
          "strength": 81,
          "agility": 65,
          "stamina": 85,
          "intellect": 115,
          "spirit": 135,
          "armor": 130
        },
        "melee": {
          "power": 142,
          "crit": 3.56
        },
        "ranged": {
          "power": 55,
          "crit": null
        },
        "spell": {
          "crit": 3.29,
          "regen": 67
        },
        "defenses": {
          "armor": 130,
          "defense": 350,
          "dodge": 2.55,
          "parry": null,
          "block": null
        }
      }
    },
    "hunter": {
      component: Hunter,
      "bloodelf": {
        component: Bloodelf,
        "health": 4458,
        "mana": 4318,
        "baseStats": {
          "strength": 61,
          "agility": 153,
          "stamina": 107,
          "intellect": 81,
          "spirit": 82,
          "armor": 306
        },
        "melee": {
          "power": 334,
          "crit": 2.29
        },
        "ranged": {
          "power": 283,
          "crit": 2.29
        },
        "spell": {
          "crit": 4.61,
          "regen": 34
        },
        "defenses": {
          "armor": 306,
          "defense": 350,
          "dodge": 0.67,
          "parry": 5.00,
          "block": null
        }
      },
      "orc": {
        component: Orc,
        "health": 4488,
        "mana": 4213,
        "baseStats": {
          "strength": 67,
          "agility": 148,
          "stamina": 110,
          "intellect": 74,
          "spirit": 86,
          "armor": 296
        },
        "melee": {
          "power": 335,
          "crit": 2.17
        },
        "ranged": {
          "power": 278,
          "crit": 2.17
        },
        "spell": {
          "crit": 4.53,
          "regen": 34
        },
        "defenses": {
          "armor": 296,
          "defense": 350,
          "dodge": 0.47,
          "parry": 5.00,
          "block": null
        }
      },
      "tauren": {
        component: Tauren,
        "health": 4712,
        "mana": 4183,
        "baseStats": {
          "strength": 69,
          "agility": 146,
          "stamina": 110,
          "intellect": 72,
          "spirit": 85,
          "armor": 292
        },
        "melee": {
          "power": 335,
          "crit": 2.12
        },
        "ranged": {
          "power": 276,
          "crit": 2.12
        },
        "spell": {
          "crit": 4.50,
          "regen": 33
        },
        "defenses": {
          "armor": 292,
          "defense": 350,
          "dodge": 0.39,
          "parry": 5.00,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": 4478,
        "mana": 4198,
        "baseStats": {
          "strength": 65,
          "agility": 153,
          "stamina": 109,
          "intellect": 73,
          "spirit": 84,
          "armor": 306
        },
        "melee": {
          "power": 338,
          "crit": 2.29
        },
        "ranged": {
          "power": 283,
          "crit": 2.29
        },
        "spell": {
          "crit": 4.51,
          "regen": 33
        },
        "defenses": {
          "armor": 306,
          "defense": 350,
          "dodge": 0.67,
          "parry": 5.00,
          "block": null
        }
      }
    },
    "mage": {
      component: Mage,
      "bloodelf": {
        component: Bloodelf,
        "health": 3713,
        "mana": 4286,
        "baseStats": {
          "strength": 30,
          "agility": 41,
          "stamina": 50,
          "intellect": 155,
          "spirit": 144,
          "armor": 82
        },
        "melee": {
          "power": 20,
          "crit": 5.10
        },
        "ranged": {
          "power": 31,
          "crit": null
        },
        "spell": {
          "crit": 2.85,
          "regen": 83
        },
        "defenses": {
          "armor": 82,
          "defense": 350,
          "dodge": 5.10,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": 3733,
        "mana": 4166,
        "baseStats": {
          "strength": 34,
          "agility": 41,
          "stamina": 52,
          "intellect": 147,
          "spirit": 146,
          "armor": 82
        },
        "melee": {
          "power": 24,
          "crit": 5.10
        },
        "ranged": {
          "power": 31,
          "crit": null
        },
        "spell": {
          "crit": 2.74,
          "regen": 82
        },
        "defenses": {
          "armor": 82,
          "defense": 350,
          "dodge": 5.10,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": 3733,
        "mana": 4196,
        "baseStats": {
          "strength": 32,
          "agility": 37,
          "stamina": 52,
          "intellect": 149,
          "spirit": 150,
          "armor": 74
        },
        "melee": {
          "power": 22,
          "crit": 4.94
        },
        "ranged": {
          "power": 27,
          "crit": null
        },
        "spell": {
          "crit": 2.77,
          "regen": 85
        },
        "defenses": {
          "armor": 74,
          "defense": 350,
          "dodge": 4.94,
          "parry": null,
          "block": null
        }
      }
    },
    "paladin": {
      component: Paladin,
      "bloodelf": {
        component: Bloodelf,
        "health": 4387,
        "mana": 3978,
        "baseStats": {
          "strength": 123,
          "agility": 79,
          "stamina": 119,
          "intellect": 87,
          "spirit": 88,
          "armor": 158
        },
        "melee": {
          "power": 436,
          "crit": 3.81
        },
        "ranged": {
          "power": 69,
          "crit": null
        },
        "spell": {
          "crit": 4.42,
          "regen": 38
        },
        "defenses": {
          "armor": 158,
          "defense": 350,
          "dodge": 3.81,
          "parry": 5.00,
          "block": 5.00
        }
      }
    },
    "priest": {
      component: Priest,
      "bloodelf": {
        component: Bloodelf,
        "health": 3781,
        "mana": 4575,
        "baseStats": {
          "strength": 36,
          "agility": 47,
          "stamina": 57,
          "intellect": 149,
          "spirit": 150,
          "armor": 94
        },
        "melee": {
          "power": 26,
          "crit": 5.06
        },
        "ranged": {
          "power": 37,
          "crit": null
        },
        "spell": {
          "crit": 3.10,
          "regen": 85
        },
        "defenses": {
          "armor": 94,
          "defense": 350,
          "dodge": 5.06,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": 3801,
        "mana": 4455,
        "baseStats": {
          "strength": 40,
          "agility": 47,
          "stamina": 59,
          "intellect": 141,
          "spirit": 152,
          "armor": 94
        },
        "melee": {
          "power": 30,
          "crit": 5.06
        },
        "ranged": {
          "power": 37,
          "crit": null
        },
        "spell": {
          "crit": 3.00,
          "regen": 84
        },
        "defenses": {
          "armor": 94,
          "defense": 350,
          "dodge": 5.06,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": 3801,
        "mana": 4485,
        "baseStats": {
          "strength": 38,
          "agility": 43,
          "stamina": 59,
          "intellect": 143,
          "spirit": 156,
          "armor": 86
        },
        "melee": {
          "power": 28,
          "crit": 4.90
        },
        "ranged": {
          "power": 33,
          "crit": null
        },
        "spell": {
          "crit": 3.03,
          "regen": 87
        },
        "defenses": {
          "armor": 86,
          "defense": 350,
          "dodge": 4.90,
          "parry": null,
          "block": null
        }
      }
    },
    "rogue": {
      component: Rogue,
      "bloodelf": {
        component: Bloodelf,
        "health": 4404,
        "mana": null,
        "baseStats": {
          "strength": 92,
          "agility": 160,
          "stamina": 88,
          "intellect": 43,
          "spirit": 57,
          "armor": 320
        },
        "melee": {
          "power": 372,
          "crit": 3.71
        },
        "ranged": {
          "power": 220,
          "crit": 3.71
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 320,
          "defense": 350,
          "dodge": 7.41,
          "parry": 5.00,
          "block": null
        }
      },
      "orc": {
        component: Orc,
        "health": 4424,
        "mana": null,
        "baseStats": {
          "strength": 94,
          "agility": 156,
          "stamina": 90,
          "intellect": 37,
          "spirit": 63,
          "armor": 312
        },
        "melee": {
          "power": 370,
          "crit": 3.61
        },
        "ranged": {
          "power": 216,
          "crit": 3.61
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 312,
          "defense": 350,
          "dodge": 7.21,
          "parry": 5.00,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": 4424,
        "mana": null,
        "baseStats": {
          "strength": 96,
          "agility": 160,
          "stamina": 90,
          "intellect": 35,
          "spirit": 59,
          "armor": 320
        },
        "melee": {
          "power": 376,
          "crit": 3.71
        },
        "ranged": {
          "power": 220,
          "crit": 3.71
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 320,
          "defense": 350,
          "dodge": 7.41,
          "parry": 5.00,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": 4424,
        "mana": null,
        "baseStats": {
          "strength": 94,
          "agility": 156,
          "stamina": 90,
          "intellect": 37,
          "spirit": 63,
          "armor": 312
        },
        "melee": {
          "power": 370,
          "crit": 3.61
        },
        "ranged": {
          "power": 216,
          "crit": 3.61
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 312,
          "defense": 350,
          "dodge": 7.21,
          "parry": 5.00,
          "block": null
        }
      }
    },
    "shaman": {
      component: Shaman,
      "orc": {
        component: Orc,
        "health": 4139,
        "mana": 4253,
        "baseStats": {
          "strength": 105,
          "agility": 61,
          "stamina": 116,
          "intellect": 105,
          "spirit": 123,
          "armor": 122
        },
        "melee": {
          "power": 330,
          "crit": 4.11
        },
        "ranged": {
          "power": 51,
          "crit": null
        },
        "spell": {
          "crit": 3.51,
          "regen": 58
        },
        "defenses": {
          "armor": 122,
          "defense": 350,
          "dodge": 4.11,
          "parry": null,
          "block": 5.00
        }
      },
      "tauren": {
        component: Tauren,
        "health": 4345,
        "mana": 4223,
        "baseStats": {
          "strength": 107,
          "agility": 59,
          "stamina": 116,
          "intellect": 103,
          "spirit": 122,
          "armor": 118
        },
        "melee": {
          "power": 334,
          "crit": 4.03
        },
        "ranged": {
          "power": 49,
          "crit": null
        },
        "spell": {
          "crit": 3.49,
          "regen": 57
        },
        "defenses": {
          "armor": 118,
          "defense": 350,
          "dodge": 4.03,
          "parry": null,
          "block": 5.00
        }
      },
      "troll": {
        component: Troll,
        "health": 4129,
        "mana": 4238,
        "baseStats": {
          "strength": 103,
          "agility": 66,
          "stamina": 115,
          "intellect": 104,
          "spirit": 121,
          "armor": 132
        },
        "melee": {
          "power": 326,
          "crit": 4.32
        },
        "ranged": {
          "power": 56,
          "crit": null
        },
        "spell": {
          "crit": 3.50,
          "regen": 57
        },
        "defenses": {
          "armor": 132,
          "defense": 350,
          "dodge": 4.31,
          "parry": null,
          "block": 5.00
        }
      }
    },
    "warlock": {
      component: Warlock,
      "bloodelf": {
        component: Bloodelf,
        "health": 4060,
        "mana": 4390,
        "baseStats": {
          "strength": 48,
          "agility": 60,
          "stamina": 75,
          "intellect": 137,
          "spirit": 130,
          "armor": 120
        },
        "melee": {
          "power": 38,
          "crit": 4.43
        },
        "ranged": {
          "power": 50,
          "crit": null
        },
        "spell": {
          "crit": 3.37,
          "regen": 70
        },
        "defenses": {
          "armor": 120,
          "defense": 350,
          "dodge": 4.44,
          "parry": null,
          "block": null
        }
      },
      "orc": {
        component: Orc,
        "health": 4090,
        "mana": 4285,
        "baseStats": {
          "strength": 54,
          "agility": 55,
          "stamina": 78,
          "intellect": 130,
          "spirit": 134,
          "armor": 110
        },
        "melee": {
          "power": 44,
          "crit": 4.23
        },
        "ranged": {
          "power": 45,
          "crit": null
        },
        "spell": {
          "crit": 3.29,
          "regen": 71
        },
        "defenses": {
          "armor": 110,
          "defense": 350,
          "dodge": 4.24,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": 4080,
        "mana": 4300,
        "baseStats": {
          "strength": 50,
          "agility": 56,
          "stamina": 77,
          "intellect": 131,
          "spirit": 136,
          "armor": 112
        },
        "melee": {
          "power": 40,
          "crit": 4.27
        },
        "ranged": {
          "power": 46,
          "crit": null
        },
        "spell": {
          "crit": 3.30,
          "regen": 72
        },
        "defenses": {
          "armor": 112,
          "defense": 350,
          "dodge": 4.28,
          "parry": null,
          "block": null
        }
      }
    },
    "warrior": {
      component: Warrior,
      "orc": {
        component: Orc,
        "health": 5614,
        "mana": null,
        "baseStats": {
          "strength": 148,
          "agility": 93,
          "stamina": 135,
          "intellect": 30,
          "spirit": 54,
          "armor": 186
        },
        "melee": {
          "power": 486,
          "crit": 3.96
        },
        "ranged": {
          "power": 153,
          "crit": 3.96
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 186,
          "defense": 350,
          "dodge": 3.85,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "tauren": {
        component: Tauren,
        "health": 5894,
        "mana": null,
        "baseStats": {
          "strength": 150,
          "agility": 91,
          "stamina": 135,
          "intellect": 28,
          "spirit": 53,
          "armor": 182
        },
        "melee": {
          "power": 490,
          "crit": 3.90
        },
        "ranged": {
          "power": 151,
          "crit": 3.90
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 182,
          "defense": 350,
          "dodge": 3.78,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "troll": {
        component: Troll,
        "health": 5604,
        "mana": null,
        "baseStats": {
          "strength": 146,
          "agility": 98,
          "stamina": 134,
          "intellect": 29,
          "spirit": 52,
          "armor": 196
        },
        "melee": {
          "power": 482,
          "crit": 4.11
        },
        "ranged": {
          "power": 158,
          "crit": 4.11
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 196,
          "defense": 350,
          "dodge": 4.01,
          "parry": 5.00,
          "block": 5.00
        }
      },
      "undead": {
        component: Undead,
        "health": 5604,
        "mana": null,
        "baseStats": {
          "strength": 144,
          "agility": 94,
          "stamina": 134,
          "intellect": 31,
          "spirit": 56,
          "armor": 188
        },
        "melee": {
          "power": 478,
          "crit": 3.99
        },
        "ranged": {
          "power": 154,
          "crit": 3.99
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": 188,
          "defense": 350,
          "dodge": 3.88,
          "parry": 5.00,
          "block": 5.00
        }
      }
    }
  }
};

export default raceStats;
export const {alliance, horde} = raceStats;
export const druid = {...alliance.druid, ...horde.druid};
export const hunter = {...alliance.hunter, ...horde.hunter};
export const mage = {...alliance.mage, ...horde.mage};
export const paladin = {...alliance.paladin, ...horde.paladin};
export const priest = {...alliance.priest, ...horde.priest};
export const rogue = {...alliance.rogue, ...horde.rogue};
export const shaman = {...alliance.shaman, ...horde.shaman};
export const warlock = {...alliance.warlock, ...horde.warlock};
export const warrior = {...alliance.warrior, ...horde.warrior};
