import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import Guest from '@components/Guest'

const PhoebePage = () => {
    const guestSocials = [
        { link: `https://feebeechanchibi.com/`, icon: 'home', iconLibrary: 'fas' },
        { link: `https://www.twitch.tv/feebee`, icon: 'twitch'},
        { link: `https://youtube.com/c/feebeechanchibi`, icon: 'youtube'},
        { link: `https://www.twitter.com/feebeechanchibi`, icon: 'twitter'}
    ]

    return (
        <Layout>
            <Seo title="Phoebe" />

            <PageHeader
                title="Phoebe"
            />

            <PageContent>
                <Guest personName="Phoebe" guestTitle="Idol, Voice Actor" guestSocials={guestSocials}>
                California-based vocalist, lyricist, voice actress, and online personality, Phoebe (also known by her online moniker "Feebeechanchibi") aims to 
                create comfy, cozy music and entertainment with empathy, warmth, and tolerance in mind. As a child, she started posting her covers of Japanese pop 
                songs onto her YouTube channel since 2010. Now, she has grown from a passionate, budding songbird to into a professional vocalist producing her own 
                original music. In particular, Phoebe is known for her soothing, heartwarming timbre and fairy-like vocals. As music curators Kawaii Fresh remarked, 
                "Phoebe, as the star of the show, displays her airy and cutesy vocals front and center. Thus, delivering an fun and, indeed, whimsical performance."
                <br /><br />

                Born in the U.S. and anime-raised by Filipino parents, Phoebe is a cross-cultural blend of East and West. From a young age, Phoebe had a passion for singing, particularly Japanese music, starting her YouTube channel as an elementary schooler. A decade later, Phoebe has not only amassed millions of views on YouTube, but has gone on to become a professional vocalist and actor who is often contracted for recording, performing, voice acting and even lyric-writing work. She makes an appearance in games such as NOISZ Starlight (as Hikari), Gunvolt Chronicles: Luminous Avenger iX 2 (as Eve), Wildfire: Ticket to Rock (as Miyuki), and Bistro Days (as herself). Since she began streaming in May 2020, she has become a Twitch and YouTube Partner, as well as an Official Artist on YouTube. Solo, she is a full-time artist currently working to create original songs and self-produced her first original solo EP, Moon Garden (May 2020), her 2nd EP Chill Bee-Ts to Buzz to (April 2021), and most recently her first album All of My Life (February 2023).
                <br /><br />
                In addition to her solo activities, Phoebe is formerly a member of idol duo PhEri, with whom she has toured California and performed with multiple singers from Japan.
                </Guest>
            </PageContent>
        </Layout>
    )
}

export default PhoebePage
