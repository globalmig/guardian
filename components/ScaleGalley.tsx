"use client"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

interface ScaleGalleyProps {
    src: string,
    isOpenGalley: boolean,
    setIsOpenGalley: Dispatch<SetStateAction<boolean>>
}

export default function ScaleGalley({ src, isOpenGalley,setIsOpenGalley }: ScaleGalleyProps) {
    return (
        <>
            <div className="scale-galley" style={{display: isOpenGalley ? "block" : "none"}}>
                <div onClick={() => setIsOpenGalley(false)}>
                    <Image src="/icons/close.png" alt="닫기" width={32} height={32} />
                </div>
                <div>
                    <Image src={src} alt={src} width={1272} height={715} />
                </div>
            </div>
        </>
    )
}