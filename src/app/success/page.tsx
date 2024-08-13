"use client";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { numText, percentText, textNum } from "@/lib/utils";
import { useVoting } from "@/reducer/votingReducer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const [ voting ] = useVoting()

  const submit = useCallback(async () => {
    window.open(`https://optimism.easscan.org/attestation/view/${voting.easUid}`)
  }, [voting])

  return (
    <div className="relative">
      <Image
        src="/image/home-op-1.png"
        alt=""
        width={590}
        height={842}
        className="absolute top-1/4 h-[421px] w-[295px]"
      />
      <Image
        src="/image/home-op-2.png"
        alt=""
        width={438}
        height={646}
        className="absolute right-0 top-10 h-[320px] w-[230px]"
      />

      <div className="mx-auto max-w-xl pb-12 pt-8 text-[#101828]">
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#E4E7EC] p-6 shadow-sm">
          <div className="text-display-sm font-semibold text-[#101828]">
            Thank You for Voting
          </div>
          <p className="text-md text-[#475467]">
            Your vote has been successfully recorded on the Ethereum Attestation Service (EAS)
          </p>
          
          <div className="rounded-2xl bg-[#F2F4F7] p-4">
            <div className="text-[#475467]">Category</div>
            <div className="mt-2 text-md font-semibold">OP Stack Research & Development</div>
          </div>

          <div className="rounded-2xl bg-[#F2F4F7] p-4">
            <div className="text-[#475467]">Attestation UID</div>
            <div className="mt-2 text-md font-semibold truncate text-ellipsis">{voting.easUid}</div>
          </div>

          <Separator className="h-[1px] w-full bg-[#E4E7EC]" />

          <button className="w-full rounded-full bg-[#E44000] px-4 py-2.5 text-white" onClick={() => submit()}>
            View on EAS Scan
          </button>
        </div>
      </div>
    </div>
  );
}
