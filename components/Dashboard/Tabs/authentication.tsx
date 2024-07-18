// components/authentication.tsx

import AccountDetailsForm from "./Profile";
import Bronze from "./authentication/Bronze";
import CardAuth from "./authentication/CardAuth";
import CardUpgrade from "./authentication/CardUpgrade";
import PhoneVerify from "./authentication/PhoneVerify";
import PhoneVerifyConfirm from "./authentication/PhoneVerifyConfirm";
import Silver from "./authentication/Silver";

const Authentication = () => {

    return (
        <>
            <Bronze />
            <CardAuth />
            <Silver/>
            <CardUpgrade/>
            <PhoneVerify phoneNumber={'09142601571'} verificationCode={'5555'}/>
            <PhoneVerifyConfirm/>
        </>
    );
};

export default Authentication;
