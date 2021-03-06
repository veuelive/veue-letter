import Head from 'next/head'
import Image from 'next/image'
import burtGif from '../public/burt.gif'

export default function Home() {
    return (
        <div
            className="hiii"
            style={{
            display: "flex",
            alignItems: "center",
            background: "#6460f1",
            width: "100%"
        }}>
            <Head>
                <title>Veue - Interactive, Realtime Video</title>
                <meta name="description" content="We built a realtime live video streaming service..."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main style={{maxWidth: "600px", background: "white", padding: "20px", margin: "20px 0 20px 0"}}>
                <div style={{display: "flex", alignItems: "center", marginBottom: "40px"}}>
                    <svg viewBox="0 0 80 24" width="50%">
                        <path
                            d="M42.0815 5.33934C42.2021 5.26697 42.3227 5.21872 42.4674 5.21872C42.6604 5.21872 42.8534 5.29109 43.0223 5.41171C43.1912 5.55645 43.2635 5.7012 43.2635 5.89419C43.2635 5.99068 43.2394 6.1113 43.1912 6.2078L37.6668 18.4868C37.5944 18.6557 37.4738 18.7763 37.3291 18.8728C37.1843 18.9693 37.0154 19.0176 36.8225 19.0176C36.6536 19.0176 36.4847 18.9693 36.3159 18.8728C36.1711 18.7763 36.0505 18.6557 35.9781 18.4868L30.4538 6.23192C30.4055 6.13543 30.4055 6.03893 30.4055 5.94244C30.4055 5.72532 30.4779 5.55645 30.6468 5.43583C30.8156 5.29109 31.0086 5.24284 31.2016 5.24284C31.5152 5.24284 31.7323 5.38759 31.8771 5.67707L36.8466 16.8947L41.792 5.67707C41.8643 5.53233 41.9608 5.41171 42.0815 5.33934Z"
                            fill="#40424F"></path>
                        <path
                            d="M45.3623 18.7281C45.2175 18.5833 45.1451 18.3903 45.1451 18.1732V6.1354C45.1451 5.89416 45.2175 5.72529 45.3623 5.58055C45.507 5.43581 45.7 5.36343 45.9412 5.36343H53.1543C53.3955 5.36343 53.5644 5.41168 53.685 5.5323C53.8056 5.65292 53.878 5.79766 53.878 6.01478C53.878 6.23189 53.8056 6.37664 53.685 6.49725C53.5644 6.61787 53.3714 6.66612 53.1543 6.66612H46.7132V11.3944H52.7683C53.0095 11.3944 53.1784 11.4426 53.299 11.5633C53.4196 11.6839 53.492 11.8286 53.492 12.0457C53.492 12.2629 53.4196 12.4076 53.299 12.5282C53.1784 12.6488 52.9854 12.6971 52.7683 12.6971H46.7132V17.6184H53.1543C53.3955 17.6184 53.5644 17.6666 53.685 17.7872C53.8056 17.9078 53.878 18.0526 53.878 18.2697C53.878 18.4868 53.8056 18.6316 53.685 18.7522C53.5644 18.8728 53.3714 18.921 53.1543 18.921H45.9412C45.7241 18.9452 45.5311 18.8728 45.3623 18.7281Z"
                            fill="#40424F"></path>
                        <path
                            d="M57.6173 17.6908C56.7005 16.774 56.2422 15.399 56.2422 13.6138V6.06306C56.2422 5.82182 56.3146 5.62883 56.4593 5.48408C56.604 5.33934 56.797 5.26697 57.0383 5.26697C57.2795 5.26697 57.4484 5.33934 57.5931 5.48408C57.7379 5.62883 57.8102 5.82182 57.8102 6.06306V13.7344C57.8102 15.0613 58.1239 16.0503 58.7752 16.7258C59.4265 17.4013 60.3674 17.739 61.6459 17.739C62.9004 17.739 63.8653 17.4013 64.4926 16.7258C65.1439 16.0503 65.4575 15.0613 65.4575 13.7344V6.06306C65.4575 5.82182 65.5299 5.62883 65.6746 5.48408C65.8194 5.33934 66.0124 5.26697 66.2536 5.26697C66.4948 5.26697 66.6878 5.33934 66.8326 5.48408C66.9773 5.62883 67.0497 5.82182 67.0497 6.06306V13.6138C67.0497 15.399 66.5913 16.7499 65.6746 17.6908C64.7579 18.6316 63.407 19.0899 61.6701 19.0899C59.8849 19.0899 58.534 18.6316 57.6173 17.6908Z"
                            fill="#40424F"></path>
                        <path
                            d="M70.5235 18.7281C70.3788 18.5833 70.3064 18.3903 70.3064 18.1732V6.1354C70.3064 5.89416 70.3788 5.72529 70.5235 5.58055C70.6683 5.43581 70.8612 5.36343 71.1025 5.36343H78.3155C78.5567 5.36343 78.7256 5.41168 78.8462 5.5323C78.9669 5.65292 79.0392 5.79766 79.0392 6.01478C79.0392 6.23189 78.9669 6.37664 78.8462 6.49725C78.7256 6.61787 78.5326 6.66612 78.3155 6.66612H71.8744V11.3944H77.9295C78.1708 11.3944 78.3396 11.4426 78.4603 11.5633C78.5809 11.6839 78.6532 11.8286 78.6532 12.0457C78.6532 12.2629 78.5809 12.4076 78.4603 12.5282C78.3396 12.6488 78.1466 12.6971 77.9295 12.6971H71.8744V17.6184H78.3155C78.5567 17.6184 78.7256 17.6666 78.8462 17.7872C78.9669 17.9078 79.0392 18.0526 79.0392 18.2697C79.0392 18.4868 78.9669 18.6316 78.8462 18.7522C78.7256 18.8728 78.5326 18.921 78.3155 18.921H71.1025C70.8612 18.9452 70.6683 18.8728 70.5235 18.7281Z"
                            fill="#40424F"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.71813 2.95104C7.53606 0.924638 4.95481 0.225045 2.95253 1.40711C0.926124 2.56506 0.250655 5.14631 1.4086 7.17272L9.68309 21.5264C10.841 23.5528 13.4223 24.2283 15.4487 23.0703C17.4751 21.9124 18.1506 19.3311 16.9926 17.3047L8.71813 2.95104Z"
                              fill="#6460F1"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M21.1902 9.89874C18.8743 11.2497 15.907 10.4536 14.5561 8.11357C13.2052 5.79768 14.0013 2.83044 16.3413 1.47951C18.6813 0.12857 21.6244 0.924658 22.9753 3.26467C24.3021 5.58056 23.5061 8.5478 21.1902 9.89874Z"
                              fill="#6460F1"></path>
                    </svg>
                </div>
                <div>
                    <em>July 6th, 2021</em>
                    <p>
                        To the Veue Community,
                    </p>

                    <p>
                        It???s been an incredible year of building what we believe is the future of online entertainment.
                        We???re so proud that we???ve been able to build our community of streamers. They have put in
                        countless hours of preparation, promotion, and love into their episodes. Each and every one of
                        you believed in our mission and saw what we were trying to do, and we couldn???t be more thankful
                        to you for believing in us.
                    </p>

                    <p>
                        During our run, we hosted <strong>over 120 shows, with 6,000 HOURS of watched content, and
                        11,000 chat messages!</strong>
                    </p>

                    <p>
                        Unfortunately, we???ve been unable to raise the funds required to continue to build on what we???ve
                        started here. Fundraising for a startup is one of those inscrutable processes ??? and for whatever
                        reason we were unable to convince investors that we were onto something.
                    </p>

                    <p>
                        We remain convinced that someone will come along with a very similar approach, and they???ll be
                        more successful at convincing investors that <strong>real-time, interactive live streams are a
                        format that deserves a unique home on the internet.</strong>
                    </p>

                    <p>
                        Thank you again to our team, to the streamers, and to our wonderful community of viewers. Thank
                        you for believing in us and in what we were trying to do.
                    </p>
                    <p>
                        ???? Signing Out,<br/><br/>
                        <a href="https://hamptoncatlin.com">
                            hampton
                        </a>
                        ,&nbsp;
                        <a href="https://twitter.com/seth_shellhouse">
                            seth
                        </a>
                        ,&nbsp;
                        <a href="https://www.linkedin.com/in/cindy-mccann-524184147/">
                            cindy
                        </a>
                        ,&nbsp;
                        <a href="https://twitter.com/RogersKonnor">
                            konnor
                        </a>
                        ,&nbsp;
                        <a href="https://twitter.com/Sirbuland5">
                            sirbuland
                        </a>
                        ,&nbsp;
                        <a href="https://99designs.com/profiles/2024568">
                            agustin, and leandro.&nbsp;
                        </a>
                    </p>
                    <p style={{display: "flex", justifyContent: "space-around"}}>
                        <Image src={burtGif} alt="Burt Reynolds Saying Goodbye"/>
                    </p>
                    <br/><br/>
                    <br/>
                    <p>
                        Oh, before we go, here are some selected captures we took when the
                        site was still live!
                    </p>
                    <ul>
                        <li>
                            <a href="https://youtu.be/JE8sAnUWIrg">Clink Clink Episode 18</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/M215cnfqgeI">We Have A Microphone - Episode One</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/ZSos4DnrDJo">Svatii Cosplay</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/bIMdr5smHNI">We Have a Microphone - MRNA Vaccine Discussion</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/hFFQdu_f1iY">Very Last Episode Ever.... (CRYING ALERT!)</a>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
