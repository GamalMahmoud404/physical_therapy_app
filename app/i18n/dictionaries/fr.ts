import type { Dictionary } from "./ar";

// =========================================================
// French dictionary
// Typed as Dictionary — a missing or misspelled key fails the build.
// =========================================================

export const fr: Dictionary = {
  meta: {
    title: "Physiothérapie & Réadaptation — Dr. Atef Mamdouh",
    description:
      "Physiothérapie et réadaptation avec le Dr. Atef Mamdouh : douleurs au dos, au cou et aux articulations, blessures sportives, renforcement musculaire et récupération post-opératoire.",
    keywords: [
      "physiothérapie",
      "thérapie physique",
      "réadaptation",
      "traitement de la douleur au dos",
      "traitement de la douleur au cou",
      "douleur articulaire",
      "réadaptation des blessures sportives",
      "renforcement musculaire",
      "réadaptation post-opératoire",
      "Mansoura",
    ],
  },

  nav: {
    brand: "Dr. Atef Sabra",
    brandSubtitle: "Physiothérapie",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    articles: "Articles",
    contact: "Contact",
    skipToContent: "Aller au contenu principal",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Activer/désactiver le mode sombre",
    toLightMode: "Passer au mode clair",
    toDarkMode: "Passer au mode sombre",
    switchLanguage: "Changer la langue",
    languageShort: "FR",
  },

  hero: {
    previousSlide: "Diapositive précédente",
    nextSlide: "Diapositive suivante",
    goToSlide: "Aller à la diapositive",
    pauseAutoplay: "Pause de la lecture automatique",
    playAutoplay: "Lecture automatique",
    slides: [
      {
        smallTitle: "Bienvenue à",
        title: "La physiothérapie",
        description:
          "Nous vous aidons à restaurer le mouvement, réduire la douleur et améliorer votre qualité de vie par le biais de programmes de traitement spécialisés.",
        button: "Prendre rendez-vous",
      },
      {
        smallTitle: "Nos services",
        title: "Réadaptation",
        description:
          "Des programmes de réadaptation soigneusement conçus qui vous aident à reprendre vos activités normales en toute sécurité et efficacité.",
        button: "Explorer nos services",
      },
      {
        smallTitle: "Soins spécialisés",
        title: "Traitement des blessures",
        description:
          "Soins spécialisés pour les blessures sportives, musculaires et articulaires utilisant les dernières méthodes de physiothérapie.",
        button: "En savoir plus",
      },
      {
        smallTitle: "Votre santé d'abord",
        title: "Une meilleure vie",
        description:
          "Nous vous accompagnons pas à pas vers le meilleur niveau possible de mouvement, d'activité et de santé.",
        button: "Prendre un rendez-vous",
      },
    ],
  },

  about: {
    sectionLabel: "À propos de la clinique et du médecin",
    doctorLabel: "Médecin traitant",
    doctorHeading: "Rencontrez le médecin",
    bookWithDoctor: "Prendre rendez-vous avec le médecin",
    doctor: {
      name: "Dr. Atef Sabra",
      title: "Spécialiste en physiothérapie et réadaptation",
      imageAlt:
        "Le médecin traitant examinant le cou et l'épaule d'un patient",
      bio: [
        "Un spécialiste en physiothérapie et réadaptation traitant la douleur de la colonne vertébrale, du cou et des articulations, les blessures sportives, et la réadaptation post-opératoire et post-fracture, aux côtés de programmes de renforcement musculaire, flexibilité et équilibre. Le travail repose sur une évaluation attentive du mouvement, la thérapie manuelle et l'exercice thérapeutique progressif, soutenus par des équipements modernes si nécessaire, pour soulager la douleur et restaurer le mouvement naturel en toute sécurité.",
        "Chaque patient commence par une séance d'évaluation complète qui recherche la cause de la douleur, pas seulement ses symptômes. Il en découle un plan de traitement clair avec des objectifs et des étapes définis, réévalué régulièrement pour que les exercices correspondent au niveau de progression. Chaque patient apprend également des exercices simples à domicile et des conseils de posture pour le travail et la vie quotidienne, afin que les résultats durent au-delà de la dernière séance.",
      ],
      credentials: [
        "Licence en physiothérapie — [Mansoura]",
        "[6] ans d'expérience en physiothérapie et réadaptation",
        "Membre du Syndicat des médecins",
      ],
    },
    welcome: {
      heading: "Bienvenue",
      lead: "Nous offrons des services complets de physiothérapie et de réadaptation,",
      body: "par le biais de programmes de traitement spécialisés qui aident à restaurer le mouvement, améliorer la capacité physique et réduire la douleur, adaptés aux besoins de chaque cas. Nous fournissons des séances dédiées pour la douleur au dos, au cou et aux articulations, la réadaptation des blessures sportives, le renforcement musculaire, et l'amélioration de la flexibilité et de l'équilibre, ainsi que des programmes de réadaptation après la chirurgie et les blessures. Notre équipe veille à construire un plan de traitement adapté à chaque patient, avec un suivi continu des progrès pour atteindre le meilleur résultat possible.",
      cta: "Explorer nos services",
      rotatingImageAlt: "Physiothérapie et réadaptation",
      mainImageAlt: "Séances de physiothérapie",
    },
  },

  services: {
    badge: "Nos services",
    titleBefore: "Services de physiothérapie",
    titleHighlight: "et de réadaptation",
    titleAfter: "",
    description:
      "Nous offrons une gamme complète de services de physiothérapie et de réadaptation par le biais de programmes de traitement conçus spécifiquement autour des besoins de chaque cas.",
    bookSession: "Réserver une séance",
    items: [
      {
        title: "Traitement de la douleur au dos et au cou",
        description:
          "Des programmes de traitement spécialisés qui aident à réduire la douleur au dos et au cou et à améliorer le mouvement et la flexibilité.",
        alt: "Un physiothérapeute aidant un patient avec des étirements du cou et de l'épaule",
      },
      {
        title: "Réadaptation des blessures sportives",
        description:
          "Des plans de réadaptation spécialisés pour les athlètes qui soutiennent la récupération des blessures et un retour sûr à l'activité.",
        alt: "Un physiothérapeute réadaptant le genou blessé d'un athlète sur un lit de traitement",
      },
      {
        title: "Renforcement musculaire",
        description:
          "Des exercices et des programmes de traitement personnalisés pour améliorer la force musculaire et la capacité à accomplir les activités quotidiennes.",
        alt: "Un physiothérapeute aidant un patient avec des exercices de renforcement de l'épaule et du bras",
      },
      {
        title: "Traitement de la douleur articulaire",
        description:
          "Des séances et des programmes de traitement qui aident à réduire la douleur articulaire et à améliorer l'amplitude des mouvements et la fonction.",
        alt: "Un physiothérapeute examinant l'articulation du genou d'un patient",
      },
      {
        title: "Amélioration de l'équilibre et de la mobilité",
        description:
          "Des exercices thérapeutiques pour améliorer l'équilibre et la coordination et réduire les difficultés à se déplacer durant les activités quotidiennes.",
        alt: "Un physiothérapeute aidant un enfant avec des exercices d'équilibre et de marche",
      },
      {
        title: "Réadaptation post-opératoire",
        description:
          "Des programmes de réadaptation progressive après la chirurgie et les blessures pour aider à restaurer le mouvement et la force en toute sécurité.",
        alt: "Un médecin suivant la réadaptation d'un patient après une chirurgie du genou",
      },
    ],
  },

  articles: {
    badge: "Articles",
    titleBefore: "Articles de",
    titleHighlight: "physiothérapie",
    description:
      "Explorez une collection d'articles utiles et de conseils sur la physiothérapie, la réadaptation, les blessures sportives, et la santé musculaire et articulaire.",
    readMore: "Lire l'article",
    close: "Fermer l'article",
    previousArticle: "Article précédent",
    nextArticle: "Article suivant",
    previous: "Précédent",
    next: "Suivant",
    readingTimeOne: "1 min de lecture",
    readingTimeTwo: "2 min de lecture",
    readingTimeMany: "{minutes} min de lecture",
    counter: "Article {current} sur {total}",
    disclaimerLabel: "Remarque :",
    disclaimerText:
      "Les informations contenues dans cet article sont à titre informatif général et ne remplacent pas une consultation auprès d'un médecin ou d'un physiothérapeute pour évaluer correctement votre situation.",
    previousArrow: "‹",
    nextArrow: "›",
    items: [
      {
        title: "Pourquoi la physiothérapie est importante pour la douleur au dos",
        description:
          "Découvrez comment la physiothérapie réduit la douleur au dos, améliore le mouvement et la flexibilité, et rétablit l'activité quotidienne.",
        category: "Douleur au dos",
        date: "15 août 2026",
        content: [
          "La douleur au dos est l'un des problèmes les plus courants affectant le mouvement et l'activité quotidienne.",
          "La physiothérapie aide à réduire la douleur et à améliorer la flexibilité des muscles et des articulations par le biais d'une série d'exercices thérapeutiques adaptés à la condition de chaque personne.",
          "Le programme de traitement renforce également les muscles soutenant le dos et améliore la manière dont vous bougez, vous asseyez et vous tenez debout, ce qui aide à réduire le risque que la douleur revienne.",
          "Il est toujours préférable d'obtenir une évaluation spécialisée avant de commencer un programme de traitement.",
        ],
      },
      {
        title: "Physiothérapie après les blessures sportives",
        description:
          "Une réadaptation appropriée après une blessure aide à restaurer la force et le mouvement et à revenir au sport en toute sécurité.",
        category: "Blessures sportives",
        date: "10 août 2026",
        content: [
          "Après une blessure sportive, le corps a besoin d'une période appropriée pour se rétablir et retrouver le mouvement et la force.",
          "À ce stade, la physiothérapie aide à réduire la douleur et l'enflure, améliorer l'amplitude des mouvements, et renforcer les muscles progressivement.",
          "Les bons exercices sont choisis en fonction du type de blessure, de la condition de la personne, et du stade atteint dans la récupération.",
          "L'objectif principal est de revenir au sport en toute sécurité et de réduire le risque que la blessure se reproduise.",
        ],
      },
      {
        title: "Exercices qui aident à renforcer les muscles",
        description:
          "Un ensemble de conseils et d'exercices qui aident à améliorer la force musculaire et soutiennent le mouvement quotidien.",
        category: "Renforcement musculaire",
        date: "5 août 2026",
        content: [
          "Le renforcement des muscles améliore votre capacité à vous déplacer et à accomplir les activités quotidiennes.",
          "Les exercices de résistance et fonctionnels peuvent être utilisés pour améliorer la force musculaire, mais les exercices doivent être choisis pour convenir à chaque cas.",
          "L'exercice régulier et avec la bonne technique aide à atteindre de meilleurs résultats.",
          "S'il y a de la douleur ou une blessure, il est préférable de consulter un spécialiste avant de faire de l'exercice.",
        ],
      },
      {
        title: "Comment améliorer la flexibilité et l'équilibre",
        description:
          "Découvrez pourquoi les exercices de flexibilité et d'équilibre sont importants et comment ils améliorent le mouvement et réduisent le risque de blessure.",
        category: "Mouvement et équilibre",
        date: "1 août 2026",
        content: [
          "La flexibilité et l'équilibre sont importants pour maintenir un bon mouvement et accomplir les activités quotidiennes avec facilité.",
          "Les étirements, la mobilité et les exercices d'équilibre améliorent le contrôle sur le corps et son mouvement.",
          "Ces exercices peuvent être progressivement introduits dans une routine quotidienne, en tenant compte de l'état de santé et du niveau de forme physique.",
        ],
      },
      {
        title: "Physiothérapie après la chirurgie",
        description:
          "La réadaptation post-opératoire aide à restaurer le mouvement et la force progressivement selon la condition du patient.",
        category: "Réadaptation",
        date: "28 juillet 2026",
        content: [
          "La physiothérapie après la chirurgie est une partie importante du processus de récupération.",
          "La réadaptation aide à restaurer le mouvement et la force progressivement et améliore la capacité à accomplir les activités quotidiennes.",
          "Le programme de traitement est établi selon le type d'opération, la condition de la personne, et l'orientation du médecin ou du spécialiste.",
          "Suivre les instructions et les bons exercices aide à atteindre le meilleur résultat possible.",
        ],
      },
      {
        title: "Façons de gérer la douleur articulaire",
        description:
          "Conseils importants qui vous aident à gérer la douleur articulaire et à améliorer votre capacité à accomplir les activités quotidiennes.",
        category: "Douleur articulaire",
        date: "20 juillet 2026",
        content: [
          "La douleur articulaire peut affecter le mouvement et la capacité à accomplir les activités quotidiennes.",
          "La physiothérapie aide à améliorer le mouvement, renforcer les muscles autour de l'articulation, et réduire l'impact de la douleur.",
          "Certains exercices thérapeutiques et ajustements aux habitudes quotidiennes peuvent également améliorer la capacité à se déplacer.",
          "La cause de la douleur doit d'abord être identifiée afin de construire le bon programme pour le cas.",
        ],
      },
    ],
  },

  contact: {
    badge: "Nous contacter",
    titleBefore: "Nous sommes là",
    titleHighlight: "pour vous aider",
    description:
      "Si vous avez une question ou souhaitez en savoir plus sur nos services, envoyez-nous un message et nous vous répondrons rapidement.",
    infoHeading: "Informations de contact",
    infoDescription:
      "Vous pouvez nous contacter directement par les options ci-dessous, ou envoyer votre message en utilisant le formulaire.",
    phoneLabel: "Numéro de téléphone",
    emailLabel: "Adresse e-mail",
    followUs: "Ou suivez et contactez-nous sur",
    formHeading: "Envoyez-nous un message",
    formDescription:
      "Remplissez les détails ci-dessous et nous enverrons votre message à notre e-mail.",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    phoneFieldLabel: "Numéro de téléphone",
    phonePlaceholder: "01xxxxxxxxx",
    emailFieldLabel: "Adresse e-mail",
    optional: "(optionnel)",
    emailPlaceholder: "exemple@mail.com",
    messageLabel: "Message",
    messagePlaceholder: "Écrivez votre message ici...",
    charCount: "{count} caractères",
    submit: "Envoyer le message",
    submitting: "Envoi de votre message...",
    successMessage: "Votre message a été envoyé à notre e-mail avec succès",
    requiredNoteBefore: "Les champs marqués avec",
    requiredNoteAfter: "sont obligatoires. Vos coordonnées sont utilisées uniquement pour vous contacter.",
    validationError: "Le nom, le numéro de téléphone et le message sont obligatoires",
    genericError: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
    sendFailed: "Impossible d'envoyer le message",
    apiBadRequest: "Le format de la demande est invalide",
    apiTooLong: "Le message est trop long — 5000 caractères maximum",
    apiUnavailable:
      "Nous n'avons pas pu envoyer votre message en ce moment. Veuillez réessayer plus tard ou nous contacter sur WhatsApp.",
  },

  footer: {
    brandHeading: "Physiothérapie",
    brandDescription:
      "Nous fournissons des services de physiothérapie et de réadaptation spécialisés par le biais de programmes de traitement conçus pour aider les patients à restaurer le mouvement et améliorer leur qualité de vie.",
    quickLinks: "Liens rapides",
    contactHeading: "Nous contacter",
    emailLabel: "E-mail :",
    phoneLabel: "Téléphone :",
    rights: "Tous droits réservés",
  },
};
