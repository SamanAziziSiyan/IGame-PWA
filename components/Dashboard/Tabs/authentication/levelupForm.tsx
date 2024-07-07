// components/authentication.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    walletAmount: number;
}
const LevelUpForm = () => {
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
            <h3 className='font-bold text-xl text-white'>ارتقا سطح کاربـــــر</h3>
            <div className="flex flex-col gap-4 mt-5">
            <Alert>
                توجــه:  این اطلاعات و مدارک مگر با <span className="text-white font-bold">حکم قضایــــی معتبـــــر</span> و پس از اطلاع رسانی به شما در اختیـــــار هیچ نهاد یا شخصی قرار نخواهد گرفت.            </Alert>
            <Alert type='warning' icon={<WarningIcon />}>
                کاربران زیر ۱۸ سال امکان احرازهویت ندارند.
                تصویــر ارسالی باید از اصل مدرک شناسایـــــی اخذ شــــود و دارای وضوح بالا و قاب بندی مناسب باشد.
                (تصاویر ادیت شده و اسکرین شات مورد پذیرش نیست)
            </Alert>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[14px] items-center justify-center mt-4'>
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="نام*"
                        name="walletAmount"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.walletAmount}
                        placeholder="نام"
                    />
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="نام خانوادگی*"
                        name="walletAmount"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.walletAmount}
                        placeholder="نام خانوادگی"
                    />
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

export default LevelUpForm;
