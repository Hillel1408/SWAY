import React from "react";

export default function Footer() {
    const list = [
        { text: "Our work", href: "#our-work" },
        { text: "about us", href: "#about-us" },
        { text: "REACH MAX+", href: "#reach-max" },
        { text: "PROCESS", href: "#process" },
        { text: "GUARANTEE", href: "#guarantee" },
        { text: "OUR TEAM", href: "#our-team" },
    ];

    return (
        <footer className="bg-black">
            <div className="_container pt-[30px] pb-[38px]">
                <div className="flex justify-between items-center mb-[23px] gap-10 md:items-start sm:mb-[46px]">
                    <img src="img/logo-2.svg" alt="" />
                    <ul className="flex gap-[30px] text-[14px] text-white leading-[17px] uppercase flex-wrap md:flex-col sm:gap-6">
                        {list.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-[14px] leading-[24px] underline text-white">
                        The Privacy Policy
                    </a>
                    <span className="text-[14px] leading-[30px] text-white opacity-60">© SWAY 2024</span>
                </div>
            </div>
        </footer>
    );
}
