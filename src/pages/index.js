import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "@fortawesome/fontawesome-free/css/all.min.css"
import configs from "../../site-config"
import Footer from "../components/footer"
import Header from "../components/header"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={configs.app_name} keywords={configs.app_keywords} />
    <div className="headerBackground">
      <div className="topContainer">
        <Header data={data} />

        <div className="main-hero">
          <img src={"/screenshots/app-store/device_banner.png"} alt="App Icon" />
        </div>


        <div className="center">
          <div className="appTaglineContainer">
            <p className="appTagline">{configs.app_tagline}</p>
          </div>
          {configs.appstore_link && (
            <a className="appStoreLink" href={configs.appstore_link}>
              <Img
                fixed={data.appStore.childImageSharp.fixed}
                className="appStore"
              />
            </a>
          )}
        </div>



        <div className="features">
          {configs.features.map(feature => {
            if (feature.title) {
              return (
                <div className="feature">
                  <div>
                    <span className="fa-stack fa-1x">
                      <i className="iconBack fas fa-circle fa-stack-2x" />
                      <i
                        className={`iconTop fas fa-${
                          feature.fontawesome_icon_name
                          } fa-stack-1x`}
                      />
                    </span>
                  </div>
                  <div className="featureText">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
        <Footer />
      </div>
    </div>
  </Layout>
)



export default IndexPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appStore: file(relativePath: { eq: "appstore.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    playStore: file(relativePath: { eq: "playstore.png" }) {
      childImageSharp {
        fixed(height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iphoneScreen: file(relativePath: { glob: "screenshot/*.{png,jpg}" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    videoScreen: file(
      extension: { ne: "txt" }
      relativePath: { glob: "videos/*" }
    ) {
      publicURL
      extension
    }
    appIconLarge: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImage: file(relativePath: { eq: "headerimage.png" }) {
      childImageSharp {
        fluid(maxHeight: 714) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlack: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlue: file(relativePath: { eq: "blue.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewCoral: file(relativePath: { eq: "coral.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewWhite: file(relativePath: { eq: "white.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewYellow: file(relativePath: { eq: "yellow.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`