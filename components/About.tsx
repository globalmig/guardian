"use client";
import AOS from "aos";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);

    return (
        <div className="contents">
            <h4 data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-once="true"
          data-aos-duration="1200">GUARDIANS ANGELS</h4>
          <h3 data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-once="true"
          data-aos-duration="1200">한 사람이라도 다른 이들이 함께 돌봐준다면<br/>범죄로부터 예방될 수 있습니다.</h3>
          <ul data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-once="true"
          data-aos-duration="1200">
            <li>가디언 엔젤스는 지역사회의 일부로 자리매김한 단체입니다. 1979년 뉴욕을 기반을 둔 비영리 단체로서, 미국 전역과 세계적으로 수백 개에 달하는 안전 순찰 단체를 만들었습니다. 커티스 슬리와와 뉴욕시에서 12명의 헌신적인 자원봉사자들에 의해 결성된 13명은 지하철에서 안전 순찰을 실시했습니다. 46년 동안 수천 명의 사람들이 가디언 엔젤스에 참여하여 14개 국가의 130여개 도시에 걸쳐 지역사회를 보호하고 삶의 질을 향상시키는 데 기여하고 있습니다.</li>
            <li>가디언 엔젤스는 지역사회에서 본보기이자 모범이 되는 역할을 합니다. 그들은 지역사회의 어떠한 문제도 개인의 힘으로 해결할 수 없으며 모든 구성원의 협력을 중요시합니다. 그들은 안전 순찰이 필요한 많은 사회 문제를 해결하기 위해 지역사회 자부심과 시민 의식을 육성해야 한다는 필요성을 인식합니다. 이 태도는 자원봉사자들이 운영하는 다양한 지역사회 프로그램과 서비스 전반에 녹아 있습니다. 가디언 엔젤스는 예방이 아닌 보호만을 고려하는 것은 범죄의 불가피성에 흰 깃발을 들이대는 것이라고 인식합니다.</li>
          </ul>
        </div>
    )
}