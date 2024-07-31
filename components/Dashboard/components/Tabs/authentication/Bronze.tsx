// components/authentication.tsx

import Button from "@/components/Common/components/Elements/Buttons";
import Alert from "@/components/Common/components/Elements/alert";
import CustomInput from "@/components/Common/components/FormInputs/InputField";
import WarningIcon from "@/components/Common/icons/warningicon";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    firstName: string;
    lastName: string;
    document?: string
}
const Bronze = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        delete data.document
        console.log(data);
        
        console.log(inputFileRef.current?.files);
    };
    const handleUploadDocuments = () => {
        inputFileRef?.current?.click();
    }
    return (
        <div className="mt-8">
            <h3 className='font-bold text-xl text-white'>احراز هویت سطح برنــــز</h3>
            <div className="flex flex-col gap-y-2 mt-2">
                <span className="text-[14px] font-normal text-white/80 text-justify">برای سریعتر شـــدن انجـــــام سفارشات، لطفا تاییـــــد هویت خود را انجـــام دهید. اطلاعات و مدارک ارسالــــی شما صرفا برای جلوگیـری از سوء استفاده های احتمالــی گرفته می شوند.
                    ایران ســی پــی متعهــد به نگهــــداری و حفظ کلیه اطلاعات و مدارک شماست.
                </span>
                <div className="flex flex-col gap-4 mt-5">
                    <Alert>
                        توجــه:  این اطلاعات و مدارک مگر با <span className="text-white font-bold">حکم قضایــــی معتبـــــر</span> و پس از اطلاع رسانی به شما در اختیـــــار هیچ نهاد یا شخصی قرار نخواهد گرفت.            </Alert>
                    <Alert type='warning' icon={<WarningIcon />}>
                        کاربران زیر ۱۸ سال امکان احرازهویت ندارند.
                        تصویــر ارسالی باید از اصل مدرک شناسایـــــی اخذ شــــود و دارای وضوح بالا و قاب بندی مناسب باشد.
                        (تصاویر ادیت شده و اسکرین شات مورد پذیرش نیست)
                    </Alert>
                </div>
                <span className="text-[14px] font-normal text-white/80 text-justify mt-2">برای تایید هویت اطلاعات لطفا یک عکس سلفی با کارت شناسایی معتبر را در قالب یک عکس و بدون دستکاری ارسال کنید.
                    در صورت عدم دسترسی به کارت ملی میتوانیـــــــد از یکی از مـدارک شناسایی جایگزین مانند (کارت ملی قدیمی، شناسنامه ی جدیــــد،  گواهینامه ی جدید، کارت پایان خدمت جدید، پاسپورت ) استفاده نمایید
                </span>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[14px] items-center justify-center mt-4'>
                    <CustomInput
                        id="firstName"
                        type="text"
                        label="نام*"
                        name="firstName"
                        register={register}
                        validationRules={{ required: 'نام ضروری میباشد' }}
                        errors={errors.firstName}
                        placeholder="نام"
                    />
                    <CustomInput
                        id="lastName"
                        type="text"
                        label="نام خانوادگی*"
                        name="lastName"
                        register={register}
                        validationRules={{ required: 'نام خانوادگی ضروری میباشد' }}
                        errors={errors.lastName}
                        placeholder="نام خانوادگی"
                    />

                    <div className="relative">
                        <input type="file" className="absolute w-0 h-0 overflow-hidden opacity-0"
                            id="documentImage"
                            ref={inputFileRef}
                            name="documentImage"
                            multiple={true} />
                        <CustomInput
                            id="document"
                            type="text"
                            value={''}
                            label="تصویر سلفی و مدارک هویتی*"
                            name="document"
                            register={register}
                            errors={errors.document}
                            placeholder="تصویر سلفی و مدارک هویتی "
                        />
                        <Button onClick={() => handleUploadDocuments()} className='mt-3 py-[5px] absolute top-8 bg-white left-3 font-semibold rounded-[16px] flex items-center justify-between px-6 text-[10px]' type='button'>
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

export default Bronze;
