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
            </div>
        </footer>
    )
}