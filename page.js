export default function Home() {
  const therapists = [
    {
      name: "Aiden",
      role: "Bodywork Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Kai",
      role: "Deep Relaxation",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Noah",
      role: "Night Mood Therapy",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm mb-6">
          Kaohsiung · Reservation Only
        </p>

        <h1 className="text-7xl font-light tracking-[0.2em] mb-4">深寓</h1>

        <p className="text-2xl text-neutral-400 mb-6">Profound Room</p>

        <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm">
          Bodywork · Coffee · Night Mood
        </p>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-12">Therapists</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <div
              key={therapist.name}
              className="rounded-3xl overflow-hidden border border-neutral-800 bg-[#111]"
            >
              <img
                src={therapist.image}
                alt={therapist.name}
                className="h-[420px] w-full object-cover"
              />

              <div className="p-6">
                <p className="text-2xl mb-2">{therapist.name}</p>
                <p className="text-neutral-500 uppercase tracking-[0.2em] text-sm">
                  {therapist.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="text-5xl font-light mb-8">
          Bodywork · Coffee · Night Mood
        </h2>

        <a
          href="https://lin.ee/U5zVkHm"
          className="inline-block bg-white text-black px-8 py-4 rounded-full mt-6"
        >
          Reservation / LINE
        </a>
      </section>
    </main>
  );
}
