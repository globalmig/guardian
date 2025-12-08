'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import MainSlide from "./MainSlide";

export default function Banner() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[0] || "/";
    const isHome = category === "/" || category === "introduce";

    return (
        <>
            {isHome ?
                <main>
                    <div>
                        <MainSlide />
                        <div>
                            <h1>We are the Guardian Angels</h1>
                            <h2>지역 사회의 안전을 지키기 위해 함께합니다.</h2>
                        </div>
                    </div>
                </main>
                :
                <main>
                    <div>
                        <div>
                            <video autoPlay={true} muted={true} loop={true}>
                                <source src="/images/main-banner.mp4" type="video/mp4" />
                            </video>
                         </div>
                        <div>
                            <h1>We are the Guardian Angels</h1>
                            <h2>가디언엔젤스를 소개합니다.</h2>
                        </div>
                    </div>
                </main>

            }
        </>
    )
}