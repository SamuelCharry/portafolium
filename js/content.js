/* Edita aquí tus enlaces y textos. Cada proyecto tiene versión en inglés (en) y
   español (es). Usa null cuando todavía no exista un destino real.
   No necesitas npm, un servidor ni un framework para editar el contenido. */
window.PORTFOLIO = {
  email: "s.charryt27@gmail.com",
  github: "https://github.com/SamuelCharry",
  linkedin: "https://www.linkedin.com/in/samuel-charry-1670152b4/",
  projects: {
    enad: {
      repository: null, // Pega aquí el enlace exacto del repositorio si lo tienes.
      demo: "https://samuelcharry.github.io/Enad-movil-final/",
      en: {
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
      },
      es: {
        title: "ENAd Móvil",
        category: "DESARROLLO MÓVIL · 2025–PRESENTE",
        summary:
          "Una app offline-first para ayudar a docentes rurales a evaluar el aprendizaje, incluso sin conexión a internet.",
        paragraphs: [
          "Construida en un equipo de seis personas junto a la fundación Aprender a Quererte. La app digitaliza ENAd, una metodología para evaluar a los estudiantes por nivel de aprendizaje y formar grupos dinámicos.",
          "Lideré el diseño, entrevisté a docentes y al equipo de la fundación, y ayudé a pasar de 42 ideas a una propuesta enfocada. La arquitectura combina almacenamiento local en SQLite con sincronización en Firebase.",
          "Definimos diez preguntas de negocio para evaluar la adopción docente y los resultados de aprendizaje, y prototipamos la experiencia en Figma.",
        ],
        stack: ["Flutter", "Dart", "SQLite", "Firebase", "Figma"],
      },
    },
    kevin: {
      repository: null,
      demo: null,
      en: {
        title: "Classified",
        category: "CLASSIFIED · CASE STUDY IN PROGRESS",
        summary:
          "Another project I want to share. I'm still putting its story together.",
        paragraphs: [
          "More about the problem, the process, and my contribution is coming soon.",
        ],
        stack: [], 
      },
      es: {
        title: "Clasificado",
        category: "CLASIFICADO · CASO DE ESTUDIO EN PROCESO",
        summary:
          "Otro proyecto que quiero compartir. Todavía estoy armando su historia.",
        paragraphs: [
          "Pronto habrá más sobre el problema, el proceso y mi aporte.",
        ],
        stack: [],
      },
    },
    data: {
      repository: null,
      demo: null,
      en: {
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
      },
      es: {
        title: "De palabras a datos",
        category: "MACHINE LEARNING · KAGGLE · 2026",
        summary:
          "Clasificación de documentos históricos en español en 39 categorías.",
        paragraphs: [
          "Nuestra solución quedó de quinta entre más de 30 equipos en el leaderboard privado, con un puntaje final de 0.34343.",
          "Diseñé un ensamble que combina XLM-RoBERTa Large, EuroBERT-210m y un SVM entrenado con características TF-IDF de n-gramas de caracteres. Una sorpresa útil: el texto original funcionó mejor que la versión limpia.",
          "El proyecto incluyó validación cruzada, ajuste de hiperparámetros, desbalance de clases y aprovechar al máximo un tiempo de GPU limitado.",
        ],
        stack: ["Python", "PyTorch", "Hugging Face", "scikit-learn", "Kaggle"],
      },
    },
    thesis: {
      repository: null,
      demo: null,
      en: {
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
      },
      es: {
        title: "Aprender en el borde",
        category: "TRABAJO DE GRADO · 2026–PRESENTE",
        summary:
          "¿Hasta dónde puede llegar el aprendizaje federado en un microcontrolador?",
        paragraphs: [
          "Exploro aprendizaje federado en dispositivos ESP32 y STM32 con recursos limitados, bajo la supervisión del profesor Lozano.",
          "El estudio compara entrenamiento centralizado, FedAvg, FedAvg con cuantización de gradientes y FedProx usando Flower y TensorFlow Lite Micro.",
          "El objetivo es medir memoria, energía, ancho de banda, latencia y precisión en hardware real, y entender los trade-offs.",
        ],
        stack: [
          "Python",
          "C/C++",
          "ESP32",
          "STM32",
          "Flower",
          "TensorFlow Lite Micro",
        ],
      },
    },
    fitness: {
      repository: null,
      demo: "https://samuelcharry.github.io/daily-fitness-platform/", 
      en: {
        title: "Daily Fitness",
        category: "PERSONAL PROJECT",
        summary: "A training tracker born from my passion for bodybuilding.",
        paragraphs: [
          "Daily Fitness comes out of my passion for bodybuilding. I built it as a tracker to organize and log my training, day by day.",
          "The amount of misinformation in fitness genuinely frustrates me. So I made it a compilation of what I've tried and learned over the years — everything in one place, grounded in my own experience.",
        ],
        stack: ["HTML", "CSS", "JavaScript"], // Ajusta a las tecnologías reales.
      },
      es: {
        title: "Daily Fitness",
        category: "PROYECTO PERSONAL",
        summary:
          "Un tracker de entrenamiento que nace de mi pasión por el culturismo.",
        paragraphs: [
          "Daily Fitness nace de mi pasión por el culturismo. Lo construí como un tracker para organizar y registrar mi entrenamiento, día a día.",
          "Me estresa mucho la cantidad de desinformación que hay en el fitness. Por eso lo pensé como una recopilación de lo que he probado y aprendido a lo largo de los años: todo en un solo lugar y basado en mi propia experiencia.",
        ],
        stack: ["HTML", "CSS", "JavaScript"],
      },
    },
  },
};
