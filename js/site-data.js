/**
 * site-data.js
 * Shared content model for navigation, projects, journals, services, roles, and footer links.
 */
(function () {
  const siteData = {
    year: '2026',
    name: 'Raj Gupta',
    watermark: 'Keep moving forward...',
    handle: '@nottherajyk',
    email: 'rajgupta.yk@gmail.com',
    tagline: "I don't fit in one box. That's the point.",
    attribution: 'Made with curiosity by Raj Gupta.',
    nav: [
      { label: 'Home', href: 'index.html', page: 'home' },
      { label: 'About', href: 'about.html', page: 'about' },
      { label: 'Projects', href: 'projects.html', page: 'projects' },
      { label: 'Journal', href: 'journal.html', page: 'journal' },
      { label: 'Contact', href: 'contact.html', page: 'contact' },
      { label: 'Links', href: 'links.html', page: 'links' }
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/jeeka1469' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/raj-gupta-a7bb77348' },
      { label: 'Instagram', href: 'https://instagram.com/nottherajyk' },
      { label: 'YouTube', href: 'https://youtube.com/@nottherajyk' },
      { label: 'X', href: 'https://x.com/nottherajyk' }
    ],
    projects: [
      {
        id: 'snaptools-v1',
        category: 'Web App',
        title: 'SnapTools V1',
        footerTitle: 'SnapTools',
        image: 'assets/project-1.avif',
        previewHref: 'projects.html#snaptools-v1',
        detailHref: 'project-detail-snaptools-v1.html',
        description: 'Stop switching between ten websites to get one job done. A single, high-performance web app for your essential digital utilities.',
        tags: ['JavaScript', 'Utilities', 'Web'],
        github: 'https://github.com/nottherajyk/SnapTools_V1',
        layout: 'wide'
      },
      {
        id: 'silentvoice-ai',
        category: 'AI / Web',
        title: 'SilentVoice.ai',
        footerTitle: 'SilentVoice',
        image: 'assets/SilentVoice.ai.png',
        previewHref: 'projects.html#silentvoice-ai',
        detailHref: 'project-detail-silentvoice-ai.html',
        description: 'Real-time American Sign Language detection and translation web app. Uses MediaPipe 3D hand landmarks to translate ASL signs into text instantly.',
        tags: ['React', 'MediaPipe', 'JavaScript'],
        github: 'https://github.com/nottherajyk/SilentVoice.ai',
        layout: 'half'
      },
      {
        id: 'bar-generator',
        category: 'Web App',
        title: 'Bar code generator',
        footerTitle: 'Bar code',
        image: 'assets/qr-preview.png',
        previewHref: 'projects.html#bar-generator',
        detailHref: 'project-detail-bar-generator.html',
        description: 'Transform any text or URL into a professional-grade Bar code instantly with high-resolution PNG & SVG export.',
        tags: ['CSS', 'Utility', 'Frontend'],
        github: 'https://github.com/nottherajyk/OR-code-Generator',
        layout: 'half'
      },
      {
        id: 'helixdesk-ai',
        category: 'AI / ML',
        title: 'HelixDesk AI Agent',
        footerTitle: 'HelixDesk',
        image: 'assets/helixdesk-preview.png',
        previewHref: 'projects.html#helixdesk-ai',
        detailHref: 'project-detail-helixdesk-ai.html',
        description: 'Gymnasium RL environment for AI-powered customer support triage. Built for the Meta PyTorch Hackathon under the OpenEnv spec.',
        tags: ['Python', 'AI', 'RL'],
        github: 'https://github.com/nottherajyk/HelixDesk-AI-Agent',
        layout: 'wide'
      },
      {
        id: 'markus-voice',
        category: 'Desktop AI',
        title: 'Markus Voice Assistant',
        footerTitle: 'Markus',
        image: 'assets/markus-preview.png',
        previewHref: 'projects.html#markus-voice',
        detailHref: 'project-detail-markus-voice.html',
        description: 'Markus is a fully offline, always-listening voice assistant designed for Windows. Built for privacy and speed using local speech recognition.',
        tags: ['Python', 'Voice Assistant', 'Desktop'],
        github: 'https://github.com/nottherajyk/markus-voice-assistant-',
        layout: 'half'
      },
      {
        id: 'text-cleaner',
        category: 'Utility',
        title: 'Text Cleaner',
        footerTitle: 'Text Cleaner',
        image: 'assets/project-2.avif',
        previewHref: 'projects.html#text-cleaner',
        detailHref: 'project-detail-text-cleaner.html',
        description: 'Text Cleaner using simple HTML, CSS and Javascript frontend. Quickly format and clean up text data.',
        tags: ['CSS', 'HTML', 'JavaScript'],
        github: 'https://github.com/nottherajyk/Text-Cleaner-',
        layout: 'half'
      },
      {
        id: 'photo-bg-remover',
        category: 'AI / Imaging',
        title: 'Photo Background Remover',
        footerTitle: 'BG Remover',
        image: 'assets/project-3.avif',
        previewHref: 'projects.html#photo-bg-remover',
        detailHref: 'project-detail-photo-bg-remover.html',
        description: 'A tool for an automated photo background removal built using Python and machine learning libraries.',
        tags: ['Python', 'Image Processing', 'ML'],
        github: 'https://github.com/nottherajyk/Photo-background-remover',
        layout: 'half'
      },
      {
        id: 'vitality-ai',
        category: 'AI / Health',
        title: 'Vitality AI Health Copilot',
        footerTitle: 'Vitality AI',
        image: 'assets/project-4.avif',
        previewHref: 'projects.html#vitality-ai',
        detailHref: 'project-detail-vitality-ai.html',
        description: 'Comprehensive health tracking and AI nutrition logging. Built using TypeScript, Next.js, and Gemini AI for the Google AI Hackathon.',
        tags: ['TypeScript', 'Next.js', 'Gemini AI'],
        github: 'https://github.com/nottherajyk/Vitality-AI-Health-Copilot',
        layout: 'wide'
      }
    ],
    journals: [
      {
        slug: 'ai-certifications',
        category: 'AI',
        title: 'What I learned from 30+ AI certifications in one year',
        footerTitle: 'AI Certifications',
        image: 'assets/journal-1.avif',
        href: 'journal-detail.html#ai-certifications'
      },
      {
        slug: 'snaptools-retrospective',
        category: 'Building',
        title: "Why I built SnapTools and what I'd do differently",
        footerTitle: 'SnapTools Retrospective',
        image: 'assets/journal-2.avif',
        href: 'journal-detail.html#snaptools-retrospective'
      },
      {
        slug: 'filmmaker-programmer',
        category: 'Creativity',
        title: 'On being a filmmaker and a programmer at the same time',
        footerTitle: 'Filmmaker + Programmer',
        image: 'assets/journal-3.avif',
        href: 'journal-detail.html#filmmaker-programmer'
      },

    ],
    services: [
      {
        number: '01',
        title: 'AI & Machine Learning',
        description: 'Building with AI tools, automation pipelines, and ML concepts. Certified across Anthropic, AWS, Kaggle, and Tata GenAI.',
        image: 'assets/project-1.avif'
      },
      {
        number: '02',
        title: 'Web Development',
        description: 'Shipping functional, well-designed web apps with HTML, CSS, and JavaScript. From idea to deployed product.',
        image: 'assets/project-3.avif'
      },
      {
        number: '03',
        title: 'Product Thinking',
        description: 'Bridging user needs and business goals. Studied at NMIMS, practiced through event organization and hackathons.',
        image: 'assets/about-portrait.png'
      },
      {
        number: '04',
        title: 'Cinematography & Content',
        description: 'Shooting and editing under RAW Vision Media. Running @nottherajyk with reels crossing major view counts.',
        image: 'assets/project-2.avif'
      },
      {
        number: '05',
        title: 'Creative Direction',
        description: 'GDG Creative Team Member. Designing for community, events, and digital presence.',
        image: 'assets/project-4.avif'
      }
    ],
    roles: [
      {
        name: 'Raj Gupta',
        role: 'Student',
        image: 'assets/hero-home.png'
      },
      {
        name: '@nottherajyk',
        role: 'Content Creator & Cinematographer',
        image: 'assets/about-portrait.png'
      },
      {
        name: 'GDG Member',
        role: 'Creative Team - MPSTME',
        image: 'assets/gdg1.jpg'
      },

    ],
    certifications: {
      rowOne: [
        'Anthropic AI Fluency',
        'Google Cloud',
        'Kaggle Python',
        'AWS Solutions Architecture',
        'Tata GenAI Analytics',
        'Goldman Sachs Virtual',
        'JPMorganChase'
      ],
      rowTwo: [
        'Anthrophic',
        'AWS',
        'Rolls Royce Financial Analyst',
        'Generative AI',
        'Claude Subagents',
        'SKILLS BOOST ARCADE LEVEL 3 Badge ',
        'Claude Cowork',
        'Claude Code',
        'AI Agents'
      ]
    }
  };

  window.SiteData = siteData;
})();
