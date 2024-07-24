import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import { CustomerProfileService, CustomerProfileUpdateService } from "@/services/customer/customer";
import { getUserDataFromLocalStorage } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";

interface IProfileData {
    avatar: string;
    birthDate: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    telegramId: string;
    verificationCode: null | string;
    verificationId: null | string;
}

interface ApiResponse {
    status: string;
    errors: any[];
    joinedErrors: string;
    data: IProfileData;
    totalItems: number;
}

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState<IProfileData>({
        avatar: '',
        birthDate: '',
        email: '',
        firstName: '',
        id: 13784,
        lastName: '',
        telegramId: '',
        verificationCode: null,
        verificationId: null
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<IProfileData>({
        defaultValues: profileData
    });

    const onSubmit: SubmitHandler<IProfileData> = async (data) => {
        console.log('data:',data);
        try {
            const response = await CustomerProfileUpdateService(
                {
                    id: data.id,
                    avatar: data.avatar,
                    firstname: data.firstName,
                    lastname: data.lastName,
                    email: data.email,
                    telegramId: data.telegramId,
                    birthdate: data.birthDate,
                    verificationId: null,
                    verificationCode: null
                }
            );
            console.log('response',response);

        } catch (error) {
            console.log('error:', error);
        }


    };

    useEffect(() => {
        const fetchCustomerProfile = async () => {
            try {
                setLoading(true);
                const userData = getUserDataFromLocalStorage();
                const response = await CustomerProfileService(userData?.customerID);
                const responseData: ApiResponse = response.data;
                if (responseData.status === 'Success') {
                    setProfileData(responseData.data);
                    Object.keys(responseData.data).forEach(key => {
                        setValue(key as keyof IProfileData, responseData.data[key as keyof IProfileData]);
                    });

                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
            }
        };

        fetchCustomerProfile();
    }, [setValue]);

    return (
        <div className="mt-8 flex flex-col gap-y-4">
            <h3 className='font-bold text-xl text-white'>ویرایش حساب</h3>
            <div className="flex items-center justify-center gap-x-4">
                {/* Display avatar image if available */}
                {/* {profileData.avatar && <Image src={profileData.avatar} alt="Avatar" width={100} height={100} />} */}
            </div>
            {!loading ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-[14px] items-center justify-center mt-4'>
                        <CustomInput
                            id="firstName"
                            type="text"
                            label="نام*"
                            name="firstName"
                            value={profileData.firstName}
                            register={register}
                            validationRules={{ required: 'نام ضروری است' }}
                            errors={errors.firstName}
                            placeholder="نام"
                        />
                        <CustomInput
                            id="lastName"
                            type="text"
                            label="نام خانوادگی*"
                            name="lastName"
                            value={profileData.lastName}
                            register={register}
                            validationRules={{ required: 'نام خانوادگی ضروری است' }}
                            errors={errors.lastName}
                            placeholder="نام خانوادگی"
                        />
                        <CustomInput
                            id="email"
                            type="email"
                            label="ایمیل*"
                            name="email"
                            value={profileData.email}
                            register={register}
                            // validationRules={{
                            //     required: 'ایمیل ضروری است',
                            //     pattern: {
                            //         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            //         message: 'ایمیل نامعتبر است'
                            //     }
                            // }}
                            errors={errors.email}
                            placeholder="ایمیل متصل به اکانت شما"
                        />
                        <CustomInput
                            id="telegramId"
                            type="text"
                            label="تلگرام"
                            name="telegramId"
                            value={profileData.telegramId}
                            register={register}
                            errors={errors.telegramId}
                            placeholder="تلگرام"
                        />

                        <CustomInput
                            id="birthDate"
                            type="text"
                            label="تاریخ تولد"
                            name="birthDate"
                            value={profileData.birthDate}
                            register={register}
                            errors={errors.birthDate}
                            placeholder="تاریخ تولد"
                        />

                    </div>
                    <Button className='mt-6 py-[14px] px-3 mx-auto max-lg:w-full font-semibold rounded-[40px]' type='submit'>
                        ثبت درخواست ارتقا سطح
                    </Button>
                </form>
            ) : <div className="h-[50vh] min-h-[50vh] w-full flex items-center justify-center py-6"><BarLoader width={100} color="white" /></div>}
        </div>
    );
};

export default Profile;
