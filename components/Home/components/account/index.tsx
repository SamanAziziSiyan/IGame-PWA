// components/Home.tsx

import AccountDesc from "./AccountDesc";
import AccountInfo from "./AccountInfo";

const Account = () => {
    return (
        <div className="mt-14 container-px">
            <AccountInfo />
            <AccountDesc />
        </div>
    );
};

export default Account;
