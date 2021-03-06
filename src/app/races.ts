export class Races {
  public races = [

    // Human Race

    {
      name: "Human",
      stats: {
        luck: 5,
        str: 10,
        dex: 10,
        int: 10,
        wis: 10
      },
      karma: karmaRoll => {
        if (!localStorage.getItem("humanRoll")) {
          localStorage.setItem("humanRoll", String(Math.floor(Math.random() * 3) + 1));
        }
        let hr = localStorage.getItem("humanRoll");
        switch (hr) {
          case "1":
            return parseInt(karmaRoll);
          case "2":
            return -parseInt(karmaRoll);
          case "3":
            return 0;
          default:
            console.log("wat", karmaRoll, hr);
            break;
        }
      },
      background: `Humans have long been enemies of orcs, goblins, and trolls. They have been in an unending war with them for millennia and since every great library either side has ever built has been burned, they no longer know why they are even fighting. While the orcs and goblins live together and respect each other as close allies, the trolls never ally with either side, moving from their cold mountains to raid the farms and towns for food, and taking what they can.`,
      racial: "* **Surprising ingenuity**: Any plans or creations of the humans are often strange to the minds of many other races, this makes them unpredictable. `+1` (up to 10) to any dice roll made.\n* **From father to son**:  Whatever job your father had, you now have the first 3 skills in that trade and `+10%` towards gaining skills in that area, whether or not it is your profession",
      img: "https://s-media-cache-ak0.pinimg.com/736x/5c/43/19/5c431990279695c525043326ac478b75.jpg"
    },

    // Orc Race

    {
      name: "Orc",
      stats: {
        luck: 5,
        str: 15,
        dex: 10,
        int: 7,
        wis: 12
      },
      karma: karmaRoll => {
        return -parseInt(karmaRoll);
      },
      background: `The Orcs have passed down the stories of their ancestors for millennia. In these stories, the innocents, those merely trying to eek out an existence are themselves and the Goblins, the invaders, Humans and Elves. The reason? They dislike them for their looks.  They are viewed as mindless uncaring monsters, primitive to the extreme. Creatures little better than roaches. That is their only reason for fighting, to protect themselves and their land. They spill human blood, but only because if they stopped, humans would spill their blood.`,
      racial: "* **Strength of the ancestors**: using weapons with a history known to yourself gives them `+10%` damage.  Any weapon that is older than 1000 years, including those pieced back together, gain a power in accordance to their past.\n* If you are in a warrior profession gain `+1` strength per level without using points, this caps out at level 10, If you are a mage profession gain `+1` wisdom per level, this caps at level 10.",
      img: "http://img01.deviantart.net/0aaa/i/2015/204/6/8/orc_portrait_by_mirrors519-d92jmhe.jpg"
    },

    // Elf Race

    {
      name: "Elf",
      stats: {
        luck: 5,
        str: 8,
        dex: 15,
        int: 13,
        wis: 10
      },
      karma: karmaRoll => {
        return -parseInt(karmaRoll);
      },
      background: `The elven people have long despised the other races. They despise them for their short lives and lack of dedication to a profession.  Because of this, the elves often raid those around them, and slaughter any of those whom they come across as inferior beings should not exist. However, they especially despise the dwarves, because they create weapons and armor on par and sometimes exceeding those of the elves.  This has made them go to war and this war has not shown any sign of ending soon.`,
      racial: "* **Focus and adherence**: You may only have 2 professions that you are studying at one time, however you gain `+10%` more experience towards skills in these areas.  These Professions must have some link and may not be opposite.\n* **Dispassionate gaze**: So ingrained is your distaste for those of other races, any of those who you glare at will feel a mental pressure and need to roll a `1d6` to resist fleeing.  This only works on those 2 levels lower than you and must not be above level 15",
      img: "/assets/elf.jpg"
    },

    // Goblin Race

    {
      name: "Goblin",
      stats: {
        luck: 5,
        str: 6,
        dex: 10,
        int: 7,
        wis: 8
      },
      karma: karmaRoll => {
        return -parseInt(karmaRoll);
      },
      background: "The goblins care little for the troubles of those not of their people.  They work with the Orcs because they are stronger than they are, however they have been used as fodder in large scale battles by the Orcs.  Because of this, they have recently begun to hate them.  Now they work with them only for survival, and do not have much contact with them otherwise.  They despise the humans more for the burning of their farms now, then any past transgressions.  They have very short term and self centered desires leading them to have many children with many females.  They also love the all growing things, which is why they hate the humans for burning their farms.",
      racial: "* **Strength in numbers**: When in the company of other goblins you gain `+10%` to dexterity and +10% to critical strike chance.  This stacks up to `30%` (`10%` per goblin)\n* **Affinity for nature**: +10% towards any shamanic or druidic skills, `+10%` to crafting with living materials.",
      img: "http://pathfinderwiki.com/mediawiki/images/thumb/c/c0/Chuffy_Lickwound.jpg/250px-Chuffy_Lickwound.jpg"
    },

    // Troll Race

    {
      name: "Troll",
      stats: {
        luck: 5,
        str: 17,
        dex: 15,
        int: 5,
        wis: 3
      },
      karma: karmaRoll => {
        return -parseInt(karmaRoll);
      },
      background: "Averaging 15ft tall, with arms reaching to their knees Trolls are terrifyingly strong and fast.  Trolls have their own language language and few among them learn to write.  However trolls do work metal.  Their creations, though crude, often have the weight of something several times the size.  This is because with the strength they have, they can pack far more metal into one space than one would think is possible.  Trolls also do not need to raid the other races, however they have an instinctual need to kill and eat the flesh of others.",
      racial: "* **Instinctual mayhem**: If you kill another sentient you will gain `+5%` damage and `+5%` health, this is stackable to `50%`.  If you do not kill another sentient every 3 days this buff will pass.\n* **Monstrous ability**: You gain `+2` strength and `+2` dexterity per level if you have killed 4 sentient beings within the last 5 days.  If you have not, you gain `+1` to whichever you wish to increase",
      img: "http://payload336.cargocollective.com/1/4/159162/9029856/RenderAngry_1078.jpg"
    },

    // Ogre Race

    {
      name: "Ogre",
      stats: {
        luck: 5,
        str: 22,
        dex: 10,
        int: 3,
        wis: 2
      },
      karma: () => {
        return 0;
      },
      background: "Ogres have no written language and care little for their past.  They do not tell stories of the past, but instead tell stories of their ancient gods.  However, this is all they tell of.  This also does not affect their lives much at all.  They tend to instead patrol the woods, eating everything they can so they can support their bulk.  They are rarely encountered by the other races, but when they are they are always in packs of 5-10.",
      racial: "* **True beast**:  You gain `+10` strength every 3 levels and `+2` dexterity every 5 levels.\n* **Scent of food**:  If you see a sentient being, you also pick out it’s scent among the many things in the area and can track them for the next 5 days.",
      img: "http://2.bp.blogspot.com/-ogJ9P43skZw/VqdL88UDUgI/AAAAAAAAJVU/ZacAKazpyws/s1600/13b23982688b7df6030e8cf04e55c84d.jpg"
    },

    // Demon Race

    {
      name: "Demon",
      stats: {
        luck: 5,
        str: 15,
        dex: 15,
        int: 15,
        wis: 4
      },
      karma: () => {
        return -100;
      },
      background: "Little is known about the demons other than that they are fallen angels. They are rare and never appear in groups.  They tend to be wandering beings of destruction, killing all in their way, burning villages. Some few sentients have managed to have conversations with these beings and they always come back changed in some way, twisted, and corrupted.",
      racial: "* **Chaos**:  Can change anything you touch in random and powerful ways.\n* **Blood creation**: If you kill something you can make weapons of it’s blood, these weapons are permanent creations and can be added to constantly by other blood. Each source of blood will change the weapon in some way.",
      img: "http://cdn.playbuzz.com/cdn/f4b6d7b3-4268-43a4-8a46-85e1697e218f/b229eb7d-48d8-414c-8bf4-0782a79c2e57.jpg"
    },

    // Angel Race

    {
      name: "Angel",
      stats: {
        luck: 10,
        str: 15,
        dex: 15,
        int: 15,
        wis: 4
      },
      karma: () => {
        return 100;
      },
      background: "Little is known of the angels other than that they are here to hunt the elder demons.  They rarely speak to sentients, and often kill those who they view as unclean.",
      racial: "* **Heavenly hunter**: You always know which way to go to find the nearest demon. You have a `+50%` damage boost towards demons\n* **Unending grace**: You are not affected by status effects",
      img: "http://d20pfsrd.opengamingnetwork.com/wp-content/uploads/sites/12/2017/01/angel-jr.png"
    },

    // Sprite Race

    {
      name: "Sprite",
      stats: {
        luck: 5,
        str: 8,
        dex: 7,
        int: 8,
        wis: 15
      },
      karma: karmaRoll => {
        return parseInt(karmaRoll);
      },
      background: "Sprites are guardians of all things natural. They often are found deep in the secret places of the world. They have a deep and ever expanding lore of the world. They are most often found in the woods, however they are also known to be on mountains, in tundra, and deep in the deserts.",
      racial: "* **Respectful creatures**:  Animals that are not naturally hostile will follow you and defend you from those who would attack you.  If you kill a non-hostile animal this ability will become void.\n* **Naturally cautious**: You keep constant vigilance of your surroundings and can see auras of danger, traps and creatures.",
      img: "http://orig14.deviantart.net/5921/f/2013/052/4/7/hommelstaub_by_d8p-d5vr6ci.jpg"
    },

    // Dwarf Race

    {
      name: "Dwarf",
      stats: {
        luck: 5,
        str: 14,
        dex: 7,
        int: 15,
        wis: 8
      },
      karma: () => {
        return 0;
      },
      background: "Deep underground, often under mountains, but also in the sands of the desert the dwarves reside.  Secluded and often wary of other races, they rarely trade with them.  They do not know why the elves attack them, they do not truly care either.  They care only for crafting, and now that they are at war, only for weapons.",
      racial: "* **Unparalleled Crafting**: All crafting skills increase `+10%` faster, all created objects will take on aspects of their material.\n* **Power of Creation**:  You can find simple ingredients in your environment, given time you can find the rarest ingredients in the area.",
      img: "https://3.bp.blogspot.com/-sxpEZsTLjMQ/WGBB7hkUDcI/AAAAAAAABtk/GFacmQE49lcpTpWeiQNNGzQYP7DPxYaaQCEw/s1600/f6daeede9b80e864d7d5e89ad6ca1710.png"
    },

    // Durg Race

    {
      name: "Durg",
      stats: {
        luck: 5,
        str: 5,
        dex: 6,
        int: 25,
        wis: 25
      },
      karma: karmaRoll => {
        return -parseInt(karmaRoll);
      },
      background: "The Durg are are dark brown in color, hunched with clawed hands and bowed legs. They are a strictly magical people and are deeply into death magic.  Because of this they often reside in ancient catacombs, living off mushrooms and the dead scraps of meat on corpses.",
      racial: "* **Born to power**: `+35%` to all magical skills `-50%` to physical skills.\n* **Animator of the Dead**: Natural ability to control zombies, 1 per personal level, however their level in total cannot surpass yours. This ability is affected by magical skills in death magic.",
      img: "https://www.austinchronicle.com/binary/3c45/pols_reefer1.jpg"
    }
  ];

  public getRaces() {
    return this.races;
  }
}
