"use client"
import Button from "@/components/Common/Buttons";
import DislikeIcon from "@/components/Common/icons/dislikeIcon";
import LikeIcon from "@/components/Common/icons/likeIcon";
import MessageIcon from "@/components/Common/icons/messageIcon";
import PipeIcon from "@/components/Common/icons/pipeIcon";
import UserIcon from "@/components/Common/icons/userIcon";
import { CommentsService } from "@/services/comments/comments";
import { getRelativeTime, maskAuthorName, stripHtml } from "@/utils";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

interface ICommentContent {
    rendered: string,
}
interface ICommentData {
    author_name: string,
    content: ICommentContent,
    date: string,
    id: number,
    liked: boolean;
    disliked: boolean;
}

const Comments = () => {
    const [commentData, setCommentData] = useState<ICommentData[]>([]);
    const [loading, setLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const getComments = async () => {
            setLoading(true)
            try {
                const response = await CommentsService();
                setCommentData(response.data);
                setLoading(false)
            } catch (error) {
                setLoading(false);
            }
        }
        getComments();
    }, []);

    const handleLike = (id: number) => {
        setCommentData(prev =>
            prev.map(comment =>
                comment.id === id
                    ? { ...comment, liked: !comment.liked, disliked: false }
                    : comment
            )
        );
    };

    const handleDislike = (id: number) => {
        setCommentData(prev =>
            prev.map(comment =>
                comment.id === id
                    ? { ...comment, disliked: !comment.disliked, liked: false }
                    : comment
            )
        );
    };

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div className="container-px lg:mt-20 mt-12">
            <div className='text-white flex md:gap-x-14 gap-x-2 items-center'>
                <h3 className='font-bold lg:text-xl max-[376px]:text-[12px] text-base'>نظرات مشتریان درباره فروشنده</h3>
                <div className='font-medium text-base flex lg:gap-x-[10px] gap-x-2 items-center justify-center'>
                    <MessageIcon className="max-lg:w-4 max-lg:h-4" />
                    <span className="text-white/80 font-normal 3xl:text-[18px] text-[10px]">تعداد نظرات</span>
                    <span className="text-[#CCFB4B] 2xl:text[22px] lg:text-[18px] text-[12px] font-semibold">{commentData.length} نظر</span>
                </div>
            </div>
            <div className="flex flex-col lg:items-start items-center">
                <Button type='button' className="rounded-[32px] order-2 lg:w-auto w-full lg:order-1 mt-9 py-4 px-14 bg-white text-sm text-[#111] font-semibold">
                    افزودن دیـــــدگاه
                </Button>
                {!loading ? (
                    <div className="grid lg:grid-cols-3 w-full grid-cols-1 order-1 lg:order-2 mt-8 gap-x-6 gap-y-4">
                        {commentData.slice(0, visibleCount).map((comment: ICommentData, index: number) => (
                            <div key={index} className="lg:border border-b border-white/30 lg:rounded-xl rounded-none lg:py-14 lg:px-5 py-10 px-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex lg:gap-x-2 gap-x-1 items-center">
                                        <UserIcon className="max-xl:w-4 max-xl:h-4" />
                                        <span className="text-white xl:text-base text-[10px] ltr">{maskAuthorName(comment?.author_name)}</span>
                                        <PipeIcon />
                                        <span className="xl:text-sm text-[10px] font-semibold">{getRelativeTime(comment?.date)}</span>
                                    </div>
                                    <div className="flex items-center lg:gap-x-2 gap-x-1">
                                        <button onClick={() => handleLike(comment.id)} className={`flex items-center `}>
                                            <LikeIcon className={`max-xl:w-4 max-xl:h-4`} color={comment.liked ? '#CCFB4B' : '#eee'} />
                                        </button>
                                        <button onClick={() => handleDislike(comment.id)} className={`flex items-center ml-3 `}>
                                            <DislikeIcon className={`max-xl:w-4 max-xl:h-4`} color={comment.disliked ? '#F04242' : '#eee'} />
                                        </button>
                                    </div>
                                </div>
                                <span className="block mt-2 text-justify xl:text-base text-[12px]">{stripHtml(comment?.content?.rendered)}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-[50vh] min-h-[50vh] w-full flex flex-col gap-y-4 items-center justify-center py-6">
                        <BarLoader width={100} color="white" />
                        در حال بارگزاری
                    </div>
                )}
            </div>
            <div className={`text-white ${commentData.length > visibleCount ? '' : 'hidden'} xl:text-base text-[12px] text-center w-full underline py-4 font-bold cursor-pointer`} onClick={handleShowMore}>
                نمایش بیشتر...
            </div>
        </div>
    );
};

export default Comments;
