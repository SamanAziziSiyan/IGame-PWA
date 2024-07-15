// components/withAuth.tsx
import { checkAuthToken } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
    const ComponentWithAuth = (props: any) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(true);

        useEffect(() => {
            const verifyAuth = async () => {

                try {
                    const response = await checkAuthToken();
                    console.log(response);

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
            return <div>Loading...</div>;
        }

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return ComponentWithAuth;
};

export default withAuth;
