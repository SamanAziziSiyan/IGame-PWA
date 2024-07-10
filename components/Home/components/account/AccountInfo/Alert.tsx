import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";

const AccountAlert = () => {
    return (
        <div className="lg:col-span-5 col-span-12 lg:order-2 order-1 w-full flex flex-col gap-y-2">
            <Alert type="danger">
                <p>          توجــه: در خرید آفرها و پیکیج ها، <span className="text-white">در صورت نبود آفر</span> یا <span className="text-white">عدم</span> امکان خرید آن آفـــر روی اکانت شما، معادل مبلغ سفارش از دیگر آیتـــم ها برای شما خرید خواهد شد.
                    <br /><br />
                    برای فعالسازی پرایم بعد از تکمیل سفارش ، mail box اکانت کالاف خود را چک کنید و پرایم را فعال کنید
                </p>
            </Alert>

            <Alert type="warning" icon={<WarningIcon />}>
                <span>سی‌پی‌های زمانبر قیمت پایین تری دارن ولی مدت زمان شارژ شدنشون بین 1 تا 10 روز ممکنه طول بکشه</span>
            </Alert>

            <Alert type="warning" icon={<WarningIcon />}>
                <span>سی پی های فوری بسته های 2400 تا 10800 در کمتر از 1 ساعت واریز میشه</span>
            </Alert>
        </div>
    );
};

export default AccountAlert;




