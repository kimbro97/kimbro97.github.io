module.exports = {
  title: `kimbro97`,
  description: `김브로의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://kimbro97.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김형재`,
    bio: {
      role: `개발자`,
      description: ['보이지 않는', '세상을 만드는'],
      thumbnail: 'kimbro.jpeg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/kimbro97`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `rlagudwog@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'RunnersHigh',
        description:
          '혼자 달리는 러너들을 위한 러너 매칭서비스인 RunnersHigh를 만들어 봤습니다.',
        techStack: ['NodeJS', 'Express', 'EC2', 'Mysql', 'Sequelize'],
        thumbnailUrl: 'project.png',
        links: {
          github: 'https://github.com/codestates/RunnersHigh',
          demo: 'https://runnershigh.click/',
        },
      },
    ],
  },
};
