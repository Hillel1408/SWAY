export default function Note() {
    return (
        <div className="max-w-[1440px] mx-auto pb-[130px] pl-[90px] sm:pl-[30px] sm:pb-[74px]">
            <div
                className="relative max-w-[1252px] ml-auto py-[60px] pl-[85px] pr-[194px] bg-black font-bold text-[22px] leading-[49px] text-white
                before:content-['“'] before:absolute before:font-bold before:text-[128px] before:leading-[152px] before:-left-20 before:-top-5 before:text-black
                before:font-['SF_Pro_Text'] lg:px-10 sm:pt-[34px] sm:pb-[49px] sm:px-5 sm:text-[16px] uppercase sm:leading-[26px] sm:before:hidden"
            >
                We are the crew behind Sway Influence, and we’re here to shake up the influencer game. While personalities come and go, the power of influence
                endures. We’re committed to unlocking the true potential of influence, not chasing after fleeting influencers.
            </div>
            <div
                className="relative p-[25px] border border-black w-fit min-w-[380px] ml-auto before:content-['“'] before:absolute before:font-bold
                before:text-[128px] before:leading-[152px] before:-left-20 before:-top-5 before:text-black before:font-['SF_Pro_Text'] sm:ml-0 sm:w-full
                sm:before:hidden sm:min-w-0"
            >
                <p className="font-bold text-[18px] text-[#1D1D1D] mb-3 uppercase">Jeremy and Nick</p>
                <p className="text-[15px] text-[#1D1D1D] uppercase">Founders, Sway Influence</p>
            </div>
        </div>
    );
}
