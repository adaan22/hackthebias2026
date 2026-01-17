import { Aurora } from "@/components/animate-ui/components/backgrounds/aurora";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-50">
      <Aurora
        colorStops={["#3B82F6", "#A855F7", "#F43F5E"]}
        blend={0.20}
        amplitude={0.75}
        speed={0.32}
        className="
          fixed 
          -top-[30vh] 
          left-0 
          right-0 
          h-[160vh] 
          z-0 
          opacity-90 
          [filter:blur(38px)_saturate(1.9)_contrast(1.08)]
        "
      />

      {/* Slightly stronger veil = less muddy */}
      <div className="fixed inset-0 z-[1] bg-white/64" />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-28">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
            Test
          </h1>
        </div>
      </main>
    </div>
  );
}
