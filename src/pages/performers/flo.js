import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const FloPage = () => {
    const guestSocials = [
        { link: `https://twitter.com/FlorenceMantel`, icon: 'twitter'},
        { link: `https://www.instagram.com/florensmantel/`, icon: 'instagram'},
        { link: `https://www.youtube.com/@FLOdanceX`, icon: 'youtube'},
        { link: `https://florence-the-bean-lord.tumblr.com/`, icon: 'home', iconLibrary: 'fas'},
    ]

    return (
        <Layout>
            <Seo title="FLO" />

            <PageHeader
                title="FLO"
            />

            <PageContent>
                <Guest personName="FLO" guestTitle="Dancer and choreographer" guestSocials={guestSocials}>
                    FLO debuted as a solo performer at J-POP Summit 2012, where he won first place in their Vocaloid Dance Contest and returned 
                    the following year to serve as the contest's judge. He served in several dance units over the course of his dance journey, and is 
                    currently a member of CODE:MiAO. He  is most active solo on his YouTube channel, where he releases original choreography and covers. 
                    He is currently studying performing arts and majoring in dance. His preferred style is dark and edgy.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default FloPage
