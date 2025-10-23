"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeaderTest() {
  console.log('HeaderTest component rendering');
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-lg">
      <div className="w-full">
        <div className="flex justify-between items-center w-full pl-4 pr-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/junk-goats-logo.png" 
              alt="Junk Goats Junk Removal" 
              width={200}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          <button
            onClick={() => {
              console.log('Button clicked!');
              alert('Button works!');
            }}
            className="bg-red-500 text-white px-4 py-2 text-sm"
          >
            TEST BUTTON
          </button>
        </div>
      </div>
    </header>
  );
}
