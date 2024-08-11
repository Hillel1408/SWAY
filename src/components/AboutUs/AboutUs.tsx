export default function AboutUs() {
    const list = [
        {
            title: "TRANSPARENCY",
            text: "We believe in open communication and transparency, providing our clients with detailed reports and analytics to track campaign performance.",
        },
        {
            title: "TAILORED SOLUTIONS",
            text: "We offer customized strategies tailored to each client's specific goals and objectives.",
        },
        {
            title: "RESULTS-ORIENTED",
            text: "We deliver results that matter. Whether it's increased brand awareness, engagement, or sales, we're committed to driving measurable outcomes for our clients.",
        },
    ];

    return (
        <div className="max-w-[1440px] mx-auto pb-[130px]">
            <div className="max-w-[1340px] ml-auto grid grid-cols-2">
                <div>
                    <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[27px] uppercase">about us</h2>
                    <div className="py-[14px] pl-[30px] bg-black text-white text-[26px] font-bold leading-[33px] mb-[34px]">
                        WE ARE SWAY. <br />
                        INFLUENCER MARKETING THAT <br />
                        DOESN’T SUCK
                    </div>
                    <p className="max-w-[458px] text-[20px] leading-[24px] text-[#797979]">
                        We’re not just another influencer marketing agency. We’re a team of passionate creators, strategists, and innovators dedicated to
                        redefining the way brands connect with their audiences.
                    </p>
                </div>
                <img src="img/img-4.png" alt="" />
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-[1340px] ml-auto">
                {list.map((item, index) => (
                    <div key={index} className="border border-black py-[30px] px-[33px]">
                        <p className="mb-[9px] font-bold text-[16px] leading-[19px] text-bold">{item.title}</p>
                        <p className="text-[14px] leading-[17px] text-black">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
