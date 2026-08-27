import type { Dictionary } from "./ar";

// =========================================================
// Spanish dictionary
// Typed as Dictionary — a missing or misspelled key fails the build.
// =========================================================

export const es: Dictionary = {
  meta: {
    title: "Fisioterapia y Rehabilitación — Dr. Atef Mamdouh",
    description:
      "Fisioterapia y rehabilitación con el Dr. Atef Mamdouh: dolor de espalda, cuello y articulaciones, lesiones deportivas, fortalecimiento muscular y recuperación postoperatoria.",
    keywords: [
      "fisioterapia",
      "terapia física",
      "rehabilitación",
      "tratamiento del dolor de espalda",
      "tratamiento del dolor de cuello",
      "dolor articular",
      "rehabilitación de lesiones deportivas",
      "fortalecimiento muscular",
      "rehabilitación postoperatoria",
      "Mansoura",
    ],
  },

  nav: {
    brand: "Dr. Atef Sabra",
    brandSubtitle: "Fisioterapia",
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    articles: "Artículos",
    contact: "Contacto",
    skipToContent: "Saltar al contenido principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar modo oscuro",
    toLightMode: "Cambiar a modo claro",
    toDarkMode: "Cambiar a modo oscuro",
    switchLanguage: "Cambiar idioma",
    languageShort: "ES",
  },

  hero: {
    previousSlide: "Diapositiva anterior",
    nextSlide: "Siguiente diapositiva",
    goToSlide: "Ir a la diapositiva",
    pauseAutoplay: "Pausar reproducción automática",
    playAutoplay: "Reproducir automáticamente",
    slides: [
      {
        smallTitle: "Bienvenido a",
        title: "Fisioterapia",
        description:
          "Te ayudamos a restaurar el movimiento, reducir el dolor y mejorar tu calidad de vida a través de programas de tratamiento especializados.",
        button: "Reservar una cita",
      },
      {
        smallTitle: "Nuestros servicios",
        title: "Rehabilitación",
        description:
          "Programas de rehabilitación cuidadosamente diseñados que te ayudan a regresar a tu actividad normal de forma segura y efectiva.",
        button: "Explorar nuestros servicios",
      },
      {
        smallTitle: "Atención especializada",
        title: "Tratamiento de lesiones",
        description:
          "Atención especializada para lesiones deportivas, musculares y articulares utilizando los últimos métodos de fisioterapia.",
        button: "Más información",
      },
      {
        smallTitle: "Tu salud es lo primero",
        title: "Una vida mejor",
        description:
          "Te acompañamos paso a paso hacia el mejor nivel posible de movimiento, actividad y salud.",
        button: "Reservar una consulta",
      },
    ],
  },

  about: {
    sectionLabel: "Acerca de la clínica y el médico",
    doctorLabel: "Médico tratante",
    doctorHeading: "Conoce al médico",
    bookWithDoctor: "Reservar una cita con el médico",
    doctor: {
      name: "Dr. Atef Sabra",
      title: "Especialista en Fisioterapia y Rehabilitación",
      imageAlt:
        "El médico tratante examinando el cuello y hombro del paciente",
      bio: [
        "Especialista en fisioterapia y rehabilitación que trata el dolor de columna, cuello y articulaciones, lesiones deportivas, y rehabilitación postquirúrgica y posfracturas, junto con programas de fortalecimiento muscular, flexibilidad y equilibrio. El trabajo se basa en una cuidadosa evaluación del movimiento, terapia manual y ejercicio terapéutico progresivo, apoyado por equipos modernos cuando sea necesario, para aliviar el dolor y restaurar el movimiento natural de forma segura.",
        "Cada paciente comienza con una sesión de evaluación completa que busca la causa del dolor, no solo sus síntomas. De ahí surge un plan de tratamiento claro con objetivos y etapas definidas, reevaluado regularmente para que los ejercicios coincidan con el nivel de progreso. Cada paciente también aprende ejercicios simples para hacer en casa y consejos de postura para el trabajo y la vida diaria, para que los resultados perduren más allá de la última sesión.",
      ],
      credentials: [
        "Licenciatura en Fisioterapia — [Mansoura]",
        "[6] años de experiencia en fisioterapia y rehabilitación",
        "Miembro del Colegio de Médicos",
      ],
    },
    welcome: {
      heading: "Bienvenido",
      lead: "Ofrecemos servicios integrales de fisioterapia y rehabilitación,",
      body: "a través de programas de tratamiento especializados que ayudan a restaurar el movimiento, mejorar la capacidad física y reducir el dolor, adaptados a las necesidades de cada caso. Proporcionamos sesiones dedicadas para dolor de espalda, cuello y articulaciones, rehabilitación de lesiones deportivas, fortalecimiento muscular, y mejora de flexibilidad y equilibrio, así como programas de rehabilitación después de cirugía y lesión. Nuestro equipo se dedica a construir un plan de tratamiento adecuado para cada paciente, con seguimiento continuo del progreso para alcanzar el mejor resultado posible.",
      cta: "Explorar nuestros servicios",
      rotatingImageAlt: "Fisioterapia y rehabilitación",
      mainImageAlt: "Sesiones de fisioterapia",
    },
  },

  services: {
    badge: "Nuestros servicios",
    titleBefore: "Fisioterapia",
    titleHighlight: "y rehabilitación",
    titleAfter: "servicios",
    description:
      "Ofrecemos una gama completa de servicios de fisioterapia y rehabilitación a través de programas de tratamiento diseñados específicamente según las necesidades de cada caso.",
    bookSession: "Reservar una sesión",
    items: [
      {
        title: "Tratamiento del dolor de espalda y cuello",
        description:
          "Programas de tratamiento especializados que ayudan a reducir el dolor de espalda y cuello y mejorar el movimiento y la flexibilidad.",
        alt: "Un fisioterapeuta ayudando a un paciente con ejercicios de estiramiento de cuello y hombros",
      },
      {
        title: "Rehabilitación de lesiones deportivas",
        description:
          "Planes de rehabilitación especializados para atletas que apoyan la recuperación de lesiones y un regreso seguro a la actividad.",
        alt: "Un fisioterapeuta rehabilitando la rodilla lesionada de un atleta en una camilla de tratamiento",
      },
      {
        title: "Fortalecimiento muscular",
        description:
          "Ejercicios personalizados y programas de tratamiento para mejorar la fuerza muscular y la capacidad de realizar actividades diarias.",
        alt: "Un fisioterapeuta ayudando a un paciente con ejercicios de fortalecimiento de hombro y brazo",
      },
      {
        title: "Tratamiento del dolor articular",
        description:
          "Sesiones y programas de tratamiento que ayudan a reducir el dolor articular y mejorar el rango de movimiento y la función.",
        alt: "Un fisioterapeuta examinando la articulación de la rodilla del paciente",
      },
      {
        title: "Mejora del equilibrio y la movilidad",
        description:
          "Ejercicios terapéuticos para mejorar el equilibrio y la coordinación y reducir la dificultad de movimiento durante las actividades diarias.",
        alt: "Un fisioterapeuta ayudando a un niño con ejercicios de equilibrio y caminar",
      },
      {
        title: "Rehabilitación postoperatoria",
        description:
          "Programas de rehabilitación gradual después de cirugía y lesión para ayudar a restaurar el movimiento y la fuerza de forma segura.",
        alt: "Un médico haciendo seguimiento de la rehabilitación del paciente después de cirugía de rodilla",
      },
    ],
  },

  articles: {
    badge: "Artículos",
    titleBefore: "Artículos de",
    titleHighlight: "fisioterapia",
    description:
      "Explora una colección de artículos útiles y consejos sobre fisioterapia, rehabilitación, lesiones deportivas y salud muscular y articular.",
    readMore: "Leer artículo",
    close: "Cerrar artículo",
    previousArticle: "Artículo anterior",
    nextArticle: "Siguiente artículo",
    previous: "Anterior",
    next: "Siguiente",
    readingTimeOne: "1 min de lectura",
    readingTimeTwo: "2 min de lectura",
    readingTimeMany: "{minutes} min de lectura",
    counter: "Artículo {current} de {total}",
    disclaimerLabel: "Nota:",
    disclaimerText:
      "La información en este artículo es para conciencia general y no es un sustituto de consultar a un médico o fisioterapeuta para evaluar adecuadamente tu condición.",
    previousArrow: "‹",
    nextArrow: "›",
    items: [
      {
        title: "Por qué la fisioterapia es importante para el dolor de espalda",
        description:
          "Aprende cómo la fisioterapia reduce el dolor de espalda, mejora el movimiento y la flexibilidad, y restaura la actividad diaria.",
        category: "Dolor de espalda",
        date: "15 de Agosto de 2026",
        content: [
          "El dolor de espalda es uno de los problemas más comunes que afecta el movimiento y la actividad diaria.",
          "La fisioterapia ayuda a reducir el dolor y mejorar la flexibilidad de los músculos y articulaciones a través de un conjunto de ejercicios terapéuticos adaptados a la condición de cada persona.",
          "El programa de tratamiento también fortalece los músculos que apoyan la espalda y mejora cómo te mueves, te sientas y te paras, lo que ayuda a reducir la probabilidad de que el dolor regrese.",
          "Siempre es mejor obtener una evaluación de un especialista antes de comenzar cualquier programa de tratamiento.",
        ],
      },
      {
        title: "Fisioterapia después de lesiones deportivas",
        description:
          "La rehabilitación adecuada después de una lesión ayuda a restaurar la fuerza y el movimiento y regresar al deporte de forma segura.",
        category: "Lesiones deportivas",
        date: "10 de Agosto de 2026",
        content: [
          "Después de una lesión deportiva, el cuerpo necesita un período apropiado para recuperarse y recuperar el movimiento y la fuerza.",
          "En esta etapa, la fisioterapia ayuda a reducir el dolor y la hinchazón, mejorar el rango de movimiento y fortalecer los músculos gradualmente.",
          "Los ejercicios correctos se eligen según el tipo de lesión, la condición de la persona y la etapa que han alcanzado en la recuperación.",
          "El objetivo principal es regresar al deporte de forma segura y reducir el riesgo de que la lesión se repita.",
        ],
      },
      {
        title: "Ejercicios que ayudan a fortalecer los músculos",
        description:
          "Un conjunto de consejos y ejercicios que ayudan a mejorar la fuerza muscular y apoyan el movimiento cotidiano.",
        category: "Fortalecimiento muscular",
        date: "5 de Agosto de 2026",
        content: [
          "Fortalecer los músculos mejora tu capacidad de movimiento y la realización de actividades diarias.",
          "Los ejercicios de resistencia y funcionales se pueden usar para mejorar la fuerza muscular, pero los ejercicios deben ser elegidos para adaptarse a cada caso.",
          "El ejercicio consistente y con técnica correcta ayuda a lograr mejores resultados.",
          "Si hay dolor o una lesión, es mejor consultar a un especialista antes de hacer ejercicio.",
        ],
      },
      {
        title: "Cómo mejorar la flexibilidad y el equilibrio",
        description:
          "Aprende por qué los ejercicios de flexibilidad y equilibrio son importantes y cómo mejoran el movimiento y reducen el riesgo de lesiones.",
        category: "Movimiento y equilibrio",
        date: "1 de Agosto de 2026",
        content: [
          "La flexibilidad y el equilibrio son importantes para mantener un buen movimiento y realizar actividades diarias con facilidad.",
          "Los ejercicios de estiramiento, movilidad y equilibrio mejoran el control sobre el cuerpo y su movimiento.",
          "Estos ejercicios se pueden introducir gradualmente en una rutina diaria, teniendo en cuenta el estado de salud y el nivel de forma física.",
        ],
      },
      {
        title: "Fisioterapia después de la cirugía",
        description:
          "La rehabilitación postoperatoria ayuda a restaurar el movimiento y la fuerza gradualmente según la condición del paciente.",
        category: "Rehabilitación",
        date: "28 de Julio de 2026",
        content: [
          "La fisioterapia después de la cirugía es una parte importante del proceso de recuperación.",
          "La rehabilitación ayuda a restaurar el movimiento y la fuerza gradualmente y mejora la capacidad de realizar actividades diarias.",
          "El programa de tratamiento se establece según el tipo de operación, la condición de la persona y la orientación del médico o especialista.",
          "Seguir las instrucciones y los ejercicios correctos ayuda a alcanzar el mejor resultado posible.",
        ],
      },
      {
        title: "Formas de manejar el dolor articular",
        description:
          "Consejos importantes que te ayudan a manejar el dolor articular y mejorar tu capacidad para realizar actividades diarias.",
        category: "Dolor articular",
        date: "20 de Julio de 2026",
        content: [
          "El dolor articular puede afectar el movimiento y la capacidad de realizar actividades diarias.",
          "La fisioterapia ayuda a mejorar el movimiento, fortalecer los músculos alrededor de la articulación y reducir el impacto del dolor.",
          "Ciertos ejercicios terapéuticos y ajustes a los hábitos diarios también pueden mejorar la capacidad de movimiento.",
          "La causa del dolor debe identificarse primero para construir el programa correcto para el caso.",
        ],
      },
    ],
  },

  contact: {
    badge: "Contáctanos",
    titleBefore: "Estamos aquí",
    titleHighlight: "para ayudarte",
    description:
      "Si tienes una pregunta o deseas saber más sobre nuestros servicios, envíanos un mensaje y nos pondremos en contacto contigo en breve.",
    infoHeading: "Información de contacto",
    infoDescription:
      "Puedes comunicarte con nosotros directamente a través de las opciones a continuación, o envía tu mensaje usando el formulario.",
    phoneLabel: "Número de teléfono",
    emailLabel: "Dirección de correo electrónico",
    followUs: "O síguenos y contáctanos en",
    formHeading: "Envíanos un mensaje",
    formDescription:
      "Completa los detalles a continuación y enviaremos tu mensaje a nuestro correo.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    phoneFieldLabel: "Número de teléfono",
    phonePlaceholder: "01xxxxxxxxx",
    emailFieldLabel: "Dirección de correo electrónico",
    optional: "(opcional)",
    emailPlaceholder: "ejemplo@correo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    charCount: "{count} caracteres",
    submit: "Enviar mensaje",
    submitting: "Enviando tu mensaje...",
    successMessage: "Tu mensaje fue enviado a nuestro correo exitosamente",
    requiredNoteBefore: "Los campos marcados con",
    requiredNoteAfter: "son obligatorios. Tus datos se utilizan solo para comunicarte.",
    validationError: "El nombre, número de teléfono y mensaje son obligatorios",
    genericError: "Algo salió mal al enviar. Por favor, intenta de nuevo.",
    sendFailed: "No se pudo enviar el mensaje",
    apiBadRequest: "El formato de la solicitud no es válido",
    apiTooLong: "El mensaje es demasiado largo — máximo 5000 caracteres",
    apiUnavailable:
      "No pudimos enviar tu mensaje en este momento. Por favor, intenta más tarde o comunícate con nosotros en WhatsApp.",
  },

  footer: {
    brandHeading: "Fisioterapia",
    brandDescription:
      "Proporcionamos servicios especializados de fisioterapia y rehabilitación a través de programas de tratamiento diseñados para ayudar a los pacientes a restaurar el movimiento y mejorar su calidad de vida.",
    quickLinks: "Enlaces rápidos",
    contactHeading: "Contáctanos",
    emailLabel: "Correo electrónico:",
    phoneLabel: "Teléfono:",
    rights: "Todos los derechos reservados",
  },
};
