"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Gallery() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[0] || "/";
    const isAbout = category === "about";

    return (
        <article className="gallery">
            <div>

                {isAbout ?
                    <div className="about-g display-flex-flow">
                        <div>
                            <Image src="/images/gallery_9.jpg" alt="갤러리" width={1272} height={715} />
                        </div>
                        <div className="display-flex">
                            <div>
                                <Image src="/images/gallery_10.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                            <div>
                                <Image src="/images/gallery_11.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                        </div>
                        <div>
                            <Image src="/images/gallery_12.jpg" alt="갤러리" width={1272} height={715} />
                        </div>
                        <div className="display-flex">
                            <div>
                                <div>
                                    <Image src="/images/gallery_13.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                                <div>
                                    <Image src="/images/gallery_14.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                            </div>
                            <div>
                                <Image src="/images/gallery_15.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                        </div>
                    </div>
                    : <div className="intro display-flex-flow">
                        <div className="display-flex">
                            <div>
                                <Image src="/images/gallery_1.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                            <div>
                                <Image src="/images/gallery_2.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                        </div>
                        <div>
                            <Image src="/images/gallery_3.jpg" alt="갤러리" width={1272} height={715} />
                        </div>
                        <div>
                            <div>
                                <Image src="/images/gallery_4.jpg" className="pc" alt="갤러리" width={1272} height={715} />
                            </div>
                            <div>
                                <Image src="/images/gallery_5.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                        </div>
                        <div className="display-flex">
                            <div>
                                <Image src="/images/gallery_6.jpg" alt="갤러리" width={1272} height={715} />
                            </div>
                            <div>
                                <div>
                                    <Image src="/images/gallery_7.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                                <div>
                                    <Image src="/images/gallery_8.jpg" alt="갤러리" width={1272} height={715} />
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </article>
    )
}