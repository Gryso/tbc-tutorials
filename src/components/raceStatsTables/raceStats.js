import {Alliance, Horde} from "../gameElements/faction/factions";
import {
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior
} from "../gameElements/class/classes";
import {
  Bloodelf,
  Draenei,
  Dwarf,
  Gnome,
  Human,
  Nightelf,
  Orc,
  Tauren,
  Troll,
  Undead
} from "../gameElements/race/races";

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
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
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
        "health": null,
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
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "hunter": {
      component: Hunter,
      "bloodelf": {
        component: Bloodelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "orc": {
        component: Orc,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "tauren": {
        component: Tauren,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "mage": {
      component: Mage,
      "bloodelf": {
        component: Bloodelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "paladin": {
      component: Paladin,
      "bloodelf": {
        component: Bloodelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "priest": {
      component: Priest,
      "bloodelf": {
        component: Bloodelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "rogue": {
      component: Rogue,
      "bloodelf": {
        component: Bloodelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "orc": {
        component: Orc,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "shaman": {
      component: Shaman,
      "orc": {
        component: Orc,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "tauren": {
        component: Tauren,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "warlock": {
      component: Warlock,
      "bloodelf": {
        component: Bloodelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "orc": {
        component: Orc,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      }
    },
    "warrior": {
      component: Warrior,
      "orc": {
        component: Orc,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "tauren": {
        component: Tauren,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "troll": {
        component: Troll,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
        }
      },
      "undead": {
        component: Undead,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": null,
          "agility": null,
          "stamina": null,
          "intellect": null,
          "spirit": null,
          "armor": null
        },
        "melee": {
          "power": null,
          "crit": null
        },
        "ranged": {
          "power": null,
          "crit": null
        },
        "spell": {
          "crit": null,
          "regen": null
        },
        "defenses": {
          "armor": null,
          "defense": 350,
          "dodge": null,
          "parry": null,
          "block": null
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
