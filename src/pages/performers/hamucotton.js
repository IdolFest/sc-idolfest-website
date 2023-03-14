import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const HamuCottonPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/hamu_cotton`, icon: 'twitter'},
        { link: `https://www.instagram.com/hamu_cotton/`, icon: 'instagram'},
        { link: `https://www.youtube.com/@hamu_cotton`, icon: 'youtube'},
        { link: `https://www.tiktok.com/@hamu_cotton`, icon: 'tiktok'},
        { link: `https://www.hamucotton.com/`, icon: 'home', iconLibrary: 'fas'},
    ]

    return (
        <Layout>
            <Seo title="Hamu Cotton" />

            <PageHeader
                title="Hamu Cotton"
            />

            <PageContent>
                <Guest personName="Hamu Cotton" guestTitle="Cosplay influencer" guestSocials={guestSocials}>
                    Hamu Cotton is a cosplay influencer based in Southern Califonria. She brings together her passions for
                    dance, performance, singing, make-up, and event coordination to bring her favorite characters to life. She
                    is best known for her <a href="https://www.youtube.com/watch?v=-M5xMYArX-0">Chika Dance video</a>, which 
                    has nearly 5 million views!
                    <br />
                    Hamu Cotton will be bringing her passions to SCIF by performing a special dance set, and also acting as our
                    MC!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default HamuCottonPage
