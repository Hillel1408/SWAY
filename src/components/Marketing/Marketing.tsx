"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

export default function Marketing() {
    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 44,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 2,
                    spacing: 44,
                },
            },
            "(max-width: 620px)": {
                slides: {
                    perView: 1,
                    spacing: 44,
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
            name: "BUILDING CONSIDERATION INFLUENCE",
            image: "img-1.png",
        },
        {
            name: "BUILDING CONSIDERATION INFLUENCE",
            image: "img-1.png",
        },
        {
            name: "BUILDING CONSIDERATION INFLUENCE",
            image: "img-1.png",
        },
        {
            name: "BUILDING CONSIDERATION INFLUENCE",
            image: "img-1.png",
        },
        {
            name: "BUILDING CONSIDERATION INFLUENCE",
            image: "img-1.png",
        },
        {
            name: "BUILDING CONSIDERATION INFLUENCE",
            image: "img-1.png",
        },
    ];

    return (
        <div className="overflow-hidden pb-[110px] md:pb-[200px] sm:pb-[190px]">
            <div className="bg-black pt-[60px]">
                <div className="_container relative min-h-[464px]">
                    <h2 className="font-bold text-[36px] leading-[44px] text-white uppercase mb-[36px] sm:text-center sm:text-[30px]">
                        MARKETING REPORTS TO EQUIP YOUR TEAM <br /> WITH THE MOST RELEVANT INSIGHTS
                    </h2>
                    {loaded && instanceRef.current && (
                        <div className="dots mb-[36px] flex gap-[11px] sm:justify-center sm:mb-0">
                            {[...Array(instanceRef.current.track.details.slides.length - 2).keys()].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx);
                                        }}
                                        className={classNames(currentSlide === idx ? "bg-white" : "", "w-[11px] h-[11px] border border-white rounded-full")}
                                    ></button>
                                );
                            })}
                        </div>
                    )}
                    <div className="absolute left-0 right-0">
                        <div ref={sliderRef} className="keen-slider !overflow-visible">
                            {slides.map((item, index) => (
                                <div key={index} className="keen-slider__slide">
                                    <div className="pt-[176px] pb-[45px]">
                                        <div className="absolute top-0 bottom-0 left-0 right-0 h-[calc(100%-70px)]">
                                            <img src={`img/${item.image}`} alt="" className="object-cover h-full md:w-full" />
                                        </div>
                                        <div className="bg-black py-[45px] px-[30px] mx-[30px] translate-y-[36px] flex flex-col gap-[3px] sm:py-[26px]">
                                            <p className="font-bold text-[26px] leading-[33px] text-white sm:text-[20px]">{item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
