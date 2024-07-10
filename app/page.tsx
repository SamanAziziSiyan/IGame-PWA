// app/page.tsx
import Home from '@/components/Home/components';
import { ProductsService } from '@/services/products/products';

const HomePage = async () => {
  const res = await ProductsService();
  return <Home />;
};

export default HomePage;