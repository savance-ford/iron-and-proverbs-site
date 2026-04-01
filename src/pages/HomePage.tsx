import { AboutSection } from '../components/AboutSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HeroSection } from '../components/HeroSection';

type HomePageProps = {
  onNavigate: (href: string) => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <FeaturesSection />
      <AboutSection />
    </>
  );
}
