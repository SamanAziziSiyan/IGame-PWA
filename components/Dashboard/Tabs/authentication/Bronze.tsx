// components/authentication.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    firstName: string;
    lastName: string;
    documentImage: string;
}
const Bronze = () => {
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
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.firstName}
                        placeholder="نام"
                    />
                    <CustomInput
                        id="lastName"
                        type="text"
                        label="نام خانوادگی*"
                        name="lastName"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.lastName}
                        placeholder="نام خانوادگی"
                    />
                    <CustomInput
                        id="documentImage"
                        type="file"
                        label="تصویر سلفی و مدارک هویتی "
                        name="documentImage"
                        register={register}
                        errors={errors.documentImage}
                        placeholder="5047-0611-6598-3255"
                        multiple={true}
                    />

                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        ثبت درخواست ارتقا سطح
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default Bronze;
