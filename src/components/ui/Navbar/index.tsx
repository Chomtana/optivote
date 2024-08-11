'use client'

import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between bg-primary-light px-8 text-md font-semibold text-[#475467]">
      <div className="flex">
        <Link href="/">
          <img src="/logo/opti-vote.svg" alt="" className="mr-10" />
        </Link>
        
        {/* <div className="flex items-center gap-8">
          <div>Home</div>
          <div className="flex items-center">
            <div>Products</div>
            <img src="icons/chevron-down.svg" alt="" className="h-5 w-5" />
          </div>
          <div className="flex items-center">
            <div>Resources</div>
            <img src="icons/chevron-down.svg" alt="" className="h-5 w-5" />
          </div>
          <div className="">Pricing</div>
        </div> */}
      </div>
      <div className="flex gap-3">
        <w3m-button />
        {/* <button>Log in</button>
        <button className="rounded-full bg-[#E44000] px-4 py-2.5 text-white">
          Sign up
        </button> */}
      </div>
    </div>
  );
};
