import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <div class="mx-auto flex max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 font-serif	">
        <div class="flex items-center lg:justify-between">
          <div>
            <a href="/">
              <strong class="text-2xl"> olivia qin </strong>
            </a>
          </div>
        </div>

        <div class="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" class="hidden md:block"></nav>
          <div class="flex items-center gap-4">
            <ul class="pt-8 space-y-1">
              <li></li>

              <li>
                <Link
                  href="/about"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:underline lg:text-base"
                >
                  about
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1TsKMOBkj0pSWjrY5InJspngUAOOTg0Ww/view?usp=sharing"
                  class="block text-sm rounded-lg px-4 py-2 text-gray-500 hover:text-gray-700 hover:underline lg:text-base"
                >
                  cv
                </a>
              </li>

              {/* <li>
                <Link
                  href="/projects"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:underline lg:text-base"
                >
                  projects
                </Link>
              </li> */}

              <li>
                <a
                  href="/aesthetic"
                  class="block text-sm rounded-lg px-4 py-2 text-gray-500 hover:text-gray-700 hover:underline lg:text-base"
                >
                  ♡
                </a>
              </li>

              {/* <li>
                <a
                  href="https://extraolivespls.substack.com/"
                  class="block text-sm rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:underline lg:text-base"
                >
                  blog
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
