import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const IrodoriIdolsPage = () => {
    const guestSocials = [
        { link: `https://iirodoriidols.carrd.co/`, icon: 'home', iconLibrary: 'fas'},
        { link: `https://www.instagram.com/irodori.idols`, icon: 'instagram'},
        { link: `https://youtube.com/channel/UCbpKTmd2DzQD8FkzpHEP53A`, icon: 'youtube'},
        { link: `https://vm.tiktok.com/ZM8Px1AMj/`, icon: 'tiktok'}
    ]

    return (
        <Layout>
            <Seo title="Irodori Idols" />

            <PageHeader
                title="Irodori Idols"
            />

            <PageContent>
                <Guest personName="Irodori Idols" guestTitle="Passionate dance cover group" guestSocials={guestSocials}>
                    Celebrate the magic of Love Live with Irodori Idols! Irodori Idols is a passionate dance cover group dedicated to captivating 
                    audiences with the enchanting essence of the Love Live universe! In previous projects, they have embodied the vibrant spirits of 
                    Nijigaku and Aqours. Today, they are ready to dazzle the stage as the original five members of Liella!
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default IrodoriIdolsPage
