import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { StaticImage } from 'gatsby-plugin-image'

import { graphql, useStaticQuery } from 'gatsby'

const useStyles = makeStyles(theme => ({
    banner: {
      // Make the form look closer to what we normally use.
      fontSize: "20px",
      lineHeight: "45px",
      border: "1px solid #aaa",
      borderRadius: "10px",
      marginBottom: "16px",
      padding: "5px",
      "& a": {
        boxShadow: "none",
      },
      "& img": {
        paddingRight: "20px"
      },
      '@media (max-width: 800px)': {
        fontSize: "16px",
        lineHeight: "32px",
        textAlign: "center"
      }
  
    }
  }))
  

const scIdolfestLogo = (
    <StaticImage
          layout='constrained'
          // This is a presentational image, so the alt should be an empty string
          alt=''
          height={50}
          transformOptions={{fit: "contain"}}
          src='../images/logo/socal_test.png'
          placeholder='none'
          backgroundColor='transparent'
          />
  );

const ScifBanner = (props) => {
    const classes = useStyles()
    

  return (
      <div className={classes.banner}>
        <a href="/register" rel="noreferrer">
            {scIdolfestLogo}
            Flash Sale! Badges are $5 off until 12am PST May 30th
        </a>
      </div>
  )
}

export default ScifBanner
