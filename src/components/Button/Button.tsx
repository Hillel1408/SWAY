import classNames from "classnames";

export default function Button({ text, className }: { text: string; className: string }) {
    return <button className={classNames("font-bold text-[14px] leading-[17px] py-[7px] px-[16px]", className)}>{text}</button>;
}
