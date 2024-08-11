import React from "react";

export default function Footer() {
  const list = [
    { text: "Our work" },
    { text: "about us" },
    { text: "REACH MAX+" },
    { text: "PROCESS" },
    { text: "GUARANTEE" },
    { text: "OUR TEAM" },
  ];

  return (
    <footer className="bg-black">
      <div className="_container pt-[30px] pb-[38px]">
        <div className="flex justify-between items-center mb-[23px]">
          <img src="img/logo-2.svg" alt="" />
          <ul className="flex gap-[30px] text-[14px] text-white leading-[17px] uppercase">
            {list.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-[14px] leading-[24px] underline text-white"
          >
            The Privacy Policy
          </a>
          <span className="text-[14px] leading-[30px] text-white opacity-60">
            © SWAY 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
