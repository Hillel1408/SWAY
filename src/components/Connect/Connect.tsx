import { Form } from "@/components";

export default function Connect() {
    const submit = () => {};

    return (
        <div className="_container connect pb-[130px] grid grid-cols-[1fr_1.3fr] md:grid-cols-[1fr] md:pb-[74px]">
            <div>
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[18px] uppercase sm:text-[30px] sm:mb-[11px]">LET’S CONNECT!</h2>
                <p className="font-bold text-[22px] leading-[27px] text-[#797979] mb-[70px] sm:text-[18px] sm:mb-[37px]">
                    We would love to hear from you <br /> so please get in touch.
                </p>
                <img src="img/img-7.png" alt="" className="md:w-full sm:hidden" />
            </div>
            <div className="bg-black px-[47px] pt-[62px] sm:pt-[27px] sm:pl-[24px] sm:pr-[24px]">
                <Form color="white" />
                <img src="img/img-7.png" alt="" className="hidden sm:block mt-[22px]" />
                <div className="bg-white w-[280px] px-[22px] pt-10 pb-[36px] ml-auto mt-[54px] sm:ml-0 sm:py-[28px] sm:px-[18px] sm:w-[200px]">
                    <img src="img/icon-1.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
