import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const AquariusPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/aquariusca_alt`, icon: 'twitter'},
        { link: `https://bit.ly/aquarius_alt`, icon: 'home', iconLibrary: 'fas'},
        { link: `https://www.instagram.com/aquariusca.alt/`, icon: 'instagram'},
        { link: `https://www.youtube.com/c/aquariusca`, icon: 'youtube'},
        { link: `https://www.tiktok.com/@aquariusca.alt`, icon: 'tiktok'}
    ]

    return (
        <Layout>
            <Seo title="Aqu♡rius" />

            <PageHeader
                title="Aqu♡rius"
            />

            <PageContent>
                <Guest personName="Aqu♡rius" guestTitle="Southern California idol group" guestSocials={guestSocials}>
                    Established since 2017, Aqu♡rius Encore Project started as a cosplay cover group, but have now worked to find a brand new idol image. Their goal is to promote jpop idol culture and entertainment throughout the region.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default AquariusPage
