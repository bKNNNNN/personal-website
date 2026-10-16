import type { Locale } from "@/lib/i18n";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectSection {
  title: string;
  paragraphs: string[];
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectCopy {
  title: string;
  summary: string;
  metaDescription: string;
  status: string;
  imageAlt: string;
  homeBlurb: string;
  facts: ProjectFact[];
  sections: ProjectSection[];
  links: ProjectLink[];
}

export interface Project {
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  copy: Record<Locale, ProjectCopy>;
}

const bredouille: Project = {
  slug: "bredouille",
  image: "/projects/bredouille.webp",
  imageWidth: 1600,
  imageHeight: 1000,
  copy: {
    fr: {
      title: "Bredouille",
      summary:
        "Une carte des conditions de pousse des champignons en France, au kilomètre, pour aujourd'hui et les 7 jours suivants.",
      metaDescription:
        "Bredouille : carte des conditions de pousse des champignons en France, construite par Pierrick Deniel avec une équipe d'agents IA. Moteur de données, application, API et serveur MCP open source.",
      status: "Bêta fermée, Android en premier",
      imageAlt: "Page d'accueil de bredouille.app : le titre « Pour rentrer moins souvent bredouille. » à côté d'une sporée en points clairs sur fond sombre.",
      homeBlurb:
        "Une carte qui dit où les conditions de pousse sont meilleures que d'habitude pour 8 espèces de champignons, partout en France. Elle publie ses ratés à côté de ses réussites. Pierrick l'a construite avec une équipe d'agents IA, du moteur de données jusqu'à l'application.",
      facts: [
        { label: "Couverture", value: "France métropolitaine, mailles de 1 km" },
        { label: "Espèces", value: "8, chacune avec son sosie dangereux" },
        { label: "Horizon", value: "Aujourd'hui et 7 jours de prévision" },
        { label: "Test sur le passé", value: "3 736 observations datées, 2010 à 2025" },
        { label: "Score cèpes", value: "0,61 (0,50 = hasard)" },
        { label: "Open source", value: "Serveur MCP, licence MIT" },
      ],
      sections: [
        {
          title: "Le problème",
          paragraphs: [
            "Les cueilleurs regardent la pluie et les températures, puis devinent. Les cartes existantes donnent rarement leur méthode et jamais leurs erreurs. Bredouille calcule chaque jour un indice de conditions de pousse et dit d'où il vient.",
            "L'indice décrit la météo et le sol, pas les champignons. L'application n'identifie rien et ne dit jamais qu'un champignon est comestible. Chaque fiche espèce montre le sosie toxique avec lequel on la confond.",
          ],
        },
        {
          title: "Ce qui tourne",
          paragraphs: [
            "Un moteur Python calcule l'indice chaque jour à partir de données ouvertes : la météo mesurée par Météo-France (SIM2), les prévisions ECMWF, des données forestières et les observations datées publiées sur GBIF. Les résultats partent sur Cloudflare R2 et sont servis par une API sur Cloudflare Workers.",
            "L'application Android est écrite avec Expo et MapLibre. Elle propose des alertes par lieu, des cartes hors ligne, un mode terrain avec retour à la voiture et un carnet qui reste sur le téléphone. Le site public est en Astro.",
            "Une page Fiabilité publie le test sur le passé espèce par espèce. Pour les cèpes, sur 730 observations datées, la carte en allume 117 un jour classé parmi les 10 % meilleurs du lieu, quand le hasard en aurait allumé 73.",
          ],
        },
        {
          title: "Comment il a été construit",
          paragraphs: [
            "Pierrick tient le rôle de product owner : il fixe la vision, tranche les arbitrages (nom, prix, ce qui reste gratuit, ce qu'on affiche ou non) et teste chaque version. Le code, les tests, les textes et les visuels sont produits par des agents IA organisés comme une agence : un agent coordinateur, des spécialistes par discipline (données, science, design, contenu, juridique) et une revue indépendante avant chaque fusion.",
            "La première version a tourné deux mois en pilote automatique : tous les contrôles étaient verts, mais l'application n'affichait aucune prévision. Pierrick a repris le projet avec cette organisation en agence. La revue a ensuite attrapé une erreur de fond : le modèle plaçait le pic des cèpes en juin alors que les observations le placent à l'automne. Un facteur de saisonnalité tiré de GBIF l'a corrigé avant la publication.",
          ],
        },
        {
          title: "Ce qui est open source",
          paragraphs: [
            "Le serveur MCP de Bredouille est public sous licence MIT. Il permet à Claude, ChatGPT ou tout client MCP de répondre à « est-ce le moment pour les cèpes près de Tulle ce week-end ? » à partir de l'indice publié. Il expose six outils : conditions d'un lieu, meilleurs jours, explication de l'indice, géocodage, fiabilité, règles de cueillette et dates de chasse.",
          ],
        },
      ],
      links: [
        { label: "bredouille.app", href: "https://bredouille.app" },
        { label: "Code du serveur MCP", href: "https://github.com/bKNNNNN/bredouille-mcp" },
        { label: "Page Fiabilité", href: "https://bredouille.app/fiabilite/" },
      ],
    },
    en: {
      title: "Bredouille",
      summary:
        "A map of mushroom growing conditions across France, at 1 km resolution, for today and the next 7 days.",
      metaDescription:
        "Bredouille: a map of mushroom growing conditions in France, built by Pierrick Deniel with a team of AI agents. Data engine, mobile app, API and open-source MCP server.",
      status: "Closed beta, Android first",
      imageAlt: "bredouille.app home page: the headline “Pour rentrer moins souvent bredouille.” next to a spore print drawn in light dots on a dark background.",
      homeBlurb:
        "A map that shows where growing conditions are better than usual for 8 mushroom species, anywhere in France. It publishes its misses next to its hits. Pierrick built it with a team of AI agents, from the data engine to the app.",
      facts: [
        { label: "Coverage", value: "Metropolitan France, 1 km cells" },
        { label: "Species", value: "8, each with its dangerous lookalike" },
        { label: "Horizon", value: "Today and a 7-day forecast" },
        { label: "Back-test", value: "3,736 dated observations, 2010 to 2025" },
        { label: "Cep score", value: "0.61 (0.50 = chance)" },
        { label: "Open source", value: "MCP server, MIT licence" },
      ],
      sections: [
        {
          title: "The problem",
          paragraphs: [
            "Foragers look at rain and temperature, then guess. Existing maps rarely explain their method and never show their errors. Bredouille computes a growing-conditions index every day and says where it comes from.",
            "The index describes weather and soil, not mushrooms. The app identifies nothing and never says a mushroom is edible. Each species page shows the toxic lookalike people confuse it with.",
          ],
        },
        {
          title: "What runs",
          paragraphs: [
            "A Python engine computes the index every day from open data: weather observed by Météo-France (SIM2), ECMWF forecasts, forest data and dated observations published on GBIF. Results go to Cloudflare R2 and are served by an API on Cloudflare Workers.",
            "The Android app is built with Expo and MapLibre. It has alerts per place, offline maps, a field mode that guides you back to the car and a journal that stays on the phone. The public site runs on Astro.",
            "A Reliability page publishes the back-test species by species. For ceps, out of 730 dated observations, the map lights 117 on a day it ranked among the best 10 % for that place, where chance would have lit 73.",
          ],
        },
        {
          title: "How it was built",
          paragraphs: [
            "Pierrick acts as product owner: he sets the vision, makes the calls (name, pricing, what stays free, what is shown or hidden) and tests every build. Code, tests, copy and visuals are produced by AI agents organised like an agency: a coordinating agent, specialists per discipline (data, science, design, content, legal) and an independent review before every merge.",
            "The first version ran on autopilot for two months: every check was green, yet the app showed no forecast. Pierrick took the project back with the agency setup. Review then caught a substantive error: the model put the cep peak in June, while observations put it in autumn. A seasonality factor derived from GBIF fixed it before release.",
          ],
        },
        {
          title: "What is open source",
          paragraphs: [
            "Bredouille's MCP server is public under the MIT licence. It lets Claude, ChatGPT or any MCP client answer “is it a good time for ceps near Tulle this weekend?” from the published index. It exposes six tools: conditions at a place, best days, why the index is what it is, geocoding, reliability, and picking rules with hunting season dates.",
          ],
        },
      ],
      links: [
        { label: "bredouille.app", href: "https://bredouille.app" },
        { label: "MCP server code", href: "https://github.com/bKNNNNN/bredouille-mcp" },
        { label: "Reliability page", href: "https://bredouille.app/fiabilite/" },
      ],
    },
  },
};

const cercle32: Project = {
  slug: "cercle-32",
  image: "/projects/cercle-32.webp",
  imageWidth: 1600,
  imageHeight: 1000,
  copy: {
    fr: {
      title: "Cercle 32",
      summary:
        "Un jeu de belote en ligne avec dix variantes et leurs vraies règles, une table qu'on partage par lien, et une histoire en solo qui apprend à jouer.",
      metaDescription:
        "Cercle 32 : jeu de belote multijoueur avec dix variantes et une campagne narrative, construit par Pierrick Deniel avec une équipe d'agents IA. Moteur de règles open source.",
      status: "Bêta publique gratuite",
      imageAlt: "Écran d'accueil du jeu Cercle 32 : trois panneaux illustrés, « Jouer à la belote », « Mauvaise Donne » et « Nuit blanche ».",
      homeBlurb:
        "Dix variantes de belote avec leurs vraies règles, une table qu'on partage par lien, des robots qui tiennent les places vides et une histoire en solo dans le Paris de 1923. Pierrick dirige le jeu ; une équipe d'agents IA le fabrique. Le moteur de règles est open source.",
      facts: [
        { label: "Variantes", value: "10, de la classique à la stéphanoise" },
        { label: "Multijoueur", value: "Un lien, sans compte ni téléchargement" },
        { label: "Robots", value: "3 niveaux, remplaçables en pleine partie" },
        { label: "Solo", value: "Mauvaise Donne, prologue et chapitre 1 en bêta" },
        { label: "Plateformes", value: "Navigateur, application installable" },
        { label: "Open source", value: "Moteur de règles MIT, bible des règles CC BY-SA" },
      ],
      sections: [
        {
          title: "Le problème",
          paragraphs: [
            "Chaque famille joue sa belote : contrée, coinche, à la vache, à deux, stéphanoise. Les applications existantes en proposent une ou deux, souvent avec des règles simplifiées. Cercle 32 les met toutes à la même table, avec leurs vraies règles : la coupe, la donne par trois puis deux, la retourne, l'obligation de fournir.",
          ],
        },
        {
          title: "Ce qui tourne",
          paragraphs: [
            "Le Salon : on crée une table, on choisit la variante, on envoie le lien. Les amis s'assoient sans compte. Une place vide est tenue par un robot au niveau choisi, et un ami en retard prend sa place en pleine partie.",
            "Mauvaise Donne : une histoire en solo à Paris et Saint-Étienne pendant la saison 1923-24. Deux joueuses, Agnès et Salomé, et chaque chapitre apprend une variante. Les dialogues sont doublés en français.",
            "Techniquement, c'est un monorepo TypeScript. Le même moteur de règles tourne sur le serveur de jeu (Colyseus), dans les robots et dans le navigateur pour le solo hors ligne. La table est rendue en Three.js. Le jeu s'installe comme une application depuis cercle32.app, sans passer par une boutique.",
          ],
        },
        {
          title: "Comment il a été construit",
          paragraphs: [
            "Pierrick tient le rôle de directeur produit. Il a tranché les règles litigieuses à partir des sources (barème FFB 2015, règle stéphanoise publiée), validé la direction artistique et le modèle économique, et joue chaque version sur téléphone. Des agents IA écrivent le code, les tests, les règles, les visuels et les voix, sous la coordination d'un agent chef de projet.",
            "À la reprise du projet, la branche d'intégration ne compilait plus. Le projet est reparti de la branche stable : nouveau moteur, nouveaux robots, table refaite, et 145 000 lignes d'ancien code supprimées. Après une partie, Pierrick a trouvé les robots illogiques. Ils sont désormais mesurés par un audit des fautes de jeu et lisent les annonces et les défausses de leur partenaire.",
            "Chaque écran est vérifié en paysage sur une matrice d'appareils, de l'iPhone SE au grand écran 3440 px.",
          ],
        },
        {
          title: "Ce qui est open source",
          paragraphs: [
            "belote-engine est public sous licence MIT. C'est un moteur de règles pur et déterministe : pas d'entrées-sorties, pas d'horloge, le hasard vit dans l'état. Une même graine et les mêmes actions rejouent la même partie. Chaque variante est une configuration, et le moteur ne contient aucun cas particulier par nom de variante. Chaque siège ne voit que ce qu'un joueur a le droit de savoir. La bible des règles des dix variantes est publiée avec lui sous licence CC BY-SA 4.0.",
          ],
        },
      ],
      links: [
        { label: "cercle32.app", href: "https://cercle32.app" },
        { label: "Jouer à la bêta", href: "https://cercle32.app/jouer/" },
        { label: "Code de belote-engine", href: "https://github.com/bKNNNNN/belote-engine" },
      ],
    },
    en: {
      title: "Cercle 32",
      summary:
        "An online belote game with ten variants and their real rules, a table you share with a link, and a solo story that teaches you to play.",
      metaDescription:
        "Cercle 32: a multiplayer belote game with ten variants and a narrative campaign, built by Pierrick Deniel with a team of AI agents. Open-source rules engine.",
      status: "Free public beta",
      imageAlt: "Cercle 32 game home screen: three illustrated panels, “Jouer à la belote”, “Mauvaise Donne” and “Nuit blanche”.",
      homeBlurb:
        "Ten belote variants with their real rules, a table you share with a link, bots that hold empty seats and a solo story set in 1923 Paris. Pierrick directs the game; a team of AI agents builds it. The rules engine is open source.",
      facts: [
        { label: "Variants", value: "10, from classique to stéphanoise" },
        { label: "Multiplayer", value: "One link, no account, no download" },
        { label: "Bots", value: "3 levels, replaceable mid-game" },
        { label: "Solo", value: "Mauvaise Donne, prologue and chapter 1 in beta" },
        { label: "Platforms", value: "Browser, installable app" },
        { label: "Open source", value: "MIT rules engine, CC BY-SA rules bible" },
      ],
      sections: [
        {
          title: "The problem",
          paragraphs: [
            "Belote is France's classic trick-taking card game, and every family plays its own version: contrée, coinche, à la vache, two-player, stéphanoise. Existing apps offer one or two, often with simplified rules. Cercle 32 puts them all at the same table with their real rules: the cut, the deal in threes then twos, the turned-up card, the obligation to follow suit.",
          ],
        },
        {
          title: "What runs",
          paragraphs: [
            "The Salon: create a table, pick the variant, send the link. Friends sit down without an account. A bot holds an empty seat at the chosen level, and a late friend takes over its seat mid-game.",
            "Mauvaise Donne: a solo story set in Paris and Saint-Étienne during the 1923-24 season. Two players, Agnès and Salomé, and each chapter teaches one variant. Dialogue is voiced in French.",
            "Technically it is a TypeScript monorepo. The same rules engine runs on the game server (Colyseus), inside the bots and in the browser for offline solo play. The table is rendered with Three.js. The game installs as an app from cercle32.app, without an app store.",
          ],
        },
        {
          title: "How it was built",
          paragraphs: [
            "Pierrick acts as product director. He settled disputed rules from the sources (FFB 2015 scoring, the published stéphanoise rules), approved the art direction and business model, and plays every build on a phone. AI agents write the code, tests, rules, visuals and voices, coordinated by a lead agent.",
            "When the project was taken back, the integration branch no longer compiled. Work restarted from the stable branch: new engine, new bots, a rebuilt table, and 145,000 lines of old code deleted. After one game Pierrick found the bots illogical. They are now measured by a blunder audit and read their partner's bids and discards.",
            "Every screen is checked in landscape across a device matrix, from the iPhone SE to a 3440 px ultrawide.",
          ],
        },
        {
          title: "What is open source",
          paragraphs: [
            "belote-engine is public under the MIT licence. It is a pure, deterministic rules engine: no I/O, no clock, randomness lives in the state. The same seed and the same moves replay the same game. Each variant is a configuration, and the engine never branches on a variant name. Each seat sees only what a player there may know. The rules bible for the ten variants ships with it under CC BY-SA 4.0.",
          ],
        },
      ],
      links: [
        { label: "cercle32.app", href: "https://cercle32.app" },
        { label: "Play the beta", href: "https://cercle32.app/jouer/" },
        { label: "belote-engine code", href: "https://github.com/bKNNNNN/belote-engine" },
      ],
    },
  },
};

export const projects: readonly Project[] = [bredouille, cercle32];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
