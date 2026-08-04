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
    tagline: "Building production grade web apps and AI systems that solve real problems.",
    attribution: 'Made with curiosity by Raj Gupta.',
    nav: [
      { label: 'Home', href: 'index.html', page: 'home' },
      { label: 'About', href: 'about.html', page: 'about' },
      { label: 'Projects', href: 'projects.html', page: 'projects' },
      { label: 'Experience', href: 'experience.html', page: 'experience' },
      { label: 'Journal', href: 'journal.html', page: 'journal' },
      { label: 'Contact', href: 'contact.html', page: 'contact' },
      { label: 'Links', href: 'links.html', page: 'links' }
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/nottherajyk' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/raj-gupta-a7bb77348' },
      { label: 'Instagram', href: 'https://instagram.com/nottherajyk' },
      { label: 'YouTube', href: 'https://youtube.com/@nottherajyk' },
      { label: 'X', href: 'https://x.com/nottherajyk' },
      { label: 'Pinterest', href: 'https://pinterest.com/nottherajyk' }
    ],
    projects: [
      {
        id: 'spendlens',
        category: 'SaaS / AI',
        title: 'SpendLens',
        footerTitle: 'SpendLens',
        image: 'assets/Spendless ai.png',
        previewHref: 'projects.html#spendlens',
        description: 'AI-powered spend audit tool for startups. Scans team subscriptions across Claude, ChatGPT, Cursor, and more to surface redundancy and cut costs — built with Next.js, TypeScript, and Supabase.',
        tags: ['Next.js', 'TypeScript', 'Supabase'],
        github: 'https://github.com/nottherajyk/spendlens',
        website: 'https://spendlens-credex.vercel.app/',
        layout: 'wide'
      },
      {
        id: 'helixdesk-ai',
        category: 'AI / ML',
        title: 'HelixDesk OpenEnv',
        footerTitle: 'HelixDesk',
        image: 'assets/helixdesk-preview.png',
        previewHref: 'projects.html#helixdesk-ai',
        detailHref: 'project-detail-helixdesk-ai.html',
        description: 'Gymnasium reinforcement learning environment for AI-driven customer support triage. Built with Python and PyTorch for the Meta PyTorch Hackathon under the OpenEnv specification.',
        tags: ['Python', 'PyTorch', 'Reinforcement Learning'],
        github: 'https://github.com/nottherajyk/HelixDesk-AI-Agent',
        website: 'https://huggingface.co/spaces/nottherajyk/helixdesk-openenv',
        layout: 'wide'
      },
      {
        id: 'snaptools-v1',
        category: 'Web App',
        title: 'SnapTools V1',
        footerTitle: 'SnapTools',
        image: 'assets/project-1.avif',
        previewHref: 'projects.html#snaptools-v1',
        detailHref: 'project-detail-snaptools-v1.html',
        description: 'All-in-one web utility app that replaces ten browser tabs with one fast interface. Image, text, PDF, and social tools — built frontend-first with JavaScript.',
        tags: ['JavaScript', 'Utilities', 'Web'],
        github: 'https://github.com/nottherajyk/SnapTools_V1',
        website: 'https://snap-tools-aiot.vercel.app/',
        layout: 'wide'
      },
      {
        id: 'vitality-ai',
        category: 'AI / Health',
        title: 'Vitality',
        footerTitle: 'Vitality',
        image: 'assets/project-4.avif',
        previewHref: 'projects.html#vitality-ai',
        detailHref: 'project-detail-vitality-ai.html',
        description: 'AI health copilot with smart nutrition logging and wellness tracking. Built with TypeScript, Next.js, and Google Gemini AI for the Google AI Hackathon.',
        tags: ['TypeScript', 'Next.js', 'Gemini AI'],
        github: 'https://github.com/nottherajyk/Vitality-AI-Health-Copilot',
        website: 'https://vitalityai-xi.vercel.app',
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
        description: 'Real-time American Sign Language detection and translation. Uses MediaPipe 3D hand landmarks to convert ASL signs into readable text — built with React and JavaScript.',
        tags: ['React', 'MediaPipe', 'JavaScript'],
        github: 'https://github.com/nottherajyk/SilentVoice.ai',
        website: 'https://silentvoice-ai.vercel.app/',
        layout: 'half'
      },
      {
        id: 'markus-voice',
        category: 'Desktop AI',
        title: 'Markus Voice Assistant',
        footerTitle: 'Markus',
        image: 'assets/markus-preview.png',
        previewHref: 'projects.html#markus-voice',
        detailHref: 'project-detail-markus-voice.html',
        description: 'Fully offline, always-listening voice assistant for Windows. Built for privacy and speed with Python, using local speech recognition — no cloud dependency.',
        tags: ['Python', 'Voice AI', 'Desktop'],
        github: 'https://github.com/nottherajyk/markus-voice-assistant-',
        layout: 'half'
      },
      {
        id: 'bar-generator',
        category: 'Web App',
        title: 'Bar Code Generator',
        footerTitle: 'Bar Code',
        image: 'assets/qr-preview.png',
        previewHref: 'projects.html#bar-generator',
        detailHref: 'project-detail-bar-generator.html',
        description: 'Instant barcode generation from any text or URL with high-resolution PNG and SVG export. Clean frontend utility built with HTML, CSS, and JavaScript.',
        tags: ['CSS', 'Utility', 'Frontend'],
        github: 'https://github.com/nottherajyk/OR-code-Generator',
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
        description: 'Lightweight text formatting and cleanup tool. Strip whitespace, fix casing, remove duplicates — built with vanilla HTML, CSS, and JavaScript.',
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
        description: 'Automated photo background removal powered by Python and machine learning. Upload an image, get a clean cutout — no manual editing required.',
        tags: ['Python', 'Image Processing', 'ML'],
        github: 'https://github.com/nottherajyk/Photo-background-remover',
        layout: 'half'
      },
      {
        id: 'sketch-air',
        category: 'Web App',
        title: 'Sketch Air',
        footerTitle: 'Sketch Air',
        image: 'assets/skair project.png',
        previewHref: 'projects.html#sketch-air',
        description: 'Web-based air-drawing app with real-time hand and pen tracking using MediaPipe. Draw in the air, see it on screen — built with JavaScript.',
        tags: ['JavaScript', 'MediaPipe', 'Web'],
        github: 'https://github.com/nottherajyk/Sketch-Air',
        website: 'https://sketch-air-one.vercel.app/',
        layout: 'half'
      }
    ],
    journals: [
      {
        slug: 'claude-code-expertise',
        category: 'AI Coding Agents',
        title: 'Claude Code and the Return of Domain Expertise',
        footerTitle: 'Claude Code & Domain Expertise',
        image: 'assets/Claude 1.png',
        href: 'journal-detail-claude-code-expertise.html'
      },
      {
        slug: 'claude-fable-mythos',
        category: 'AI Policy',
        title: 'What happened with Claude Fable 5 and Claude Mythos 5',
        footerTitle: 'Claude Fable & Mythos',
        image: 'assets/Fable 5.jpg',
        href: 'journal-detail-claude-fable-mythos.html'
      },
      {
        slug: 'ai-certifications',
        category: 'AI',
        title: 'What I learned from 30+ AI certifications in one year',
        footerTitle: 'AI Certifications',
        image: 'assets/journal-1.avif',
        href: 'journal-detail-ai-certifications.html'
      },
      {
        slug: 'snaptools-retrospective',
        category: 'Building',
        title: "Why I built SnapTools and what I'd do differently",
        footerTitle: 'SnapTools Retrospective',
        image: 'assets/journal-2.avif',
        href: 'journal-detail-snaptools-retrospective.html'
      },
      {
        slug: 'filmmaker-programmer',
        category: 'Creativity',
        title: 'On being a filmmaker and a programmer at the same time',
        footerTitle: 'Filmmaker + Programmer',
        image: 'assets/journal-3.avif',
        href: 'journal-detail-filmmaker-programmer.html'
      },

    ],
    services: [
      {
        number: '01',
        title: 'AI & Machine Learning',
        description: 'Building intelligent systems with Python, PyTorch, and reinforcement learning. Experienced with RAG pipelines, AI agents, and production ML workflows. Certified across Anthropic, AWS, Kaggle, and Tata GenAI programs.',
        image: 'assets/project-1.avif'
      },
      {
        number: '02',
        title: 'Full-Stack Web Development',
        description: 'Shipping production-ready web applications with React, Next.js, TypeScript, Node.js, and Tailwind CSS. From database to deployment — Supabase, Vercel, and everything in between.',
        image: 'assets/project-3.avif'
      },
      {
        number: '03',
        title: 'Product Thinking',
        description: 'Bridging user needs and business goals. Computer Science undergrad with hands-on experience through hackathon organization and real product launches.',
        image: 'assets/about-portrait.png'
      },
      {
        number: '04',
        title: 'Cinematography & Content',
        description: 'Shooting and editing under RAW Vision Media. Running @nottherajyk across Instagram, YouTube, and X with reels and content reaching major view counts.',
        image: 'assets/project-2.avif'
      },
      {
        number: '05',
        title: 'Creative Direction',
        description: 'GDG Creative Team Member. Designing for community events, digital presence, and developer engagement on campus.',
        image: 'assets/project-4.avif'
      }
    ],
    roles: [
      {
        name: 'Raj Gupta',
        role: 'Computer Science Undergrad',
        image: 'assets/hero-home.png'
      },
      {
        name: '@nottherajyk',
        role: 'Content Creator & Cinematographer',
        image: 'assets/about-portrait.png'
      },
      {
        name: 'GDG Member',
        role: 'Creative Team',
        image: 'assets/gdg1.jpg'
      },

    ],
    experiences: [
      {
        role: "Campus Ambassador",
        organization: "Techfest IIT Bombay",
        duration: "Jul 2025 – Dec 2025",
        description: [
          "Represented Techfest on campus.",
          "Promoted participation in national technology events."
        ],
        skills: ["Outreach", "Community Engagement", "Event Promotion"],
        link: "about.html",
        linkLabel: "View campus ambassador roles"
      },
      {
        role: "Cinematographer",
        organization: "RAW Vision Media",
        duration: "Jul 2025 – June 2026",
        description: [
          "Worked on promotional videos and event films.",
          "Contributed to content exceeding 250K+ views.",
          "Produced, edited, and color-graded visual content."
        ],
        skills: ["DaVinci Resolve", "Video Editing", "Storytelling", "Cinematography"],
        link: "about.html",
        linkLabel: "View creative media work"
      },
      {
        role: "Creative Intern",
        organization: "Google Developer Group on Campus MPSTME Shirpur",
        duration: "Oct 2025 – Nov 2025",
        description: [
          "Designed event creatives.",
          "Created promotional assets.",
          "Supported community engagement campaigns."
        ],
        skills: ["Design", "Content Creation", "Branding", "Marketing"],
        link: "about.html",
        linkLabel: "View GDG graphic design work"
      },
      {
        role: "Sub Core Team Member",
        organization: "Google Developer Group on Campus MPSTME Shirpur",
        duration: "Nov 2025 – June 2026",
        description: [
          "Organized technology-focused events.",
          "Coordinated workshops and developer programs.",
          "Collaborated with student leaders and industry speakers.",
          "Helped strengthen campus developer communities."
        ],
        skills: ["Leadership", "Event Management", "Community Building", "Developer Relations"],
        link: "about.html",
        linkLabel: "View community activities on About page"
      },
      {
        role: "Business Development Intern",
        organization: "She Can Foundation",
        duration: "May 2026",
        description: [
          "Assisted partnership and outreach initiatives.",
          "Supported communication and research efforts."
        ],
        skills: ["Research", "Communication", "Business Development"],
        link: "about.html",
        linkLabel: "View outreach achievements"
      },
      {
        role: "Web Developer",
        organization: "InAmigos Foundation",
        duration: "May 2026 – June 2026",
        description: [
          "Improved website usability and user experience.",
          "Evaluated existing platform architecture.",
          "Proposed enhancements for accessibility and engagement."
        ],
        skills: ["Web Development", "UI/UX", "Frontend Development", "Accessibility"],
        link: "project-detail-text-cleaner.html",
        linkLabel: "View Text Cleaner web app"
      },
      {
        role: "Machine Learning Intern",
        organization: "FlyRank AI",
        duration: "June 2026 – Present",
        description: [
          "Working on Machine Learning systems and AI-powered workflows.",
          "Exploring production AI applications and model-driven products.",
          "Collaborating on real-world AI solutions and experimentation."
        ],
        skills: ["Python", "Machine Learning", "AI Systems", "Data Processing"],
        link: "projects.html#spendlens",
        linkLabel: "View SpendLens & HelixDesk projects"
      }
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
        'Rolls Royce Financial Analyst',
        'Generative AI',
        'Claude Subagents',
        'Google Cloud Arcade Level 3',
        'Claude Cowork',
        'Claude Code',
        'AI Agents'
      ]
    }
  };

  window.SiteData = siteData;
})();
