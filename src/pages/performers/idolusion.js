import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const IdollusionPage = () => {
    const guestSocials = [
        { link: `https://www.youtube.com/@Idolusion`, icon: 'youtube'},
        { link: `https://twitter.com/Idolusion`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Idolusion!!" />

            <PageHeader
                title="Idolusion!!"
            />

            <PageContent>
                <Guest personName="Idolusion!!" guestTitle="Passionate Idol Group" guestSocials={guestSocials}>
                    Welcome to our delusion. We are Idolusion!!<br /><br />
                    Idolusion!! is an idol group made up of passionate performers and 
                    staff members who are dedicated to making their impossible dreams 
                    come true. United by a love of idol anime and its music, we aim to 
                    share anime idol culture with a worldwide audience! Stay tuned for 
                    info about our upcoming first single! (the release date will be 
                    revealed after the 15th)<br /><br />
                    Ready to have fun with us on our journey towards the stars? Come and 
                    play make believe with us! The idol revolution has only just begun.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default IdollusionPage
