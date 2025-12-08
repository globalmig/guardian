'use client';
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainSlide() {
   const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

    return(
        <Slider {...settings} className="slider">
            <div>
                <Image src="/images/banner_1.jpg" alt="배너1" width={1272} height={715} priority quality={100}/>
            </div>
            <div>
                <Image src="/images/banner_2.jpg" alt="배너2" width={1272} height={715} priority quality={100}/>
            </div>
            <div>
                <Image src="/images/banner_3.jpg" alt="배너3" width={1272} height={715} priority quality={100}/>
            </div>
            <div>
                <Image src="/images/banner_4.jpg" alt="배너4" width={1272} height={715} priority quality={100}/>
            </div>
        </Slider>
    )
}