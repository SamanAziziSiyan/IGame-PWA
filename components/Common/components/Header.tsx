// components/Header.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import NotificationIcon from '../icons/notification';
import AccountIcon from '../icons/account';
import ShopIcon from '../icons/shopIcon';
import { checkAuthToken, logout } from '@/utils';
import DropdownMenu from './DropDownMenu';
import AccountMenuIcon from '../icons/accountmenuIcon';
import LogoutIcon from '../icons/logoutIcon';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import authStore from '@/store/auth';
import useLoginLayoutState from '@/store/loginLayout';

const Header = () => {
    const AuthStore = authStore((state) => state.userStore);
    const { loginLayoutStore, setLoginLayoutState } = useLoginLayoutState((state) => ({
        loginLayoutStore: state.loginLayoutStore,
        setLoginLayoutState: state.setLoginLayoutState,
    }));
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);
    const handelLogout = () => {
        logout();
        setIsLogin(false);
        setLoginLayoutState(false, false)
        router.push('/login');
    }

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            let isUserLoggedIn = await checkAuthToken();
            setIsLogin(isUserLoggedIn);
        }
        checkUserLoggedIn();
    }, []);
    return (
        <header className="bg-black text-white container-px py-4 shadow-md h-[91px] flex items-center">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    {/* Add Logo Image */}
                    <Link href='/'>
                        <Image src="/assets/images/logo.png" alt="IGame Logo" width={100} height={50} className="rounded" />
                    </Link>
                </div>
                <nav>
                    <ul className="flex gap-x-4 items-center">
                        <li className='relative'>
                            <div className='bg-red-600 rounded-full w-2 h-2 absolute top-0 right-[2px]'></div>
                            <Link href="/notification">
                                <NotificationIcon className='max-lg:w-4 max-lg:h-4' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <ShopIcon className='max-lg:w-4 max-lg:h-4' />
                            </Link>
                        </li>
                        <li>
                            {!isLogin ?
                                (<Link href="/auth">
                                    <AccountIcon className='max-lg:w-4 max-lg:h-4' />
                                </Link>

                                ) : (<DropdownMenu className='relative' trigger={<button>
                                    <Image
                                        src="/assets/images/male-avatar.png"
                                        alt="avatar"
                                        className="max-lg:w-6 max-lg:h-6"
                                        width={40}
                                        height={40}
                                    /></button>}>
                                    <div className='bg-white z-50 flex gap-y-3 flex-col text-center absolute left-0 text-[#111]  py-4 px-5 rounded-xl'>
                                        <span className='text-[#111111]/60 font-bold text-xs text-nowrap'>کاربر عزیز خوش اومدی</span>
                                        <ul className='flex flex-col gap-y-3'>
                                            <Link className='cursor-pointer' href='/dashboard'>
                                                <li className='text-[#111111] cursor-pointer flex items-center gap-x-1 font-bold text-xs'>
                                                    <AccountMenuIcon />
                                                    حساب کاربری
                                                </li>
                                            </Link>
                                            <button onClick={handelLogout} className='cursor-pointer'>
                                                <li className='text-[#F04242]/60 cursor-pointer flex items-center gap-x-1 font-semibold text-xs'>
                                                    <LogoutIcon />
                                                    خروج از حساب
                                                </li>
                                            </button>
                                        </ul>
                                    </div>
                                </DropdownMenu>
                                )}

                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
