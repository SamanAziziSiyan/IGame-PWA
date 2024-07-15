// components/withAuth.tsx
import { checkAuthToken } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

const withAuth = (WrappedComponent: React.ComponentType) => {
    const ComponentWithAuth = (props: any) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(true);

        useEffect(() => {
            const verifyAuth = async () => {
                
                try {
                    const response = await checkAuthToken();
                    if (response) {
                        setIsAuthenticated(true);
                        setLoading(false)
                    } else {
                        router.push('/login');
                        setLoading(false);
                    }
                } catch (error) {
                    router.push('/login');
                    setLoading(false);
                }
            };

            verifyAuth();
        }, [router]);

        if (loading) {
            return <div style={{height:'80vh'}} className='w-full !h-[80vh] py-96 flex items-center justify-center '><ScaleLoader color='#fff' height={70} width={10} /></div>;
        }

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return ComponentWithAuth;
};

export default withAuth;
