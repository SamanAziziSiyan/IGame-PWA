// components/Header.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import NotificationIcon from '../../icons/notification';
import AccountIcon from '../../icons/account';
import ShopIcon from '../../icons/shopIcon';
import { checkAuthToken, getUserDataFromLocalStorage, logout } from '@/utils';
import { useEffect, useState } from 'react';
import { NotificationDropDown } from './NotficationDropdown';
import { AccountDropDown } from './AccountDropDown';
import useAuthStore from '@/store/auth';

const Header = () => {
    const { userStore, setAuthData } = useAuthStore();
    const [isLogin, setIsLogin] = useState(false);
    const userData = getUserDataFromLocalStorage();

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            let isUserLoggedIn = await checkAuthToken();
            setIsLogin(isUserLoggedIn);

            const userPhoneNumber = userData?.userName || '';
            setAuthData({ userPhoneNumber }, true);
        }

        checkUserLoggedIn();
    }, []);
    return (
        <header className="bg-black text-white container-px py-4 shadow-md h-[91px] flex items-center">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    {/* Add Logo Image */}
                    <Link href='/'>
                        <Image src="/assets/images/logo.png" alt="IranCP Logo" width={100} height={50} className="rounded" />
                    </Link>
                </div>
                <nav>
                    <ul className="flex gap-x-4 items-stretch">
                        {/* <li className='relative'>
                            <div className='bg-red-600 rounded-full w-2 h-2 absolute top-0 left-[2px]'></div>
                            <NotificationDropDown />
                        </li>
                        <li>
                            <Link href="/shop">
                                <ShopIcon className='max-lg:w-4 max-lg:h-4' />
                            </Link>
                        </li> */}
                        <li>
                            {(!isLogin || !userStore.isLoggedIn) ?
                                (<Link href="/login">
                                    <AccountIcon className='max-lg:w-4 max-lg:h-4' />
                                </Link>

                                ) : (
                                    <AccountDropDown />
                                )}

                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
