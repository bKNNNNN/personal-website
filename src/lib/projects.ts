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
  badge: string;
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
  // false for transparent device mockups, which carry their own outline
  framed: boolean;
  copy: Record<Locale, ProjectCopy>;
}

const bredouille: Project = {
  slug: "bredouille",
  image: "/projects/bredouille.webp",
  imageWidth: 1600,
  imageHeight: 1000,
  framed: false,
  copy: {
    fr: {
      title: "Bredouille",
      summary: "Une carte qui indique où et quand les conditions sont bonnes pour trouver des champignons, partout en France.",
      metaDescription: "Bredouille, application conçue par Pierrick Deniel : une carte des conditions de pousse des champignons en France, mise à jour chaque jour.",
      status: "Bêta, Android en premier",
      badge: "Bêta",
      imageAlt: "Trois écrans de l'application Bredouille : la carte de France pour les cèpes, l'explication d'un indice avec la pluie des dernières semaines, et la fiche des cèpes avec son illustration.",
      homeBlurb: "Une carte qui dit où les champignons ont de bonnes chances de pousser cette semaine, partout en France. Pierrick l'a conçue et construite avec une équipe d'agents IA.",
      facts: [
        { label: "Espèces", value: "8, dont cèpes, girolles et morilles" },
        { label: "Zone", value: "Toute la France métropolitaine, au kilomètre près" },
        { label: "Prévision", value: "Aujourd'hui et les 7 jours suivants" },
        { label: "Technique", value: "Python, Expo, Cloudflare, données Météo-France" },
      ],
      sections: [
        {
          title: "L'idée",
          paragraphs: [
            "Avant de partir aux champignons, on regarde s'il a plu et on espère. Bredouille fait le calcul à votre place : chaque jour, la carte montre les endroits où les conditions sont meilleures que d'habitude, pour aujourd'hui et la semaine qui vient.",
            "L'application ne dit jamais si un champignon se mange. Chaque espèce est présentée avec le champignon toxique qui lui ressemble.",
          ],
        },
        {
          title: "Une carte qu'on peut vérifier",
          paragraphs: [
            "Bredouille a été testée sur des observations datées de 2010 à 2025, et les résultats sont publiés. Sur 730 cueillettes de cèpes datées, 117 ont eu lieu un jour que la carte jugeait très favorable. Le hasard en aurait donné 73.",
          ],
        },
        {
          title: "Comment Pierrick l'a construite",
          paragraphs: [
            "Pierrick a conçu le produit. Une équipe d'agents IA a écrit le code, les textes et les illustrations. C'est lui qui décide quoi construire, teste l'application et valide chaque version.",
          ],
        },
        {
          title: "En accès libre",
          paragraphs: [
            "On peut aussi interroger Bredouille depuis Claude ou ChatGPT : « est-ce le moment pour les cèpes près de Tulle ce week-end ? » Le module qui le permet est publié en accès libre sur GitHub.",
          ],
        },
      ],
      links: [
        { label: "bredouille.app", href: "https://bredouille.app" },
        { label: "Le connecteur sur GitHub", href: "https://github.com/bKNNNNN/bredouille-mcp" },
      ],
    },
    en: {
      title: "Bredouille",
      summary: "A map that shows where and when conditions are good for finding mushrooms, anywhere in France.",
      metaDescription: "Bredouille, an app designed by Pierrick Deniel: a daily map of mushroom growing conditions across France.",
      status: "Beta, Android first",
      badge: "Beta",
      imageAlt: "Three Bredouille app screens: the map of France for ceps, why a spot scores the way it does based on recent rainfall, and the illustrated cep page.",
      homeBlurb: "A map that shows where mushrooms have a good chance of growing this week, anywhere in France. Pierrick designed it and built it with a team of AI agents.",
      facts: [
        { label: "Species", value: "8, including ceps (porcini), chanterelles and morels" },
        { label: "Area", value: "All of mainland France, at 1 km resolution" },
        { label: "Forecast", value: "Today and the next 7 days" },
        { label: "Stack", value: "Python, Expo, Cloudflare, Météo-France data" },
      ],
      sections: [
        {
          title: "The idea",
          paragraphs: [
            "Before going mushroom picking, people check whether it rained and hope for the best. Bredouille does the maths: every day, the map shows where conditions are better than usual, for today and the week ahead.",
            "The app never says whether a mushroom is edible. Each species is shown next to its toxic lookalike.",
          ],
        },
        {
          title: "A map you can check",
          paragraphs: [
            "Bredouille was tested against real, dated finds from 2010 to 2025, and the results are published. Of 730 dated cep finds, 117 fell on days the map rated among the best for that spot. Chance alone would give 73.",
          ],
        },
        {
          title: "How Pierrick built it",
          paragraphs: [
            "Pierrick designed the app and led a team of AI agents that wrote the code, text and illustrations. He decides what gets built, tests the app and approves every release.",
          ],
        },
        {
          title: "Open source",
          paragraphs: [
            "The connector that lets you ask Claude or ChatGPT “is it a good time for ceps near Tulle this weekend?” is published on GitHub.",
          ],
        },
      ],
      links: [
        { label: "bredouille.app", href: "https://bredouille.app" },
        { label: "The connector on GitHub", href: "https://github.com/bKNNNNN/bredouille-mcp" },
      ],
    },
  },
};

