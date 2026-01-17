import { Aurora } from '@/components/animate-ui/components/backgrounds/aurora';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <Aurora
        colorStops={["#5B8DEF", "#A855F7", "#EC4899"]}
        blend={0.6}
        amplitude={1.0}
        speed={0.5}
        className="fixed inset-0 z-0"
      />
    </div>
  );
}
