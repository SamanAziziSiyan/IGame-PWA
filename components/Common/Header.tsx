// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import NotificationIcon from './icons/notification';
import AccountIcon from './icons/account';
import ShopIcon from './icons/shopIcon';

const Header = () => {
    return (
        <header className="bg-black text-white container-px py-4 shadow-md h-[91px] flex items-center">
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    {/* Add Logo Image */}
                    <Image src="/assets/images/logo.png" alt="IGame Logo" width={100} height={50} className="rounded" />
                </div>
                <nav>
                    <ul className="flex gap-x-4 items-center">
                        <li>
                            <Link href="/">
                                <NotificationIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <ShopIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href="/account">
                                <AccountIcon />
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
