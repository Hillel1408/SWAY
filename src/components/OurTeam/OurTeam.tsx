"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

export default function OurTeam() {
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
            name: "JEREMY",
            description: "A game-changer",
            email: "Jeremy@swayinfluence.com",
            image: "img-1.png",
        },
        {
            name: "NICK MODICA",
            description: "FOUNDER",
            email: "Nick@swayinfluence.com",
            image: "img-1.png",
        },
        {
            name: "JEREMY ROACH",
            description: "A game-changer",
            email: "Jeremy@swayinfluence.com",
            image: "img-1.png",
        },
        {
            name: "JEREMY",
            description: "A game-changer",
            email: "Jeremy@swayinfluence.com",
            image: "img-1.png",
        },
        {
            name: "NICK MODICA",
            description: "FOUNDER",
            email: "Nick@swayinfluence.com",
            image: "img-1.png",
        },
        {
            name: "JEREMY ROACH",
            description: "A game-changer",
            email: "Jeremy@swayinfluence.com",
            image: "img-1.png",
        },
    ];

    return (
        <div className="overflow-hidden mt-[130px] md:mt-[74px] sm:mt-0">
            <div className="_container pb-[127px] md:pb-[74px]">
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[58px] uppercase sm:text-center sm:text-[30px] sm:mb-[22px]">OUR TEAM</h2>
                <div className="sm:flex sm:flex-col-reverse sm:gap-6">
                    {loaded && instanceRef.current && (
                        <div className="dots mb-[36px] flex gap-[11px] sm:justify-center sm:mb-0">
                            {[...Array(instanceRef.current.track.details.slides.length - 2).keys()].map((idx) => {
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
                    <div ref={sliderRef} className="keen-slider !overflow-visible">
                        {slides.map((item, index) => (
                            <div key={index} className="keen-slider__slide">
                                <div className="pt-[176px] pb-[45px]">
                                    <div className="absolute top-0 bottom-0 left-0 right-0 h-[calc(100%-45px)]">
                                        <img src={`img/${item.image}`} alt="" className="object-cover h-full" />
                                    </div>
                                    <div className="bg-black py-[45px] px-[30px] mx-[30px] translate-y-[36px] flex flex-col gap-[3px] sm:p-[15px]">
                                        <p className="font-bold text-[26px] leading-[33px] text-white sm:text-[20px]">{item.name}</p>
                                        <p className="uppercase text-[20px] leading-[24px] text-white opacity-70 sm:text-[18px]">{item.description}</p>
                                        <a
                                            href="mailto:Jeremy@swayinfluence.com"
                                            className="uppercase text-white font-bold text-[15px] leading-[27px] sm:text-[15px]"
                                        >
                                            {item.description}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
