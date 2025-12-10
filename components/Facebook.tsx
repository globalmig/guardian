"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Facebook() {
  const [width, setWidth] = useState(500); // 기본 PC width
  const [height, setHeight] = useState(700);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w <= 768) {
        setWidth(w - 20);
        setHeight(500);
      } else if (w <= 1024) {
        setWidth(w - 40);
        setHeight(500);
      } else {
        // PC
        setWidth(500);
        setHeight(700);
      }
      setLoading(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [width, height]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        async
        defer
      />
      {/* {loading &&
        <div className="loading">
          <p>Facebook 타임라인을 불러오는 중입니다..</p>
        </div>} */}
        <div
          className="fb-page"
          data-href="https://www.facebook.com/theredberets"
          data-tabs="timeline"
          data-width={width}
          data-height={height}
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
    </>
  );
}
