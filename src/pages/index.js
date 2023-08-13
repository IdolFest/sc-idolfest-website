import React from  'react'
import Hero from '@components/hero'
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import NewsletterSignup from '@components/NewsletterSignup'
import { Box, Button } from '@material-ui/core'
// import PageHeader from '@components/PageHeader'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/styles'
import CenteredBox from '@components/CenteredBox'

const useStyles = makeStyles(theme => ({
    partnerLogo: {
      textDecoration: 'none',
      boxShadow: 'none',
      '& :hover': {
          opacity: '.85'
      }
    },
    cross: {
      fontSize: '2em',
      fontFamily: 'Junegull',
      margin: '1em'
    },
    buttonHolder: {
      display: "flex",
      flexWrap: "wrap",
      "& > a": {
        flexGrow: 1,
        margin: "4px 32px",
        width: "200px",
        flexBasis: "200px",
        marginTop: "24px",
        textAlign: "center"
      },
      "& > .MuiButton-sizeLarge": {
        fontSize: "150%"
      }
    }
  
}))

const IndexPage = () => {
  const classes = useStyles()
  const buyBadge = (
    <Button style={{marginTop: "10em", transform: "scale(1.7)", padding: "8px 24px"}} 
      variant="contained" 
      className="cta" 
      href="/register">
      Buy a badge
    </Button>)

  return (
    <Layout>
      <Seo title="Home" />

      <Hero 
        header="Thank you for attenting SC IdolFest 2023!"
        body={buyBadge}
      />

      {/* <PageHeader 
        title="Announcing SC IdolFest 2023!" 
      /> */}

      <PageContent>
        <p>Thank you for attending SC Idol Festival 2023! If you have any feedback for us, <a href="https://idolfe.st/scif-feedback">we would love to know how we did</a>.</p>
        <p>Sign up for our email list below to get notified when our next convention will be!</p>

        <NewsletterSignup />

        <br /><br />
        <CenteredBox>
        <h3>A partnership between</h3> 
        <a href="https://animarketplace.org" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/partners/AniMarketplace Logo.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={100}
            />
          </a>
        <span className={classes.cross}>x</span>
        <a href="https://nwidolfest.com" target="_blank" rel="noreferrer" className={classes.partnerLogo}>
            <StaticImage
              // This is a presentational image, so the alt should be an empty string
              alt=''
              src='../images/icon/Icon-Pink.png'
              loading='eager'
              placeholder='blurred'
              quality='100'
              height={100}
            />
          </a>
        </CenteredBox>
      </PageContent>
    </Layout>
  )
}

export default IndexPage
