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
          <form className="form-container" action="mailto:vcjpierre@gmail.com" method="post" enctype="text/plain">
            <div>
              <label htmlFor="w3lName">Nombre</label>
              <input type="text" name="w3lName" id="w3lName" label="Tu name" required/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender" label="Tu email" required/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Asunto</label>
              <input type="text" name="w3lSubject" id="w3lSubject" label="Escribe el asunto" required/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Mensaje</label>
              <textarea name="w3lMessage" id="w3lMessage" label="Escribe tu mensaje" maxlength="6000"></textarea>
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