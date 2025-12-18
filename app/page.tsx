"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);

  return (
    <>
      <Banner />

      <article className="home">

        <div className="display-flex-flow" data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="800">
          <div>
            <div>
              <Image src="/images/introduce_3.jpg" alt="가디언엔젤스 소개" width={1272} height={715} />
            </div>
            <div className="display-flex">
              <section>
                <h3>지역사회 안전</h3>
              </section>
              <section>
                <h3>성장과 리더십</h3>
              </section>
              <section>
                <h3>포용과 연대</h3>
              </section>
            </div>
          </div>
          <About />
        </div>

        <div>
          <div className="contents">
            <div>
              <h4 data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="800">WHAT WE DO</h4>
            </div>
            <h3 data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="800">가디언 엔젤스와 함께 모여 서로를 돕는다면<br />사람들은 안전하고 평화롭게 살 수 있습니다.</h3>
            <ul data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="800">
              <li>안전 순찰은 가디언 엔젤스의 탄생부터 그 핵심과 영혼이 되어왔습니다. 순찰 자원봉사자들은 자주 지역사회를 순찰하면서 자기 자신과 다른 이들의 보호에 대한 철저한 훈련을 받습니다. 그들의 노력은 시민들을 하나로 묶어 지역사회 문제의 끊임없이 변화하는 측면에 대응하도록 도와 힘겨운 거리 범죄라는 무서운 문제에 대항합니다. 그들은 가장 필요한 곳에서 범죄 활동에 대처하며 방어적인 것을 넘어 실용적인 기술을 가르치고 지역사회 프로그램을 시작하며 문제를 해결하기 위해 협력을 강조합니다.</li>
              <li>가디언 엔젤스는 실용적인 기술과 "자기 도움" 기술 전반을 학교, 지역 단체 시설 및 커뮤니티 센터에서 가르치면서 사람들을 능력 있게 만듭니다. 그들의 프로그램은 정부에 의존하지 않고 행동을 취할 수 있도록 하는데, 이는 가디언 엔젤스의 핵심 원칙 중 하나입니다. 지역 단체 자원봉사자들은 자신들의 경험을 바탕으로 얻은 것들을 활용하여 세니어, 여성, 커뮤니티 그룹, 학교 및 대학 학생들에게 자기 방어 수업과 "거리 상식" 기술을 가르칩니다. 커뮤니티 방어 수업부터 성인 및 청소년 대상의 생활 기술 교육까지, 가디언 엔젤스는 지역사회 문제에 어떻게 대응해야 하는지 전반적인 그림을 볼 수 있는 능력을 가지고 있습니다. 우리 모두에게 내재된 자기 의존성을 육성하고 지역 주민이 그들만의 고유한 문제를 해결할 수 있는 가장 능력 있는 존재라는 점을 이해하며, 가디언 엔젤스는 다른 이들이 함께 돌봐준다면 도움의 손길을 내밀 준비가 되어 있습니다!</li>
            </ul>
          </div>
        </div>

      </article>

      <article className="home2">
        <div>

          <div className="display-flex-flow">
            <div data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="800">
              <Image src="/images/introduce_1.jpg" alt="가디언엔젤스 소개" width={1272} height={715} />
            </div>
            <div className="contents">
              <h4 data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="800">GUARDIANS ANGELS</h4>
              <h3 data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="800">매 일상이 절대적으로 안전할 수만은 없습니다. </h3>
              <ul data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="800">
                <li>가디언 엔젤스가 범죄를 예방하려는 노력은 여러 수준에서 벌이는 전쟁입니다. 우리는 직면한 현실에 대해 솔직하게 대처하면서도 이룰 수 있는 모든 승리에 기뻐합니다. 이는 우리를 동기부여하고 계속 나아가게 하는 원동력이 됩니다. 우리 혼자서는 범죄를 끝낼 수 없지만, 가디언 엔젤스의 지원을 받으면 매일매일 긍정적인 변화를 이끌어낼 수 있습니다. 우리는 매 잠재적인 범죄를 예방하고, 우리 모두에게 더 나은 삶을 선사합니다. 매번 우리가 도와준 강도, 강도, 강간 또는 살인은 일어날 수 있었던 충격을 겪지 않게 된 한 사람과 한 가족이 더 많아집니다. 매번 어르신이 산책하다가 붉은 베레 모자 자원봉사자를 만나 더 안전하게 느낄 때마다, 우리는 우려하는 시민으로서 조금의 승리를 거둡니다. 우리 청소년 프로그램 문을 통과하는 매 소년이나 소녀는 어린이가 자신의 잠재력에 도달할 수 있는 또 다른 기회이며, 한 동네가 미래 사회에 또 다른 기여자가 길거리의 희생자가 되는 것을 방지할 수 있는 기회입니다.</li>
              </ul>
            </div>
          </div>

          <div className="display-flex-flow">
            <div data-aos="fade-left"
              data-aos-easing="ease-out"
              data-aos-duration="800">
              <Image src="/images/introduce_2.jpg" alt="가디언엔젤스 소개" width={1272} height={715} />
            </div>
            <div className="contents">
              <h4 data-aos="fade-right"
                data-aos-easing="ease-out"
                data-aos-duration="800">WE PROMISE</h4>
              <ul data-aos="fade-right"
                data-aos-easing="ease-out"
                data-aos-duration="800">
                <li>우리는 오랜 시간을 통해 우리가 해야할 일을 계속해 나갈 것을 약속합니다. 우리가 시민들의 지지를 받은 모든 선물을 잘 활용하겠다고 약속하며 계속해서 노력을 아끼지 않을 것입니다. 우리가 희망하는 목표를 이룰것 입니다. 우리의 노력에 동의한다면, 그리고 가능하다면 기부해 주십시오. 우리 지역사회 구성원들의 직접적인 지원은 계속해서 안전 순찰을 유지하고 늘 적절하게 장비를 갖추고 길에서 마주치는 다양한 상황에 대응할 수 있도록 할 것입니다. 그리고 안전 순찰이 그들의 임무를 수행하는 동안 여러분의 기부는 또한 청소년들에게 우리의 청소년 아웃리치 및 멘토링 프로그램을 통해 서비스할 수 있게 할 것입니다. 이 프로그램들은 순찰과는 달리 언론의 주목을 받지 않을 수 있지만, 직접 보면 그들이 어떤 직접적이고 오래 지속되는 영향을 끼치는지 알 수 있습니다. 우리는 많은 일을 더 적은 자원으로 해냈습니다. 우리는 받게 된 모든 선물을 좋은 목적에 사용하겠다고 약속하며 계속해서 변화를 이끌어내겠습니다.</li>
              </ul>
            </div>
          </div>

          <div>
            <div data-aos="fade-up"
              data-aos-easing="ease-out"
              data-aos-duration="800">
              <h4>KOREA</h4>
              <h1>GUARDIAN ANGELS</h1>
            </div>
            <Gallery />
            <div style={{ display: "none" }}></div>
          </div>

        </div>
      </article>

    </>
  );
}
