
import { getRandom as random } from "../util/random.js";

const simulations = new Map<string, Array<number>>();

for (let i = 0; i < 100000; i++)
	{
	// Emplacement de la voiture
	const car = random(0, 2);

	// Emplacements des chèvres
	const goats = [0, 1, 2].filter(door => door !== car);

	// Choix initial du joueur
	const choice = random(0, 2);

	// Clé pour identifier la simulation
	let simulation = "";

	simulation += `${choice}`;

	// Le joueur a choisi la porte avec la voiture, l'animateur peut révéler l'une des deux portes restantes
	// Le joueur a choisi une porte avec une chèvre, l'animateur révèle l'autre porte avec la chèvre
	// Porte révélée par l'animateur
	const revealed = (choice === car) ? goats[random(0, 1)] : goats.find(door => door !== choice);

	simulation += `${revealed}`;

	// Emplacements des portes restantes après révélation
	//const doors = [0, 1, 2].filter(door => door !== revealed);

	// Initialisation de la simulation dans la map si elle n'existe pas encore
	if (!simulations.has(simulation))
		{
		simulations.set(simulation, [0, 0]);
		}

	const current = simulations.get(simulation)!;

	const win = (choice === car) ? 0 : 1;
	current[win]++;

	simulations.set(simulation, current);
	}

//console.table(simulations);

/*
	// Garder / Changer
	if (choice === car)
		{
		// Garde sa porte
		current[0]++;
		}
	else
		{
		// Change de porte
		current[1]++;
		}

	

//console.table(Array.from(simulations.entries()).map(([key, value]) => ({ simulation: key, count: value })));
*/
