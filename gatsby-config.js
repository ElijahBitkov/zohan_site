module.exports = {
    siteMetadata: {
        title: "Zohan666",
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdownPages`,
                path: `${__dirname}/static/markdown-pages/`,
            },
        },
        `gatsby-plugin-netlify-cms`

    ],
};