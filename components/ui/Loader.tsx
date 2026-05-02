export default function Loader({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 bg-black z-[999] flex flex-col items-center justify-center">

      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://res.cloudinary.com/dpjtxigne/video/upload/v1777654050/Hero_2_o5rhv5.mp4" />
      </video>

      <div className="relative z-10 text-center">
        <p className="text-white/40 text-xs tracking-[0.5em] uppercase mb-6">
          American Dream · New Jersey
        </p>

        <h1 className="text-5xl text-white mb-12">
          Not a Mall.<br /><span className="italic">A Destination.</span>
        </h1>

        <button
          onClick={onEnter}
          className="border border-white/40 px-8 py-4 text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition"
        >
          Enter
        </button>
      </div>
    </div>
  );
}