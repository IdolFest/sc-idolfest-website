import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const PanRangerPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/bakerysentai`, icon: 'twitter'},
        { link: `https://instagram.com/panranger`, icon: 'instagram'},
        { link: `https://www.youtube.com/channel/UCKq9sHWRsKcZYjXAjlIi4cQ`, icon: 'youtube'},
        { link: `https://panranger.net/`, icon: 'home', iconLibrary: 'fas'},
    ]

    return (
        <Layout>
            <Seo title="Pan Ranger" />

            <PageHeader
                title="Pan Ranger"
            />

            <PageContent>
                <Guest personName="Pan Ranger" guestTitle="🍞The Bread-Themed Tokusatsu Hero Idol🍞" guestSocials={guestSocials}>
                    What better than an orange idol for this orange event!? Welcome tokusatsu idol Pan Ranger for their west coast debut on our stage, as part of their tour!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default PanRangerPage
