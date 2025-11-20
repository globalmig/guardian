'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header>
            <div className="display-flex">

                <div>
                    <Link href="/">
                        <Image src="/icons/logo.png" alt="홈으로" width={1080} height={1080} />
                    </Link>
                </div>

                <nav className={`mo ${isOpen ? 'nav-open' : 'nav-close'}`}>
                    <div onClick={() => setIsOpen(false)}>
                        <Image src="/icons/close.png" alt="메뉴 닫기" width={32} height={32} />
                    </div>
                    <ul>
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>about</Link></li>
                    </ul>
                </nav>
                <ul className="pc">
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>about</Link></li>
                    </ul>
                <div className="mo" onClick={() => setIsOpen(true)}>
                    <Image src="/icons/nav.png" alt="메뉴 열기" width={35} height={30} />
                </div>

            </div>
        </header>
    )
}