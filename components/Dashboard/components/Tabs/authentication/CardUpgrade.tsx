// components/authentication.tsx

import Button from "@/components/Common/components/Elements/Buttons";
import CustomInput from "@/components/Common/components/FormInputs/InputField";
import Alert from "@/components/Common/components/Elements/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    walletAmount: number;
}
const CardUpgrade = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    return (
        <div className="mt-8">
            <h3 className='font-bold text-xl text-white'>ارتقا سطح اطلاعات کارت بانکی</h3>
            <div className="flex flex-col gap-4 mt-5">
                <span className="text-[14px] font-normal text-white/80 text-justify">برای سریعتر شـــدن انجـــــام سفارشات، لطفا تاییـــــد هویت خود را انجـــام دهید. اطلاعات و مدارک ارسالــــی شما صرفا برای جلوگیـری از سوء استفاده های احتمالــی گرفته می شوند.
                    ایران ســی پــی متعهــد به نگهــــداری و حفظ کلیه اطلاعات و مدارک شماست.
                </span>
                <Alert>
                    توجــه:  این اطلاعات و مدارک مگر با <span className="text-white font-bold">حکم قضایــــی معتبـــــر</span> و پس از اطلاع رسانی به شما در اختیـــــار هیچ نهاد یا شخصی قرار نخواهد گرفت.            </Alert>
                <Alert type='warning' icon={<WarningIcon />}>
                    کاربران زیر ۱۸ سال امکان احرازهویت ندارند.
                    تصویــر ارسالی باید از اصل مدرک شناسایـــــی اخذ شــــود و دارای وضوح بالا و قاب بندی مناسب باشد.
                    (تصاویر ادیت شده و اسکرین شات مورد پذیرش نیست)
                </Alert>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[5px] items-center justify-center mt-4'>
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        کاربر سطح برنز (سقف خرید تا 10 میلیون تومان)
                    </Button>
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        کاربر سطح نقره ای (بدون سقف خرید)
                    </Button>
                    <Button className='mt-3 py-[14px] font-semibold text-white bg-[#F04242] rounded-[40px]' type='submit'>
                        انصراف از تایید هویت
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default CardUpgrade;
