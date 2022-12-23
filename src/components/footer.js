import React from "react"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { createSocialIcon } from '@components/socialIcon'
import { useStaticQuery, graphql } from 'gatsby'
// import LogoUrl from '@components/LogoUrl'
// import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.dark_accent,
        padding: '0 2em',
        '& .social': {
            padding: '1em',
            fontSize: '.5em',
            '& a': {
                textDecoration: 'none',
                boxShadow: 'none',
                '& :hover': {
                    color: theme.palette.light_accent
                }
            },
            '& svg': {
                color: 'white'
            },
        },
        '& .copyright': {
            marginLeft: 'auto',
            textTransform: 'uppercase',
            '& a': {
                color: 'white',
                '& :hover': {
                    color: theme.palette.light_accent
                }
            }
        },
        '@media (max-width: 450px)': {
            '& .copyright': {
                marginLeft: '0',
            },
        }
    },
}))

function wrapFooterSocial(children) {
    return (
        <Grid item className='social'>
            {children}
        </Grid>
    )
}

export default function Footer() {
    const classes = useStyles()

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            facebook
                            twitter
                            instagram
                            discord
                        }
                    }
                }            
            }`
    )

    const socialSites = site.siteMetadata.social
    
    return (
        <footer>
            <Box className={classes.footer}>
                <Grid container direction='row' justify='flex-start' alignItems='center'>
                    {/* <Grid item>
                        <StaticImage
                            layout='constrained'
                            // This is a presentational image, so the alt should be an empty string
                            alt=''
                            height={50}
                            transformOptions={{ fit: "contain" }}
                            src='../images/icon/Icon-Pink.png'
                        />
                    </Grid> */}
                    {wrapFooterSocial(createSocialIcon(`https://facebook.com/${socialSites.facebook}`, 'facebook'))}
                    {wrapFooterSocial(createSocialIcon(`https://twitter.com/${socialSites.twitter}`, 'twitter'))}
                    {wrapFooterSocial(createSocialIcon(`https://instagram.com/${socialSites.instagram}`, 'instagram'))}
                    {wrapFooterSocial(createSocialIcon(`https://discord.gg/${socialSites.discord}`, 'discord'))}
                    <Grid item className='copyright'>
                        <Typography>
                            &copy; {new Date().getFullYear()} <a href='https://idolfest.org/' target='_blank' rel='noreferrer'>The IdolFest Foundation</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    )
}