import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"
import "../styles/font.css"
import {useStaticQuery ,graphql} from "gatsby"
import About from "../components/about"




const Index = () => {
    const articles = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            slug
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
            }
        }
  
    `)
   
    return (  
        <Layout sideContent = {<About/>}>
            {articles.allMarkdownRemark.edges.slice(0, 4).map((element) => (
                
                <Article title={element.node.frontmatter.title} text={element.node.frontmatter.description.slice(0, 200)+"..."}
                image={element.node.frontmatter.featuredImage.childImageSharp.fluid}
                link={element.node.frontmatter.slug}
                ></Article>
                
                
            ))}
            
        </Layout>
    )
}

export default Index