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
                            <h2>JOIN US TO HELP KEEP YOUR COMMUNITY SAFE. </h2>
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
                            <h2>JOIN US TO HELP KEEP YOUR COMMUNITY SAFE. </h2>
                        </div>
                    </div>
                </main>

            }
        </>
    )
}