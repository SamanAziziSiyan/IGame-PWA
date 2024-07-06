// app/page.tsx

"use client";

import { useState } from 'react';
import { Login } from '@/services/auth/login';

const LoginPage = () => {
    // const [phoneNumber, setPhoneNumber] = useState<string>('');
    // const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);
    // const [success, setSuccess] = useState<boolean>(false);

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     try {
    //         Login(event.target[0].value).then((response) => {
    //             console.log(response);

    //         }).catch((error) => {
    //             console.log(error);
    //         });
    //     } catch (error) {

    //     }

    // };

    return (
        <div></div>
        // <div style={{ textAlign: 'center', marginTop: '50px' }}>
        //     <h1>Login</h1>
        //     <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        //         <div style={{ marginBottom: '20px' }}>
        //             <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '8px' }}>
        //                 Phone Number:
        //             </label>
        //             <input
        //                 type="text"
        //                 id="phoneNumber"
        //                 value={phoneNumber}
        //                 onChange={(e) => setPhoneNumber(e.target.value)}
        //                 style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '300px' }}
        //                 required
        //             />
        //         </div>
        //         <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }} disabled={loading}>
        //             {loading ? 'Logging in...' : 'Login'}
        //         </button>
        //     </form>
        //     {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
        //     {success && <p style={{ color: 'green', marginTop: '20px' }}>Login successful!</p>}
        // </div>
    );
};

export default LoginPage;
