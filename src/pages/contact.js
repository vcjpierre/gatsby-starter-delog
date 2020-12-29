import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contacto — {site.siteMetadata.title}</title>
        <meta name="description" content={"Página de contacto " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Ponerse en contacto</h1>
          <p>Déjame ayudarte a poner en marcha tu próximo proyecto &rarr;</p>
        </div>
        <div>
          <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
            <div>
              <label htmlFor="w3lName">Nombre</label>
              <input type="text" name="w3lName" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Sujeto</label>
              <input type="text" name="w3lSubject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Mensaje</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`