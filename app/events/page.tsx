export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-4xl md:text-6xl font-semibold mb-10">
        Events Platform
      </h1>

      <p className="text-gray-400 max-w-2xl mb-10">
        American Dream hosts large-scale events, brand activations,
        and experiences with unmatched footfall and infrastructure.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-semibold">Venue Capacity</h3>
          <p className="text-gray-400 mt-2">
            Large-scale indoor capacity with flexible layouts.
          </p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-semibold">Media Reach</h3>
          <p className="text-gray-400 mt-2">
            Access to NYC’s massive media market.
          </p>
        </div>

      </div>

    </div>
  );
}