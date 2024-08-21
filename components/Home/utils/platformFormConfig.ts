export const platformFieldsAndRules: Record<string, { id: string; type: string, label: string; placeholder: string; validationRules?: Record<string, any> }[]> = {
    'اکانت اکتیویژن': [
        { id: 'accountUserName', type: 'text', label: 'نام کاربری (ایمیل اکانت اکتیویژن)*', placeholder: 'اکانت اکتویژن را در این قسمت وارد کنید', validationRules: { required: 'نام کاربری ضروری است', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'ایمیل نامعتبر است' } } },
        { id: 'accountPassword', type: 'text', label: 'رمز عبور اکتیویژن*', placeholder: 'رمز عبور اکتیویژن را در این قسمت وارد کنید', validationRules: { required: 'رمز عبور ضروری است' } },
        { id: 'nameInGame', type: 'text', label: 'نام درون بازی*', placeholder: 'نام درون بازی را در این قسمت وارد کنید', validationRules: { required: 'نام درون بازی ضروری است' } },
        // { id: 'hiddenItem', type: 'hidden', label: '', placeholder: 'بکاپ کد فیسبوک', validationRules: {} },
    ],
    'فیسبوک': [
        { id: 'accountUserName', type: 'text', label: 'نام کاربری یا ایمیل فیسبوک*', placeholder: 'ایمیل فیسبوک را در این قسمت وارد کنید', validationRules: { required: 'نام کاربری یا ایمیل ضروری است', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'ایمیل نامعتبر است' } } },
        { id: 'accountPassword', type: 'text', label: 'رمز عبور فیسبوک*', placeholder: 'رمز فیسبوک را در این قسمت وارد کنید', validationRules: { required: 'رمز عبور ضروری است' } },
        { id: 'nameInGame', type: 'text', label: 'نام درون بازی*', placeholder: 'نام درون بازی را در این قسمت وارد کنید', validationRules: { required: 'نام درون بازی ضروری است' } },
        { id: 'BackupCode', type: 'text', label: 'کد بکاپ', placeholder: 'بکاپ کد فیسبوک', validationRules: {} },
    ],
};