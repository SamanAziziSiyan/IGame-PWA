// app/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My New Home Page!</h1>
      <p>Explore our latest features and offerings.</p>
      <Link href="/about">Learn More About Us</Link>
    </div>
  );
};

export default HomePage;
