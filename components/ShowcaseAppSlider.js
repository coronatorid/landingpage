import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowcaseAppSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  const data = [
    '/images/showcase/1_iphone12.png',
    '/images/showcase/2_iphone12.png',
    '/images/showcase/3_iphone12.png',
  ]

  return (
    <div className="px-8">
      <Slider {...settings}>
        {
          data.map((item, index) => {
            return (
              <div key={index} className="overflow-hidden outline-none hover:outline-none">
                <div className="flex justify-center h-full">
                  <div className="w-full md:w-10/12">
                    <img src={item} alt="" className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ShowcaseAppSlider;
