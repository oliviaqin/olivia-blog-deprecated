import 'animate.css';

export default function About() {
    return ( 
    <div>
          <div class='col-auto mx-auto justify-center lg:flex-row items-center gap-4 my-4 p-8'>
            <div class='col-span-1 justify-items-center	'>
            <img class='w-60 scale-75 ml-16 lg:w-96 animate__animated animate__fadeIn lg:ml-96' src='https://res.cloudinary.com/ddfmg0d4v/image/upload/v1690252685/IMG_8905_square_bxlru7.jpg' />
            </div>
            <div class="w-60 mt-8 ml-16 lg:w-96 lg:ml-96 playfair-display">
            <p>
              Hi my name is olivia. I'm 23 years old and work as a swe for <strong>datadog</strong> in nyc.
              I graduated from UC Berkeley with a double degree in computer and data science.
            </p>
            <p class='mt-4'>
              I previously interned at <span class='hover:underline hover:underline-offset-4'><strong >qualtrics</strong></span> and <strong>geopogo</strong>, an AR startup in berkeley skydeck.
               My interests lie in data modeling, optimization, and (occasionally) coding.
            </p>
            <p class='mt-4'>
               Give me a book recc :) 
            </p>
            </div>

            </div>
    </div>
    
    )

}
