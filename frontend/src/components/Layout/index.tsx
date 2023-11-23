import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='flex-auto'>{children}</main>
      <Footer />
    </>
  );
}
