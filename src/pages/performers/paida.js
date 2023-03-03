import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const BarriPage = () => {
    const guestSocials = [
        { link: `https://www.paida.space/`, icon: 'home', iconLibrary: 'fas'},
        { link: `https://twitter.com/gingagirlpaida`, icon: 'twitter'},
        { link: `https://www.instagram.com/galaxygirlpaida.official/`, icon: 'instagram'},
        { link: `https://www.youtube.com/channel/UCzDDsJjHGFTNsEdPqkNoGCA`, icon: 'youtube'},
        { link: `https://www.tiktok.com/@galaxygirlpaida`, icon: 'tiktok'},
        { link: `https://www.facebook.com/GingaGirlPaida/`, icon: 'facebook'},
        { link: `https://open.spotify.com/artist/6kVSZRWYExYkn39hX6IxWc?si=hM3Ylx_2QYeR4U7_q2yUrw&nd=1`, icon: 'spotify'}
    ]

    return (
        <Layout>
            <Seo title="Aqu♡rius" />

            <PageHeader
                title="Aqu♡rius"
            />

            <PageContent>
                <Guest personName="PAiDA" guestTitle="Dystopian-pop idol with a vendetta" guestSocials={guestSocials}>
                A Dystopian-pop idol with a vendetta, PAiDA is here to bring Earthlings on their knees. PAiDA, from Space City TX, is a fever dream of an artist and has performed across America and Japan since 2017.
                <br /><br />
                Her music hides touchy subjects under a veil of chaos, mixing her love of Jpop with her roots as a black singer. Amassing over 100k humans and counting with her siren call, she is preparing to spread her otherworldly signal across the globe.                </Guest>
            </PageContent>
        </Layout>
    )
}

export default BarriPage
