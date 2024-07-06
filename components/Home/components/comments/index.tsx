// components/comments.tsx

import Button from "@/components/Common/Buttons";
import DislikeIcon from "@/components/Common/icons/dislikeIcon";
import LikeIcon from "@/components/Common/icons/likeIcon";
import MessageIcon from "@/components/Common/icons/messageIcon";
import PipeIcon from "@/components/Common/icons/pipeIcon";
import UserIcon from "@/components/Common/icons/userIcon";

const Comments = () => {
    return (
        <div className="container-px mt-20">
            <div className='text-white flex gap-x-14 items-center'>
                <h3 className='font-bold text-xl'>نظرات مشتریان درباره فروشنده</h3>
                <div className='font-medium text-base flex gap-x-[10px] items-center justify-center'>
                    <MessageIcon />
                    <span className="text-white/80 font-normal 3xl:text-[18px] text-base">تعداد نظرات</span>
                    <span className="text-[#CCFB4B] 2xl:text[22px] text-[18px] font-semibold">642 نظر</span>
                </div>
            </div>
            <Button type='button' className="rounded-[32px] mt-9 py-4 px-14 bg-white text-sm text-[#111] font-semibold">
                افزودن دیـــــدگاه
            </Button>

            <div className="grid grid-cols-3 mt-8 gap-x-6">
                <div className="border border-white/30 rounded-xl py-14 px-5">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-2 items-center">
                            <UserIcon />
                            <span className="text-white">علی رحیـــمی</span>
                            <PipeIcon />
                            <span className="text-sm font-semibold">2 روز پیش</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <LikeIcon />
                            <DislikeIcon />
                        </div>
                    </div>
                    <span className="block mt-2 text-justify">واقعـــا امن هست هیچوقت تاحالا اکانتشـــون بلاک نشده. سایتتـون عالیه حرف نداره بهتون پیشنهاد میکنـــم از این سایت خرید کنید</span>
                </div>

                <div className="border border-white/30 rounded-xl py-14 px-5">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-2 items-center">
                            <UserIcon />
                            <span className="text-white">علی رحیـــمی</span>
                            <PipeIcon />
                            <span className="text-sm font-semibold">2 روز پیش</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <LikeIcon />
                            <DislikeIcon />
                        </div>
                    </div>
                    <span className="block mt-2 text-justify">واقعـــا امن هست هیچوقت تاحالا اکانتشـــون بلاک نشده. سایتتـون عالیه حرف نداره بهتون پیشنهاد میکنـــم از این سایت خرید کنید</span>
                </div>

                <div className="border border-white/30 rounded-xl py-14 px-5">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-2 items-center">
                            <UserIcon />
                            <span className="text-white">علی رحیـــمی</span>
                            <PipeIcon />
                            <span className="text-sm font-semibold">2 روز پیش</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <LikeIcon />
                            <DislikeIcon />
                        </div>
                    </div>
                    <span className="block mt-2 text-justify">واقعـــا امن هست هیچوقت تاحالا اکانتشـــون بلاک نشده. سایتتـون عالیه حرف نداره بهتون پیشنهاد میکنـــم از این سایت خرید کنید</span>
                </div>
            </div>
            <div className="text-white text-center w-full underline py-4 font-bold">نمایش بیشتر...</div>
        </div>
    );
};

export default Comments;
