import { Button } from "@/components";

export default function Intro() {
    return (
        <div className="relative">
            <div className="_container pb-[83px] pt-[156px] md:pt-[100px] md:pb-0">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-1 sm:overflow-hidden">
                    <div className="max-w-[458px] text-center md:max-w-none">
                        <img src="img/logo.svg" alt="" width="250px" className="md:mx-auto sm:w-[250px]" />
                        <h1 className="font-bold text-[36px] leading-[44px] text-black mt-[9px] mb-[14px] sm:text-[30px]">A MARKETING AGENCY</h1>
                        <p className="text-[16px] leading-[19px] text-[#797979] mb-[18px] sm:mb-[63px]">
                            We’re not just another influencer marketing agency. We’re a team of passionate creators, strategists, and innovators dedicated to
                            redefining the way brands connect with their audiences.
                        </p>
                        <Button text="GET IN TOUCH" className="text-white bg-black sm:text-[17px] sm:py-[10px] sm:px-[67px] sm:bg-white sm:text-black" />
                    </div>
                    <img src="img/img-1.png" alt="" width="" className="md:w-full sm:h-[399px] sm:min-w-[676px] sm:ml-[47px]" />
                </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-black -z-10 md:w-[375px] h-[447px] md:-left-[175px] md:top-[370px]"></div>
        </div>
    );
}
