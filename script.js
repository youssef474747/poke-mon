

let grid = document.querySelector("#grid");
let search = document.querySelector("#search");
let filters = document.querySelector("#filters");
let count = document.querySelector("#creature-count");
let teamCount = document.querySelector("#team-count");
let teamSection = document.querySelector("#team");
let detail = document.querySelector("#detail");
let form = document.querySelector("#creature-form");

let selectedType = "Tous";
let searchText = "";
let selectedCreature = creatures[0];
let team = [];

function getType(type) {
    let value = type.toLowerCase();

    if (value === "feu") return "fire";
    if (value === "eau") return "water";
    if (value === "plante") return "grass";
    if (value === "électrik" || value === "electric") return "electric";
    if (value === "glace" || value === "ice") return "ice";
    if (value === "ténèbres" || value === "dark") return "dark";

    return value;
}

// Traduire le type pour l'afficher en français
function typeFrancais(type) {
    let value = getType(type);

    if (value === "fire") return "Feu";
    if (value === "water") return "Eau";
    if (value === "grass") return "Plante";
    if (value === "electric") return "Électrik";
    if (value === "ice") return "Glace";
    if (value === "dark") return "Ténèbres";
    if (value === "fighting") return "Combat";
    if (value === "ghost") return "Spectre";
    if (value === "dragon") return "Dragon";
    if (value === "psychic") return "Psy";
    if (value === "normal") return "Normal";

    return type;
}

function totalStats(creature) {
    return creature.stats.hp +
        creature.stats.attack +
        creature.stats.defense;
}

function renderCreatures() {
    let html = "";
    let number = 0;

    creatures.forEach(function(creature) {
        let name = creature.name.toLowerCase();
        let type = getType(creature.type);
        let text = searchText.toLowerCase();

        let searchCorrect =
            name.includes(text) ||
            String(creature.id).includes(text);

            let typeCorrect =
            selectedType === "Tous" ||
            type === getType(selectedType);

        if (searchCorrect && typeCorrect) {
            let total = totalStats(creature);

            let alreadyInTeam = team.some(function(member) {
                return String(member.id) === String(creature.id);
            });

            let buttonText = "Ajouter à l'équipe";

            if (alreadyInTeam) {
                buttonText = "Déjà dans l'équipe";
            }

            html += `
                <article class="flex flex-col gap-3 rounded-card bg-white p-3 pb-4 shadow">
                    <div class="relative flex h-48 items-center justify-center rounded-xl bg-ground">
                        <img
                            src="${creature.image}"
                            alt="${creature.name}"
                            class="h-full w-full rounded-xl object-contain"
                        >
                        <span class="absolute left-3 top-2 rounded bg-white px-2 py-1 font-mono text-sm">
                            #${creature.id}
                        </span>
                    </div>

                    <div class="flex items-center justify-between gap-2">
                        <h3 class="font-display text-xl font-semibold">
                            ${creature.name}
                        </h3>

                        <span class="rounded-full bg-sky-200 px-3 py-1 text-sm font-bold text-black">
                            ${typeFrancais(creature.type)}
                        </span>
                    </div>

                    <p class="text-sm font-semibold">
                        Niveau : ${creature.level} · Total : ${total}
                    </p>

                    <button
                        type="button"
                        class="btn-outline bg-ground"
                        data-action="detail"
                        data-id="${creature.id}"
                    >
                        Voir les détails
                    </button>

                    <button
                        type="button"
                        class="btn-outline bg-ground"
                        data-action="team"
                        data-id="${creature.id}"
                        ${alreadyInTeam ? "disabled" : ""}
                    >
                        ${buttonText}
                    </button>
                </article>
            `;

            number++;
        }
    });

    if (number === 0) {
        html = `
            <p class="rounded-xl bg-white p-4">
                Aucune créature trouvée.
            </p>
        `;
    }

    grid.innerHTML = html;
    count.textContent = number;
}






















// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
