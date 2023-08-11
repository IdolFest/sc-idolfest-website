import React from  'react'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'
import { Grid } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    partnerLogo: {
      textDecoration: 'none',
      boxShadow: 'none',
      '& :hover': {
          opacity: '.85'
      }
    }
}))


const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Partners" />

      
      <PageHeader 
        title="Partners" 
      />

      <PageContent>
        <p>SoCal IdolFest is proud to partner with some amazing organizations. Interested in joining up? <Link to="/contact">Drop us a line!</Link></p>

        <Grid container style={{ justifyContent: 'space-around' }}>
          <a href="https://rabuagain.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/rabuagain.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>

          <a href="https://intlidol.net/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/iin.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>

        </Grid>

        <Grid container style={{ justifyContent: 'space-around' }}>
          <a href="https://www.dreamlandmaidcafe.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/dreamland.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>
          <a href="https://www.artcollabexp.com/" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/artcollab.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>
        </Grid>

        <Grid container style={{ justifyContent: 'space-around' }}>
          <a href="https://tsunscoops.com" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/tsunscoops.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={300}
            />
          </a>
        </Grid>

        
        <br />
        <p>We also extend a huge THANK YOU to all our generous 2023 Gold sponsors!</p>

        <h3>Gold Sponsors</h3>
        <ul>
          <li>Chloe Meng</li>
          <li>Zeta Flare</li>
          <li>Steph</li>
          <li>Andy Caly</li>
          <li>Jason Greenidge</li>
          <li>Freya Sonata</li>
          <li>Alan Map</li>
          <li>Ferry</li>
          <li>LycorisElaine</li>
          <li>Chika</li>
          <li>Sunni</li>
          <li>Turkey Sandwich</li>
          <li>Someloser</li>
          <li>Brad Maxwell</li>
          <li>jumpyapple</li>
          <li>Lycoris Elaine</li>
          <li>Matthew Kim</li>
          <li>Animertphoto</li>
          <li>Valmont</li>
          <li>JennyCandy</li>
        </ul>

      </PageContent>
    </Layout>
  )
}

export default IndexPage
