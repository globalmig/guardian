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
                            <p>WE ALLKNOW THE WORKD IS NOT STABLE AT THE MOMENT</p>
                            <h2>DON' T WORRY. WE ARE HERE<br />WE MAKE PEOPLE SAFE.</h2>
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
                            <p>WE ARE THE GUARDIAN ANGELS</p>
                            <h2>가디언엔젤스를 소개합니다.</h2>
                        </div>
                    </div>
                </main>

            }
        </>
    )
}