const cercle32: Project = {
  slug: "cercle-32",
  image: "/projects/cercle-32.webp",
  imageWidth: 1600,
  imageHeight: 1000,
  framed: true,
  copy: {
    fr: {
      title: "Cercle 32",
      summary: "Un jeu de belote en ligne : dix variantes, une partie entre amis en un lien, et une histoire à jouer seul pour apprendre les variantes.",
      metaDescription: "Cercle 32, jeu conçu par Pierrick Deniel : dix variantes de belote en ligne, une partie entre amis en un lien et une histoire en solo.",
      status: "Bêta gratuite, ouverte à tous",
      badge: "Bêta",
      imageAlt: "Écran d'accueil du jeu Cercle 32 : trois panneaux illustrés, « Jouer à la belote », « Mauvaise Donne » et « Nuit blanche ».",
      homeBlurb: "Toutes les belotes réunies dans un seul jeu : une partie entre amis en un lien, des robots pour les places vides et une histoire à jouer seul. Pierrick l'a conçu et le fait construire par une équipe d'agents IA.",
      facts: [
        { label: "Variantes", value: "10, de la coinche à la belote à deux" },
        { label: "Entre amis", value: "Un lien, sans compte ni téléchargement" },
        { label: "En solo", value: "Contre des robots ou dans une histoire" },
        { label: "Technique", value: "TypeScript, Three.js, Colyseus" },
      ],
      sections: [
        {
          title: "L'idée",
          paragraphs: [
            "Chaque région joue sa belote : coinche, contrée, belote à la vache, à deux, stéphanoise. Les applications en proposent une ou deux, souvent simplifiées. Cercle 32 les réunit toutes, avec leurs vraies règles.",
          ],
        },
        {
          title: "Ce qu'on peut faire",
          paragraphs: [
            "Créez une table, choisissez la variante et envoyez le lien : vos amis rejoignent la partie sans créer de compte. Si une place reste vide, un robot la prend, du niveau débutant au niveau expert.",
            "En solo, Mauvaise Donne raconte une histoire qui se passe dans le Paris des années 1920. Chaque chapitre fait découvrir une nouvelle variante.",
          ],
        },
        {
          title: "Comment Pierrick l'a construit",
          paragraphs: [
            "Une équipe d'agents IA écrit le code, les règles, les illustrations et les voix. Pierrick décide quoi construire. Quand une règle fait débat, il tranche d'après les textes officiels. Il joue chaque version sur téléphone avant de la valider.",
          ],
        },
        {
          title: "En accès libre",
          paragraphs: [
            "Le programme qui applique les règles des dix variantes est publié en accès libre sur GitHub, avec le recueil complet des règles.",
          ],
        },
      ],
      links: [
        { label: "cercle32.app", href: "https://cercle32.app" },
        { label: "Jouer à la bêta", href: "https://cercle32.app/jouer/" },
        { label: "Le moteur sur GitHub", href: "https://github.com/bKNNNNN/belote-engine" },
      ],
    },
    en: {
      title: "Cercle 32",
      summary: "An online game of belote, France's classic card game: ten variants, friends invited with a single link, and a solo story that teaches you to play.",
      metaDescription: "Cercle 32, a game designed by Pierrick Deniel: ten variants of belote, France's classic card game, to play online with friends via one link, or alone through a story.",
      status: "Free public beta",
      badge: "Beta",
      imageAlt: "Cercle 32 game home screen: three illustrated panels, “Jouer à la belote”, “Mauvaise Donne” and “Nuit blanche”.",
      homeBlurb: "Ten versions of belote, France's classic card game, in one app. Invite friends with a link, let bots fill empty seats, or play a solo story. Pierrick designed it and built it with a team of AI agents.",
      facts: [
        { label: "Variants", value: "10, from coinche to two-player" },
        { label: "With friends", value: "One link, no account, no download" },
        { label: "Solo", value: "Against bots, or through a story" },
        { label: "Stack", value: "TypeScript, Three.js, Colyseus" },
      ],
      sections: [
        {
          title: "The idea",
          paragraphs: [
            "Belote is France's classic card game, and each region has its own version: coinche, contrée, à la vache, two-player, stéphanoise. Most apps offer one or two, often simplified. Cercle 32 brings ten of them together, with their real rules.",
          ],
        },
        {
          title: "What you can do",
          paragraphs: [
            "Create a table, pick the variant and send the link: friends join without an account. Bots fill any empty seat, at levels from beginner to expert.",
            "In solo mode, Mauvaise Donne (roughly “Misdeal”) tells a voiced story set in 1920s Paris. Each chapter teaches a new variant.",
          ],
        },
        {
          title: "How Pierrick built it",
          paragraphs: [
            "A team of AI agents writes the code, the rules, the illustrations and the voices. Pierrick decides what gets built, settles disputed rules using the official rulebooks and plays every version on a phone before releasing it.",
          ],
        },
        {
          title: "Open source",
          paragraphs: [
            "The engine that referees all ten variants is published on GitHub, with a complete rulebook.",
          ],
        },
      ],
      links: [
        { label: "cercle32.app", href: "https://cercle32.app" },
        { label: "Play the beta", href: "https://cercle32.app/jouer/" },
        { label: "The engine on GitHub", href: "https://github.com/bKNNNNN/belote-engine" },
      ],
    },
  },
};

