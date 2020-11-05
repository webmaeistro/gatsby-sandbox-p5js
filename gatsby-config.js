import config, {
  pathPrefix as _pathPrefix,
  siteAuthor,
  siteTitle,
  siteDescription,
  siteUrl as _siteUrl
} from "./config";

const pathPrefix = _pathPrefix === "/" ? "" : _pathPrefix;

export default {
  siteMetadata: {
    author: siteAuthor,
    title: siteTitle,
    description: siteDescription,
    siteUrl: _siteUrl + pathPrefix,
    settings: { ...config }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    }
  ],
  pathPrefix
};
