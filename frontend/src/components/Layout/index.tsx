import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='mx-auto flex max-w-7xl flex-grow flex-col'>{children}</main>
      <Footer />
    </>
  );
}
