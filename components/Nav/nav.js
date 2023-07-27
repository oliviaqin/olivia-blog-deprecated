import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <header >
  <div class="mx-auto flex max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 font-serif	">
    <div class='flex items-center lg:justify-between'>
        <div>
          <a href="/">
          <strong class='text-2xl'> olivia qin </strong>
          </a>
        </div>
        
    </div>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
      </nav>
      <div class="flex items-center gap-4">
        <button id='theme-toggle' type='button'>
        <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
            <input type="checkbox" id="AcceptConditions" class="peer sr-only" />

            <span
              class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
            ></span>

            <span
              class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"
            ></span>
          </label>
        </button>
        <ul class="pt-8 space-y-1">
        <li>
        </li>

  <li>
    <Link
      href="/about"
      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:text-base"
    >
      about
    </Link>
  </li>

  <li>
    <Link
    href="/projects"
    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:text-base">
          projects
    </Link>
  </li>

  <li>
    <a href="https://extraolivespls.substack.com/subscribe" class="block text-sm rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:text-base">
      blog
    </a>
  </li>

</ul>
      </div>
    </div>
  </div>
</header>
  )
}