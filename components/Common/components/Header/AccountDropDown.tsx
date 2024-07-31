import Image from "next/image"
import Link from "next/link"
import AccountMenuIcon from "../../icons/accountmenuIcon"
import LogoutIcon from "../../icons/logoutIcon"
import { logout } from "@/utils"
import useLoginLayoutState from "@/store/loginLayout"
import { useRouter } from "next/navigation"
import DropdownMenu from "./DropDownMenu"

export const AccountDropDown = () => {
    let router = useRouter();
    const { loginLayoutStore, setLoginLayoutState } = useLoginLayoutState((state) => ({
        loginLayoutStore: state.loginLayoutStore,
        setLoginLayoutState: state.setLoginLayoutState,
    }));
    const handelLogout = () => {
        logout();
        setLoginLayoutState(false, false)
        router.push('/login');
    }
    return (
        <DropdownMenu className='relative' trigger={<button>
            <Image
                src="/assets/images/male-avatar.png"
                alt="avatar"
                className="max-lg:w-6 w-[29px] h-[29px] max-lg:h-6"
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
    )
}