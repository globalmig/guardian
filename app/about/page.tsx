import About from "@/components/About";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Banner />
            <article className="about">
                <div>
                    <About/>
                    <Gallery/>
                </div>
                {/* <div></div> */}
            </article>
            {/* <article className="about2">
                <div>
                    <h1>지역 사회에 대한 관심을 가져보세요.</h1>
                    <h3>
                        가디언엔젤스는 모든 종류의 지역 사회 문제 해결을 돕습니다. 근무 여부와 관계없이, 도움이 필요한 모든 사람에게 도움을 제공합니다. 순찰 중 의료 지원을 제공하거나 실종자 수색을 돕기도 합니다. 또한, 문제를 알리고 소홀히 되거나 간과되었던 문제들을 홍보합니다. 지역 사회나 개인이 기존의 방식으로 문제를 해결하지 못할 때, 우리는 필요한 서비스와 지원을 제공합니다.    
                    </h3>
                    <h3>"가디언엔젤스는 공동체 문제를 해결하기 위해 타인에게 의존하는 대신, 사람들이 스스로에게 의지해야 한다는 것을 깨닫도록 돕습니다. 서로를 위해 기꺼이 싸우려는 사람들이 힘을 합칠 때, 공동체의 문제를 가장 효과적으로 해결할 수 있습니다."</h3>
                    <p>-커티스 슬리와, 창립자 겸 사장.</p>
                    <Gallery/>
                </div>
            </article> */}
        </>

    )
}