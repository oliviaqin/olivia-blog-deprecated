import "animate.css";

export default function About() {
  return (
    <div>
      <div class="col-auto mx-auto justify-center lg:flex-row items-center gap-4 my-4">
        <div class="col-span-1 justify-items-center	"></div>
        <div class="w-96 p-4 md:w-2/3 lg:ml-48 playfair-display md:columns-2 columns-1">
          <div>
            <img
              class="rounded-lg w-96"
              src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697327404/cpm35_2023-10-14_194904.121_dqtlwg.jpg"
            />
          </div>
          <div>
            <h3 class="text-xl">
              Hi, my name is <strong> Olivia</strong>.
            </h3>
            <p class="mt-1 text-sm text-gray-500">[23 in nyc]</p>
            <p class="mt-4 text-gray-700">
              Currently working at{" "}
              <strong class="transition ease-in-out hover:text-indigo-300 delay-150 duration-300">
                datadog
              </strong>{" "}
              as a swe. I previously interned at{" "}
              <strong class="transition ease-in-out hover:text-indigo-300 delay-150 duration-300">
                qualtrics
              </strong>{" "}
              and{" "}
              <strong class="transition ease-in-out hover:text-indigo-300 delay-150 duration-300">
                geopogo
              </strong>
              , an AR startup in berkeley skydeck.
            </p>
            <p class="mt-4 text-gray-700">
              I graduated from UC Berkeley with a dual degree in computer and
              data science. In college, I was a teaching assistant for Data 100
              Summer '20, Fall '20, and Spring '21.
            </p>
            <p class="mt-4 text-gray-700">
              I enjoy traveling, reading, running, and snowboarding
            </p>
            <p class="mt-4 text-gray-700">
              Weapon Arsenal (technically): Python, Kubernetes, Docker, AWS,
              Snowflake, JupyterHub, Next.js
              <br />
              Data Engineering: DBT, Airbyte, ELT, ETL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
