import type { Dictionary } from "./ar";

// =========================================================
// English dictionary
// Typed as Dictionary — a missing or misspelled key fails the build.
// =========================================================

export const en: Dictionary = {
  meta: {
    title: "Physiotherapy & Rehabilitation — Dr. Atef Mamdouh",
    description:
      "Physiotherapy and rehabilitation with Dr. Atef Mamdouh: back, neck and joint pain, sports injuries, muscle strengthening and post-operative recovery.",
    keywords: [
      "physiotherapy",
      "physical therapy",
      "rehabilitation",
      "back pain treatment",
      "neck pain treatment",
      "joint pain",
      "sports injury rehabilitation",
      "muscle strengthening",
      "post-operative rehabilitation",
      "Mansoura",
    ],
  },

  nav: {
    brand: "Dr. Atef Sabra",
    brandSubtitle: "Physiotherapy",
    home: "Home",
    about: "About",
    services: "Services",
    articles: "Articles",
    contact: "Contact",
    skipToContent: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle dark mode",
    toLightMode: "Switch to light mode",
    toDarkMode: "Switch to dark mode",
    switchLanguage: "Switch language",
    languageShort: "EN",
  },

  hero: {
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    goToSlide: "Go to slide",
    pauseAutoplay: "Pause autoplay",
    playAutoplay: "Play autoplay",
    slides: [
      {
        smallTitle: "Welcome to",
        title: "Physiotherapy",
        description:
          "We help you restore movement, reduce pain and improve your quality of life through specialised treatment programmes.",
        button: "Book an appointment",
      },
      {
        smallTitle: "Our services",
        title: "Rehabilitation",
        description:
          "Carefully designed rehabilitation programmes that help you return to your normal activity safely and effectively.",
        button: "Explore our services",
      },
      {
        smallTitle: "Specialised care",
        title: "Injury treatment",
        description:
          "Specialised care for sports, muscle and joint injuries using the latest physiotherapy methods.",
        button: "Learn more",
      },
      {
        smallTitle: "Your health comes first",
        title: "A better life",
        description:
          "We walk with you step by step towards the best possible level of movement, activity and health.",
        button: "Book a consultation",
      },
    ],
  },

  about: {
    sectionLabel: "About the clinic and the doctor",
    doctorLabel: "Treating physician",
    doctorHeading: "Meet the doctor",
    bookWithDoctor: "Book an appointment with the doctor",
    doctor: {
      name: "Dr. Atef Sabra",
      title: "Physiotherapy & Rehabilitation Specialist",
      imageAlt:
        "The treating physician examining a patient's neck and shoulder",
      bio: [
        "A physiotherapy and rehabilitation specialist treating spine, neck and joint pain, sports injuries, and post-surgical and post-fracture rehabilitation, alongside programmes for muscle strengthening, flexibility and balance. The work is built on careful movement assessment, manual therapy and progressive therapeutic exercise, supported by modern equipment where needed, to relieve pain and restore natural movement safely.",
        "Every patient starts with a full assessment session that looks for the cause of the pain, not only its symptoms. From there comes a clear treatment plan with defined goals and stages, reassessed regularly so the exercises match the level of progress. Each patient also learns simple home exercises and posture advice for work and daily life, so the results last beyond the final session.",
      ],
      credentials: [
        "BSc in Physiotherapy — [Mansoura]",
        "[6] years of experience in physiotherapy and rehabilitation",
        "Member of the Doctors Syndicate",
      ],
    },
    welcome: {
      heading: "Welcome",
      lead: "We offer comprehensive physiotherapy and rehabilitation services,",
      body: "through specialised treatment programmes that help restore movement, improve physical capacity and reduce pain, tailored to the needs of each case. We provide dedicated sessions for back, neck and joint pain, sports injury rehabilitation, muscle strengthening, and improving flexibility and balance, as well as rehabilitation programmes after surgery and injury. Our team is careful to build a treatment plan suited to every patient, with continuous follow-up of progress to reach the best possible outcome.",
      cta: "Explore our services",
      rotatingImageAlt: "Physiotherapy and rehabilitation",
      mainImageAlt: "Physiotherapy sessions",
    },
  },

  services: {
    badge: "Our services",
    titleBefore: "Physiotherapy",
    titleHighlight: "and rehabilitation",
    titleAfter: "services",
    description:
      "We offer a complete range of physiotherapy and rehabilitation services through treatment programmes designed specifically around the needs of each case.",
    bookSession: "Book a session",
    items: [
      {
        title: "Back and neck pain treatment",
        description:
          "Specialised treatment programmes that help reduce back and neck pain and improve movement and flexibility.",
        alt: "A physiotherapist helping a patient with neck and shoulder stretches",
      },
      {
        title: "Sports injury rehabilitation",
        description:
          "Specialised rehabilitation plans for athletes that support recovery from injury and a safe return to activity.",
        alt: "A physiotherapist rehabilitating an injured athlete's knee on a treatment bed",
      },
      {
        title: "Muscle strengthening",
        description:
          "Tailored exercises and treatment programmes to improve muscle strength and the ability to perform daily activities.",
        alt: "A physiotherapist helping a patient with shoulder and arm strengthening exercises",
      },
      {
        title: "Joint pain treatment",
        description:
          "Sessions and treatment programmes that help reduce joint pain and improve range of motion and function.",
        alt: "A physiotherapist examining a patient's knee joint",
      },
      {
        title: "Balance and mobility improvement",
        description:
          "Therapeutic exercises to improve balance and coordination and reduce difficulty moving during daily activities.",
        alt: "A physiotherapist helping a child with balance and walking exercises",
      },
      {
        title: "Post-operative rehabilitation",
        description:
          "Gradual rehabilitation programmes after surgery and injury to help restore movement and strength safely.",
        alt: "A doctor following up a patient's rehabilitation after knee surgery",
      },
    ],
  },

  articles: {
    badge: "Articles",
    titleBefore: "Physiotherapy",
    titleHighlight: "articles",
    description:
      "Explore a collection of useful articles and tips on physiotherapy, rehabilitation, sports injuries, and muscle and joint health.",
    readMore: "Read article",
    close: "Close article",
    previousArticle: "Previous article",
    nextArticle: "Next article",
    previous: "Previous",
    next: "Next",
    readingTimeOne: "1 min read",
    readingTimeTwo: "2 min read",
    readingTimeMany: "{minutes} min read",
    counter: "Article {current} of {total}",
    disclaimerLabel: "Note:",
    disclaimerText:
      "The information in this article is for general awareness and is not a substitute for consulting a doctor or physiotherapist to assess your condition properly.",
    previousArrow: "‹",
    nextArrow: "›",
    items: [
      {
        title: "Why physiotherapy matters for back pain",
        description:
          "Learn how physiotherapy reduces back pain, improves movement and flexibility, and restores daily activity.",
        category: "Back pain",
        date: "15 August 2026",
        content: [
          "Back pain is one of the most common problems affecting movement and daily activity.",
          "Physiotherapy helps reduce pain and improve the flexibility of muscles and joints through a set of therapeutic exercises suited to each person's condition.",
          "The treatment programme also strengthens the muscles supporting the back and improves how you move, sit and stand, which helps reduce the likelihood of the pain returning.",
          "It is always best to get a specialist assessment before starting any treatment programme.",
        ],
      },
      {
        title: "Physiotherapy after sports injuries",
        description:
          "Proper rehabilitation after an injury helps restore strength and movement and return to sport safely.",
        category: "Sports injuries",
        date: "10 August 2026",
        content: [
          "After a sports injury the body needs an appropriate period to recover and regain movement and strength.",
          "At this stage physiotherapy helps reduce pain and swelling, improve range of motion, and strengthen the muscles gradually.",
          "The right exercises are chosen according to the type of injury, the person's condition, and the stage they have reached in recovery.",
          "The main goal is to return to sport safely and reduce the risk of the injury recurring.",
        ],
      },
      {
        title: "Exercises that help strengthen muscles",
        description:
          "A set of tips and exercises that help improve muscle strength and support everyday movement.",
        category: "Muscle strengthening",
        date: "5 August 2026",
        content: [
          "Strengthening the muscles improves your ability to move and to carry out daily activities.",
          "Resistance and functional exercises can be used to improve muscle strength, but the exercises must be chosen to suit each case.",
          "Exercising consistently and with correct technique helps achieve better results.",
          "If there is pain or an injury, it is best to consult a specialist before exercising.",
        ],
      },
      {
        title: "How to improve flexibility and balance",
        description:
          "Learn why flexibility and balance exercises matter and how they improve movement and reduce injury risk.",
        category: "Movement and balance",
        date: "1 August 2026",
        content: [
          "Flexibility and balance are important for maintaining good movement and performing daily activities with ease.",
          "Stretching, mobility and balance exercises improve control over the body and its movement.",
          "These exercises can be introduced into a daily routine gradually, taking health status and fitness level into account.",
        ],
      },
      {
        title: "Physiotherapy after surgery",
        description:
          "Post-operative rehabilitation helps restore movement and strength gradually according to the patient's condition.",
        category: "Rehabilitation",
        date: "28 July 2026",
        content: [
          "Physiotherapy after surgery is an important part of the recovery process.",
          "Rehabilitation helps restore movement and strength gradually and improves the ability to perform daily activities.",
          "The treatment programme is set according to the type of operation, the person's condition, and the guidance of the doctor or specialist.",
          "Following the instructions and the right exercises helps reach the best possible outcome.",
        ],
      },
      {
        title: "Ways to manage joint pain",
        description:
          "Important tips that help you manage joint pain and improve your ability to perform daily activities.",
        category: "Joint pain",
        date: "20 July 2026",
        content: [
          "Joint pain can affect movement and the ability to carry out daily activities.",
          "Physiotherapy helps improve movement, strengthen the muscles around the joint, and reduce the impact of the pain.",
          "Certain therapeutic exercises and adjustments to daily habits can also improve the ability to move.",
          "The cause of the pain must be identified first in order to build the right programme for the case.",
        ],
      },
    ],
  },

  contact: {
    badge: "Contact us",
    titleBefore: "We are here",
    titleHighlight: "to help you",
    description:
      "If you have a question or would like to know more about our services, send us a message and we will get back to you shortly.",
    infoHeading: "Contact information",
    infoDescription:
      "You can reach us directly through the options below, or send your message using the form.",
    phoneLabel: "Phone number",
    emailLabel: "Email address",
    followUs: "Or follow and reach us on",
    formHeading: "Send us a message",
    formDescription:
      "Fill in the details below and we will send your message to our email.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneFieldLabel: "Phone number",
    phonePlaceholder: "01xxxxxxxxx",
    emailFieldLabel: "Email address",
    optional: "(optional)",
    emailPlaceholder: "example@mail.com",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here...",
    charCount: "{count} characters",
    submit: "Send message",
    submitting: "Sending your message...",
    successMessage: "Your message was sent to our email successfully",
    requiredNoteBefore: "Fields marked with",
    requiredNoteAfter: "are required. Your details are used only to contact you.",
    validationError: "Name, phone number and message are required",
    genericError: "Something went wrong while sending. Please try again.",
    sendFailed: "Failed to send the message",
    apiBadRequest: "The request format is invalid",
    apiTooLong: "The message is too long — 5000 characters maximum",
    apiUnavailable:
      "We could not send your message right now. Please try again later or reach us on WhatsApp.",
  },

  footer: {
    brandHeading: "Physiotherapy",
    brandDescription:
      "We provide specialised physiotherapy and rehabilitation services through treatment programmes designed to help patients restore movement and improve their quality of life.",
    quickLinks: "Quick links",
    contactHeading: "Contact us",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    rights: "All rights reserved",
  },
};
