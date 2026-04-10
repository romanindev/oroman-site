import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Skills } from '@/components/home/Skills';
import { FeaturedProject } from '@/components/home/FeaturedProject';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
    </>
  );
}
