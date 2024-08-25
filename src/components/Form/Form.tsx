"use client";

import { Button } from "@/components";
import classNames from "classnames";
import { useState } from "react";

const initValue = { firstName: "", surname: "", email: "", phone: "", context: "" };

export default function Form({ color }: { color: string }) {
    const [value, setValue] = useState(initValue);

    const send = () => {
        console.log(value);
        setValue(initValue);
    };

    return (
        <form action={send}>
            <div className="grid grid-cols-2 gap-[36px] sm:grid-cols-1 sm:gap-5">
                <input
                    type="text"
                    placeholder="FIRST NAME*"
                    className={`text-[16px] leading-[28px] text-${color} uppercase border border-${color} bg-transparent py-[10px] px-5 placeholder:text-${color} sm:py-[8px]`}
                    value={value.firstName}
                    onChange={(e) => setValue({ ...value, firstName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="SURNAME*"
                    className={`text-[16px] leading-[28px] text-${color} uppercase border border-${color} bg-transparent py-[10px] px-5 placeholder:text-${color} sm:py-[8px]`}
                    value={value.surname}
                    onChange={(e) => setValue({ ...value, surname: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="EMAIL*"
                    className={`text-[16px] leading-[28px] text-${color} uppercase border border-${color} bg-transparent py-[10px] px-5 placeholder:text-${color} sm:py-[8px]`}
                    value={value.email}
                    onChange={(e) => setValue({ ...value, email: e.target.value })}
                />
                <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className={`text-[16px] leading-[28px] text-${color} uppercase border border-${color} bg-transparent py-[10px] px-5 placeholder:text-${color} sm:py-[8px]`}
                    value={value.phone}
                    onChange={(e) => setValue({ ...value, phone: e.target.value })}
                />
                <textarea
                    placeholder="PLEASE ADD SOME CONTEXT*"
                    className={`col-span-2 text-[16px] leading-[28px] text-${color} uppercase border border-${color} bg-transparent py-[10px] px-5 placeholder:text-${color} sm:col-span-1 sm:py-[8px]`}
                    value={value.context}
                    onChange={(e) => setValue({ ...value, context: e.target.value })}
                ></textarea>
            </div>
            <div className="flex justify-between items-center mt-[63px] gap-10 sm:mt-5 sm:flex-col sm:items-start sm:gap-[22px]">
                <p className={`text-[14px] leading-[24px] text-${color} max-w-[327px] sm:max-w-none`}>
                    By sending this form I confirm that I have read and accept <a href="#">the Privacy Policy</a>
                </p>
                <Button
                    text="SEND"
                    className={classNames(`bg-${color} min-w-[174px] sm:w-full sm:h-[42px]`, color === "white" ? "text-black" : "text-white")}
                />
            </div>
        </form>
    );
}
