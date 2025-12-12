import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div>

                    <div>
                        <Image src="/icons/logo.png" alt="로고" width={1080} height={1080} />
                    </div>
                    <ul>
                        <li><span>상호명 : </span>가디언엔젤스 코리아</li>
                        <li><span>대표자 : </span>전훈</li>
                        <li><span>연락처 : </span>010-3314-7258</li>
                        <li><span>이메일 : </span>admin@guardianangels.org</li>
                        <li><span>주소 : </span>서울특별시 광진구 군자로 140, 1층 102호(군자동)</li>
                        <li>Copyright © 2025. GUARDIAN ANGELS KOREA. All rights reserved.</li>
                    </ul>
                    {/* <div>
                        <h3>Follow <span>The Guardian Angels :</span></h3>
                        <div className="display-flex">
                            <Link href="https://www.instagram.com/guardianangelshome/?hl=en" target="_blank">
                                <div>
                                <Image src="/icons/instagram.png" alt="인스타그램 이동" width={38} height={38} />
                                </div>
                            </Link>
                            <Link href="https://www.facebook.com/theredberets" target="_blank">
                                <div>
                                <Image src="/icons/facebook.png" alt="페이스북 이동" width={38} height={38} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button>
                            <Link href="https://guardianangels.us9.list-manage.com/subscribe?u=567e1b7c2e72cc4aaaf00d8dd&id=1d47407e60" target="_blank">SIGN UP FOR OUR NEWSLETTER</Link>
                        </button>
                    </div> */}
            </div>
        </footer>
    )
}