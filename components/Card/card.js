import React from "react";

function CardImage({img, title}) {
    // Customizes the card
}

export default function Card() {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://res.cloudinary.com/ddfmg0d4v/image/upload/v1697299981/cpm35_2023-10-13_164831.996_qhwr0a.jpg" alt="Shoes" /></figure>
</div>
    )
}