import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const DecoProPage = () => {
    const guestSocials = [
        { link: `https://www.instagram.com/deco.pro_`, icon: 'instagram'},
        { link: `https://www.youtube.com/@decopro4826`, icon: 'youtube'},
        { link: `https://www.tiktok.com/@deco.pro_`, icon: 'tiktok'}
    ]

    return (
        <Layout>
            <Seo title="Deco*Pro" />

            <PageHeader
                title="𝐃𝐞𝐜𝐨⋆𝐏𝐫𝐨"
            />

            <PageContent>
                <Guest personName="Deco*Pro" guestTitle="Vocaloid-based cover group" guestSocials={guestSocials}>
                    Hiding in your wifi and connecting to your hearts, 𝐃𝐞𝐜𝐨⋆𝐏𝐫𝐨 is a SoCal-based group and is excited to share their 
                    love of Vocaloid with the attendees of SCIF by covering your favorite hits!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default DecoProPage
