"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function OurWork() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 70,
    },
    breakpoints: {},
  });

  const slides = [
    {
      img: "img-2.png",
      logo: "logo-3.svg",
      title: "title",
      list: {
        views: "16M+",
        spend: "$25K",
        cpm: "$1.92",
        influencers: "100+",
      },
    },
    {
      img: "img-3.png",
      logo: "logo-4.svg",
      title: "title",
      list: {
        views: "16M+",
        spend: "$25K",
        cpm: "$1.92",
        influencers: "100+",
      },
    },
    {
      img: "img-2.png",
      logo: "logo-3.svg",
      title: "title",
      list: {
        views: "16M+",
        spend: "$25K",
        cpm: "$1.92",
        influencers: "100+",
      },
    },
    {
      img: "img-3.png",
      logo: "logo-4.svg",
      title: "title",
      list: {
        views: "16M+",
        spend: "$25K",
        cpm: "$1.92",
        influencers: "100+",
      },
    },
  ];

  return (
    <div className="_container py-[130px]">
      <h2 className="font-bold text-[36px] text-center leading-[44px] text-black mb-[73px]">
        Our work
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {slides.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="pl-[55px] translate-y-[50px] relative -z-10 border-l border-l-black">
              <img
                src={`img/${item.img}`}
                alt=""
                className="translate-x-[1px]"
              />
              <div className="absolute bg-black max-h-[322px] h-full w-[calc(100%-26px)] -z-20 -top-[50px] left-0 outline outline-black"></div>
            </div>
            <div className="px-6 pb-6 border-x border-x-black border-b border-b-black">
              <div className="flex gap-3 items-end">
                <div className="bg-black px-[55px] py-[28px]">
                  <img src={`img/${item.logo}`} alt="" />
                </div>
                <h3 className="pb-3 uppercase font-bold text-[15px] leading-[18px] text-black">
                  {item.title}
                </h3>
              </div>
              <div className="grid grid-cols-4 pt-[16px]">
                <div className="flex flex-col gap-[3px]">
                  <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase">
                    views
                  </span>
                  <span className="font-bold text-[30px] leading-[36px] text-bold">
                    {item.list.views}
                  </span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase">
                    spend
                  </span>
                  <span className="font-bold text-[30px] leading-[36px] text-bold">
                    {item.list.spend}
                  </span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase">
                    cpm
                  </span>
                  <span className="font-bold text-[30px] leading-[36px] text-bold">
                    {item.list.cpm}
                  </span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase">
                    influencers
                  </span>
                  <span className="font-bold text-[30px] leading-[36px] text-bold">
                    {item.list.influencers}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
