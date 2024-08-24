export default function Process() {
    const list = [
        {
            title: "1. ESTABLISH",
            text: "We begin by collaborating closely with your team to establish a tailored strategy that aligns with your brand objectives and target audience.",
        },
        {
            title: "2. BRIEF",
            text: "Next, we seamlessly onboard and brief our network of influencers, ensuring they fully understand your brand message and campaign objectives.",
        },
        {
            title: "3. DEVELOP",
            text: "With the strategy in place and partners briefed, our team of creative experts works tirelessly to develop compelling content that captures the essence of your brand and speaks directly to your target audience.",
        },
        {
            title: "4. DEPLOY",
            text: "Once the content is perfected, we strategically deploy it across chosen channels, leveraging the unique strengths of each platform to maximize reach and engagement.",
        },
        {
            title: "5. SCALE",
            text: "Finally, we continuously monitor and optimize campaign performance, leveraging real-time data and insights to make informed decisions and drive results.",
        },
    ];

    return (
        <div className="_container grid grid-cols-2 pb-[130px] md:pb-[74px] md:flex md:flex-col-reverse md:gap-[35px]">
            <div className="pr-[90px] lg:pr-0 sm:ml-10">
                <div className="relative">
                    <div className="h-full bg-black pt-[48px] pb-[38px] flex flex-col items-end sm:py-[28px]">
                        <img src="img/text-1.svg" alt="" width="100px" className="mb-[45px] mr-[114px] sm:w-[60px] sm:mr-[68px] sm:mb-[27px]" />
                        <img src="img/text-2.svg" alt="" width="52px" className="mb-[106px] mr-[50px] sm:w-[31px] sm:mr-[30px] sm:mb-[63px]" />
                        <img src="img/text-3.svg" alt="" width="132px" className="mb-[51px] mr-[29px] sm:w-[79px] sm:mr-[17px] sm:mb-[30px]" />
                        <img src="img/text-4.svg" alt="" width="80px" className="mb-[97px] mr-[134px] sm:w-[48px] sm:mr-[80px] sm:mb-[58px]" />
                        <img src="img/text-5.svg" alt="" width="140px" className="mr-[34px] sm:w-[84px] sm:mr-[20px]" />
                    </div>
                    <img src="img/img-6.png" alt="" className="absolute z-10 top-1/2 -translate-y-1/2 -left-[100px] sm:w-[217px]" />
                    <div className="w-[293px] h-[147px] border border-white absolute bottom-[55px] right-[95px] sm:w-[175px] sm:h-[88px]"></div>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[9px] uppercase sm:text-[30px]">PROCESS</h2>
                <p className="font-bold text-[22px] leading-[27px] text-[#797979] mb-5 sm:text-[18px]">HOW WE WORK - WORKING COLLABORATIVELY STEP BY STEP</p>
                <ul className="flex flex-col gap-[26px]">
                    {list.map((item, index) => (
                        <li key={index}>
                            <p className="font-bold text-[14px] leading-[17px] text-bold">{item.title}</p>
                            <p className="text-[14px] leading-[17px] text-[#797979]">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
