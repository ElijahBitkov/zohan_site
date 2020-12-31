import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import Img from "gatsby-image"
import Section from "../components/section"
import About from "../components/about"

const PostStyle = createGlobalStyle`
    .article {
        color: var(--0color);
    }
    .article__title {
        font-size: 1.5em;
        text-align: center;
        grid-area: titl;
    }
    .article__content {
        margin-top: var(--dm);
        grid-area: text;
    }
    .article p {
        font-size: calc(1.2 * var(--dm));
        padding: .4em 0;
        line-height: calc(1.6 * var(--dm));
    }
    .article__image {
        float: right;
        width: calc(18 * var(--dm));
        height: calc(12 * var(--dm));
        margin: var(--dm) 0 calc(.5 * var(--dm)) calc(.5 * var(--dm));
    }
`


export default function Template({ data }) {

    
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

    return (
        <Layout sideContent={ <About/>}>
            <PostStyle />
            <article className="article">
                <Section>
                <h3 className="article__title">{frontmatter.title}</h3>
                <Img className="article__image" fluid={featuredImgFluid}/>
                <div
                    className="article__content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                
                </Section>
            </article>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`