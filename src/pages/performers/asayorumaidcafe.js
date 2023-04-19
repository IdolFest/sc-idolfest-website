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
                    Asayoru Maid Cafe will be performing for all the masters and princesses attending SoCal IdolFest 2023!<br />
                    <br />
                    Asayoru Maid Cafe is a maid costume-concept cafe, inspired by the ones in Akihabara, Japan. 
                    Our cafe strives to be a place of comfort to guests of all ages, creating a feeling of “coming home” with Japanese-inspired comfort 
                    foods and warm hospitality. We aim to create a magical, fun, and relaxing environment for our guests and staff where everyone can feel 
                    welcome and happy!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default AsayoruMaidCafe
