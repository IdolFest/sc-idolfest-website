import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const AmandaTanadinataPage = () => {
    const guestSocials = [
        { link: `https://atanadinatadesign.square.site/`, icon: 'home', iconLibrary: 'fas'},
        { link: `https://instagram.com/atanadinata`, icon: 'instagram'},
        { link: `https://youtube.com/channel/UCx1VBsoFCDJ-_7mA4jPcUww`, icon: 'youtube'},
        { link: `https://vm.tiktok.com/ZM8Px1AMj/`, icon: 'tiktok'},
        { link: `https://www.facebook.com/amandatanadinata?mibextid=ZbWKwL`, icon: 'facebook'}
    ]

    return (
        <Layout>
            <Seo title="Amanda Tanadinata" />

            <PageHeader
                title="Amanda Tanadinata"
            />

            <PageContent>
                <Guest personName="Amanda Tanadinata" guestTitle="passionate singer and dancer" guestSocials={guestSocials}>
                    When Amanda was little, her Mom asked what she wanted to be when she grow up. Her answer was, "an idol!". 
                    While life took turns in many unexpected ways, she finally was able to start pursuing her dream performing as an idol at NWIF 
                    2022. Besides performing, her passion lies within cancer research, figure skating, and creating arts. Her hope was to be everyone's 
                    cheerleader through her performance and creations, as well as to encourage everyone to be themselves through self expression. 
                    <br />
                    <br />
                    Amanda believes the happiest moment in life is when we can do what we love.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default AmandaTanadinataPage
