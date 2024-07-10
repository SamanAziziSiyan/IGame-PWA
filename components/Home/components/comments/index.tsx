// components/comments.tsx

import Button from "@/components/Common/Buttons";
import DislikeIcon from "@/components/Common/icons/dislikeIcon";
import LikeIcon from "@/components/Common/icons/likeIcon";
import MessageIcon from "@/components/Common/icons/messageIcon";
import PipeIcon from "@/components/Common/icons/pipeIcon";
import UserIcon from "@/components/Common/icons/userIcon";

const Comments = () => {
    return (
        <div className="container-px lg:mt-20 mt-12">
            <div className='text-white flex md:gap-x-14 gap-x-4 items-center'>
                <h3 className='font-bold lg:text-xl text-base'>نظرات مشتریان درباره فروشنده</h3>
                <div className='font-medium text-base flex gap-x-[10px] items-center justify-center'>
                    <MessageIcon className="max-lg:w-4 max-lg:h-4"/>
                    <span className="text-white/80 font-normal 3xl:text-[18px] text-[10px]">تعداد نظرات</span>
                    <span className="text-[#CCFB4B] 2xl:text[22px] lg:text-[18px] text-[12px] font-semibold">642 نظر</span>
                </div>
            </div>
            <Button type='button' className="rounded-[32px] mt-9 py-4 px-14 bg-white text-sm text-[#111] font-semibold">
                افزودن دیـــــدگاه
            </Button>

            <div className="lg:grid hidden grid-cols-3 mt-8 gap-x-6">
                <div className="border border-white/30 rounded-xl lg:py-14 lg:px-5 py-10 px-2">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:gap-x-2 gap-x-1 items-center">
                            <UserIcon className="max-xl:w-4 max-xl:h-4"/>
                            <span className="text-white xl:text-base text-[10px]">علی رحیـــمی</span>
                            <PipeIcon />
                            <span className="xl:text-sm text-[10px] font-semibold">2 روز پیش</span>
                        </div>
                        <div className="flex items-center lg:gap-x-2 gap-x-1">
                            <LikeIcon className="max-xl:w-4 max-xl:h-4" />
                            <DislikeIcon className="max-xl:w-4 max-xl:h-4"/>
                        </div>
                    </div>
                    <span className="block mt-2 text-justify xl:text-base text-[12px]">واقعـــا امن هست هیچوقت تاحالا اکانتشـــون بلاک نشده. سایتتـون عالیه حرف نداره بهتون پیشنهاد میکنـــم از این سایت خرید کنید</span>
                </div>

                <div className="border border-white/30 rounded-xl lg:py-14 lg:px-5 py-10 px-2">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:gap-x-2 gap-x-1 items-center">
                            <UserIcon className="max-xl:w-4 max-xl:h-4"/>
                            <span className="text-white xl:text-base text-[10px]">علی رحیـــمی</span>
                            <PipeIcon />
                            <span className="xl:text-sm text-[10px] font-semibold">2 روز پیش</span>
                        </div>
                        <div className="flex items-center lg:gap-x-2 gap-x-1">
                            <LikeIcon className="max-xl:w-4 max-xl:h-4" />
                            <DislikeIcon className="max-xl:w-4 max-xl:h-4"/>
                        </div>
                    </div>
                    <span className="block mt-2 text-justify xl:text-base text-[12px]">واقعـــا امن هست هیچوقت تاحالا اکانتشـــون بلاک نشده. سایتتـون عالیه حرف نداره بهتون پیشنهاد میکنـــم از این سایت خرید کنید</span>
                </div>

                <div className="border border-white/30 rounded-xl lg:py-14 lg:px-5 py-10 px-2">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:gap-x-2 gap-x-1 items-center">
                            <UserIcon className="max-xl:w-4 max-xl:h-4"/>
                            <span className="text-white xl:text-base text-[10px]">علی رحیـــمی</span>
                            <PipeIcon />
                            <span className="xl:text-sm text-[10px] font-semibold">2 روز پیش</span>
                        </div>
                        <div className="flex items-center lg:gap-x-2 gap-x-1">
                            <LikeIcon className="max-xl:w-4 max-xl:h-4" />
                            <DislikeIcon className="max-xl:w-4 max-xl:h-4"/>
                        </div>
                    </div>
                    <span className="block mt-2 text-justify xl:text-base text-[12px]">واقعـــا امن هست هیچوقت تاحالا اکانتشـــون بلاک نشده. سایتتـون عالیه حرف نداره بهتون پیشنهاد میکنـــم از این سایت خرید کنید</span>
                </div>
            </div>
            <div className="text-white xl:text-base text-[12px] text-center w-full underline py-4 font-bold">نمایش بیشتر...</div>
        </div>
    );
};

export default Comments;
