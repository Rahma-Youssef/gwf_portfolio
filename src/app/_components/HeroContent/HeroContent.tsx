import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center lg:pr-10">

      {/* Small Title */}
      <div className="mb-5 flex items-center justify-center gap-3  font-Poppins">
        <span className="h-px w-7 lg:w-12 bg-[#C89A7B]" />
        <p className="uppercase tracking-[4px] text-[10px] md:text-sm text-[#89634a]">
          We Plan. You Celebrate.
        </p>
        <span className="h-px w-7 lg:w-12 bg-[#C89A7B]" />
      </div>

      {/* Main Heading */}
      <h1 className="text-center ">
        <span className="block font-cormorant text-[#0F4C4C] text-5xl md:text-6xl xl:text-7xl font-medium leading-tight">
          Creating Moments
        </span>

        <span className="mt-2 block font-allura  italic text-[#C89A7B] text-4xl md:text-5xl xl:text-6xl ">
          That Last Forever
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-4xl text-center xl:text-left text-gray-600 leading-8 text-base md:text-lg">
        We design and plan unforgettable events with elegance,
        creativity and perfection. From weddings and birthdays
        to luxury corporate events, every detail is crafted to
        create moments you'll cherish forever.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

        <Link
          href="#Contact"
          className="rounded-full bg-[#0F4C4C] px-8 py-4 text-center font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#0c4040]"
        >
          Book Your Event
        </Link>
{/* 
        <Link
          href="#portfolio"
          className="rounded-full border border-[#C89A7B] px-8 py-4 text-center font-medium text-[#0F4C4C] transition-all duration-300 hover:bg-[#C89A7B]/10"
        >
          View Portfolio →
        </Link> */}

      </div>

      {/* Stats */}
      {/* <div className="mt-14 grid grid-cols-3 overflow-hidden rounded-3xl bg-white shadow-xl">

        <div className="py-7 text-center">
          <h3 className="text-3xl font-semibold text-[#0F4C4C]">
            500+
          </h3>

          <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
            Events Planned
          </p>
        </div>

        <div className="border-x py-7 text-center">
          <h3 className="text-3xl font-semibold text-[#0F4C4C]">
            5.0
          </h3>

          <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
            Client Rating
          </p>
        </div>

        <div className="py-7 text-center">
          <h3 className="text-3xl font-semibold text-[#0F4C4C]">
            98%
          </h3>

          <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
            Satisfaction
          </p>
        </div>

      </div> */}
    </div>
  );
}