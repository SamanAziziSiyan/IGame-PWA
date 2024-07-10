// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import NotificationIcon from './icons/notification';
import AccountIcon from './icons/account';
import ShopIcon from './icons/shopIcon';
import { checkAuthToken } from '@/utils';

const Header = () => {
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
                            {!checkAuthToken ?
                                <Link href="/login">
                                    <AccountIcon className='max-lg:w-4 max-lg:h-4' />
                                </Link>

                                : <Link href='/dashboard'>
                                    <Image
                                        src="/assets/images/avatar.png"
                                        alt="avatar"
                                        className="max-lg:w-6 max-lg:h-6"
                                        width={40}
                                        height={40}
                                    /></Link>
                            }
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
