import { Button } from "@/components";

export default function Connect() {
    const submit = () => {};

    return (
        <div className="_container pb-[130px] grid grid-cols-[1fr_1.3fr]">
            <div>
                <h2 className="font-bold text-[36px] leading-[44px] text-black mb-[18px] uppercase">LET’S CONNECT!</h2>
                <p className="font-bold text-[22px] leading-[27px] text-[#797979] mb-[70px]">
                    We would love to hear from you <br /> so please get in touch.
                </p>
                <img src="img/img-7.png" alt="" />
            </div>
            <div className="bg-black px-[47px] pt-[62px]">
                <form action="#">
                    <div className="grid grid-cols-2 gap-[36px]">
                        <input
                            type="text"
                            placeholder="FIRST NAME*"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white"
                        />
                        <input
                            type="text"
                            placeholder="SURNAME*"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white"
                        />
                        <input
                            type="email"
                            placeholder="EMAIL*"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white"
                        />
                        <input
                            type="tel"
                            placeholder="PHONE NUMBER"
                            className="text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white"
                        />
                        <textarea
                            placeholder="PLEASE ADD SOME CONTEXT*"
                            className="col-span-2 text-[16px] leading-[28px] text-white uppercase border border-white bg-transparent py-[10px] px-5 placeholder:text-white"
                        ></textarea>
                    </div>
                    <div className="flex justify-between items-center mt-[63px]">
                        <p className="text-[14px] leading-[24px] text-white max-w-[327px]">
                            By sending this form I confirm that I have read and accept <a href="#">the Privacy Policy</a>
                        </p>
                        <Button text="SEND" className="bg-white text-black min-w-[174px]" />
                    </div>
                    <div className="bg-white w-[280px] px-[22px] pt-10 pb-[36px] ml-auto mt-[54px]">
                        <img src="img/icon-1.svg" alt="" />
                    </div>
                </form>
            </div>
        </div>
    );
}
