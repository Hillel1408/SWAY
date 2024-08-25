"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

export default function OurWork() {
    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 70,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 2,
                    spacing: 24,
                },
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 1,
                },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
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
        <div className="_container py-[130px] sm:py-[74px]" id="our-work">
            <h2 className="font-bold text-[36px] text-center leading-[44px] text-black mb-[23px] uppercase sm:text-[30px] sm:mb-[22px]">Our work</h2>
            <div className="sm:flex sm:flex-col-reverse">
                {loaded && instanceRef.current && (
                    <div className="dots mb-[36px] flex gap-[11px] sm:mb-0">
                        {[...Array(instanceRef.current.track.details.slides.length - 1).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={classNames(currentSlide === idx ? "bg-black" : "", "w-[11px] h-[11px] border border-black rounded-full")}
                                ></button>
                            );
                        })}
                    </div>
                )}
                <div ref={sliderRef} className="keen-slider">
                    {slides.map((item, index) => (
                        <div key={index} className="keen-slider__slide">
                            <div className="pl-[55px] translate-y-[50px] relative -z-10 border-l border-l-black">
                                <img src={`img/${item.img}`} alt="" className="translate-x-[1px] md:ml-auto" />
                                <div className="absolute bg-black max-h-[322px] h-full w-[calc(100%-26px)] -z-20 -top-[50px] left-0 outline outline-black"></div>
                            </div>
                            <div className="px-6 pb-6 border-x border-x-black border-b border-b-black">
                                <div className="flex gap-3 items-end">
                                    <div className="bg-black min-w-[208px] py-[28px] max-h-[93px] flex justify-center sm:min-w-[120px] sm:py-[16px] sm:mt-5">
                                        <img src={`img/${item.logo}`} alt="" className="sm:w-[56px]" />
                                    </div>
                                    <h3 className="pb-3 uppercase font-bold text-[15px] leading-[18px] text-black sm:hidden">{item.title}</h3>
                                </div>
                                <div className="grid grid-cols-4 pt-[16px]">
                                    <div className="flex flex-col gap-[3px]">
                                        <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase sm:text-[10px]">views</span>
                                        <span className="font-bold text-[30px] leading-[36px] text-bold sm:text-[22px]">{item.list.views}</span>
                                    </div>
                                    <div className="flex flex-col gap-[3px]">
                                        <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase sm:text-[10px]">spend</span>
                                        <span className="font-bold text-[30px] leading-[36px] text-bold sm:text-[22px]">{item.list.spend}</span>
                                    </div>
                                    <div className="flex flex-col gap-[3px]">
                                        <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase sm:text-[10px]">cpm</span>
                                        <span className="font-bold text-[30px] leading-[36px] text-bold sm:text-[22px]">{item.list.cpm}</span>
                                    </div>
                                    <div className="flex flex-col gap-[3px]">
                                        <span className="font-bold text-[16px] leading-[19px] text-[#797979] uppercase sm:text-[10px]">influencers</span>
                                        <span className="font-bold text-[30px] leading-[36px] text-bold sm:text-[22px]">{item.list.influencers}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
