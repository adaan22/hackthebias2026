import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BubbleBackground
        interactive={true}
        className="fixed inset-0 z-0"
      />
    </div>
  );
}
