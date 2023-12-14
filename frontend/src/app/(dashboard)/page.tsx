import { FAQSection } from '@/components/Sections/FAQSection';
import { HeroSection } from '@/components/Sections/HeroSection';

import heroSectionImg from '../../../public/images/hero-section-img.webp';

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto'>
      <HeroSection
        src={heroSectionImg}
        alt='Jakub Kosakowski'
        header='Learn Chess from a Grand Master'
        subheader='Learn to play chess like a pro with courses created by Grant Master and Polish Champion Jakub Kosakowski.'
        links={[
          { href: '/courses', text: ' Browse Courses' },
          { href: '/contact', text: 'Contact' },
        ]}
      />
      <FAQSection />
    </div>
  );
}
