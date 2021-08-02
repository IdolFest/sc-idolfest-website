import * as React from "react"
import Layout from '@components/layout'
import Seo from '@components/seo'
import PageContent from '@components/PageContent'
import PageHeader from '@components/PageHeader'
import { Link } from 'gatsby'

const PoliciesPage = () => (
    <Layout>
        <Seo title="Policies" />

        <PageHeader
            title="Policies"
        />

        <PageContent>
            <h2>Welcome!</h2>

            <p>Welcome to Northwest IdolFest (NWIF)! We are a group of passionate idol fans working to bring idol culture and programming to the US. The primary purpose of NWIF is for the attendees to have fun. To make this happen, NWIF has established certain rules of conduct. These rules were created to ensure the behavior of any one individual or group of attendees does not disturb the enjoyment of another attendee, nor detract from the relaxed and comfortable atmosphere of the event. To both enjoy the convention to the fullest as well as to ensure the safety of all participants, please comply with staff instructions at all times.</p>
            <p>NWIF welcomes everyone; however, the event's management reserves the right to deny or revoke the attendance of any individual, at any time, for any reason. This action may be undertaken when an individual's presence or behavior causes significant interference with event operations or adversely affects the organization's relationship with its guests or with its venue. NWIF also reserves the right to amend these rules at any time without prior or posted notice. If you have any questions, please <Link to='/contact'>contact</Link> the event staff for assistance.</p>
            <p>Anyone who accepts a NWIF badge agrees to indemnify and hold harmless NWIF and Nijiiro Events LLC from any claim for personal injuries or other damages or equity arising out of any individual's activities at NWIF, even if such injury or damage is caused by negligence by or on the part of NWIF.</p>
        
            <h2>COVID-19</h2>
            <p>NWIF will always seek to exceed minimum compliance with health regulations, as the health and safety of all attendees and staff are our #1 priority. Attendees are expected to comply with any necessary COVID-19 preventative measures at the event at all times.</p>

            <h2>Content Rating</h2>
            <p>All content at NWIF is expected to fall within a PG-13 rating. Any content deemed inappropriate will be asked to be removed from the convention space. This includes any imagery or discussion of drugs, alcohol, sex, or violence. If you are unsure if your content complies with our policies, please ask a staff member!</p>

            <h2>Anti-Harassment</h2>
            <p>If someone's behavior makes you feel unwelcome, unsafe, or uncomfortable, that is harassment. NWIF does not allow harassment of any kind, including but not limited to behaviors such as: stalking, offensive comments, hate speech, bathroom policing, inappropriate or unwelcome physical contact, recording or taking pictures without permission, and repeatedly disrupting conversations you have been asked to leave. The aforementioned comments or hate speech could be in relation to: age, race or ethnicity, color, citizenship or national origin, relationship status, sexual orientation, gender identity or presentation, appearance, clothing, body size, pregnancy, disability, or religion. This list is not an exhaustive list.</p>
            <p>Keep your hands to yourself. Respect your fellow attendees. Keep an eye on what you say to people and how you act around them. Take notice of people's pronouns and use them. Remember, cosplay is not consent: just because someone is in costume, it doesn't give you permission to take a picture or touch their costume. Ask first, and if they tell you no, respect that.</p>
            <p>If you feel harassed or see someone else being harassed, notify a staff member immediately. You are also within your rights to ask the harasser to stop on your own. Once notified, NWIF staff will take any action necessary to stop the behavior, up to and including badge revocation and expulsion from convention premises. We will also take steps to help you feel safe again at your request, such as escorting you to a place you feel safe, contacting your friends or family for you, or contacting local law enforcement.</p>
            <p>This policy applies without exception to everyone at the convention, including attendees, panelists, vendors, guests, convention staff, and venue staff.</p>

            <h2>Badges</h2>
            <p>Badges must be visibly displayed on your person while in event space. In case of lost badge, one free replacement will be available with presentation of photo ID. Additional replacements will be charged full price.</p>
            <p>NWIF does not provide refunds. If you would like to transfer your badge, please <Link to='contact'>contact us</Link>.</p>

            <h2> Lost Items</h2>
            <p>In the case of lost items, please reach out to hotel staff or call the front desk. NWIF does not operate a Lost & Found and is not responsible for any personal belongings that may be lost, damaged, or stolen during the event.</p>

            <h2>Hotel & State Rules</h2>
            <p>You must comply with hotel and government rules while on hotel premises. What’s illegal outside the hotel is illegal inside the hotel. Please follow any instructions given to you by members of hotel staff. If you have concerns, contact any NWIF staff member.</p>
            <p>Do not stick anything to hotel walls. Any unapproved material on hotel walls will be removed, and any damage caused will be the responsibility of the poster. Flyer distributions are allowed as long as they comply with our PG-13 content rating.</p>
            
            <h2>Cosplay</h2>
            <p>We’re excited to see cosplayers sharing their love of anime and idols! Keep the following rules in mind when designing your costume or cosplay:</p>
            <ul>
            <li>Footwear is required at all times. Socks are not footwear. If you are cosplaying a character that’s barefoot, check out this tutorial on how to make “invisible shoes”.</li>
            <li>Costumes and regular clothing should not expose the body in a way that would be deemed as indecent exposure. Private parts must be covered in an opaque material that will not slip or have gaps.</li>
            <li>Costumes worn in the event space can not be so large that they obstruct or impede the flow of traffic or entryways for all attendee’s safety. If the costume cannot fit through a standard doorway, you may be asked to store it. Exceptions may be made for Masquerade contestants.</li>
            <li>Attendees with bulky costumes, costumes that obscure vision, or costumes with large extensions such as wings or spikes, should have a designated “handler,” to assist them through the hallways and crowds.</li>
            <li>Functioning wheels cannot be used as part of a costume or prop (i.e. anything that you might ride, push, or pull). Costumes made with wheelchairs in mind are an exception as long as they do not impede traffic flow.</li>
            <li>No costumes may be realistic depictions of American law enforcement, current American military uniforms, first responders, emergency medical personnel, or any official government agent.</li>
            <li>Costumes may not target or harass any specific person, culture, nationality, or anything else that may come off as rude or inappropriate. Our anti-harassment policy applies at all times.</li>
            </ul>

            <h2>Accessibility</h2>
            <p>NWIF is committed to making our event accessible to all. Our event space is fully wheelchair-accessible. The hotel will provide ADA rooms on request. Service animals are permitted. (Please note that emotional support animals do not qualify as service animals).</p>
            <p>If you have further accessibility needs, please <Link to='contact'>contact us</Link>. Sign language interpretation requests require a minimum of one month’s notice.</p>

            <h2>Photos & Videos</h2>
            <p>Any photos or videos taken of cosplayers are allowed if the explicit consent of everyone in the photo or video is given. Photos and videos of panel content are not allowed unless approved by both the panelists and NWIF staff. You may ask any staff member if a panel allows photos or videos to be taken. If at any point you are caught taking photos or videos at a prohibited panel, you will be asked to leave the panel and delete any footage.</p>
        </PageContent>
    </Layout>
)

export default PoliciesPage
