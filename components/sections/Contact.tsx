"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
        Partner With Us
      </h2>

      {/* CTA Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">

        {/* Lease */}
        <div className="p-8 border border-gray-700 rounded-xl text-center hover:bg-white hover:text-black transition">
          <h3 className="text-xl font-semibold">🏬 Lease a Space</h3>
          <p className="mt-3 text-gray-400">
            Join 450+ brands in a high-traffic retail destination.
          </p>
          <button className="mt-6 px-4 py-2 border rounded-full">
            Explore Leasing
          </button>
        </div>

        {/* Sponsor */}
        <div className="p-8 border border-gray-700 rounded-xl text-center hover:bg-white hover:text-black transition">
          <h3 className="text-xl font-semibold">🤝 Become a Sponsor</h3>
          <p className="mt-3 text-gray-400">
            Showcase your brand through premium experiences.
          </p>
          <button className="mt-6 px-4 py-2 border rounded-full">
            View Opportunities
          </button>
        </div>

        {/* Events */}
        <div className="p-8 border border-gray-700 rounded-xl text-center hover:bg-white hover:text-black transition">
          <h3 className="text-xl font-semibold">🎤 Book a Venue</h3>
          <p className="mt-3 text-gray-400">
            Host events in a world-class entertainment hub.
          </p>
          <button 
          onClick={() => window.location.href = "/events"}
          className="mt-6 px-4 py-2 border rounded-full">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}