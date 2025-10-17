import React, { useState } from 'react';
import Link from "next/link";
import { MenuItem } from '../../types';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const services: MenuItem[] = [
    { id: 1, title: 'about', url: '/about' },
    { id: 4, title: 'blog', url: 'https://extraolivespls.substack.com/' },
    { id: 2, title: 'mems', url: '/aesthetic' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMenuItems([]); // Reset menu items on close
      for (let i = 0; i < services.length; i++) {
        setTimeout(() => {
          // Incrementally set menu items to trigger animations
          setMenuItems(prevItems => [...prevItems, services[i]]);
        }, i * 25); // Each link appears with a delay of 25ms from the previous one
      }
    }
  };

  return (
    <header className='pt-16'>
      <div className="mx-auto flex max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 font-serif">
        <div className="flex items-center lg:justify-between">
          <div>
            <a href="/">
              <strong className="text-2xl"> olivia qin </strong>
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block"></nav>
          <div className="flex items-center gap-4">
            <ul className="italic space-y-1">
              <li>
                <button className="italic" onClick={toggleDropdown}>
                  Library
                </button>
              </li>
              {isOpen && (
                <div className={`${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  {menuItems.map(item => (
                    <li key={item.id}>
                      <Link 
                        href={item.url} 
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:underline lg:text-base"
                      >
                        <div className='animate-dropdown-item'>{item.title}</div>
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

