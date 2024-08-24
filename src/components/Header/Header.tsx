import { Button } from "@/components";

export default function Header() {
    const list = [{ text: "Our work" }, { text: "about us" }, { text: "REACH MAX+" }, { text: "PROCESS" }, { text: "GUARANTEE" }, { text: "OUR TEAM" }];

    return (
        <header className="_container flex items-center py-[15px] left-0 right-0 md:fixed md:bg-white md:z-10 md:bottom-0 md:top-0 md:left-0 md:right-0 md:flex-col md:items-start">
            <img src="img/logo.svg" alt="" />
            <ul className="flex gap-[30px] text-[14px] text-[#797979] leading-[17px] uppercase ml-[55px] flex-wrap md:ml-0 md:flex-col">
                {list.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
            <Button text="GET IN TOUCH" className="text-black bg-white ml-auto md:ml-0" />
        </header>
    );
}
