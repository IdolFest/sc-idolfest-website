import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const AlexisPage = () => {
    const guestSocials = [
        // FIXME
        { link: `https://little-pastel-idol.carrd.co`, icon: 'home', iconLibrary: 'fas'},
        { link: `https://www.instagram.com/little.pastel.idol/`, icon: 'instagram'},
        { link: `https://www.youtube.com/channel/UCeSaxKMa7AWKwtyn-7B2G3Q`, icon: 'youtube'},
        { link: `https://www.tiktok.com/@little.pastel.idol?lang=en`, icon: 'tiktok'},
        { link: `https://www.twitch.tv/littlepastelidol/`, icon: 'twitch'}
    ]

    return (
        <Layout>
            <Seo title="Alexis" />

            <PageHeader
                title="Alexis"
            />

            <PageContent>
                <Guest personName="Alexis" guestTitle="Little Pastel Idol" guestSocials={guestSocials}>
                    Hello, sunshine! I’m Alexis, the triple-threat variety idol from New York City, determined to make you smile! 
                    I’ve been a performer for over 15+ years and an idol for 3 years! I perform multilingual and multi-genre covers and original music! 
                    I released my debut single “Starting Line!” August 16th 2021 and am planning to release more music!!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default AlexisPage
