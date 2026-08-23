export default function VideoSection() {
  return (
    <section className="bg-[#f3f4f6] py-6 md:py-8 border-t border-neutral-200/80">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-3 shadow-xl">
          <video
            src="/vio/b.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="aspect-video w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
