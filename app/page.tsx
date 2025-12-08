import Banner from "@/components/Banner";
import Facebook from "@/components/Facebook";
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
              <h3>지역사회 안전<br /><span className="pc">(Community Safety)</span></h3>
            </section>
            <section>
              <h3>성장과 리더십<br /><span className="pc">(Growth & Leadership)</span></h3>
            </section>
            <section>
              <h3>포용과 연대<br /><span className="pc">(Inclusion & Community Solidarity)</span></h3>
            </section>
          </div>
          {/* <h3>The Alliance of Guardian Angels is a non-profit 501 (c) (3) organization founded in 1979 in New York City, New York. Our mission is to provide positive role models for today’s youth and work toward promoting community safety and betterment for the good of society overall. </h3> */}
          <h3>가디언엔젤스 연합(Alliance of Guardian Angels)은 1979년 뉴욕주 뉴욕시에서 설립된 비영리 501(c)(3) 단체입니다. 저희의 사명은 오늘날 청소년들에게 긍정적인 롤모델을 제공하고, 지역 사회의 안전과 발전을 증진하여 사회 전체의 이익을 증진하는 것입니다.</h3>
          <ul>
            <li>가디언 엔젤스는 자원봉사 중심의 활동을 통해 더욱 안전하고, 강하고, 따뜻한 공동체를 조성하는 데 헌신합니다. 노숙자 급식, 긍정적 리더십 프로그램을 통한 청소년 멘토링, 자기방어 교육, 그리고 노인과 취약 계층의 안전을 위한 비무장 지역 순찰을 통해 도움이 필요한 사람들을 지원합니다.</li>
            <li>저희는 다양한 인종으로 구성된 자원봉사자들을 훈련하여 전 세계 지역 사회의 거리를 순찰하는 시각적 단속 요원으로 효과적으로 활동할 수 있도록 함으로써 사명을 달성합니다. 저희는 폭력, 범죄, 마약에 맞서 목소리를 내고 싸우기 위해 다양한 지역 사회 기반 서비스, 프로그램, 활동을 조율하는 데 중점을 두고 있습니다.</li>
            <li>저희의 철학은 타인을 위한 봉사를 통해 개인에게 힘을 실어주는 것입니다. 힘이 넘치는 사회는 한 사람 한 사람에게 힘을 실어줄 때 구축됩니다. 저희는 사람들이 개인적, 사회적 문제를 해결하기 위해 건설적이고 협력적인 행동을 취할 수 있도록 교육합니다. 또한, 각자의 고유한 어려움에 맞서고 고유한 관심사와 목표를 달성할 수 있도록 도구, 지원, 그리고 기회를 제공합니다. 저희는 다른 어떤 조직과도 비교할 수 없을 만큼 폭넓고 깊이 있는 힘을 실어주는 기술을 개발합니다.</li>
            <li>저희는 대인 관계든 조직 관계든 관계 구축에 중점을 둡니다. 저희는 인종, 민족, 국적, 성별, 나이, 장애, 종교, 정치적 견해, 성적 지향에 관계없이 누구에게나 문을 여는 세계에서 몇 안 되는 단체 중 하나입니다. 저희는 소외되고, 억압받고, 괴롭힘을 당하고, 차별받고, 권리를 박탈당하고, 소외되거나, 빈곤에 처한 사람들에게 희망과 안정, 그리고 기회를 제공하는 "거리에 뿌리를 둔" 단체입니다.</li>
          </ul>
          <Gallery />
        </div>

        <div>
          <div>
            <Image src="/images/introduce_bg.jpg" alt="가디언엔젤스 소개" width={1272} height={715} />
          </div>
          <div>
            <h1>"서로 힘을 합쳐 서로 돕는 것만이</h1>
            <h1>사람들은 안전하고 평화롭게 살 수 있을까?"</h1>
            <h2>- Curtis Sliwa, 창립자</h2>
          </div>
        </div>
      </article>

      <article className="home2">
        <div>

          <div>
            <h1>가디언엔젤스와 함께</h1>
            <h2>45주년을 기념합니다.</h2>
          </div>

          <div>
            <Facebook/>
          </div>

        </div>
      </article>
    </>
  );
}
