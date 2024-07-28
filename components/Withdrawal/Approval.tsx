// components/withdrawal.tsx
"use client";

import React, { useState } from "react";
import ApprovalIcon from "../Common/icons/approvalIcon";
import Button from "../Common/Buttons";
import Link from "next/link";
interface ApprovalProps {
    transactionId: string | number;
}
const Approval: React.FC<ApprovalProps> = ({ transactionId }) => {
    return (
        <div className="mt-8 container-px lg:w-2/3 w-full mx-auto">
            <div className="flex items-center gap-x-4">
                <ApprovalIcon className="" />
                <span className="text-white font-bold text-[18px]">درخواست شما ارسال شد</span>
            </div>
            <div className="mt-8 flex flex-col gap-y-5">
                <span className="text-white/80 text-[14px] font-normal">درخواست شما به صورت اتوماتیک انجام شد.</span>
                <div className="flex flex-col gap-y-2">
                    <span className="text-[#4285F4] text-[14px] font-bold">اطلاعات پیگیــری</span>
                    <div className="flex flex-col font-medium text-[14px] text-white/80">
                        <span>شماره تراکنش:{transactionId}</span>
                        <span>شماره فاکتور:-</span>
                        <span>شماره درخواست:-</span>
                    </div>
                </div>
                <Link href='/withdrawal' className='mt-3 py-[14px] text-center text-[#111] font-semibold bg-white rounded-[40px]' type='button'>
                    بازگشت
                </Link>
            </div>
        </div>
    );
};

export default Approval;
