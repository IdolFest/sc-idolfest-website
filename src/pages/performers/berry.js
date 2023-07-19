import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const BerryPage = () => {
    const guestSocials = [
        { link: `https://www.twitter.com/blooberrytrain`, icon: 'twitter'},
        { link: `https://instagram.com/blooberrytrain`, icon: 'instagram'},
        { link: `https://www.tiktok.com/@blooberrytrain`, icon: 'tiktok'},
        { link: `https://blooberrytrain.carrd.co/`, icon: 'home', iconLibrary: 'fas'},
    ]

    return (
        <Layout>
            <Seo title="Berry" />

            <PageHeader
                title="Berry"
            />

            <PageContent>
                <Guest personName="Berry" guestTitle="J-pop idol, dancer, singer, and cosplayer" guestSocials={guestSocials}>
                Berry is a J-pop idol, dancer, singer, and cosplayer from California. She has been involved in the 
                arts since a very young age and has always had a passion for being on stage. After performing in many cover groups over the years, 
                Berry decided to chase her childhood dreams of becoming an idol, and hopes to inspire others in the same way 
                that her favorite idols inspire her.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default BerryPage
