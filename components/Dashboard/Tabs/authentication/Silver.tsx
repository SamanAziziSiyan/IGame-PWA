// components/authentication.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    walletAmount: number;
}
const Silver = () => {
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
            <h3 className='font-bold text-xl text-white'>احراز هویت سطح نقره ای</h3>
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
                <span className="text-[14px] font-normal text-white/80 text-justify mt-2">
                    برای تایید هویت اطلاعات لطفا یک عکس سلفی با کارت شناسایی معتبر را در قالب یک عکس و بدون دستکاری ارسال کنید.

                    <ul className="font-semibold mt-6 text-[14px] text-white/90">
                        <li> 1.کارت شناسایی معتبر (کارت ملی یا صفحه اول شناسنامه)</li>
                        <li>2.کارت بانکی</li>
                        <li>3.دست نوشته مطابق نمونه به همراه تاریخ و امضا</li>
                    </ul>
                </span>
                <Image src='/assets/images/authentication-silver.png' width={100} height={100} alt="" className="md:w-1/2 mx-auto w-full" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[14px] items-center justify-center mt-4'>
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="کارت بانکی"
                        name="walletAmount"
                        register={register}
                        errors={errors.walletAmount}
                        placeholder="5047-0611-6598-3255"
                    />
                    <Alert type='warning' icon={<WarningIcon />}>
                        برای تایید هویت اطلاعات لطفا مدارک زیر را در قالب یک عکس و بدون دستکاری ارسال کنید.
                    </Alert>
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="نام و نام خانوادگی مالک کارت*"
                        name="walletAmount"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.walletAmount}
                        placeholder="محمد رضا بیضاوی"
                    />
                    <CustomInput
                        id="walletAmount"
                        type="file"
                        label="تصویر سلفی و مدارک هویتی "
                        name="walletAmount"
                        register={register}
                        errors={errors.walletAmount}
                        placeholder="5047-0611-6598-3255"
                    />
                    <CustomInput
                        id="walletAmount"
                        type="file"
                        label="تصویر مدارک هویتی و متن دست نویس "
                        name="walletAmount"
                        register={register}
                        errors={errors.walletAmount}
                        placeholder="5047-0611-6598-3255"
                    />
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        ثبت درخواست ارتقا سطح
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default Silver;
