import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Avatar from '@components/avatar'
import CenteredBox from '@components/CenteredBox'
import Grid from '@material-ui/core/Grid'

const GuestsPage = () => (
    <Layout>
        <Seo title="Performers" />

        <PageHeader
            title="Performers"
        />

        <PageContent>
            <h2><CenteredBox>Appearing In Person</CenteredBox></h2>
            <Grid container style={{ justifyContent: 'space-around' }}>
                <Avatar personName="Aqu♡rius" showLink={true} />
                <Avatar personName="Paida" showLink={true} />
                <Avatar personName="Hamu Cotton" showLink={true} />
                <Avatar personName="Asayoru Maid Cafe" showLink={true} />
                <Avatar personName="Phoebe" showLink={true} />
                <Avatar personName="Alexis" showLink={true} />
                <Avatar personName="Deco*Pro" showLink={true} />
                <Avatar personName="Irodori Idols" showLink={true} />
                <Avatar personName="Amanda Tanadinata" showLink={true} />
            </Grid>
        </PageContent>
    </Layout>
)

export default GuestsPage
