// 翻訳データ
const translations = {
  en: {
    // Header
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.skills': 'skills',
    'nav.blog': 'blog',
    'nav.contact': 'contact',
    'menu.title': 'Menu',
    
    // Hero Section
    'hero.greeting': "Hi, I'm",
    'hero.description': "I'm a university student in Aichi, studying programming.",
    'hero.contact-btn': 'Get In Touch',
    'hero.github-btn': 'View GitHub',
    
    // About Section
    'about.title': 'About Me',
    'about.currently-learning': 'Currently Learning',
    'about.currently-learning-desc': "I'm currently working on a desktop application using React, Electron, and TypeScript for the U-22 Programming Contest. In university, I'm also learning object-oriented programming with Java as part of my coursework.",
    'about.favorite-tech': 'Favorite Technologies',
    'about.future-goals': 'Future Goals',
    'about.future-goals-desc': 'My goal is to become a full-stack engineer with expertise in both backend and frontend development. After gaining hands-on experience in the field, I aim to grow into a highly skilled developer capable of contributing to open-source projects.',
    'about.overview': 'Overview.',
    'about.overview-desc': "Hi, I'm Taiga Oishi, a student majoring in Computer Systems at the Faculty of Information Science at Aichi Institute of Technology. My hobbies include watching movies and reading. I started learning programming in May of my first year at university, and since my second year, I've been committing code to GitHub every day to keep growing as a developer.",
    
    // Experience Section
    'experience.title': 'Experience',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Dev',
    'skills.learning': 'Currently Learning',
    
    // Blog Section
    'blog.title': 'Blog & Articles',
    'blog.tech-blog': 'Tech Blog',
    'blog.tech-blog-desc': 'Personal blog where I share my learning journey and technical insights',
    'blog.zenn-desc': 'Technical articles and tutorials on modern web development',
    'blog.qiita-desc': 'Programming tips and solutions to common development challenges',
    'blog.not-available': '(NOT AVAILABLE)',
    'blog.visit-qiita': 'Visit Qiita',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.connect-title': "Let's Connect",
    'contact.connect-desc': "I'm always open to connecting with fellow developers, collaborators, or anyone who shares an interest in tech. Feel free to reach out — whether it's about a project or just to say hi!",
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.twitter': 'X(Twitter)',
    'contact.form-title': 'Send a Message',
    'contact.form-desc': "Fill out the form below and I'll get back to you soon",
    'contact.name-placeholder': 'Your Name',
    'contact.email-placeholder': 'Your Email',
    'contact.message-placeholder': 'Your Message',
    'contact.send-btn': 'Send Message →'
  },
  
  ja: {
    // Header
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.experience': '経験',
    'nav.skills': 'スキル',
    'nav.blog': 'ブログ',
    'nav.contact': 'お問い合わせ',
    'menu.title': 'メニュー',
    
    // Hero Section
    'hero.greeting': 'こんにちは、私は',
    'hero.description': '愛知県の大学生で、プログラミングを学んでいます。',
    'hero.contact-btn': 'お問い合わせ',
    'hero.github-btn': 'GitHub を見る',
    
    // About Section
    'about.title': '私について',
    'about.currently-learning': '現在学習中',
    'about.currently-learning-desc': '現在、U-22プログラミングコンテスト向けにReact、Electron、TypeScriptを使用したデスクトップアプリケーションを開発しています。大学では、授業の一環としてJavaでオブジェクト指向プログラミングも学んでいます。',
    'about.favorite-tech': '好きな技術',
    'about.future-goals': '将来の目標',
    'about.future-goals-desc': 'バックエンドとフロントエンドの両方に精通したフルスタックエンジニアになることが目標です。実務経験を積んだ後は、オープンソースプロジェクトに貢献できる高度なスキルを持つ開発者に成長したいと考えています。',
    'about.overview': '概要',
    'about.overview-desc': 'こんにちは、愛知工業大学情報科学部コンピュータシステム専攻の学生、大石大雅です。趣味は映画鑑賞と読書です。大学1年生の5月からプログラミングの学習を始め、2年生からは開発者として成長し続けるために毎日GitHubにコードをコミットしています。',
    
    // Experience Section
    'experience.title': '経験',
    
    // Skills Section
    'skills.title': 'スキル・技術',
    'skills.frontend': 'フロントエンド',
    'skills.backend': 'バックエンド',
    'skills.tools': 'ツール・開発',
    'skills.learning': '学習中',
    
    // Blog Section
    'blog.title': 'ブログ・記事',
    'blog.tech-blog': 'Tech Blog',
    'blog.tech-blog-desc': '学習の過程や技術的な洞察を共有する個人ブログ',
    'blog.zenn-desc': 'モダンなウェブ開発に関する技術記事とチュートリアル',
    'blog.qiita-desc': 'プログラミングのコツや一般的な開発課題の解決策',
    'blog.not-available': '（利用不可）',
    'blog.visit-qiita': 'Qiitaを見る',
    
    // Contact Section
    'contact.title': 'お問い合わせ',
    'contact.connect-title': 'つながりましょう',
    'contact.connect-desc': '開発者仲間、コラボレーター、技術に興味のある方とのつながりを大切にしています。プロジェクトのことでも、ただのご挨拶でも、お気軽にお声がけください！',
    'contact.email': 'メール',
    'contact.github': 'GitHub',
    'contact.twitter': 'X(Twitter)',
    'contact.form-title': 'メッセージを送る',
    'contact.form-desc': '下記のフォームにご記入いただければ、すぐにご返信いたします',
    'contact.name-placeholder': 'お名前',
    'contact.email-placeholder': 'メールアドレス',
    'contact.message-placeholder': 'メッセージ',
    'contact.send-btn': 'メッセージを送信 →'
  }
};

// 現在の言語を取得
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// 言語を設定
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// 翻訳テキストを取得
function translate(key) {
  const currentLang = getCurrentLanguage();
  return translations[currentLang][key] || translations['en'][key] || key;
}

// すべてのテキストを更新
function updateAllTexts() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translate(key);
    } else {
      element.textContent = translate(key);
    }
  });
}

// 言語ボタンの表示を更新
function updateLanguageButton() {
  const currentLang = getCurrentLanguage();
  const langButton = document.getElementById('current-lang');
  if (langButton) {
    langButton.textContent = currentLang === 'ja' ? '🇯🇵 JP' : '🇺🇸 EN';
  }
}

// 言語切り替え機能を初期化
function initLanguageToggle() {
  const languageToggle = document.getElementById('language-toggle');
  
  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === 'en' ? 'ja' : 'en';
      setLanguage(newLang);
      updateLanguageButton();
      updateAllTexts();
    });
  }
  
  // 初期化時に表示を更新
  updateLanguageButton();
  updateAllTexts();
}

// エクスポート
export { initLanguageToggle, translate, getCurrentLanguage };