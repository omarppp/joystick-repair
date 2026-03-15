import Image from "next/image";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#060b11] py-20 sm:py-24"
    >
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-teal-300 backdrop-blur sm:text-sm">
            Repair Gallery
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Work
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A look at our controller repairs, upgrades, and maintenance work.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">

          {/* Big */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery1.jpg"
              alt="controller repair"
              width={800}
              height={800}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Small */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery2.jpg"
              alt="repair work"
              width={500}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery3.jpg"
              alt="joystick repair"
              width={500}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery4.jpg"
              alt="controller cleaning"
              width={500}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery5.jpg"
              alt="controller parts"
              width={500}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}