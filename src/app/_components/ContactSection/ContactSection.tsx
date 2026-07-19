"use client";

import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Header from "../Header/Header";

type ContactSectionProps = {
  isInView: boolean;
};

const locations = [
  {
    title: "Alexandria Office",
    address:
      "الإسكندرية – 398 شارع أبو قير، برج الأطباء (الفنار)، الدور العاشر – بجوار بنك فيصل الإسلامي",
  },
  {
    title: "Smouha Office",
    address: "سموحة، فوزي معاذ، برج الإنتركوم",
  },
];

const facebookPages = [
  {
    name: "Wesal Ahmed",
    subtitle: "Golden Glow Events",
    url: "https://www.facebook.com/share/17vJVHF3S6/",
  },
  {
    name: "GWG Events",
    subtitle: "Events & Experiences",
    url: "https://www.facebook.com/share/17UdQth5aB/",
  },
];

const phoneNumbers = [
  "01227098854",
  "01278154489",
];

export default function ContactSection({
  isInView,
}: ContactSectionProps) {
  return (
    <section
      id="Contact"
      className="
        relative
        overflow-hidden
        bg-[#FAF7F2]
        py-20

        sm:py-28

        lg:py-36
      "
    >
      {/* =========================
          LUXURY BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-32
            -top-32
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#C89A7B]/10
            blur-[100px]

            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[130px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -right-32
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#0F4C4C]/10
            blur-[110px]

            sm:h-[550px]
            sm:w-[550px]
            sm:blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#0F4C4C_1px,transparent_1px),linear-gradient(90deg,#0F4C4C_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      {/* =========================
          CONTAINER
      ========================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4

          sm:px-6

          lg:px-8
        "
      >

        {/* =========================
            HEADER
        ========================== */}

        <Header
          title="Contact Us"
          description="نحن هنا لتحويل أفكارك إلى تجارب استثنائية وذكريات لا تُنسى."
          isInView={isInView}
        />

        {/* =========================
            MAIN GRID
        ========================== */}

        <div
          className="
            mt-12
            grid
            gap-5

            sm:mt-16
            sm:gap-6

            lg:grid-cols-[1.1fr_.9fr]
            lg:items-start
          "
        >

          {/* =========================
              LEFT SIDE
          ========================== */}

          <div className="space-y-5 sm:space-y-6">

            {/* LOCATIONS */}

            <div
              className="
                rounded-[24px]
                border
                border-[#EFE3D7]
                bg-white
                p-5
                shadow-[0_20px_60px_rgba(15,76,76,0.07)]

                sm:rounded-[32px]
                sm:p-8
              "
            >

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-3

                  sm:mb-8
                  sm:gap-4
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0F4C4C]
                    text-white

                    sm:h-12
                    sm:w-12
                  "
                >
                  <MapPin size={20} />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#C89A7B]

                      sm:text-xs
                      sm:tracking-[0.3em]
                    "
                  >
                    Our Offices
                  </p>

                  <h3
                    className="
                      mt-1
                      font-serif
                      text-2xl
                      text-[#0F4C4C]

                      sm:text-3xl
                    "
                  >
                    Visit Us
                  </h3>
                </div>

              </div>

              <div
                className="
                  grid
                  gap-3

                  sm:gap-4

                  md:grid-cols-2
                "
              >

                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="
                      rounded-2xl
                      border
                      border-[#EFE3D7]
                      bg-[#FAF7F2]
                      p-4

                      sm:p-5
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-[#C89A7B]

                        sm:text-xs
                        sm:tracking-[0.2em]
                      "
                    >
                      {location.title}
                    </p>

                    <p
                      dir="rtl"
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-gray-600

                        sm:mt-4
                        sm:leading-8
                      "
                    >
                      {location.address}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* WHATSAPP */}

            <div
              className="
                rounded-[24px]
                bg-[#0F4C4C]
                p-5
                text-white
                shadow-[0_20px_60px_rgba(15,76,76,0.15)]

                sm:rounded-[32px]
                sm:p-8
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-6

                  sm:gap-8
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#D7A486]

                      sm:text-xs
                      sm:tracking-[0.3em]
                    "
                  >
                    Reservations & Inquiries
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl

                      sm:text-4xl
                    "
                  >
                    Let&apos;s Talk
                  </h3>

                </div>

                <div
                  className="
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >

                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`https://wa.me/20${phone.slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        min-h-[56px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        text-sm
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:bg-[#D7A486]
                        hover:text-[#0F4C4C]

                        sm:text-base
                      "
                    >
                      <MessageCircle size={18} />

                      <span dir="ltr">
                        {phone}
                      </span>
                    </a>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <div className="space-y-5 sm:space-y-6">

            {/* FACEBOOK */}

            <div
              className="
                rounded-[24px]
                border
                border-[#EFE3D7]
                bg-white
                p-5
                shadow-[0_20px_60px_rgba(15,76,76,0.07)]

                sm:rounded-[32px]
                sm:p-8
              "
            >

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#C89A7B]

                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                Follow Our Work
              </p>

              <h3
                className="
                  mt-3
                  font-serif
                  text-3xl
                  text-[#0F4C4C]

                  sm:text-4xl
                "
              >
                Find Us Online
              </h3>

              <div className="mt-6 space-y-3">

                {facebookPages.map((page) => (
                  <a
                    key={page.name}
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      min-h-[72px]
                      items-center
                      justify-between
                      gap-3
                      rounded-2xl
                      border
                      border-[#EFE3D7]
                      bg-[#FAF7F2]
                      p-3
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#C89A7B]
                      hover:shadow-lg

                      sm:p-4
                    "
                  >

                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                      {/* Facebook Icon */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#1877F2]
                          text-white

                          sm:h-11
                          sm:w-11
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.55.45-1 1-1Z" />
                        </svg>
                      </div>

                      <div className="min-w-0">

                        <p
                          className="
                            truncate
                            font-medium
                            text-[#0F4C4C]

                            sm:text-base
                          "
                        >
                          {page.name}
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-xs
                            text-gray-500

                            sm:text-sm
                          "
                        >
                          {page.subtitle}
                        </p>

                      </div>

                    </div>

                    <ArrowUpRight
                      size={19}
                      className="
                        shrink-0
                        text-[#0F4C4C]/40
                        transition
                        duration-300
                        group-hover:rotate-45
                        group-hover:text-[#C89A7B]
                      "
                    />

                  </a>
                ))}

              </div>

            </div>

            {/* MAP */}

            <div
              className="
                overflow-hidden
                rounded-[24px]
                border
                border-[#EFE3D7]
                bg-white
                p-2
                shadow-[0_20px_60px_rgba(15,76,76,0.07)]

                sm:rounded-[32px]
              "
            >

              <iframe
                title="Golden Glow Events Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3411.81335597653!2d29.94292507559982!3d31.225899974350163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEzJzMzLjIiTiAyOcKwNTYnNDMuOCJF!5e0!3m2!1sen!2seg!4v1784479883271!5m2!1sen!2seg"
                className="
                  h-[260px]
                  w-full
                  rounded-[20px]
                  border-0

                  sm:h-[360px]

                  lg:h-[400px]
                "
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}

        <div
          className="
            mt-16
            border-t
            border-[#0F4C4C]/10
            pt-6
            text-center

            sm:mt-20
            sm:pt-8
          "
        >

          <p
            className="
              text-xs
              text-gray-500

              sm:text-sm
            "
          >
            © {new Date().getFullYear()} Golden Glow Events.
            All rights reserved.
          </p>

        </div>

      </div>

    </section>
  );
}