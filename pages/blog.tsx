export default function Blog() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            travel photos (wip)
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            to infinity and beyond ☀️
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="/blog_test" className="group block overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299981/cpm35_2023-10-13_164831.996_qhwr0a.jpg"
                alt="Ithaca"
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Ithaca
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697327405/cpm35_2023-10-14_194814.402_prkm51.jpg"
                alt="Long Island"
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Long Island
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1698109606/instsqc_2023-10-23_210340.582_yygycj.jpg"
                alt="Europe"
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Europe
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://i.imgur.com/slCRCEG.jpg"
                alt="Banff"
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Banff
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

