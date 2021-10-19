module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://syednazirul.tech`,
    // Your Name
    name: 'Syed Nazirul',
    // Main Site Title
    title: `Syed Nazirul | System Developer`,
    // Description that goes under your name in main bio
    description: `Junior System Engineer based in KL, Malaysia`,
    // Optional: Twitter account handle
    author: `@Syehino`,
    // Optional: Github account URL
    github: `https://github.com/Syehino`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/syednazirul/`,
    // Content of the About Me section
    about: `I'm a eager system engineer who has experience in deploying and managing application in many server including Windows Server and Linux distros. I'm also passionate about learning much more about DevOps, becoming a full-stack developer and open-sources projects`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'RTMP-Server',
        description:
          'Windows 10 Script to host your own RTMP Server using MonaServer and FFMPEG to push your stream on multiple platform simultaneously.',
        link: 'https://github.com/Syehino/RTMP-Server',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Object Expression',
        description: 'System Engineer, October 2020 - Present',
	link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Laravel, PHP, Flutter, .Net',
      },
      {
        name: 'Databases',
        description: 'MSSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Microsoft Azure, CI / CD, Technical Support',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `3005848931`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
