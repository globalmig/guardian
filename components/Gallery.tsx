"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScaleGalley from "./ScaleGalley";
import AOS from "aos";

export default function Gallery() {

    useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[0] || "/";
    const isAbout = category === "about";

    const [isOpenGalley, setIsOpenGalley] = useState(false);
    const [currentImg, setCurrentImg] = useState<string | null>(null)

    const onClickScale = (src: string) => {
        setCurrentImg(src);
        setIsOpenGalley(true);
    }

    return (
        <>
            <div className="gallery" data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="800">
                <div>

                    {isAbout ?
                        <div className="about-g display-flex-flow">
                            <div onClick={() => onClickScale("/images/gallery_9.jpg")}>
                                <Image src="/images/gallery_9.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                            <div>
                                <div className="display-flex">
                                    <div onClick={() => onClickScale("/images/gallery_10.jpg")}>
                                        <Image src="/images/gallery_10.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                    <div onClick={() => onClickScale("/images/gallery_11.jpg")}>
                                        <Image src="/images/gallery_11.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                </div>
                                <div onClick={() => onClickScale("/images/gallery_12.jpg")}>
                                    <Image src="/images/gallery_12.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                            </div>
                            <div className="display-flex">
                                <div>
                                    <div onClick={() => onClickScale("/images/gallery_13.jpg")}>
                                        <Image src="/images/gallery_13.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                    <div onClick={() => onClickScale("/images/gallery_14.jpg")}>
                                        <Image src="/images/gallery_14.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                </div>
                                <div onClick={() => onClickScale("/images/gallery_15.jpg")}>
                                    <Image src="/images/gallery_15.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                            </div>
                        </div>
                        : <div className="intro display-flex-flow">
                            <div>
                                <div className="display-flex">
                                    <div onClick={() => onClickScale("/images/gallery_1.jpg")}>
                                        <Image src="/images/gallery_1.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                    <div onClick={() => onClickScale("/images/gallery_2.jpg")}>
                                        <Image src="/images/gallery_2.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                </div>
                                <div onClick={() => onClickScale("/images/gallery_3.jpg")}>
                                    <Image src="/images/gallery_3.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                            </div>
                            <div>
                                <div onClick={() => onClickScale("/images/gallery_4.jpg")}>
                                    <Image src="/images/gallery_4.jpg" className="pc" alt="갤러리" width={1272} height={715} />
                                </div>
                                <div onClick={() => onClickScale("/images/gallery_5.jpg")}>
                                    <Image src="/images/gallery_5.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                            </div>
                            <div className="display-flex">
                                <div onClick={() => onClickScale("/images/gallery_6.jpg")}>
                                    <Image src="/images/gallery_6.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                                <div>
                                    <div onClick={() => onClickScale("/images/gallery_7.jpg")}>
                                        <Image src="/images/gallery_7.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                    <div onClick={() => onClickScale("/images/gallery_8.jpg")}>
                                        <Image src="/images/gallery_8.jpg" alt="갤러리" width={1272} height={715} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
            {isOpenGalley && currentImg && <ScaleGalley src={currentImg} isOpenGalley={isOpenGalley} setIsOpenGalley={setIsOpenGalley} />}
        </>
    )
}