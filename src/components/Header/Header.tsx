"use client";

import { Button, Form } from "@/components";
import classNames from "classnames";
import { useState } from "react";
import scrollLock from "scroll-lock";

export default function Header() {
    const [active, setActive] = useState(false);
    const [activeForm, setActiveForm] = useState(false);

    const list = [
        { text: "Our work", href: "#our-work" },
        { text: "about us", href: "#about-us" },
        { text: "REACH MAX+", href: "#reach-max" },
        { text: "PROCESS", href: "#process" },
        { text: "GUARANTEE", href: "#guarantee" },
        { text: "OUR TEAM", href: "#our-team" },
    ];

    return (
        <>
            <header className="_container py-[15px] absolute left-0 right-0 z-10 md:flex md:justify-between min-w-[375px]">
                <img src="img/logo.svg" alt="" className="hidden md:block sm:w-[64px]" />
                <div
                    className={classNames(
                        "flex items-center left-0 right-0 md:fixed md:bg-white md:z-20 md:bottom-0 md:top-0 md:left-0 md:right-0 md:flex-col md:items-start duration-200 md:_container md:py-[15px] md:overflow-auto",
                        active ? "md:opacity-100 md:visible" : "md:opacity-0 md:invisible",
                    )}
                >
                    <img src="img/logo.svg" alt="" className="md:mb-10" />
                    <button
                        className="hidden md:block absolute right-[18px] top-[18px]"
                        onClick={() => {
                            setActive(false);
                            scrollLock.enablePageScroll();
                        }}
                    >
                        <img src="img/nav-btn.svg" alt="" />
                    </button>
                    <ul className="flex gap-[30px] text-[14px] text-[#797979] leading-[17px] uppercase ml-[55px] flex-wrap md:ml-0 md:flex-col md:gap-[50px]">
                        {list.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    onClick={() => {
                                        setActive(false);
                                        scrollLock.enablePageScroll();
                                    }}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="md:pt-[46px] md:pb-[178px] md:pr-[108px] md:pl-5 md:bg-black md:mt-10 ml-auto md:-ml-[17px]">
                        <Button
                            text="GET IN TOUCH"
                            className="text-black bg-white"
                            onClick={() => {
                                setActiveForm(true);
                                scrollLock.disablePageScroll();
                            }}
                        />
                    </div>
                </div>
                <button
                    className="hidden md:block ml-auto relative z-10"
                    onClick={() => {
                        setActive(true);
                        scrollLock.disablePageScroll();
                    }}
                >
                    <img src="img/btn-nav-open.svg" alt="" />
                </button>
            </header>
            <div className={classNames("fixed left-0 right-0 top-0 bottom-0 z-20 duration-200", activeForm ? "opacity-100 visible" : "opacity-0 invisible")}>
                <div className="bg-black opacity-40 absolute left-0 right-0 top-0 bottom-0"></div>
                <div className="w-[720px] pt-[138px] pb-[180px] px-[63px] bg-white relative z-20 h-full ml-auto overflow-auto md:w-full sm:pt-[83px] sm:pb-[119px] sm:px-[17px]">
                    <button
                        className="absolute right-[42px] top-[35px] sm:top-[18px] sm:right-[18px]"
                        onClick={() => {
                            setActiveForm(false);
                            scrollLock.enablePageScroll();
                        }}
                    >
                        <img src="img/nav-btn.svg" alt="" />
                    </button>
                    <p className="text-[25px] leading-[30px] text-black font-bold mb-1">LET’S CONNECT!</p>
                    <p className="font-bold text-[16px] leading-[27px] text-[#797979] mb-[30px]">We would love to hear from you so please get in touch.</p>
                    <Form color="black" />
                </div>
            </div>
        </>
    );
}
