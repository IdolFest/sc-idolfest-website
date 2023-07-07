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
        header="Announcing SC IdolFest 2023!"
        body={buyBadge}
      />

      {/* <PageHeader 
        title="Announcing SC IdolFest 2023!" 
      /> */}

      <PageContent>
        <p>Get ready for SC IdolFest 2023!</p>

        <p>
          SoCal IdolFest is a one day concert all about idols, anisong, and j-pop! Featuring your favorite idol performers and 
          a stellar lineup of vendors, join us in Torrance, CA on August 12
        </p>
        <p>
          Badges are currently on sale! Buy before the event and save money - badges will be $35 at the door!
        </p>

        <div className={classes.buttonHolder}>
          <Button variant="contained" size="large" className="cta" href="/register">Buy a Badge</Button>
        </div>

        <br />
        <br />
        <p>
          Sign up for our email list below to get notifications for future announcements.
        </p>

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
