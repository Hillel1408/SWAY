import { Button } from "@/components";

export default function Connect() {
    const submit = () => {};

    return (
        <div className="_container pb-[130px] grid grid-cols-[1fr_1.3fr]">
            <div>
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[18px] uppercase">LET’S CONNECT!</h2>
                <p className="font-bold text-[22px] leading-[27px] text-[#797979] mb-[60px]">
                    We would love to hear from you <br /> so please get in touch.
                </p>
                <img src="img/img-7.png" alt="" />
            </div>
            <div className="bg-black px-[47px] pt-[62px]">
                <form action="#">
                    <div className="flex justify-between items-center mt-[63px]">
                        <p className="text-[14px] leading-[24px] text-white max-w-[327px]">
                            By sending this form I confirm that I have read and accept <a href="#">the Privacy Policy</a>
                        </p>
                        <Button text="SEND" className="bg-white text-black min-w-[174px]" />
                    </div>
                </form>
            </div>
        </div>
    );
}
