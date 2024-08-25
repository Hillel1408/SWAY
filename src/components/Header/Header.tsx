"use client";

import { Button } from "@/components";
import classNames from "classnames";
import { useState } from "react";

export default function Header() {
    const [active, setActive] = useState(false);
    const list = [{ text: "Our work" }, { text: "about us" }, { text: "REACH MAX+" }, { text: "PROCESS" }, { text: "GUARANTEE" }, { text: "OUR TEAM" }];

    return (
        <header className="_container py-[15px] absolute left-0 right-0 md:flex md:justify-between min-w-[375px]">
            <img src="img/logo.svg" alt="" className="hidden md:block sm:w-[64px]" />
            <div
                className={classNames(
                    "flex items-center left-0 right-0 md:fixed md:bg-white md:z-20 md:bottom-0 md:top-0 md:left-0 md:right-0 md:flex-col md:items-start duration-200 md:_container md:py-[15px] md:overflow-auto",
                    active ? "md:opacity-100 md:visible" : "md:opacity-0 md:invisible",
                )}
            >
                <img src="img/logo.svg" alt="" className="md:mb-10" />
                <button className="hidden md:block absolute right-[18px] top-[18px]" onClick={() => setActive(false)}>
                    <img src="img/nav-btn.svg" alt="" />
                </button>
                <ul className="flex gap-[30px] text-[14px] text-[#797979] leading-[17px] uppercase ml-[55px] flex-wrap md:ml-0 md:flex-col md:gap-[50px]">
                    {list.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
                <div className="md:pt-[46px] md:pb-[178px] md:pr-[108px] md:pl-5 md:bg-black md:mt-10 ml-auto md:-ml-[17px]">
                    <Button text="GET IN TOUCH" className="text-black bg-white" />
                </div>
            </div>
            <button className="hidden md:block ml-auto relative z-10" onClick={() => setActive(true)}>
                <img src="img/btn-nav-open.svg" alt="" />
            </button>
        </header>
    );
}
