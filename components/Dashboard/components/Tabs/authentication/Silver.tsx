// components/authentication.tsx

import Button from "@/components/Common/components/Elements/Buttons";
import CustomInput from "@/components/Common/components/FormInputs/InputField";
import Alert from "@/components/Common/components/Elements/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import Image from "next/image";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    Bankcard: number;
    FullName: string;
    IdDocuments?: string;
    IdDocumentsHand?: string;
}
const Silver = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const inputFileRefHand = useRef<HTMLInputElement>(null);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        console.log(inputFileRef?.current?.files);
        console.log(inputFileRefHand?.current?.files);
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
                        id="Bankcard"
                        type="text"
                        label="کارت بانکی"
                        name="Bankcard"
                        register={register}
                        errors={errors.Bankcard}
                        placeholder="5047-0611-6598-3255"
                    />
                    <Alert type='warning' icon={<WarningIcon />}>
                        برای تایید هویت اطلاعات لطفا مدارک زیر را در قالب یک عکس و بدون دستکاری ارسال کنید.
                    </Alert>
                    <CustomInput
                        id="FullName"
                        type="text"
                        label="نام و نام خانوادگی مالک کارت*"
                        name="FullName"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.FullName}
                        placeholder="محمد رضا بیضاوی"
                    />

                    <div className="relative">
                        <input type="file" className="absolute w-0 h-0 overflow-hidden opacity-0"
                            id="IdDocument"
                            ref={inputFileRef}
                            name="IdDocument"
                            multiple={true} />
                        <CustomInput
                            id="IdDocuments"
                            type="text"
                            value={''}
                            label="تصویر سلفی و مدارک هویتی*"
                            name="IdDocuments"
                            register={register}
                            errors={errors.IdDocuments}
                            placeholder="تصویر سلفی و مدارک هویتی "
                        />
                        <Button onClick={() => {
                            inputFileRef?.current?.click();
                        }} className='mt-3 py-[5px] absolute top-8 bg-white left-3 font-semibold rounded-[16px] flex items-center justify-between px-6 text-[10px]' type='button'>
                            بارگذاری کنید
                        </Button>
                    </div>
                    <div className="relative">
                        <input type="file" className="absolute w-0 h-0 overflow-hidden opacity-0"
                            id="IdDocumentHand"
                            ref={inputFileRefHand}
                            name="IdDocumentHand"
                            multiple={true} />
                        <CustomInput
                            id="IdDocumentsHand"
                            type="text"
                            value={''}
                            label="تصویر مدارک هویتی و متن دست نویس*"
                            name="IdDocumentsHand"
                            register={register}
                            errors={errors.IdDocumentsHand}
                            placeholder="تصویر مدارک هویتی و متن دست نویس "
                        />
                        <Button onClick={() => {
                            inputFileRefHand?.current?.click();
                        }} className='mt-3 py-[5px] absolute top-8 bg-white left-3 font-semibold rounded-[16px] flex items-center justify-between px-6 text-[10px]' type='button'>
                            بارگذاری کنید
                        </Button>
                    </div>
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        ثبت درخواست ارتقا سطح
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default Silver;
