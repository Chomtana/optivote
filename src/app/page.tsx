"use client";
import GitHubButton from "@/components/ui/Button/github";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWalletInfo, useWeb3Modal } from '@web3modal/wagmi/react'

export default function Login() {
  const { walletInfo } = useWalletInfo()
  const { open } = useWeb3Modal()
  const { push } = useRouter();

  console.log(walletInfo)

  const onSubmit = (data: any) => {
    console.log(data);
    push("/internal/dashboard");
  };

  return (
    <div className="h-full-screen relative bg-primary-light">
      <Image
        src="/image/login-1.png"
        className="absolute right-0 top-0 h-full max-h-[823px] overflow-hidden"
        alt=""
        width={279}
        height={823}
      />
      <Image
        src="/image/login-2.png"
        className="absolute left-0 top-0 h-full max-h-[823px] overflow-hidden"
        alt=""
        width={279}
        height={823}
      />
      <div className="absolute bottom-0 left-1/2 h-[264px] w-full -translate-x-1/2 overflow-hidden">
        <Image
          src="/icons/vote.svg"
          alt=""
          className="h-full w-full object-cover object-top"
          width={1934}
          height={474}
        />
      </div>
      <div className="relative z-50 mx-auto flex max-w-xl flex-col items-center justify-center pb-12 pt-24">
        <img src="/logo/login-logo.svg" alt="" />
        <div className="my-6 text-3xl font-semibold text-[#101828]">
          Log in to your Github account
        </div>
        <p className="text-center text-xl font-medium text-[#475467]">
          To empower developers through community-driven project voting in the
          Ethereum and Optimism ecosystems.
        </p>
        <Separator className="mt-8 h-[1px] w-[360px] bg-[#E4E7EC]" />
        <div className="my-6 w-[328px]">
          <GitHubButton onClick={() => open()} />
        </div>
        {/* <button className="mb-8 w-[328px] rounded-full bg-[#E44000] px-4 py-2.5 text-white">
          Continue with email
        </button>
        <div className="text-sm font-semibold text-[#B23200]">
          Continue with SAML SSO
        </div> */}
      </div>
    </div>
  );
}
