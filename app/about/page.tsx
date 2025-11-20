import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Banner />
            <article className="about">
                <div>
                    <h1>About The Guardian Angels </h1>
                    <h3>The Alliance of Guardian Angels is a non-profit 501 (c) (3) organization founded in 1979 in New York City, New York. Our mission is to provide positive role models for today’s youth and work toward promoting community safety and betterment for the good of society overall.</h3>
                    <ul>
                        <li>The Guardian Angels are dedicated to fostering safer, stronger, and more compassionate communities through volunteer-driven initiatives. We serve those in need by organizing homeless feedings, mentoring youth through positive leadership programs, offering self-defense courses, and conducting unarmed community patrols to ensure the safety of seniors and vulnerable individuals.</li>
                        <li>We accomplish our mission through training volunteers, who are multi racial, to be effective as visual deterrents patrolling the streets in communities around the world. Our emphasis is on coordinating a variety of community-based services, programs and activities to speak and fight against violence, crime and drugs.</li>
                        <li>Our philosophy is to empower individuals through service to others.  An empowered society is built through empowering individuals one at a time.  We train people to take constructive and cooperative action to solve individual and social problems.  We provide people with the tools, support, and opportunities to face their unique challenges and fulfill their unique interests and goals.  We are unlike any other organization in the breadth and depth of empowering skills we develop.</li>
                        <li>Our focus is on building relationships whether interpersonal or organizational.  We are one of the few organizations in the world to open our doors to people regardless of race, ethnicity, nationality, gender, age, disability, religion, political view, and sexual orientation.  We are a “street-roots” organization that provides hope, security, and opportunity to those who are otherwise forgotten, oppressed, harassed, discriminated against, disenfranchised, set back, or impoverished. </li>
                    </ul>
                </div>
                <div></div>
            </article>
            <article className="about2">
                <div>
                    <h1>Dare to Care about your Community</h1>
                    <h3>
                        The Guardian Angels help solve any kind of community problem. No matter on duty or not, we provide assistance to anyone in need. Often times, we provide medical assistance while on patrol or we might help someone look for a missing person.  We will also help publicize problems and promote causes that have been neglected or overlooked. Whenever a community or individuals are unable to address or solve problems through conventional means, we offer our services and support.  
                    </h3>
                    <h3>"Instead of relying on others to resolve a community issue, the Guardian Angels help people recognize that they should be turning to themselves. Together, those willing to fight for one another are most capable of solving their community’s problems."</h3>
                </div>
            </article>
            <Gallery/>
        </>

    )
}