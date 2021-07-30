import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/styles'
import Container from '@material-ui/core/Container'

const HeroText = styled(Container)({
  color: 'black',
  alignSelf: 'center',
  justifySelf: 'center',
  textAlign: 'center',
  '& span': {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '.25em',
    opacity: '85%'
  }
})

export default function Hero({ header, body }) {
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{
          gridArea: '1/1',
          maxHeight: '50vh'
        }}
        layout='fullWidth'
        aspectRatio={16 / 9}
        // This is a presentational image, so the alt should be an empty string
        alt=''
        src='../images/heroimage.png'
        loading='eager'
        placeholder='blurred'
        objectPosition='top left'
        objectFit='none'
        quality='100'
      />
      <HeroText
        style={{
            // By using the same grid area for both, the image and text are stacked on top of each other
            gridArea: '1/1',
            position: 'relative',
        }}
      >
        { header ? <h1><span>{header}</span></h1> : null }
        { body ? <p>{body}</p> : null }
      </HeroText>
    </div>
  )
}

Hero.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string, 
}