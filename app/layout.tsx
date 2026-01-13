import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import 'aos/dist/aos.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "가디언엔젤스 코리아",
  description: "가디언엔젤스 코리아입니다.",
  keywords: [
  "지역 사회 봉사",
  "봉사활동",
  "지역 사회 캠페인",
  "안전 순찰",
],
  openGraph: {
    title: '가디언엔젤스 코리아',
    description: '지역 사회의 안전을 지키기 위해 함께합니다.',
    url: 'https://www.guardianangels.or.kr',
    siteName: 'Guardian Angels Korea',
    images: [
      {
        url: 'https://www.guardianangels.or.kr/images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: '가디언엔젤스 코리아',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    other: {
      'naver-site-verification': '178ab10406fb53e943b8d5883c8a6cb60c32a12e',
    }
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
