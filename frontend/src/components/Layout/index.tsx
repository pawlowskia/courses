import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='flex flex-grow flex-col'>{children}</main>
      <Footer />
    </>
  );
}
