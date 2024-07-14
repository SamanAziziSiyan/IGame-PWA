import Image from "next/image";
import LeftArrowIcon from "../icons/leftarrowIcon";

const AuthLayout = () => {
    return (
        <div className="bg-[url(/assets/images/Login-bg.png)] w-1/2 mx-auto h-[500px] bg-no-repeat bg-cover bg-center">
            <div className="flex w-full justify-center pt-14">
                <Image src='/assets/images/Call-of-duty-white.png' alt="Call-of-duty-white" width={105} height={19} />
                <LeftArrowIcon className="bg-white/30 rounded-full w-8 h-8 p-1" />
            </div>
            <div className="flex items-center justify-center gap-x-4 w-full mt-11">
                <div className="bg-[#E9B20F] w-[150px] h-[150px] rounded-[35px] relative ">
                    {/* <Image src='/assets/images/Login-Soldier (1).png' className="absolute -top-6" width={100} height={207} alt="" /> */}
                </div>
                <div className="bg-[#F04242] w-[150px] h-[150px] rounded-[35px] relative">
                    <Image src='/assets/images/Login-Soldier (2).png' className="absolute -top-6" width={213} height={207} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;