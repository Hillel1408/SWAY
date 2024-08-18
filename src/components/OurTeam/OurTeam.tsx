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
        breakpoints: {},
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
        <div className="overflow-hidden mt-[130px]">
            <div className="_container pb-[127px]">
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[58px] uppercase">OUR TEAM</h2>
                {loaded && instanceRef.current && (
                    <div className="dots mb-[36px] flex gap-[11px]">
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
                            <div className="pt-[176px] bg-[#C4C4C4]">
                                <div className="absolute top-0 bottom-0 left-0 right-0">
                                    <img src={`img/${item.image}`} alt="" className="object-cover h-full" />
                                </div>
                                <div className="bg-black py-[45px] px-[30px] mx-[30px] translate-y-[36px] flex flex-col gap-[3px]">
                                    <p className="font-bold text-[26px] leading-[33px] text-white">{item.name}</p>
                                    <p className="uppercase text-[20px] leading-[24px] text-white opacity-70">{item.description}</p>
                                    <a href="mailto:Jeremy@swayinfluence.com" className="uppercase text-white font-bold text-[15px] leading-[27px]">
                                        {item.description}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
