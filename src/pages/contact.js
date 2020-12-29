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
              <label htmlFor="Nombre">Nombre</label>
              <input type="text" name="Nombre" id="Nombre" placeholder="Tu nombre" required/>
            </div>
            <div>
              <label htmlFor="Remitente">Email</label>
              <input type="email" name="Remitente" id="Remitente" placeholder="Tu email" required/>
            </div>
            <div>
              <label htmlFor="Asunto">Asunto</label>
              <input type="text" name="Asunto" id="Asunto" placeholder="Escribe el asunto" required/>
            </div>
            <div>
              <label htmlFor="Mensaje">Mensaje</label>
              <textarea name="Mensaje" id="Mensaje" placeholder="Escribe tu mensaje" maxlength="6000"></textarea>
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