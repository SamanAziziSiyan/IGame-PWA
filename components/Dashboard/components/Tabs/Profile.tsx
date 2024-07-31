import Button from "@/components/Common/components/Buttons";
import CustomInput from "@/components/Common/components/InputField";
import { CustomerProfileService, CustomerProfileUpdateService } from "@/services/customer/customer";
import { getUserDataFromLocalStorage, toastAlert } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProfileData } from "../types";
import { ContentLoading } from "@/components/Common/components/ContentLoading";


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

    const [selectedAvatar, setSelectedAvatar] = useState('');

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<IProfileData>({
        defaultValues: profileData
    });

    const onSubmit: SubmitHandler<IProfileData> = async (data) => {
        console.log('data:', data);
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
            if (response.data.status === 'Success')
                toastAlert({ msg: "پروفایل با موفقیت بروزرسانی شد", type: "success" });

        } catch (error) {
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            toastAlert({ msg: errorMessage });
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
                    setSelectedAvatar(responseData.data.avatar);
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

    const handleAvatarSelection = (avatar: string) => {
        setSelectedAvatar(avatar);
    }

    return (
        <div className="mt-8 flex flex-col gap-y-4">
            <h3 className='font-bold text-xl text-white'>ویرایش حساب</h3>

            {!loading ? (
                <>
                    <div className="flex items-center justify-center gap-x-4">
                        <Image onClick={() => {
                            handleAvatarSelection("1200")
                        }} src={'/assets/images/male-avatar.png'} className={`${selectedAvatar === '1200' ? 'border border-[#CCFB4B] rounded-full p-1.5 transition-all' : 'opacity-20 w-[85px] transition-all'} cursor-pointer transition-all`} alt="Avatar" width={100} height={100} />
                        <Image onClick={() => {
                            handleAvatarSelection("1300")
                        }} src={'/assets/images/female-avatar.png'} className={`${selectedAvatar !== '1200' ? 'border border-[#CCFB4B] rounded-full p-1.5 transition-all' : 'opacity-20 w-[85px] transition-all'} cursor-pointer transition-all`} alt="Avatar" width={100} height={100} />
                    </div>
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
                                validationRules={{
                                    // required: 'ایمیل ضروری است',
                                    // pattern: {
                                    //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    //     message: 'ایمیل نامعتبر است'
                                    // }
                                }}
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
                        <Button className='mt-6 py-[14px] px-3 mx-auto w-full font-semibold rounded-[40px]' type='submit'>
                            ثبت درخواست ارتقا سطح
                        </Button>
                    </form>
                </>
            ) : (<ContentLoading />)};
        </div>
    );
};

export default Profile;
