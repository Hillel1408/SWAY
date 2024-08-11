import { Button } from "@/components";

export default function Intro() {
    return (
        <div className="_container pb-[83px] pt-[120px]">
            <div className="grid grid-cols-2">
                <div className="max-w-[458px]">
                    <img src="img/logo.svg" alt="" width="250px" />
                    <h1 className="font-bold text-[36px] leading-[44px] text-black mt-[9px] mb-[14px]">A MARKETING AGENCY</h1>
                    <p className="text-[16px] leading-[19px] text-[#797979] mb-[18px]">
                        We’re not just another influencer marketing agency. We’re a team of passionate creators, strategists, and innovators dedicated to
                        redefining the way brands connect with their audiences.
                    </p>
                    <Button text="GET IN TOUCH" className="text-white bg-black" />
                </div>
                <img src="img/img-1.png" alt="" width="" />
            </div>
        </div>
    );
}
