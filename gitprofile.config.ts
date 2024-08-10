// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'naorella', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['gis_dev_container',
                   'GIS_showcase',
                   'bike_data_base',
                   'demographic-data-analyzer', 
                   'sea-level-predictor',
                    'Mean-Variance-Standard-Deviation-Calculator'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nelson Alesandro',
    description: 'A portfolio for Nelson Alesandro',
    imageURL: '',
  },
  social: {
    linkedin: 'www.linkedin.com/in/naorella',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nelson.mycareers@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Jupyter Notebooks',
    'C++',
    'Bash',
    'Excel',
    'PostgreSQL',
    'Git',
    'Github Actions',
    'Docker',
    'Docker Compose',
    'Linux System Administration',
    'ArcGIS',
    'QGIS',
    'Spanish Second Language',
  ],
  experiences: [
    {
      company: '',
      position: 'Freelance',
      from: 'August 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Lindt',
      position: 'Key Holder Supervisor',
      from: 'August 2019',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'City of Hamilton',
      position: 'Water and Wastewater Systems Planning Co-op',
      from: 'September 2021',
      to: 'December 2021',
      companyLink: 'https://example.com',
    },
    {
      company: 'City of Guelph ',
      position: 'Junior GIS Analyst',
      from: 'September 2019',
      to: 'December 2019',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Relational Database',
      body: '',
      year: 'June 2024',
      link: 'https://www.freecodecamp.org/certification/naorella/relational-database-v8',
    },
     {
      name: 'Data Analysis With Python',
      body: '',
      year: 'April 2024',
      link: 'https://www.freecodecamp.org/certification/naorella/data-analysis-with-python-v7',
    },
     {
      name: 'Career Essentials in GitHub Professional Certificate',
      body: '',
      year: 'July 2024',
      link: 'https://www.linkedin.com/in/naorella/details/certifications/?profileId=ACoAAD_IpTIBsS4U5o4k4xuuyr9uT8Um39thIwU',
    },
  ],
  educations: [
    {
      institution: 'University of Waterloo',
      degree: 'Candidate for Bachelor of Environmental Studies, Geomatics',
      from: '2017',
      to: '2022',
    },
    {
      institution: 'University of Waterloo',
      degree: 'Candidate for Computing Minor',
      from: '2017',
      to: '2022',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
