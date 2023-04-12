import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const AsayoruMaidCafe = () => {
    const guestSocials = [
        { link: `http://instagram.com/asayorucafe`, icon: 'instagram'},
        { link: `https://twitter.com/asayorucafe`, icon: 'twitter'},
        { link: `https://www.facebook.com/asayorucafe`, icon: "facebook"},
        { link: `https://www.youtube.com/channel/UCogZ_IzJnpwiJVFqnlzLsaQ`, icon: 'youtube'},
        { link: `https://www.tiktok.com/@asayorucafe`, icon: 'tiktok'},
        { link: `https://www.asayorumaidcafe.com/`, icon: 'home', iconLibrary: 'fas'},
    ]

    return (
        <Layout>
            <Seo title="Asayoru Maid Cafe" />

            <PageHeader
                title="Asayoru Maid Cafe"
            />

            <PageContent>
                <Guest personName="Asayoru Maid Cafe" guestTitle="Maid Cafe" guestSocials={guestSocials}>
                    Asayoru Cafe is a maid costume-concept cafe in Arcadia, California. It takes inspiration
                    from the cafes in Akihabara, Japan. Their maids will be doing a performance for the masters
                    and princesses at Socal Idolfest!<br />
                    <br />
                    The cafe has a brick-and-mortar location in Arcadia, if you want to visit!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default AsayoruMaidCafe
