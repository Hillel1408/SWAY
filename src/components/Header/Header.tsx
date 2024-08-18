import { Button } from "@/components";

export default function Header() {
    const list = [{ text: "Our work" }, { text: "about us" }, { text: "REACH MAX+" }, { text: "PROCESS" }, { text: "GUARANTEE" }, { text: "OUR TEAM" }];

    return (
        <header className="_container flex items-center py-[15px] absolute left-0 right-0">
            <img src="img/logo.svg" alt="" />
            <ul className="flex gap-[30px] text-[14px] text-[#797979] leading-[17px] uppercase ml-[55px]">
                {list.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
            <Button text="GET IN TOUCH" className="text-black bg-white ml-auto" />
        </header>
    );
}
