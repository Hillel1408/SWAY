import { Button } from "@/components";

export default function Connect() {
    const submit = () => {};

    return (
        <div className="_container pb-[130px] grid grid-cols-[1fr_1.3fr] md:grid-cols-[1fr] md:pb-[74px]">
            <div>
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[18px] uppercase sm:text-[30px] sm:mb-[11px]">LET’S CONNECT!</h2>
                <p className="font-bold text-[22px] leading-[27px] text-[#797979] mb-[70px] sm:text-[18px] sm:mb-[37px]">
                    We would love to hear from you <br /> so please get in touch.
                </p>
                <img src="img/img-7.png" alt="" className="md:w-full sm:hidden" />
            </div>
            <div className="bg-black px-[47px] pt-[62px] sm:pt-[27px] sm:pl-[24px] sm:pr-[24px]">
                <form action="#">
                    <div className="grid grid-cols-2 gap-[36px] sm:grid-cols-1 sm:gap-5">
                        <input
                            type="text"
                            placeholder="FIRST NAME*"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white sm:py-[8px]"
                        />
                        <input
                            type="text"
                            placeholder="SURNAME*"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white sm:py-[8px]"
                        />
                        <input
                            type="email"
                            placeholder="EMAIL*"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white sm:py-[8px]"
                        />
                        <input
                            type="tel"
                            placeholder="PHONE NUMBER"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white sm:py-[8px]"
                        />
                        <textarea
                            placeholder="PLEASE ADD SOME CONTEXT*"
                            className="col-span-2 text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white sm:col-span-1 sm:py-[8px]"
                        ></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-[63px] gap-10 sm:mt-5 sm:flex-col sm:items-start sm:gap-[22px]">
                        <p className="text-[14px] leading-[24px] text-white max-w-[327px] sm:max-w-none">
                            By sending this form I confirm that I have read and accept <a href="#">the Privacy Policy</a>
                        </p>
                        <Button text="SEND" className="bg-white text-black min-w-[174px] sm:w-full sm:h-[42px]" />
                    </div>
                    <img src="img/img-7.png" alt="" className="hidden sm:block mt-[22px]" />
                    <div className="bg-white w-[280px] px-[22px] pt-10 pb-[36px] ml-auto mt-[54px] sm:ml-0 sm:py-[28px] sm:px-[18px] sm:w-[200px]">
                        <img src="img/icon-1.svg" alt="" />
                    </div>
                </form>
            </div>
        </div>
    );
}
