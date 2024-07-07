// components/Wallet.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";


interface IFormInput {
    walletAmount: number;
}

const Wallet = () => {
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
            <h3 className='font-bold text-xl text-white'>افزودن موجودی</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 gap-[14px] items-center justify-center mt-4 md:w-1/2 w-full mx-auto'>
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="مقدار*"
                        name="walletAmount"
                        register={register}
                        errors={errors.walletAmount}
                        placeholder="مبلغ را به تومان وارد کنید"
                    />

                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        افزودن موجودی
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default Wallet;
