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
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 73,
          "agility": 75,
          "stamina": 82,
          "intellect": 120,
          "spirit": 133,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "draenei": {
        component: Draenei,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 65,
          "agility": 148,
          "stamina": 107,
          "intellect": 78,
          "spirit": 85,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "dwarf": {
        component: Dwarf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 66,
          "agility": 147,
          "stamina": 111,
          "intellect": 76,
          "spirit": 82,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "nightelf": {
        component: Nightelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 61,
          "agility": 156,
          "stamina": 107,
          "intellect": 77,
          "spirit": 83,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "draenei": {
        component: Draenei,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 34,
          "agility": 36,
          "stamina": 50,
          "intellect": 152,
          "spirit": 147,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "gnome": {
        component: Gnome,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 28,
          "agility": 42,
          "stamina": 50,
          "intellect": 162,
          "spirit": 145,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "human": {
        component: Human,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 33,
          "agility": 39,
          "stamina": 51,
          "intellect": 151,
          "spirit": 159,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "draenei": {
        component: Draenei,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 127,
          "agility": 74,
          "stamina": 119,
          "intellect": 84,
          "spirit": 91,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "dwarf": {
        component: Dwarf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 128,
          "agility": 73,
          "stamina": 123,
          "intellect": 82,
          "spirit": 88,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "human": {
        component: Human,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 126,
          "agility": 77,
          "stamina": 120,
          "intellect": 83,
          "spirit": 97,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "draenei": {
        component: Draenei,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 40,
          "agility": 42,
          "stamina": 57,
          "intellect": 146,
          "spirit": 153,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "dwarf": {
        component: Dwarf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 41,
          "agility": 41,
          "stamina": 61,
          "intellect": 144,
          "spirit": 150,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "human": {
        component: Human,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 39,
          "agility": 45,
          "stamina": 58,
          "intellect": 145,
          "spirit": 166,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "nightelf": {
        component: Nightelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 36,
          "agility": 50,
          "stamina": 57,
          "intellect": 145,
          "spirit": 151,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "dwarf": {
        component: Dwarf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 97,
          "agility": 154,
          "stamina": 92,
          "intellect": 38,
          "spirit": 57,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "gnome": {
        component: Gnome,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 90,
          "agility": 161,
          "stamina": 88,
          "intellect": 45,
          "spirit": 58,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "human": {
        component: Human,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 95,
          "agility": 158,
          "stamina": 89,
          "intellect": 39,
          "spirit": 63,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "nightelf": {
        component: Nightelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 92,
          "agility": 163,
          "stamina": 88,
          "intellect": 39,
          "spirit": 58,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "draenei": {
        component: Draenei,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 103,
          "agility": 61,
          "stamina": 113,
          "intellect": 109,
          "spirit": 122,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "gnome": {
        component: Gnome,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 46,
          "agility": 61,
          "stamina": 75,
          "intellect": 143,
          "spirit": 131,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "human": {
        component: Human,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 51,
          "agility": 58,
          "stamina": 76,
          "intellect": 133,
          "spirit": 144,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "draenei": {
        component: Draenei,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 146,
          "agility": 93,
          "stamina": 132,
          "intellect": 34,
          "spirit": 53,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "dwarf": {
        component: Dwarf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 147,
          "agility": 92,
          "stamina": 136,
          "intellect": 32,
          "spirit": 50,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "human": {
        component: Human,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 145,
          "agility": 96,
          "stamina": 133,
          "intellect": 33,
          "spirit": 56,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
      "nightelf": {
        component: Nightelf,
        "health": null,
        "mana": null,
        "baseStats": {
          "strength": 142,
          "agility": 101,
          "stamina": 132,
          "intellect": 33,
          "spirit": 51,
          "armor": null
        },
        "melee": {
          "power": null,
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
          "cirt": null
        },
        "ranged": {
          "power": null,
          "cirt": null
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
