import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Banner />

      <article className="home">

        <div>
          <div className="display-flex">
            <section>
              <h3>Get Involved</h3>
            </section>
            <section>
              <h3>Contact Us</h3>
            </section>
            <section>
              <h3>Donate</h3>
            </section>
          </div>
          <h3>The Alliance of Guardian Angels is a non-profit 501 (c) (3) organization founded in 1979 in New York City, New York. Our mission is to provide positive role models for today’s youth and work toward promoting community safety and betterment for the good of society overall. </h3>
          <ul>
            <li>The Guardian Angels are dedicated to fostering safer, stronger, and more compassionate communities through volunteer-driven initiatives. We serve those in need by organizing homeless feedings, mentoring youth through positive leadership programs, offering self-defense courses, and conducting unarmed community patrols to ensure the safety of seniors and vulnerable individuals.</li>
            <li>We accomplish our mission through training volunteers, who are multi racial, to be effective as visual deterrents patrolling the streets in communities around the world. Our emphasis is on coordinating a variety of community-based services, programs and activities to speak and fight against violence, crime and drugs.</li>
            <li>Our philosophy is to empower individuals through service to others.  An empowered society is built through empowering individuals one at a time.  We train people to take constructive and cooperative action to solve individual and social problems.  We provide people with the tools, support, and opportunities to face their unique challenges and fulfill their unique interests and goals.  We are unlike any other organization in the breadth and depth of empowering skills we develop.</li>
            <li>Our focus is on building relationships whether interpersonal or organizational.  We are one of the few organizations in the world to open our doors to people regardless of race, ethnicity, nationality, gender, age, disability, religion, political view, and sexual orientation.  We are a “street-roots” organization that provides hope, security, and opportunity to those who are otherwise forgotten, oppressed, harassed, discriminated against, disenfranchised, set back, or impoverished. </li>
          </ul>
        </div>

        <div>
          <Image src="/images/introduce_bg.jpg" alt="가디언엔젤스 소개" width={500} height={500} />
        </div>
      </article>

      <Gallery/>

    </>
  );
}
