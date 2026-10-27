// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

const creatures = [

    {
        id: "#001",
        name: "Pikatchu",
        type: "Electric",
        level: "50",
        stats: { hp: 35, attack: 50, defense: 50},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdeBVpdym0B3W1_ct2YL7w-KvCcUTNhzzKJdnp7LOCA&s=10",
        description:"An iconic electric mouse that stores energy in its red cheek pouches and releases powerful lightning attacks.",
    },{

        id: "#002",
        name: "Charizard",
        type: "fire",
        level: "50",
        stats: { hp: 78, attack: 84, defense: 78},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgHVRTo4H6dmIUxTF5Dc4JExxrYpHrNle8WGggpwP5w&s=10",
        description: "A fierce dragon-like Pokémon whose tail flame burns brighter when it experiences intense battles.",

    },{

        id: "#003",
        name: "Bulbasaur",
        type: "grass",
        level: "50",
        stats: { hp: 45, attack: 49, defense: 49},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugjhyI2-EfcBMY8nC2LSg8yVcR7_RdMg7SQLHmGk_nA&s=10",
        description: "A gentle starter Pokémon that carries a plant bulb on its back, which slowly grows bigger by absorbing sunlight.",

    },{
        
        id: "#004",
        name: "Squirtle",
        type: "water",
        level: "50",
        stats: { hp: 44, attack: 48, defense: 65},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2M83nvGxNCfFlhtrFN62s9bTrxEx21yySu9WTHxchFg&s=10",
        description: "A small turtle Pokémon that withdraws into its grooved shell for protection and shoots high-pressure water streams.",

    },{
                
        id: "#005",
        name: "Lucario",
        type: "fighting",
        level: "50",
        stats: { hp: 70, attack: 110, defense: 70},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Xiu-XvNyO8TuX1RU_lKiVCVySvSlgssL8FfJjK2ksA&s=10",
        description: "A loyal warrior that can sense and manipulate aura energy to predict enemy movements and strike with precision .",


    },{

        id: "#006",
        name: "Greninja",
        type: "dark",
        level: "50",
        stats: { hp: 72, attack: 95, defense: 67},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBsfAVL6MYOlPspNuCjai4ndHwMZMQzUZGfwJMv22fw&s=10",
        description: "An agile ninja frog that creates sharp throwing stars made of compressed water to attack with lightning speed.",

    },{
        
        id: "#007",
        name: "Gengar",
        type: "ghost",
        level: "50",
        stats: { hp: 60, attack: 65, defense: 60},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX_meJasIRMU-7QmrQKPE-LgAac8OzoZ758TwQwd0wQ&s=10",
        description: "A mischievous shadow Pokémon that hides in darkness to surprise victims and drain their warmth.",

    },{
         
        id: "#008",
        name: "Garchomp",
        type: "dragon",
        level: "50",
        stats: { hp: 108, attack: 130, defense: 65},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIYaQeKmvx870f7M8e09LS4XJ3rLrzsqygtXpiaxeJw&s=10",
        description: "A terrifying, jet-like land shark that flies through the air at high speeds to hunt its prey.",

    },{

        id: "#009",
        name: "Gardevoir",
        type: "psychic",
        level: "50",
        stats: { hp: 68, attack: 65, defense: 65},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCl5PCUtYik10HYmCpv9ayN25pgXhnTFWGlci1ogLnVQ&s=10",
        description: "A noble and protective Pokémon capable of unleashing psychic powers and creating small black holes to protect its Trainer.",

    },{
        
        id: "#010",
        name: "Eevee",
        type: "normal",
        level: "50",
        stats: { hp: 55, attack: 55, defense: 50},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUhV9y5KdnbJBH2RyFyg5NzDVsrNXp8_6cTlmjJ7GbA&s=10",
        description: "A beloved Pokémon with unstable genetic code that allows it to evolve into eight different elemental forms.",

    },{
                
        id: "#011",
        name: "Mewtwo",
        type: "psychic",
        level: "50",
        stats: { hp: 106, attack: 110, defense: 90},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1C_riVuS0AfjoAK5SfuNbFcK0nmn6zF341tC74eYHQ&s=10",
        description: "A powerful Legendary Pokémon created through genetic manipulation, known for its ultimate psychic abilities and cold demeanor.",


    },{
                        
        id: "#012",
        name: "Rayquaza",
        type: "dragon",
        level: "50",
        stats: { hp: 105, attack: 150, defense: 90},
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNo6ctEMFwlYtpgi61EGrBxVRXibEtkRkcpWrSYLujDw&s=10",
        description: "An ancient sky guardian that lives high in the ozone layer and calms disputes between territorial Legendary Pokémon.",


    },
    
    
    {
        id: "#013",
        name: "Snorlax",
        type: "normal",
        level: "50",
        stats: { hp: 160, attack: 110, defence: 65 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pdD3q_pWguols2Z8Wq8Mnb063G5mSweduPjYIrn0DQ&s=10",
        description: "A huge and peaceful Pokémon that loves sleeping and eating, but becomes powerful when it fights."
    },
    {
        id: "#014",
        name: "Arcanine",
        type: "fire",
        level: "50",
        stats: { hp: 90, attack: 110, defence: 80 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwndHwh3StSAamL7A9K0PN8Dewv5p35P7H4F7EpjagrQ&s=10",
        description: "A majestic fire Pokémon known for its incredible speed, courage, and beautiful orange fur."
    },
    {
        id: "#015",
        name: "Lapras",
        type: "water",
        level: "50",
        stats: { hp: 130, attack: 85, defence: 80 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDdHwli5R3UbeXAIIifOHJdTGCt0KJcimtfJAHakr2A&s",
        description: "A gentle water Pokémon that carries people across the sea and sings beautiful melodies."
    },
    {
        id: "#016",
        name: "Scizor",
        type: "bug",
        level: "50",
        stats: { hp: 70, attack: 130, defence: 100 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRowROLR9vxeAFYCrCULQs1IeYHbfsPGPI_OpXhzL-A&s=10",
        description: "A red armored Pokémon with powerful pincers that can crush objects and strike enemies quickly."
    },
    {
        id: "#017",
        name: "Tyranitar",
        type: "dark",
        level: "50",
        stats: { hp: 100, attack: 134, defence: 110 },
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHyhFH4oxVusdkedIIn2KM3pAI8ls7ob_xV9C_GInUw&s=10",
        description: "A mighty armored Pokémon with immense strength that can change the surrounding landscape."
    },



];
