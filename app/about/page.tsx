"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    return (
        <>
            <Banner />
            <div className="about-img" data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-once="true"
          data-aos-duration="500">
                <div>
                    <Image src="/images/about-img.png" alt="가디언엔젤스코리아" width={678} height={606}/>
                </div>
            </div>
            <article className="about">
                <div>
                    <About/>
                    <Gallery/>
                </div>
            </article>
        </>

    )
}