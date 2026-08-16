document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. INTERNATIONALIZATION (i18n) DICTIONARY ENGINE --- */
  const translations = {
    id: {
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_journey: "Perjalanan",
      nav_skills: "Skills",
      nav_dsa: "Problem Solving",
      nav_projects: "Proyek",
      nav_experience: "Pengalaman",
      nav_github: "GitHub",
      nav_achievements: "Sertifikat",
      nav_internship: "Internship",
      nav_contact: "Kontak",

      hero_status_badge: "TERSEDIA UNTUK SOFTWARE ENGINEERING INTERNSHIP",
      drawer_status: "Tersedia untuk Software Engineering Internship",
      hero_greeting: "Halo, Saya",
      hero_full_slogan: '"Membangun solusi digital yang andal, terukur, dan bermakna."',
      hero_sub_slogan: "Mahasiswa Rekayasa Perangkat Lunak di UBSI. Berfokus pada pengembangan aplikasi web, sistem backend, arsitektur database, serta struktur data & algoritma.",
      btn_view_projects: "LIHAT PROYEK SAYA",
      btn_internship_app: "LAMARAN INTERNSHIP",
      btn_download_cv: "DOWNLOAD RESUME",
      tech_badge_title: "Teknologi Full-Stack",

      hero_tech_stack_lbl: "ENGINEERING TECH STACK",

      stat_projects: "Proyek Selesai",
      stat_certificates: "Sertifikat Teknis",
      stat_years: "Tahun Belajar",
      stat_contrib: "Kontribusi GitHub",

      about_subtitle: "TENTANG SAYA",
      about_title: "Bio, Visi, Misi & Fokus Rekayasa",
      biodata_header: "Biodata Diri",
      bio_name_lbl: "Nama Lengkap",
      bio_age_lbl: "Umur",
      bio_age_val: "22 Tahun",
      bio_loc_lbl: "Domisili",
      bio_loc_val: "Bogor, Jawa Barat",
      bio_univ_lbl: "Perguruan Tinggi",
      bio_major_lbl: "Jurusan",
      bio_major_val: "Rekayasa Perangkat Lunak (Software Engineering)",
      current_focus_lbl: "FOKUS SAAT INI",

      about_story_header: "Perjalanan & Filosofi Hidup",
      about_story_p1: "Halo, saya Musyafa Anasrullah. Fokus utama saya adalah Software Engineering—menciptakan aplikasi dan solusi digital yang tangguh, efisien, dan skala besar. Sebagai mahasiswa Rekayasa Perangkat Lunak, saya terus mendalami ekosistem pengembangan modern, mencakup frontend, backend, database, hingga software architecture. Saya percaya bahwa perangkat lunak terbaik lahir dari clean code dan pemecahan masalah yang sistematis. Karakter saya dibentuk oleh kedisiplinan seorang fighter dan daya kreatif seorang content creator, yang membantu saya dalam memimpin tim, menyampaikan ide-ide teknis secara jelas, serta terus beradaptasi dengan perkembangan teknologi.",
      
      vm_vision_title: "Visi (Vision)",
      vm_vision_desc: "Menjadi seorang Software Engineer profesional yang mampu merancang dan mengeksekusi sistem aplikasi berskala besar, efisien, dan memberikan dampak nyata bagi pengguna.",
      vm_mission_title: "Misi (Mission)",
      vm_mission_desc: "Terus memperdalam fundamental rekayasa perangkat lunak, berkontribusi dalam tim engineering produk, dan menciptakan aplikasi berkualitas tinggi.",

      journey_subtitle: "ROADMAP BELAJAR",
      journey_title: "Software Engineering Journey",
      journey_desc: "Tahapan visual dan roadmap pembelajaran teknologi yang saya tempuh menuju Software Engineering Internship.",
      j_step1_title: "WEB FUNDAMENTALS",
      j_step1_desc: "Penguasaan struktur web semantik, styling responsif, dan manipulasi DOM menggunakan JavaScript vanilla.",
      j_step2_title: "MODERN FRONTEND",
      j_step2_desc: "Pengembangan UI berbasis komponen reusable, state management dengan React Hooks, dan SPA routing.",
      j_step3_title: "PROGRAMMING",
      j_step3_desc: "Pemahaman logika pemrograman tingkat dasar hingga lanjut, Object-Oriented Programming (OOP), dan manipulasi data.",
      j_step4_title: "COMPUTER SCIENCE",
      j_step4_desc: "Studi mendalam mengenai Struktur Data (Arrays, Lists, Trees) dan Algoritma (Sorting, Searching, Complexity Big-O).",
      j_step5_title: "ENGINEERING TOOLS",
      j_step5_desc: "Manajemen versi kode, branching strategy, Pull Requests, code review, dan kolaborasi tim software engineering.",
      j_step6_title: "BACKEND",
      j_step6_desc: "Perancangan arsitektur server, API endpoints, otentikasi JWT, middleware, dan arsitektur microservices.",
      j_step7_title: "DATA & DATABASES",
      j_step7_desc: "Perancangan database relasional dengan PostgreSQL & MySQL, optimasi query SQL, indexing, serta integritas data.",
      j_step8_title: "INFRASTRUCTURE",
      j_step8_desc: "Containerization aplikasi dengan Docker, deployment dasar di platform cloud, dan otomatisasi CI/CD pipelines.",
      j_step9_title: "PRODUCTION PROJECTS",
      j_step9_desc: "Membangun proyek aplikasi riil berstandar industri dengan arsitektur bersih dan nilai keteknikan nyata.",
      j_step10_title: "INTERNSHIP",
      j_step10_desc: "Siap berkontribusi dalam tim Software Engineering profesional pada industri teknologi dan startup.",

      skills_subtitle: "KEAHLIAN & TECH STACK",
      skills_title: "Skills & Tech Stack",

      dsa_subtitle: "ALGORITMA & PEMECAHAN MASALAH",
      dsa_title: "Problem Solving & Algorithmic Practice",
      dsa_desc: "Rekam jejak teruji dalam efisiensi algoritma, optimasi kode, dan implementasi struktur data kompleks.",
      leetcode_card_title: "LeetCode Problem Solved",
      leetcode_card_desc: "Latihan kontinu algoritma & struktur data standar industri.",
      leetcode_btn: "Buka Profil LeetCode",

      projects_subtitle: "PORTOFOLIO KARYA",
      projects_title: "Selected Engineering Projects",
      projects_desc: "Proyek aplikasi rekayasa perangkat lunak yang menampilkan nilai teknis, pemecahan masalah, dan kebersihan arsitektur.",
      filter_all: "Semua",
      filter_web: "Web Dev",
      filter_dashboard: "Dashboard",
      filter_api: "API",
      filter_ui: "Desain UI",

      github_subtitle: "REPOSITORI & OPEN SOURCE",
      github_title: "Code & Open Source",
      github_desc: "Saya secara aktif mempublikasikan proyek rekayasa perangkat lunak, latihan algoritma, dan eksplorasi teknologi baru di profil GitHub resmi saya.",
      github_btn: "LIHAT PROFIL GITHUB",

      intern_portal_subtitle: "RECRUITER PORTAL",
      intern_portal_title: "SAYA MENCARI KESEMPATAN SOFTWARE ENGINEERING INTERNSHIP",
      intern_portal_quote: "Saat ini saya terbuka untuk kesempatan Software Engineering Internship di mana saya dapat berkontribusi pada produk nyata, belajar dari insinyur berpengalaman, dan berkembang melalui pengembangan perangkat lunak langsung.",
      target_roles_title: "TARGET POSISI",
      target_env_title: "TARGET LINGKUNGAN KERJA",

      exp_subtitle: "PENGALAMAN NYATA & KEPEMIMPINAN",
      exp_title: "Engineering & Leadership Experience",
      exp_desc: "Pengalaman nyata dari proyek akademik, pengembangan mandiri, kepemimpinan organisasi, dan pendampingan teknis.",
      exp_col1_title: "Academic & Technical Projects",
      exp_col2_title: "Organization & Leadership",
      exp_org2_desc: "Memimpin komunitas pemuda dalam bidang pemrograman, membagikan modul belajar software engineering gratis, dan mengadakan sesi tanya jawab teknis berkala.",

      fighter_subtitle: "JIWA PETARUNG & BELA DIRI",
      fighter_title: "Persona Fighter & Seni Bela Diri",
      f_bg_title: "Jejak Bela Diri",
      f_sched_title: "Disiplin Latihan",
      f_sched_sub: "Disiplin latihan harian tanpa kompromi:",
      f_comp_title: "Kompetisi & Medali",
      motto_sub: "Rasa takut adalah teman. Rasa takut mengajarkan kita untuk waspada, bersiap, dan bertarung dengan fokus tertinggi.",

      ach_subtitle: "PRESTASI & SERTIFIKASI",
      ach_title: "Sertifikat Teknis & Kompetensi",
      ach_desc: "Dokumen bukti sertifikasi software engineering, web development, AI, dan cybersecurity.",
      ach_cert_count: "16 Dokumen Sertifikat Teknis",
      ach_cert_title: "Dokumen Sertifikat Software Engineering & IT",
      ach_cert_desc: "Bukti kompetensi Web Development, AI-Powered Engineering, Ethical Hacking, API Security, dan IT Governance.",
      ach_open_docs: "Buka & Lihat Dokumen (16)",

      footer_role: "Software Engineering Student",
      footer_quote: '"Membangun solusi digital yang andal, terukur, dan bermakna."',
      footer_copy: "© 2026 Musyafa Anasrullah. Hak Cipta Dilindungi. Dirancang & Dikembangkan untuk Software Engineering Internship.",

      contact_subtitle: "HUBUNGI SAYA",
      contact_title: "Jalin Komunikasi",
      contact_desc: "Mari berdiskusi mengenai Software Engineering Internship, proyek aplikasi web, atau diskusi teknis.",
      contact_info_title: "Informasi Kontak",
      contact_info_desc: "Terbuka untuk diskusi mengenai kesempatan magang, proyek software, dan kolaborasi teknis.",
      contact_form_title: "Kirim Pesan Langsung",
      lbl_name: "Nama Lengkap",
      lbl_email: "Alamat Email",
      lbl_subject: "Subjek",
      lbl_message: "Pesan (Message)",
      btn_send: "KIRIM PESAN"
    },

    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_journey: "Journey",
      nav_skills: "Skills",
      nav_dsa: "Problem Solving",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_github: "GitHub",
      nav_achievements: "Certificates",
      nav_internship: "Internship",
      nav_contact: "Contact",

      hero_welcome: "Senior Software Engineering",
      hero_greeting: "Hello, I am",
      drawer_status: "Open to Software Engineering Internship",
      hero_status_badge: "AVAILABLE FOR SOFTWARE ENGINEERING INTERNSHIP",
      hero_full_slogan: '"Building reliable, scalable, and meaningful digital solutions."',
      hero_sub_slogan: "Software Engineering Student at UBSI. Focused on web development, backend systems, database architecture, and data structures & algorithms.",
      btn_download_cv: "DOWNLOAD RESUME",
      btn_view_projects: "VIEW MY PROJECTS",
      btn_internship_app: "INTERNSHIP APPLICATION",
      btn_contact_me: "Contact Me",
      hero_tech_stack_lbl: "ENGINEERING TECH STACK",

      stat_projects: "Projects Completed",
      stat_certificates: "Technical Certificates",
      stat_years: "Years Learning",
      stat_contrib: "GitHub Contributions",

      about_subtitle: "ABOUT ME",
      about_title: "Bio, Vision, Mission & Engineering Focus",
      biodata_header: "Personal Biodata",
      bio_name_lbl: "Full Name",
      bio_age_lbl: "Age",
      bio_age_val: "22 Years Old",
      bio_loc_lbl: "Location",
      bio_loc_val: "Bogor, West Java, Indonesia",
      bio_univ_lbl: "University",
      bio_major_lbl: "Major",
      bio_major_val: "Software Engineering",
      current_focus_lbl: "CURRENT FOCUS",
      values_title: "Core Values",

      about_story_header: "Journey & Life Philosophy",
      about_story_p1: "Hello, I am Musyafa Anasrullah. My main focus is Software Engineering — creating robust, efficient, and large-scale digital applications and solutions. As a Software Engineering student, I continuously deepen my understanding of the modern development ecosystem, encompassing frontend, backend, databases, and software architecture. I believe the best software is born from clean code and systematic problem-solving. My character is shaped by the discipline of a fighter and the creativity of a content creator, which helps me lead teams, communicate technical ideas clearly, and continuously adapt to technological advancements.",

      vm_vision_title: "Vision",
      vm_vision_desc: "To become a professional Software Engineer capable of designing and executing large-scale, efficient application systems that deliver real impact to users.",
      vm_mission_title: "Mission",
      vm_mission_desc: "To continuously deepen software engineering fundamentals, contribute to product engineering teams, and build high-quality applications.",
      tagline_trans: "Focused on building modern web applications, APIs, and scalable software solutions.",

      journey_subtitle: "LEARNING ROADMAP",
      journey_title: "Software Engineering Journey",
      journey_desc: "Visual stages and technology learning roadmap I'm following toward a Software Engineering Internship.",
      j_step1_title: "WEB FUNDAMENTALS",
      j_step1_desc: "Mastery of semantic web structure, responsive styling, and DOM manipulation using vanilla JavaScript.",
      j_step2_title: "MODERN FRONTEND",
      j_step2_desc: "Component-based UI development, state management with React Hooks, and SPA routing.",
      j_step3_title: "PROGRAMMING",
      j_step3_desc: "Programming logic from basic to advanced, Object-Oriented Programming (OOP), and data manipulation.",
      j_step4_title: "COMPUTER SCIENCE",
      j_step4_desc: "Deep study of Data Structures (Arrays, Lists, Trees) and Algorithms (Sorting, Searching, Big-O Complexity).",
      j_step5_title: "ENGINEERING TOOLS",
      j_step5_desc: "Version control management, branching strategy, Pull Requests, code review, and software engineering team collaboration.",
      j_step6_title: "BACKEND",
      j_step6_desc: "Server architecture design, API endpoints, JWT authentication, middleware, and microservices architecture.",
      j_step7_title: "DATA & DATABASES",
      j_step7_desc: "Relational database design with PostgreSQL & MySQL, SQL query optimization, indexing, and data integrity.",
      j_step8_title: "INFRASTRUCTURE",
      j_step8_desc: "Application containerization with Docker, basic cloud deployment, and CI/CD pipeline automation.",
      j_step9_title: "PRODUCTION PROJECTS",
      j_step9_desc: "Building real-world industry-standard applications with clean architecture and genuine engineering value.",
      j_step10_title: "INTERNSHIP",
      j_step10_desc: "Ready to contribute to professional Software Engineering teams in the technology industry and startups.",

      skills_subtitle: "SKILLS & TECH STACK",
      skills_title: "Skills & Tech Stack",

      dsa_subtitle: "ALGORITHMS & PROBLEM SOLVING",
      dsa_title: "Problem Solving & Algorithmic Practice",
      dsa_desc: "Proven track record in algorithmic efficiency, code optimization, and complex data structure implementation.",
      leetcode_card_title: "LeetCode Problem Solved",
      leetcode_card_desc: "Continuous practice of industry-standard algorithms & data structures.",
      leetcode_btn: "View LeetCode Profile",
      applied_card_title: "Applied Performance Metric",
      applied_card_desc: "Real proof of memory & runtime savings on real-world projects.",
      github_repo_card_title: "DSA & Clean Code Repo",
      github_repo_card_desc: "Link to tested algorithm & data structure solution repository.",
      github_repo_btn: "View Algorithm Repo",

      projects_subtitle: "PORTFOLIO WORKS",
      projects_title: "Selected Engineering Projects",
      projects_desc: "Software engineering application projects showcasing technical value, problem solving, and architectural cleanliness.",
      filter_all: "All",
      filter_web: "Web Dev",
      filter_dashboard: "Dashboard",
      filter_api: "API",
      filter_ui: "UI Design",

      github_subtitle: "REPOSITORIES & OPEN SOURCE",
      github_title: "Code & Open Source",
      github_desc: "I actively publish software engineering projects, algorithm practice, and new technology explorations on my GitHub profile.",
      github_btn: "VIEW GITHUB PROFILE",

      intern_portal_subtitle: "RECRUITER PORTAL",
      intern_portal_title: "LOOKING FOR MY NEXT SOFTWARE ENGINEERING INTERNSHIP",
      intern_portal_quote: "I am currently open to Software Engineering Internship opportunities where I can contribute to real-world products, learn from experienced engineers, and grow through hands-on software development.",
      target_roles_title: "TARGET ROLES",
      target_env_title: "TARGET WORK ENVIRONMENT",

      ach_subtitle: "HONORS & CERTIFICATIONS",
      ach_title: "Technical Certificates & Competencies",
      ach_desc: "Documentation of software engineering, web development, AI, and cybersecurity certification competencies.",
      ach_cert_count: "16 Technical Certificate Documents",
      ach_cert_title: "Software Engineering & IT Certificate Documents",
      ach_cert_desc: "Proof of competency in Web Development, AI-Powered Engineering, Ethical Hacking, API Security, and IT Governance.",
      ach_open_docs: "Open & View Documents (16)",

      footer_role: "Software Engineering Student",
      footer_quote: '"Building reliable, scalable, and meaningful digital solutions."',
      footer_copy: "© 2026 Musyafa Anasrullah. All Rights Reserved. Designed & Developed for Software Engineering Internship.",

      contact_subtitle: "GET IN TOUCH",
      contact_title: "Get In Touch",
      contact_desc: "Let's discuss Software Engineering Internship opportunities, web application projects, or technical discussions.",
      contact_info_title: "Contact Information",
      contact_info_desc: "Open to discussions about internship opportunities, software projects, and technical collaboration.",
      contact_form_title: "Send Me a Message",
      lbl_name: "Full Name",
      lbl_email: "Email Address",
      lbl_subject: "Subject",
      lbl_message: "Message",
      btn_send: "SEND MESSAGE",

      exp_subtitle: "REAL EXPERIENCE & LEADERSHIP",
      exp_title: "Engineering & Leadership Experience",
      exp_work_title: "Work Experience",
      exp_org_title: "Organization Experience",
      exp_job1_desc: "Served 2 years as head language teacher (Arabic & English) at Pondok An-Nibras Subang, managing student discipline and language activities.",
      exp_job2_desc: "Freelance web developer on Upwork & Fiverr for 2 years, building web applications, REST APIs, and UI designs for international clients.",
      exp_org_jmh_desc: "Led the Jami'atul Huffadz community, coordinated members, organized programs (tahfidz mentoring, routine studies), and delegated tasks among board members.",
      exp_org_dbbg_desc: "Fitness trainer responsible for designing, guiding, and evaluating physical workout programs for students while motivating peak physical growth.",
      exp_org_diesel_desc: "Managed administration, electrical-mechanical system maintenance logs, and diesel generator operations to ensure reliable energy supply.",
      exp_org1_desc: "Secretary of Taekwondo Student Activity Unit (UKM) at UBSI for 1 year, overseeing administration, tournament proposals, and athlete registration.",
      exp_org2_desc: "Founder of CodeWithMusyafa Community, mentoring aspiring developers with free engineering modules and tech Q&A.",

      fighter_subtitle: "MARTIAL ARTS PERSONA",
      fighter_title: "Fighter Persona & Martial Arts",
      f_bg_title: "Martial Arts Track",
      f_sched_title: "Training Discipline",
      f_sched_sub: "Uncompromising daily workout schedule:",
      f_comp_title: "Competitions & Medals",
      motto_sub: "Fear is a friend. Fear keeps us alert, prepared, and focused at the highest level.",


      ach_subtitle: "HONORS & CERTIFICATIONS",
      ach_title: "Certificates & Awards",
      tab_cert: "Certificates",
      tab_piagam: "Awards",
      tab_medals: "Medals",

      faq_subtitle: "FREQUENTLY ASKED QUESTIONS",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Who are you?",
      faq1_a: "I am Musyafa Anasrullah, a Software Engineering student, fighter, and content creator passionate about technology, self-growth, and sharing knowledge.",
      faq2_q: "2. What are your current focus areas?",
      faq2_a: "Currently focusing on modern web development including frontend, backend, databases, Git, Docker, and cloud computing.",
      faq3_q: "3. What technologies do you use?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub, and expanding to modern tech stacks.",
      faq4_q: "4. Do you accept freelance projects or collaboration?",
      faq4_a: "Yes! Open for freelance projects, internships, collaborations, and software engineering opportunities.",
      faq5_q: "5. Why do you practice martial arts?",
      faq5_a: "Martial arts teaches discipline, consistency, respect, and mental toughness which I apply to technology and life.",
      faq6_q: "6. Why are you a Content Creator?",
      faq6_a: "Knowledge grows when shared. I document my learning journey to inspire and help future developers.",
      faq7_q: "7. What is your career goal?",
      faq7_a: "To become a professional Software Engineer delivering impactful digital solutions and inspiring others.",
      faq8_q: "8. How can I contact you?",
      faq8_a: "Reach out via email, LinkedIn, GitHub, or WhatsApp listed on the Contact section.",

      comm_desc: "CodeWithMusyafa Community is a space created to help anyone learn programming and technology through discussions, learning materials, and project collaboration.",

      contact_subtitle: "GET IN TOUCH",
      contact_title: "Start a Conversation",
      contact_info_title: "Contact Information",
      contact_info_desc: "Let's discuss web development projects, collaborations, or tech & martial arts ideas.",
      contact_form_title: "Send Me a Message",
      lbl_name: "Full Name",
      lbl_email: "Email Address",
      lbl_subject: "Subject",
      lbl_message: "Message",
      btn_send: "Send Message"
    }
  };

  const langSelect = document.getElementById('lang-select');
  
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    localStorage.setItem('musyafa_lang', lang);
  }

  if (langSelect) {
    const savedLang = localStorage.getItem('musyafa_lang') || 'id';
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  /* --- 2. DARK / LIGHT THEME TOGGLE --- */
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  const htmlTag = document.documentElement;

  function updateThemeUI(theme) {
    htmlTag.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      htmlTag.classList.add('dark');
    } else {
      htmlTag.classList.remove('dark');
    }
  }

  const savedTheme = localStorage.getItem('musyafa_theme') || 'dark';
  updateThemeUI(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentTheme = htmlTag.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      updateThemeUI(newTheme);
      localStorage.setItem('musyafa_theme', newTheme);
    });
  });

  /* --- 3. HERO TYPING ANIMATION ENGINE --- */
  const typingTextEl = document.getElementById('typing-text');
  if (typingTextEl) {
    const roles = [
      "Software Engineering Student",
      "Software Engineering Intern Candidate",
      "Web & Backend Developer",
      "Full-Stack Intern Candidate"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingTextEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  /* --- 4. CYBER PARTICLE CANVAS BACKGROUND --- */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numParticles = Math.min(Math.floor(width / 20), 70);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      const isDark = htmlTag.getAttribute('data-theme') === 'dark';
      const pColor = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.3)';
      const lColor = isDark ? 'rgba(37, 99, 235, 0.12)' : 'rgba(37, 99, 235, 0.08)';
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = pColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lColor;
            ctx.lineWidth = 1 - dist / 120;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }

  /* --- 5. NAVBAR SCROLL EFFECT & MOBILE DRAWER --- */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('open');
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.remove('open');
    });
  }

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('open')) {
      if (!mobileDrawer.contains(e.target) && !hamburger.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    }
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
    }
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
    });
  });

  /* --- 6. QUICK STATS COUNTER ANIMATION --- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          let count = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            count += step;
            if (count >= target) {
              stat.innerHTML = `${target}<span>+</span>`;
              clearInterval(interval);
            } else {
              stat.innerHTML = `${count}<span>+</span>`;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) observer.observe(statsGrid);

  /* --- 7. PROJECT CATEGORY FILTERING --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* --- 8. ACHIEVEMENTS & DOCUMENT SHOWCASE MODALS --- */
  const documentData = {
    cert: {
      title: "Dokumen Sertifikat Teknis",
      subtitle: "Bukti kompetensi Software Engineering & IT (16 Sertifikat)",
      icon: "fa-solid fa-file-contract",
      items: [
        {
          title: "Sertifikat Web Penetration Testing Fundamentals",
          issuer: "Codelamp Indonesia",
          category: "Cybersecurity & Ethical Hacking",
          date: "2026",
          path: "assets/images/sertifikat/Sertifikat Web Penetration Testing Fundamentals.pdf",
          desc: "Sertifikat kelulusan kursus online Web Penetration Testing Fundamentals dari Codelamp Indonesia, mencakup pengujian kerentanan web, OWASP Top 10, dan metodologi ethical hacking."
        },
        {
          title: "Sertifikat SIEM Fundamentals & Wazuh Architecture for SOC Analysts",
          issuer: "Codelamp Indonesia",
          category: "Cybersecurity & SOC Operations",
          date: "2026",
          path: "assets/images/sertifikat/Sertifikat SIEM Fundamentals & Wazuh Architecture for SOC Analysts.pdf",
          desc: "Sertifikat kelulusan kursus online SIEM Fundamentals & Wazuh Architecture for SOC Analysts dari Codelamp Indonesia, mempelajari arsitektur Wazuh, monitoring log keamanan, dan deteksi insiden real-time."
        },
        {
          title: "Sertifikat IT Audit Fundamentals & Professional Standards",
          issuer: "Codelamp Indonesia (No: 2660/CD/C/VIII/2026)",
          category: "IT Audit & Governance",
          date: "11 Agustus 2026",
          path: "assets/images/sertifikat/Sertifikat IT Audit Fundamentals & Professional Standards.pdf",
          desc: "Sertifikat resmi kelulusan kursus online dan transkrip nilai IT Audit Fundamentals & Professional Standards oleh Codelamp Indonesia, mencakup standar audit SI, manajemen risiko, dan tata kelola TI."
        },
        {
          title: "Sertifikat Workshop Jangan Sampai Audit Gagal Hanya Karena SoA",
          issuer: "Codelamp Indonesia (No: 2674/CD/W/VIII/2026)",
          category: "IT Audit & Compliance",
          date: "07 Juni 2026",
          path: "assets/images/sertifikat/Sertifikat Jangan Sampai Audit Gagal Hanya Karena SoA.pdf",
          desc: "Sertifikat workshop audit keamanan informasi oleh Codelamp Indonesia (Narasumber: Rahim Isnan Al-Hilman), membahas penyusunan Statement of Applicability (SoA) ISO 27001 dan strategi persiapan audit sistem informasi."
        },
        {
          title: "Sertifikat Workshop Third-Party Risk Management for Vendors",
          issuer: "Codelamp Indonesia (No: 2671/CD/W/VIII/2026)",
          category: "IT Governance & Risk Management",
          date: "26 April 2026",
          path: "assets/images/sertifikat/Sertifikat Third-party risk management for vendors.pdf",
          desc: "Sertifikat workshop tata kelola TI dari Codelamp Indonesia (Narasumber: Pratomo Djati Nugroho), membahas identifikasi, penilaian risiko vendor/pihak ketiga, dan kepatuhan standar keamanan informasi."
        },
        {
          title: "Sertifikat Workshop WAF Bypass & Injection 101",
          issuer: "Codelamp Indonesia (No: 2675/CD/W/VIII/2026)",
          category: "Cybersecurity & Web App Security",
          date: "14 Juni 2026",
          path: "assets/images/sertifikat/Sertifikat WAF Bypass & Injection 101.pdf",
          desc: "Sertifikat workshop keamanan aplikasi web oleh Codelamp Indonesia (Narasumber: Maestro Purnama F.), mendalami teknik pengujian pertahanan Web Application Firewall (WAF), payload obfuscation, dan remediasi kerentanan injeksi."
        },
        {
          title: "Sertifikat Workshop API Hacking Mastery: Eksploitasi REST GraphQL",
          issuer: "Codelamp Indonesia (No: 2639/CD/W/VIII/2026)",
          category: "Cybersecurity & API Security",
          date: "10 Mei 2026",
          path: "assets/images/sertifikat/Sertifikat Peserta API hacking Mastery Eksploitasi REST GraphQL untuk pemula.pdf",
          desc: "Sertifikat peserta workshop API Hacking Mastery oleh Codelamp Indonesia (Narasumber: Andreas Angger), mempelajari eksploitasi dan pengamanan endpoint REST API serta GraphQL."
        },
        {
          title: "Sertifikat Workshop Modern Phishing Attacks Explained",
          issuer: "Codelamp Indonesia (No: 2661/CD/W/VIII/2026)",
          category: "Cybersecurity & Social Engineering",
          date: "09 Agustus 2026",
          path: "assets/images/sertifikat/Sertifikat Modern Phishing Attacks Explained.pdf",
          desc: "Sertifikat workshop keamanan siber dari Codelamp Indonesia mengenai analisis mendalam serangan phishing modern, vektor rekayasa sosial, dan strategi mitigasi organisasi."
        },
        {
          title: "Sertifikat Workshop Threat Hunting 101: Finding Attacks",
          issuer: "Codelamp Indonesia (No: 2662/CD/W/VIII/2026)",
          category: "Cybersecurity & Threat Hunting",
          date: "02 Agustus 2026",
          path: "assets/images/sertifikat/Sertifikat Finding Attacks.pdf",
          desc: "Sertifikat workshop Threat Hunting 101: Finding Attacks oleh Codelamp Indonesia (Narasumber: Muhammad Farhan Madani), fokus pada teknik proaktif menemukan jejak serangan siber."
        },
        {
          title: "Sertifikat Workshop AI-Powered Software Engineering Practical AI Skills",
          issuer: "Codelamp Indonesia (No: 2673/CD/W/VIII/2026)",
          category: "Artificial Intelligence & Software Engineering",
          date: "31 Mei 2026",
          path: "assets/images/sertifikat/Sertifikat AI-Powered Software Enginering Practical AI Skills.pdf",
          desc: "Sertifikat workshop AI-Powered Software Engineering oleh Codelamp Indonesia, mempelajari integrasi AI tools untuk efisiensi coding, refactoring, code analysis, dan software workflow modern."
        },
        {
          title: "Sertifikat Workshop One API, Many AI Models: OpenRouter",
          issuer: "Codelamp Indonesia (No: 2663/CD/W/VIII/2026)",
          category: "Artificial Intelligence & LLM",
          date: "12 Juli 2026",
          path: "assets/images/sertifikat/Sertifikat OpenRouter.pdf",
          desc: "Sertifikat workshop integrasi OpenRouter oleh Codelamp Indonesia, mempelajari pemanfaatan satu API universal untuk menghubungkan berbagai model Large Language Model (LLM)."
        },
        {
          title: "Sertifikat E-Course Belajar Fullstack Web Programming with AI",
          issuer: "Eduwork.id (Verified ID: 144476-2730)",
          category: "Fullstack Web Development",
          date: "2024",
          path: "assets/images/sertifikat/Sertifikat Belajar Fullstack Di Eduwork.pdf",
          desc: "Sertifikat resmi kelulusan e-course Fullstack Web Programming with AI di platform Eduwork.id, membuktikan penguasaan pengembangan frontend, backend, database, dan pemanfaatan AI dalam workflow coding."
        },
        {
          title: "Sertifikat Start Creating With Unity",
          issuer: "Codelamp Indonesia / Unity",
          category: "Game Development & 3D",
          date: "2026",
          path: "assets/images/sertifikat/Sertifikat Start Creating With Unity.pdf",
          desc: "Sertifikat kelulusan kursus pengembangan game dan aplikasi interaktif 3D menggunakan Unity Engine dan pemrograman C#."
        },
        {
          title: "Sertifikat Introduction to Game Design Documentation",
          issuer: "Codelamp Indonesia (No: 2677/CD/C/VIII/2026)",
          category: "Game Design & Documentation",
          date: "15 Agustus 2026",
          path: "assets/images/sertifikat/Sertifikat Introduction to Game Design Documentation.pdf",
          desc: "Sertifikat resmi kelulusan kursus online dan transkrip nilai Game Design Documentation oleh Codelamp Indonesia, mencakup penyusunan Game Design Document (GDD), core loop, dan arsitektur gameplay."
        },
        {
          title: "Sertifikat Workshop Game Direction Fundamentals",
          issuer: "Codelamp Indonesia (No: 2672/CD/W/VIII/2026)",
          category: "Game Development & Direction",
          date: "17 Mei 2026",
          path: "assets/images/sertifikat/Sertifikat Direction Fundamentals.pdf",
          desc: "Sertifikat workshop Game Direction Fundamentals oleh Codelamp Indonesia, mempelajari dasar-dasar penyutradaraan game, perancangan visi kreatif, mekanik permainan, dan alur pengalaman pemain."
        },
        {
          title: "Sertifikat Workshop Spine 2D for Beginners: Character Rigging",
          issuer: "Codelamp Indonesia (No: 2676/CD/W/VIII/2026)",
          category: "Game Art & 2D Animation",
          date: "05 Juli 2026",
          path: "assets/images/sertifikat/Sertifikat Spine 2D for Beginners How Game Characters Are Rigged.pdf",
          desc: "Sertifikat workshop animasi 2D oleh Codelamp Indonesia, mendalami teknik skeletal rigging, mesh deformation, dan pipeline animasi karakter game 2D menggunakan Spine."
        }
      ]
    }
  };

  // State preservation to avoid any jump to top when closing modals
  let lastSavedScrollPos = 0;

  function triggerDirectDownload(url, filename) {
    if (!url) return;
    const link = document.createElement('a');
    link.href = encodeURI(url);
    link.download = filename || url.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 150);
  }

  const docShowcaseModal = document.getElementById('doc-showcase-modal');
  const docModalClose = document.getElementById('doc-modal-close');
  const docModalTitle = document.getElementById('doc-modal-title');
  const docModalSubtitle = document.getElementById('doc-modal-subtitle');
  const docModalIconContainer = document.getElementById('doc-modal-icon-container');
  const docModalBody = document.getElementById('doc-modal-body');

  const pdfViewerModal = document.getElementById('pdf-viewer-modal');
  const pdfViewerClose = document.getElementById('pdf-viewer-close');
  const pdfViewerBack = document.getElementById('pdf-viewer-back');
  const pdfViewerTitle = document.getElementById('pdf-viewer-title');
  const pdfViewerExternal = document.getElementById('pdf-viewer-external');
  const pdfViewerDownload = document.getElementById('pdf-viewer-download');
  const pdfViewerContainer = document.getElementById('pdf-viewer-container');

  function openPdfViewer(path, title) {
    if (!pdfViewerModal) return;
    lastSavedScrollPos = window.scrollY;
    const encodedPath = encodeURI(path);
    if (pdfViewerTitle) pdfViewerTitle.textContent = title;
    if (pdfViewerExternal) pdfViewerExternal.href = encodedPath;
    if (pdfViewerDownload) {
      pdfViewerDownload.href = encodedPath;
      pdfViewerDownload.setAttribute('data-active-path', path);
      pdfViewerDownload.setAttribute('data-active-title', title);
    }

    if (pdfViewerContainer) {
      pdfViewerContainer.innerHTML = `
        <iframe src="${encodedPath}#toolbar=1&navpanes=0" style="width:100%;height:100%;border:none;border-radius:12px;" title="${title}">
          <div style="padding: 2.5rem; text-align: center; color: var(--text-secondary);">
            <i class="fa-solid fa-file-pdf fa-4x" style="color: #ef4444; margin-bottom: 1rem;"></i>
            <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Dokumen PDF Siap Dibuka</h4>
            <p>Gunakan tombol di bawah untuk membuka atau mengunduh dokumen secara langsung.</p>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="${encodedPath}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka di Tab Baru</a>
              <button type="button" class="btn btn-secondary direct-pdf-dl"><i class="fa-solid fa-download"></i> Download PDF</button>
            </div>
          </div>
        </iframe>
      `;

      const directDlBtn = pdfViewerContainer.querySelector('.direct-pdf-dl');
      directDlBtn?.addEventListener('click', () => {
        triggerDirectDownload(path, `${title}.pdf`);
      });
    }

    pdfViewerModal.classList.add('active');
  }

  function closePdfViewer() {
    if (!pdfViewerModal) return;
    pdfViewerModal.classList.remove('active');
    if (pdfViewerContainer) pdfViewerContainer.innerHTML = '';
  }

  pdfViewerClose?.addEventListener('click', (e) => {
    e.preventDefault();
    closePdfViewer();
  });

  pdfViewerBack?.addEventListener('click', (e) => {
    e.preventDefault();
    closePdfViewer();
    if (docShowcaseModal && !docShowcaseModal.classList.contains('active')) {
      docShowcaseModal.classList.add('active');
    }
  });

  pdfViewerDownload?.addEventListener('click', (e) => {
    e.preventDefault();
    const activePath = pdfViewerDownload.getAttribute('data-active-path');
    const activeTitle = pdfViewerDownload.getAttribute('data-active-title') || 'document';
    if (activePath) {
      triggerDirectDownload(activePath, `${activeTitle}.pdf`);
    }
  });

  pdfViewerModal?.addEventListener('click', (e) => {
    if (e.target === pdfViewerModal) closePdfViewer();
  });

  function openDocShowcase(catKey) {
    const data = documentData[catKey];
    if (!data || !docShowcaseModal) return;
    lastSavedScrollPos = window.scrollY;

    docModalTitle.textContent = data.title;
    docModalSubtitle.textContent = data.subtitle;
    docModalIconContainer.innerHTML = `<i class="${data.icon}"></i>`;

    docModalBody.innerHTML = data.items.map(item => {
      const encodedPath = encodeURI(item.path);
      return `
      <div class="doc-item-card">
        <div class="doc-item-info">
          <div class="doc-pdf-icon"><i class="fa-solid fa-file-pdf"></i></div>
          <div class="doc-item-details">
            <h5>${item.title}</h5>
            <div class="doc-item-meta">
              <span class="doc-meta-badge">${item.category}</span>
              <span><i class="fa-solid fa-building"></i> ${item.issuer}</span>
              <span><i class="fa-solid fa-calendar-days"></i> ${item.date}</span>
            </div>
            <p class="doc-item-desc">${item.desc}</p>
          </div>
        </div>
        <div class="doc-item-actions">
          <button type="button" class="btn btn-sm btn-primary view-pdf-btn" data-path="${item.path}" data-title="${item.title}">
            <i class="fa-solid fa-eye"></i> <span>Preview PDF</span>
          </button>
          <a href="${encodedPath}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary secondary-doc-btn" title="Buka di Tab Baru">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> <span>Tab Baru</span>
          </a>
          <button type="button" class="btn btn-sm btn-outline secondary-doc-btn direct-item-dl" data-path="${item.path}" data-title="${item.title}" title="Unduh Dokumen">
            <i class="fa-solid fa-download"></i> <span>Download</span>
          </button>
        </div>
      </div>
    `;
    }).join('');

    docModalBody.querySelectorAll('.view-pdf-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const path = btn.getAttribute('data-path');
        const title = btn.getAttribute('data-title');
        openPdfViewer(path, title);
      });
    });

    docModalBody.querySelectorAll('.direct-item-dl').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const path = btn.getAttribute('data-path');
        const title = btn.getAttribute('data-title');
        triggerDirectDownload(path, `${title}.pdf`);
      });
    });

    docShowcaseModal.classList.add('active');
  }

  function closeDocShowcase() {
    if (docShowcaseModal) docShowcaseModal.classList.remove('active');
  }

  docModalClose?.addEventListener('click', (e) => {
    e.preventDefault();
    closeDocShowcase();
  });

  docShowcaseModal?.addEventListener('click', (e) => {
    if (e.target === docShowcaseModal) closeDocShowcase();
  });

  document.querySelectorAll('.ach-cat-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-cat');
      openDocShowcase(cat);
    });
  });

  const achTabBtns = document.querySelectorAll('.ach-tab-btn');
  const achCatCards = document.querySelectorAll('.ach-cat-card');

  achTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      achTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.getAttribute('data-tab');

      achCatCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (tab === 'all' || cat === tab) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      if (tab !== 'all' && documentData[tab]) {
        openDocShowcase(tab);
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePdfViewer();
      closeDocShowcase();
      if (projectModal) projectModal.classList.remove('active');
      if (lightboxModal) lightboxModal.classList.remove('active');
    }
  });

  /* --- 9. FAQ ACCORDION --- */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const faqItem = q.parentElement;
      const isOpen = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const ans = item.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isOpen) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* --- 10. LIGHTBOX MODAL SYSTEM --- */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxGraphic = document.getElementById('lightbox-graphic');
  const lightboxCaption = document.getElementById('lightbox-caption');

  document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      lastSavedScrollPos = window.scrollY;
      const caption = trigger.getAttribute('data-caption') || 'View Detail';
      if (lightboxCaption) lightboxCaption.textContent = caption;
      if (lightboxGraphic) lightboxGraphic.innerHTML = `<i class="fa-solid fa-medal"></i>`;
      lightboxModal?.classList.add('active');
    });
  });

  lightboxClose?.addEventListener('click', (e) => {
    e.preventDefault();
    lightboxModal?.classList.remove('active');
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('active');
    }
  });

  /* --- 11. PROJECT DETAIL MODAL --- */
  const projectModal = document.getElementById('project-modal');
  const pModalClose = document.getElementById('p-modal-close');
  const pModalTitle = document.getElementById('p-modal-title');
  const pModalCat = document.getElementById('p-modal-cat');
  const pModalBody = document.getElementById('p-modal-body');
  const pModalLive = document.getElementById('p-modal-live');
  const pModalGithub = document.getElementById('p-modal-github');

  const sampleProjects = {
    p1: {
      title: "Personal Portfolio",
      cat: "Web Development • UI Design",
      status: "Live",
      year: "2026",
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "i18n Engine", "Canvas API"],
      liveUrl: "https://musyafaanasrullah.github.io/portofoliomusyafaanasrullah/",
      repoUrl: "https://github.com/MusyafaAnasrullah/portofoliomusyafaanasrullah",
      overview: "Situs portofolio personal profesional yang dirancang khusus untuk memenuhi standar recruiter Software Engineering Internship. Dibangun tanpa dependency berat untuk memastikan performa ekstrem dan aksesibilitas tinggi.",
      problem: "Membutuhkan platform personal portfolio yang tidak hanya menampilkan karya, tetapi menunjukkan fondasi rekayasa perangkat lunak, kebersihan kode, performa cepat, dan aksesibilitas multi-bahasa.",
      solution: "Membangun SPA responsif menggunakan HTML5, Tailwind CSS, dan Vanilla JavaScript murni dengan i18n dictionary engine, particle background canvas, serta modal interaktif tanpa external library berat.",
      architecture: "Client-side Single Page Application (SPA) dengan Vanilla JS Component Architecture, LocalStorage persistence untuk preferensi tema/kontak, dan DOM state management terpusat.",
      features: [
        "Light/Dark Mode toggle dengan state persistence",
        "2 dukungan bahasa (Indonesia & Inggris) dengan custom i18n dictionary",
        "Cyber Particle Canvas background rendering",
        "Interactive Project Modal & Document Lightbox Viewer",
        "Zero-dependency lightweight client execution"
      ],
      challenges: "Mengoptimalkan event listener scroll dan render loop Canvas API agar tetap stabil di 60 FPS pada perangkat mobile berdaya rendah tanpa memory leak.",
      learned: "Pendalaman arsitektur DOM tanpa framework, manajemen memori pada Canvas API, modularisasi i18n, serta penerapan desain Tailwind CSS modern."
    },
    p2: {
      title: "Portfolio Software Engineering Platform",
      cat: "Web Development • Dashboard",
      status: "In Progress",
      year: "2026",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Framer Motion"],
      liveUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      repoUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      overview: "Platform showcase proyek rekayasa perangkat lunak dengan fitur pengolahan data proyek dinamis, galeri bermutu tinggi, dan analisis stack teknis.",
      problem: "Showcase proyek statis sering kali kaku dan sulit diperbarui saat jumlah proyek rekayasa bertambah pesat.",
      solution: "Membuat platform fullstack berbasis React & Node.js dengan RESTful API untuk mengelola metadata proyek, tagging teknologi, dan statistik repositori secara otomatis.",
      architecture: "PERN Stack (PostgreSQL, Express, React, Node.js) dengan decoupled REST API, JWT authentication untuk admin dashboard, dan client-side caching.",
      features: [
        "Galeri proyek interaktif dengan filter kategori multi-tag",
        "Modal detail arsitektur proyek dan visualizer tech stack",
        "REST API backend dengan CRUD endpoint terproteksi",
        "Sistem caching dynamic content untuk respon sub-100ms"
      ],
      challenges: "Merancang skema relasional PostgreSQL yang fleksibel untuk menyimpan metadata proyek heterogen tanpa merusak struktur relasi tag dan visualizer.",
      learned: "Penerapan clean REST API design pattern, React hooks state orchestration, dan optimasi query PostgreSQL."
    },
    p3: {
      title: "Finance Tracker & Analytics",
      cat: "Web Development • Dashboard • API",
      status: "In Progress",
      year: "2025",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js"],
      liveUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      repoUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      overview: "Aplikasi pelacak keuangan personal dengan grafik analitik real-time, pengelompokan transaksi otomatis, dan laporan arus kas kuartalan.",
      problem: "Pencatatan keuangan manual sering kali tidak konsisten, rentan kesalahan manusia, dan sulit dianalisis tren jangka panjangnya.",
      solution: "Mengembangkan platform analitik berbasis Next.js dan PostgreSQL dengan kalkulasi agregasi otomatis dan visualisasi interaktif.",
      architecture: "Next.js App Router (SSR/SSG), Prisma ORM dengan PostgreSQL, Server Actions untuk mitigasi mutation latency, dan Chart.js visualizer.",
      features: [
        "Grafik tren pengeluaran dan pemasukan real-time",
        "Kategorisasi transaksi otomatis dengan rule engine",
        "Ekspor laporan bulanan/tahunan ke format PDF & CSV",
        "Manajemen multi-dompet dan konversi mata uang"
      ],
      challenges: "Menjaga presisi perhitungan numerik desimal dan konsistensi transaksi database ACID saat concurrent request terjadi.",
      learned: "Penggunaan Prisma ORM, SQL aggregation query, TypeScript strict mode, dan Server-Side Rendering pada Next.js."
    },
    p4: {
      title: "Enterprise Admin Dashboard",
      cat: "Web Development • Dashboard",
      status: "In Progress",
      year: "2025",
      tech: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS", "Pinia"],
      liveUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      repoUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      overview: "Panel administrasi serbaguna dengan manajemen hak akses (RBAC), audit trail aktivitas pengguna, dan pemantauan sistem real-time.",
      problem: "Perusahaan memerlukan portal internal yang aman untuk mengontrol pengguna, memantau log sistem, dan mengelola hak akses granular.",
      solution: "Membangun dashboard enterprise berbasis Vue 3 dan Laravel REST API dengan sistem autentikasi Sanctum dan Role-Based Access Control.",
      architecture: "Decoupled Single Page Application (Vue.js frontend) + Laravel REST API backend dengan MySQL relational database.",
      features: [
        "Role-Based Access Control (RBAC) granular",
        "Real-time activity audit logging & security alert",
        "Dynamic data tables dengan server-side pagination & sorting",
        "System health indicators and metrics chart"
      ],
      challenges: "Mengimplementasikan permission checking yang efisien di frontend tanpa memicu redundant API authorization check ke server.",
      learned: "Prinsip RBAC, arsitektur decoupled Vue + Laravel, serta optimasi SQL query pagination."
    },
    p5: {
      title: "Inventory Management System",
      cat: "Web Development • Dashboard • API",
      status: "In Progress",
      year: "2025",
      tech: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
      liveUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      repoUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      overview: "Sistem manajemen inventaris untuk pelacakan stok produk real-time, peringatan reorder otomatis, dan pelaporan pergerakan barang.",
      problem: "Ketidakcocokan stok akibat pencatatan manual barang masuk dan keluar yang menyebabkan kerugian operasional.",
      solution: "Membangun sistem inventaris berbasis Node.js & PostgreSQL dengan caching Redis dan containerization Docker untuk kemudahan deployment.",
      architecture: "Micro-monolith Express backend dengan Redis in-memory cache layer, PostgreSQL relational DB, dan Docker Compose orchestration.",
      features: [
        "Real-time stock monitoring & auto reorder alert",
        "Integrasi barcode scanner via browser Web Cam API",
        "Laporan histori mutasi barang masuk & keluar",
        "Dockerized environment untuk dev & production parity"
      ],
      challenges: "Menghindari race condition pada pembaharuan stok barang secara simultan dari beberapa mesin kasir/gudang.",
      learned: "Transaction locking di PostgreSQL, pemanfaatan Redis cache, dan containerization dengan Docker."
    },
    p6: {
      title: "Point of Sale (POS) System",
      cat: "Web Development • Dashboard • API",
      status: "In Progress",
      year: "2026",
      tech: ["Next.js", "Node.js", "MySQL", "Redis", "Tailwind CSS"],
      liveUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      repoUrl: "https://github.com/MusyafaAnasrullah/musyafaanasrullah",
      overview: "Sistem kasir modern berbasis web yang dirancang untuk transaksi kilat, cetak struk thermal, dan rekap penjualan otomatis.",
      problem: "Proses transaksi ritel yang lambat di kasir mengakibatkan antrean panjang dan pencatatan kas harian yang tidak akurat.",
      solution: "Membangun aplikasi POS ringan berkecepatan tinggi dengan offline-first capability dan integrasi driver cetak thermal ESC/POS.",
      architecture: "Next.js Web App dengan Service Worker offline caching, Node.js API Gateway, Redis session storage, dan MySQL DB.",
      features: [
        "Checkout transaksi ultra-cepat dengan keyboard shortcuts",
        "Pencetakan nota transaksi thermal via Web Bluetooth/USB",
        "Rekapitulasi omzet dan profit harian otomatis",
        "Offline transaction queue dengan auto-sync saat koneksi pulih"
      ],
      challenges: "Memastikan antrean transaksi offline dapat tersinkronisasi tanpa duplikasi atau konflik ID data.",
      learned: "Konsep offline-first design, Service Worker caching, dan protokol percetakan thermal ESC/POS."
    }
  };

  document.querySelectorAll('.demo-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      lastSavedScrollPos = window.scrollY;
      const projId = trigger.getAttribute('data-proj');
      const data = sampleProjects[projId];
      if (data) {
        if (pModalTitle) pModalTitle.textContent = data.title;
        if (pModalCat) pModalCat.textContent = data.cat;

        if (pModalLive) {
          pModalLive.href = data.liveUrl || 'https://github.com/MusyafaAnasrullah/musyafaanasrullah';
          pModalLive.setAttribute('target', '_blank');
          pModalLive.setAttribute('rel', 'noopener noreferrer');
        }
        if (pModalGithub) {
          pModalGithub.href = data.repoUrl || 'https://github.com/MusyafaAnasrullah/musyafaanasrullah';
          pModalGithub.setAttribute('target', '_blank');
          pModalGithub.setAttribute('rel', 'noopener noreferrer');
        }

        // Build rich modal body matching Section 9 requirements
        const statusClass = data.status === 'Live' ? 'status-live' : data.status === 'In Progress' ? 'status-progress' : 'status-completed';
        const techBadges = data.tech.map(t => `<span class="project-tech-badge">${t}</span>`).join('');
        const featureList = data.features.map(f => `<li><i class="fa-solid fa-circle-check text-blue-400 mr-2"></i> ${f}</li>`).join('');

        if (pModalBody) {
          pModalBody.innerHTML = `
            <div class="p-modal-meta flex items-center gap-3 mb-4">
              <span class="project-badge ${statusClass}">${data.status}</span>
              <span class="p-modal-year text-slate-400 text-sm"><i class="fa-regular fa-calendar mr-1"></i> ${data.year}</span>
            </div>
            
            <div class="p-modal-section mb-5">
              <h4 class="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2"><i class="fa-solid fa-circle-info mr-2"></i> Project Overview</h4>
              <p class="p-modal-desc text-slate-300 leading-relaxed text-sm">${data.overview}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div class="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <h5 class="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1.5"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i> Problem Statement</h5>
                <p class="text-xs text-slate-300 leading-relaxed">${data.problem}</p>
              </div>
              <div class="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <h5 class="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1.5"><i class="fa-solid fa-lightbulb mr-1.5"></i> Engineering Solution</h5>
                <p class="text-xs text-slate-300 leading-relaxed">${data.solution}</p>
              </div>
            </div>

            <div class="p-modal-section mb-5">
              <h4 class="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-2"><i class="fa-solid fa-sitemap mr-2"></i> System Architecture</h4>
              <p class="text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono">${data.architecture}</p>
            </div>

            <div class="p-modal-section mb-5">
              <h4 class="text-sm uppercase tracking-wider text-cyan-400 font-semibold mb-2"><i class="fa-solid fa-layer-group mr-2"></i> Tech Stack</h4>
              <div class="p-modal-tech flex flex-wrap gap-2">${techBadges}</div>
            </div>

            <div class="p-modal-section mb-5">
              <h4 class="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2"><i class="fa-solid fa-list-check mr-2"></i> Key Engineering Features</h4>
              <ul class="p-modal-features space-y-1.5 text-xs text-slate-300">${featureList}</ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <h5 class="text-xs uppercase tracking-wider text-rose-400 font-semibold mb-1.5"><i class="fa-solid fa-fire-burner mr-1.5"></i> Engineering Challenges</h5>
                <p class="text-xs text-slate-300 leading-relaxed">${data.challenges}</p>
              </div>
              <div class="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl">
                <h5 class="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-1.5"><i class="fa-solid fa-graduation-cap mr-1.5"></i> Key Learnings</h5>
                <p class="text-xs text-slate-300 leading-relaxed">${data.learned}</p>
              </div>
            </div>
          `;
        }
        projectModal?.classList.add('active');
      }
    });
  });

  pModalClose?.addEventListener('click', (e) => {
    e.preventDefault();
    projectModal?.classList.remove('active');
  });

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
    }
  });

  /* --- 12. FLOATING SCROLL PROGRESS & BACK TO TOP WIDGET --- */
  const scrollWidget = document.getElementById('scroll-progress-widget');
  const progressCircle = document.getElementById('progress-ring-circle');
  const scrollPctText = document.getElementById('scroll-pct-text');
  const circleRadius = 23;
  const circumference = 2 * Math.PI * circleRadius; // ~144.513

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;
  }

  function handleScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
    const percent = Math.round(progress * 100);

    if (progressCircle) {
      const offset = circumference - (progress * circumference);
      progressCircle.style.strokeDashoffset = offset;
    }

    if (scrollPctText) {
      scrollPctText.textContent = `${percent}%`;
    }

    if (scrollWidget) {
      if (scrollTop > 180) {
        scrollWidget.classList.add('visible');
      } else {
        scrollWidget.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScrollProgress, { passive: true });
  handleScrollProgress();

  scrollWidget?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  scrollWidget?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  /* --- 13. CONTACT FORM SUBMISSION & LOCALSTORAGE DATABASE --- */
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Save to LocalStorage Database
    const existingMsgs = JSON.parse(localStorage.getItem('musyafa_contact_messages') || '[]');
    existingMsgs.push({
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('musyafa_contact_messages', JSON.stringify(existingMsgs));

    showToast("Pesan Anda telah berhasil terkirim! Musyafa akan segera merespons.");
    contactForm.reset();
  });


  /* ============================================================
     🎯 SENIOR-LEVEL INTERACTIVITY ENGINE
     ============================================================ */

  /* --- A. CURSOR SPOTLIGHT TRACKING ON CARDS --- */
  const interactiveCards = document.querySelectorAll(
    '.glass-panel, .stat-card, .skill-card, .service-card, .project-card, .biodata-card, .story-panel, .exp-column, .ach-card, .contact-card, .contact-form-card'
  );

  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  /* --- B. 3D TILT EFFECT ON CARDS --- */
  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -7;
      const tiltY = dx * 7;
      card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) scale(1.018)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* --- C. RIPPLE CLICK EFFECT ON BUTTONS & TAGS --- */
  const rippleTargets = document.querySelectorAll(
    '.btn, .social-icon, .filter-btn, .theme-toggle, .tech-badge, .value-tag, .nav-link, .drawer-link'
  );

  rippleTargets.forEach(el => {
    el.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
      const rect = this.getBoundingClientRect();

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top  = `${e.clientY - rect.top  - radius}px`;
      circle.classList.add('ripple');

      const existing = this.querySelector('span.ripple');
      if (existing) existing.remove();
      this.appendChild(circle);

      setTimeout(() => circle.remove(), 700);
    });
  });

  /* --- D. MAGNETIC BUTTON ATTRACTION (Hero CTAs) --- */
  const magnetBtns = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-discord');
  magnetBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width  / 2);
      const dy = e.clientY - (rect.top  + rect.height / 2);
      btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* --- E. SCROLL REVEAL ANIMATION --- */
  const revealEls = document.querySelectorAll(
    '.section-header, .stat-card, .skill-card, .service-card, .project-card, .timeline-item, .exp-column, .ach-card, .contact-card, .contact-form-card, .biodata-card, .story-panel, .community-content, .faq-item, .value-tag, .tech-badge'
  );

  // Inject base hidden state via JS (no layout shift)
  revealEls.forEach((el, i) => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s cubic-bezier(0.4,0,0.2,1) ${(i % 8) * 60}ms, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${(i % 8) * 60}ms`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* --- F. ACTIVE SECTION HIGHLIGHT (Nav glow) --- */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links .nav-link, .drawer-links .drawer-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('nav-active', href === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));

  /* --- G. TYPING CURSOR SHIMMER ON HERO NAME --- */
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.style.backgroundSize = '200% auto';
    let pos = 0;
    setInterval(() => {
      pos = (pos + 0.5) % 200;
      heroName.style.backgroundPosition = `${pos}% center`;
    }, 30);
  }

  /* --- H. CARD SHINE SWEEP ON HOVER --- */
  const shineCards = document.querySelectorAll('.project-card, .service-card, .ach-card');
  shineCards.forEach(card => {
    const shine = document.createElement('div');
    shine.classList.add('card-shine');
    card.appendChild(shine);
  });

  /* --- I. STATS COUNT-UP ANIMATION --- */
  const statNums = document.querySelectorAll('.stat-number');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = '1';
      const target = parseInt(entry.target.textContent.replace(/\D/g, ''), 10) || 0;
      const suffix = entry.target.textContent.replace(/[0-9]/g, '').trim();
      let current = 0;
      const step  = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        entry.target.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 25);
    });
  }, { threshold: 0.5 });

  statNums.forEach(n => countObserver.observe(n));

});
