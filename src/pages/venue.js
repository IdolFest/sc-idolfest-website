import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@material-ui/styles'
import CenteredBox from '@components/CenteredBox'
import { useStaticQuery, graphql } from 'gatsby'
// the following 2 imports are used when hotel booking is CLOSED
import { Container } from '@material-ui/core'

// the following is used when hotel booking is OPEN
/*
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
const RoomRateTable = styled(TableContainer)({
  margin: '0 auto',
  //width: '70%',
  paddingBottom: '1em'
})

function createData(roomType, price) {
  return { roomType, price };
}

const rows = [
  createData('Standard King', '$129'),
  createData('Double Queen', '$129'),
]
*/

const annoyinglyLongMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9499486722684!2d-118.34613194858373!3d33.83940138056933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b52a55535501%3A0xbf414574f90a0717!2sTorrance%20Cultural%20Arts%20Center!5e0!3m2!1sen!2sus!4v1675748877150!5m2!1sen!2sus';

const ResponsiveMap = styled(Container)({
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: '0',
    '& iframe': {
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute'
    }
})

const HotelPage = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        longDates
                    }
                }            
            }`
    )

    const dates = site.siteMetadata.longDates
    
  return (
  <Layout>
    <Seo title="Location" />
     
    <PageHeader 
      title="Location" 
    />

    <PageContent>
      {/*<StaticImage 
        src="../images/Hotel.jpeg"
        // This is a presentational image, so the alt should be an empty string
        alt=''
      />*/}
      <p>
        SoCal IdolFest will be held on {dates}, at the Torrance Cultural Arts Center in Torrance, California. 
          <br /><br />
         
        There is plenty of free parking at the venue.
        <br /><br />
        As this is a one-day event, there is no official hotel available. There are multiple hotels in the area, however.
      </p>
      { /* the following is used when hotel booking is OPEN */ }
      {/* <CenteredBox>
        <RoomRateTable>
          <Table aria-label="simple table">
            <TableHead style={{ textTransform: 'uppercase' }}>
              <TableRow>
                <TableCell>Room Type</TableCell>
                <TableCell>Price Per Night<sup>†</sup></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.roomType}>
                  <TableCell component="th" scope="row">
                    {row.roomType}
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </RoomRateTable>
        
        <div>
          <sup>†</sup>Taxes and fees not included in price.
        </div>
        <Button variant="contained" className="cta" href='https://book.passkey.com/go/NWIDF22'>
          Book online
        </Button>
        <div>If you prefer to book by phone, you can call the hotel toll-free at 1-800-222-8733 and reference the group name "NW IdolFest".</div>
      </CenteredBox> */}
      <CenteredBox>
        <ResponsiveMap>
          <iframe title="Hotel map" maxwidth="600" height="450" style={{ border: 0}} loading="lazy" allowFullScreen src={annoyinglyLongMapUrl}></iframe>
        </ResponsiveMap>

        <h2>How to Get Here</h2> 
      </CenteredBox>
      <h3>Driving</h3>
      
      <p>
        Driving directions can be found on
        {' '} 
        <a href="https://arts.torranceca.gov/our-city/general-services/cultural-arts/tcac-driving-directions">the venue's website</a>.

      </p>
    </PageContent>
  </Layout>
)}

export default HotelPage
