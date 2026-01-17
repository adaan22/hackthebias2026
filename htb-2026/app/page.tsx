import { Aurora } from '@/components/animate-ui/components/backgrounds/aurora';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        className="fixed inset-0 z-0"
      />
    </div>
  );
}
