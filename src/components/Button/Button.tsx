"use client";

import classNames from "classnames";

export default function Button({ text, className, onClick }: { text: string; className: string; onClick?: () => void }) {
    return (
        <button className={classNames("font-bold text-[14px] leading-[17px] py-[7px] px-[16px]", className)} onClick={onClick}>
            {text}
        </button>
    );
}
