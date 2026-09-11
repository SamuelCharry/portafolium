/* Edita aquí tus enlaces. Usa null cuando todavía no exista un destino real.
   No necesitas npm, un servidor ni un framework para editar el contenido. */
window.PORTFOLIO = {
  email: "s.charryt27@gmail.com",
  github: "https://github.com/SamuelCharry",
  linkedin: "https://linkedin.com/in/SamuelCharry",
  projects: {
    enad: {
      title: "ENAd Móvil",
      category: "MOBILE DEVELOPMENT · 2025–PRESENT",
      summary:
        "An offline-first app to help rural teachers assess learning, even without an internet connection.",
      paragraphs: [
        "Built in a six-person team with the Aprender a Quererte foundation. The app digitizes ENAd, a methodology for assessing students by learning level and forming dynamic learning groups.",
        "I led the design, interviewed educators and foundation staff, and helped the team move from 42 ideas to a focused proposal. The architecture combines local SQLite storage with Firebase synchronization.",
        "We defined ten business questions to evaluate teacher adoption and learning outcomes, and prototyped the experience in Figma.",
      ],
      stack: ["Flutter", "Dart", "SQLite", "Firebase", "Figma"],
      repository: null, // Pega aquí el enlace exacto del repositorio.
      demo: null,
    },
    kevin: {
      title: "Kevin's Joyeros",
      category: "SELECTED PROJECT · CASE STUDY IN PROGRESS",
      summary:
        "Another project I want to share. I'm putting its story together.",
      paragraphs: [
        "More about the problem, the process, and my contribution will be available here soon.",
      ],
      stack: [], // Completar con las tecnologías reales del proyecto.
      repository: null,
      demo: null,
    },
    data: {
      title: "Words into data",
      category: "MACHINE LEARNING · KAGGLE · 2026",
      summary:
        "Classifying historical Spanish-language documents into 39 categories.",
      paragraphs: [
        "Our solution placed fifth out of more than 30 teams on the private leaderboard, with a final competition score of 0.34343.",
        "I designed an ensemble combining XLM-RoBERTa Large, EuroBERT-210m, and an SVM trained on character n-gram TF-IDF features. One useful surprise: the original text performed better than the cleaned version.",
        "The project involved cross-validation, hyperparameter tuning, class imbalance, and making the most of limited GPU time.",
      ],
      stack: ["Python", "PyTorch", "Hugging Face", "scikit-learn", "Kaggle"],
      repository: null,
      demo: null,
    },
    thesis: {
      title: "Learning at the edge",
      category: "UNDERGRADUATE THESIS · 2026–PRESENT",
      summary: "How far can federated learning go on a microcontroller?",
      paragraphs: [
        "I'm exploring federated learning on resource-constrained ESP32 and STM32 devices, under the supervision of Professor Lozano.",
        "The study compares centralized training, FedAvg, FedAvg with gradient quantization, and FedProx using Flower and TensorFlow Lite Micro.",
        "The goal is to measure memory, energy, bandwidth, latency, and accuracy on real hardware, and understand the trade-offs.",
      ],
      stack: [
        "Python",
        "C/C++",
        "ESP32",
        "STM32",
        "Flower",
        "TensorFlow Lite Micro",
      ],
      repository: null,
      demo: null,
    },
  },
};
