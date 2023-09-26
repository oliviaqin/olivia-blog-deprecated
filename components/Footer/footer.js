import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-16">
        <div class="mt-16 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Built with taiwind css, next.js, and hyper ui
              </a>
            </li>
          </ul>

          <ul class="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <a
                href="https://github.com/oliviaqin"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">GitHub</span>

                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olivia-qin/"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
