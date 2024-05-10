import Link from "next/link";


export default function Shelf() {

    return (
    <div class="ml-8 mt-4 text-gray-700">
        <p>
        Books: 
        <br />
            <a
            class="underline"
            href="https://www.goodreads.com/book/show/31138556-homo-deus"
            >
            Homo Deus - Yuval Noah Harari
            </a>
        <br />{" "}
            <a
            class="underline"
            href="https://www.goodreads.com/book/show/6149.Beloved?from_search=true&from_srp=true&qid=ixzRax9Vfk&rank=1"
            >
            Beloved - Toni Morrison
            </a>{" "}
        <br />{" "}
            <a
            class="underline"
            href="https://www.goodreads.com/book/show/20518872-the-three-body-problem"
            >
            Three Body Problem - Cixin Liu
            </a>{" "}
        <br />
            <a
            class="underline"
            href="https://www.goodreads.com/author/show/130698.Ted_Chiang"
            >
            Ted Chiang
            </a>
        <br />{" "}
            <a
            class="underline"
            href="https://www.goodreads.com/book/show/60321447-chip-war"
            >
            The Chip War - Chris Miller
            </a>
        </p>

        <br />{" "}
        <br />{" "}
        
        <Link class="underline" href="/chef"> chef </Link>

    </div> )

}