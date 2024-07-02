// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-black text-white p-4 shadow-md h-[91px] flex items-center">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    {/* Add Logo Image */}
                    <Image src="/assets/images/logo.png" alt="IGame Logo" width={100} height={50} className="rounded" />
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 25 26" fill="none">
                                    <path d="M12.2939 1.03857C7.70041 1.03857 3.96735 4.77164 3.96735 9.36511V13.3757C3.96735 14.2222 3.60654 15.5129 3.17633 16.2345L1.58041 18.8851C0.595108 20.5227 1.27511 22.3406 3.07919 22.9512C9.06041 24.9496 15.5135 24.9496 21.4947 22.9512C23.1739 22.3961 23.9094 20.4116 22.9935 18.8851L21.3976 16.2345C20.9812 15.5129 20.6204 14.2222 20.6204 13.3757V9.36511C20.6204 4.78551 16.8735 1.03857 12.2939 1.03857Z" stroke="white" stroke-width="2.08163" stroke-miterlimit="10" stroke-linecap="round" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 34 34" fill="none">
                                    <path d="M11.9633 9.02045H21.9552C26.6735 9.02045 27.1454 11.227 27.4646 13.9192L28.7135 24.3274C29.116 27.7413 28.0613 30.5307 23.2041 30.5307H10.7282C5.85719 30.5307 4.80249 27.7413 5.21882 24.3274L6.46781 13.9192C6.77312 11.227 7.24494 9.02045 11.9633 9.02045Z" stroke="white" stroke-width="2.08163" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.4082 11.102V6.2449C11.4082 4.16327 12.796 2.77551 14.8776 2.77551H19.0409C21.1225 2.77551 22.5102 4.16327 22.5102 6.2449V11.102" stroke="white" stroke-width="2.08163" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28.6302 23.6335H11.4082" stroke="white" stroke-width="2.08163" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 34 34" fill="none">
                                    <path d="M16.6531 16.6531C20.4853 16.6531 23.5918 13.5465 23.5918 9.71429C23.5918 5.88211 20.4853 2.77551 16.6531 2.77551C12.8209 2.77551 9.71429 5.88211 9.71429 9.71429C9.71429 13.5465 12.8209 16.6531 16.6531 16.6531Z" stroke="white" stroke-width="2.77551" stroke-linecap="square" stroke-linejoin="round" />
                                    <path d="M28.5739 30.5306C28.5739 25.16 23.2311 20.8163 16.6531 20.8163C10.0752 20.8163 4.7323 25.16 4.7323 30.5306" stroke="white" stroke-width="2.77551" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