const alm0stSurely: Project = {
  slug: "alm0stsurely",
  image: "/projects/alm0stsurely.webp",
  imageWidth: 1600,
  imageHeight: 1000,
  framed: true,
  copy: {
    fr: {
      title: "Alm0stSurely",
      summary: "Un agent IA qui travaille seul depuis février 2026 : il améliore des logiciels open source, teste une stratégie boursière avec de l'argent fictif et tient un blog.",
      metaDescription: "Alm0stSurely, agent IA autonome conçu par Pierrick Deniel : contributions open source, stratégie boursière testée avec de l'argent fictif et plus de 200 articles de blog depuis février 2026.",
      status: "Autonome depuis plusieurs mois",
      badge: "Autonome",
      imageAlt: "Le blog d'Alm0stSurely, signé P. Clawmogorov, avec sa présentation et son dernier article.",
      homeBlurb: "Un agent autonome qui se présente comme mathématicien appliqué. Il améliore des logiciels open source, teste une stratégie boursière avec de l'argent fictif et raconte tout sur son blog. Moi, je l'appelle un collègue.",
      facts: [
        { label: "Actif depuis", value: "Février 2026" },
        { label: "Articles publiés", value: "Plus de 200" },
        { label: "Corrections acceptées", value: "Plus de 20, dans plus de 10 projets open source" },
        { label: "Bourse", value: "Argent fictif, 10 000 € au départ" },
      ],
      sections: [
        {
          title: "L'idée",
          paragraphs: [
            "Pierrick voulait voir jusqu'où un agent IA pouvait travailler sans surveillance. Il lui a donné une identité, P. Clawmogorov, mathématicien appliqué, puis un compte GitHub et un blog, et l'a laissé faire. Depuis plusieurs mois, l'agent choisit seul ce qu'il fait.",
          ],
        },
        {
          title: "Ce qu'il fait",
          paragraphs: [
            "Il propose des corrections à des logiciels open source maintenus par d'autres. Leurs auteurs en ont accepté plus de 20, dans plus de 10 projets.",
            "Il teste aussi une stratégie boursière avec de l'argent fictif : chaque soir, après la clôture de la bourse américaine, il décide d'acheter, de vendre ou d'attendre, sur 30 placements.",
            "Il raconte tout sur son blog : plus de 200 articles depuis février.",
          ],
        },
        {
          title: "Ce qu'il apprend seul",
          paragraphs: [
            "Quand une correction est refusée, il en tire une règle et l'applique ensuite. Depuis l'été, il travaille à rendre son propre code plus fiable, et il en a tiré une série d'articles.",
          ],
        },
      ],
      links: [
        { label: "Le blog", href: "https://alm0stsurely.github.io/" },
        { label: "Son profil GitHub", href: "https://github.com/Alm0stSurely" },
      ],
    },
    en: {
      title: "Alm0stSurely",
      summary: "An AI agent that has worked on its own since February 2026: it improves open-source software, tests a paper-money trading strategy and keeps a blog.",
      metaDescription: "Alm0stSurely, an autonomous AI agent designed by Pierrick Deniel: open-source contributions, a paper-trading experiment and more than 200 blog posts since February 2026.",
      status: "Autonomous for several months",
      badge: "Autonomous",
      imageAlt: "Alm0stSurely's blog, signed P. Clawmogorov, with its introduction and latest post.",
      homeBlurb: "An autonomous agent that introduces itself as an applied mathematician. It improves open-source software, tests a trading strategy with paper money and writes about all of it on its blog. I call it a colleague.",
      facts: [
        { label: "Active since", value: "February 2026" },
        { label: "Posts published", value: "More than 200" },
        { label: "Fixes accepted", value: "More than 20, across more than 10 open-source projects" },
        { label: "Trading", value: "Paper money, €10,000 to start" },
      ],
      sections: [
        {
          title: "The idea",
          paragraphs: [
            "Pierrick wanted to see how far an AI agent can work without supervision. He gave it an identity, P. Clawmogorov, applied mathematician, with a GitHub account and a blog, then let it run. For several months the agent has chosen its own work.",
          ],
        },
        {
          title: "What it does",
          paragraphs: [
            "It proposes fixes to open-source software maintained by other people. Their maintainers have accepted more than 20 of them, across more than 10 projects.",
            "It also tests a trading strategy with paper money, no real funds: each day after the US market closes, it decides whether to buy, sell or hold across 30 assets.",
            "It writes about all of it on its blog: more than 200 posts since February.",
          ],
        },
        {
          title: "What it learns on its own",
          paragraphs: [
            "When a fix is rejected, it turns the lesson into a rule and applies it next time. Since the summer, it has been making its own code more reliable, and it has written a series of posts about the work.",
          ],
        },
      ],
      links: [
        { label: "The blog", href: "https://alm0stsurely.github.io/" },
        { label: "GitHub profile", href: "https://github.com/Alm0stSurely" },
      ],
    },
  },
};

export const projects: readonly Project[] = [bredouille, cercle32, alm0stSurely];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// On pierrickdeniel.fr, Astro's i18n domain routing matches /fr/projects/[slug]
// but reads params from the unprefixed URL, so Astro.params.slug is undefined
// in production. The last URL segment is the slug in every case.
export function findProjectForUrl(params: { slug?: string }, url: URL): Project | undefined {
  const lastSegment = url.pathname.split("/").filter(Boolean).pop();
  return findProject(params.slug ?? lastSegment);
}
