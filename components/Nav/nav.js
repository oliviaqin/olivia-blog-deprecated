import React, { useState } from 'react';
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const services = [
    {id:1, title: 'about', url: '/about'},
    {id:2, title: '♡', url: '/aesthetic'},
    // {id:3, title: 'cv', url: 'https://drive.google.com/file/d/1TsKMOBkj0pSWjrY5InJspngUAOOTg0Ww/view?usp=sharing'},
    {id:4, title: 'blog', url: 'https://extraolivespls.substack.com/'},
    // {id:5, title: 'shelf', url: '/shelf'},
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMenuItems([]); // Reset menu items on close
      for (let i = 0; i < services.length; i++) {
        setTimeout(() => {
          // Incrementally set menu items to trigger animations
          setMenuItems(prevItems => [...prevItems, services[i]]);
        }, i * 25); // Each link appears with a delay of 250ms from the previous one
      }
    }
  };

  return (
    <header class='pt-16'>
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
            <ul class="italic space-y-1">
              <li> <button class="italic" onClick={toggleDropdown}>Library</button></li>
              {isOpen && (
                <div class={`${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  {menuItems.map(item => (
                    <li>
                       <Link key={item.id} href={item.url} class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:underline lg:text-base" >
                       <div class='animate-dropdown-item'>{item.title}</div>
                       </Link>
                    </li>
                  ))}
                </div>)}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
