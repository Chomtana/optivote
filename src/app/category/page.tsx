"use client";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { numText, percentText, textNum } from "@/lib/utils";
import { useVoting } from "@/reducer/votingReducer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const { push } = useRouter();
  // useEffect(() => {
  //   push("/login");
  // }, []);

  const [ voting, dispatch ] = useVoting()

  const votingTotal = voting.categories.eth + voting.categories.opResearch + voting.categories.opTool

  const submit = useCallback(async () => {
    if (votingTotal != 30000000) {
      window.alert('Total OP allocation must be 30M OP')
      return
    }

    push("vote")
  }, [push, votingTotal])

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
        <div className="text-display-sm font-semibold text-[#101828]">
          Customize Your OP Allocation
        </div>
        <p className="text-md text-[#475467]">
          Emphasizes that the allocation is based on contributions to the
          Ethereum Core
        </p>
        <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#E4E7EC] p-6 shadow-sm">
          <div className="rounded-2xl bg-[#F2F4F7] p-4">
            <div className="text-[#475467]">Total OP Allocation</div>
            <div className="mt-2 text-md font-semibold">30,000,000</div>
          </div>
          <div className="flex items-center gap-3">
            <Progress value={votingTotal / 300000} />
            <div>{(votingTotal / 300000).toFixed(2)}%</div>
          </div>
          <div>
            <div className="flex items-center gap-3 rounded-t-2xl border-2 border-[#E44000] px-5 py-3">
              <img src="/icons/stack.svg" alt="" />
              <div>Ethereum Core Contributions</div>
            </div>
            <div className="flex w-full items-center justify-between gap-3 rounded-b-2xl border-2 border-t-0 border-[#E44000] p-5">
              <div className="flex w-3/4">
                <input
                  type="text"
                  value={numText(voting.categories.eth)}
                  onChange={e => dispatch({
                    type: 'categoryChange',
                    key: 'eth',
                    allocation: textNum(e.target.value),
                  })}
                  className="w-full rounded-md rounded-r-none border border-[#D0D5DD] py-2.5 pl-3.5 shadow-sm"
                />
                <div className="flex gap-1 rounded-md rounded-l-none border border-l-0 border-[#D0D5DD] px-3.5 py-2.5 shadow-sm">
                  <div>OP</div>
                  <img src="/icons/chevron-down.svg" alt="" />
                </div>
              </div>
              <div className="flex w-1/4">
                <div className="flex gap-1 rounded-md rounded-r-none border border-r-0 border-[#D0D5DD] px-3.5 py-2.5 shadow-sm">
                  <div>%</div>
                </div>
                <input
                  type="text"
                  value={percentText(voting.categories.eth / 30000000)}
                  onChange={e => dispatch({
                    type: 'categoryChange',
                    key: 'eth',
                    allocation: (parseFloat(e.target.value) * 300000) || 0,
                  })}
                  className="w-full rounded-md rounded-l-none border border-[#D0D5DD] py-2.5 pl-3.5 shadow-sm"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 rounded-t-2xl border-2 border-[#E44000] px-5 py-3">
              <img src="/icons/stack.svg" alt="" />
              <div>OP Stack Research & Development</div>
            </div>
            <div className="flex w-full items-center justify-between gap-3 rounded-b-2xl border-2 border-t-0 border-[#E44000] p-5">
              <div className="flex w-3/4">
                <input
                  type="text"
                  value={numText(voting.categories.opResearch)}
                  onChange={e => dispatch({
                    type: 'categoryChange',
                    key: 'opResearch',
                    allocation: textNum(e.target.value),
                  })}
                  className="w-full rounded-md rounded-r-none border border-[#D0D5DD] py-2.5 pl-3.5 shadow-sm"
                />
                <div className="flex gap-1 rounded-md rounded-l-none border border-l-0 border-[#D0D5DD] px-3.5 py-2.5 shadow-sm">
                  <div>OP</div>
                  <img src="/icons/chevron-down.svg" alt="" />
                </div>
              </div>
              <div className="flex w-1/4">
                <div className="flex gap-1 rounded-md rounded-r-none border border-r-0 border-[#D0D5DD] px-3.5 py-2.5 shadow-sm">
                  <div>%</div>
                </div>
                <input
                  type="text"
                  value={percentText(voting.categories.opResearch / 30000000)}
                  onChange={e => dispatch({
                    type: 'categoryChange',
                    key: 'opResearch',
                    allocation: (parseFloat(e.target.value) * 300000) || 0,
                  })}
                  className="w-full rounded-md rounded-l-none border border-[#D0D5DD] py-2.5 pl-3.5 shadow-sm"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 rounded-t-2xl border-2 border-[#E44000] px-5 py-3">
              <img src="/icons/stack.svg" alt="" />
              <div>OP Stack Tooling</div>
            </div>
            <div className="flex w-full items-center justify-between gap-3 rounded-b-2xl border-2 border-t-0 border-[#E44000] p-5">
              <div className="flex w-3/4">
                <input
                  type="text"
                  value={numText(voting.categories.opTool)}
                  onChange={e => dispatch({
                    type: 'categoryChange',
                    key: 'opTool',
                    allocation: textNum(e.target.value),
                  })}
                  className="w-full rounded-md rounded-r-none border border-[#D0D5DD] py-2.5 pl-3.5 shadow-sm"
                />
                <div className="flex gap-1 rounded-md rounded-l-none border border-l-0 border-[#D0D5DD] px-3.5 py-2.5 shadow-sm">
                  <div>OP</div>
                  <img src="/icons/chevron-down.svg" alt="" />
                </div>
              </div>
              <div className="flex w-1/4">
                <div className="flex gap-1 rounded-md rounded-r-none border border-r-0 border-[#D0D5DD] px-3.5 py-2.5 shadow-sm">
                  <div>%</div>
                </div>
                <input
                  type="text"
                  value={percentText(voting.categories.opTool / 30000000)}
                  onChange={e => dispatch({
                    type: 'categoryChange',
                    key: 'opTool',
                    allocation: (parseFloat(e.target.value) * 300000) || 0,
                  })}
                  className="w-full rounded-md rounded-l-none border border-[#D0D5DD] py-2.5 pl-3.5 shadow-sm"
                />
              </div>
            </div>
          </div>
          <Separator className="h-[1px] w-full bg-[#E4E7EC]" />

          <button className="w-full rounded-full bg-[#E44000] px-4 py-2.5 text-white" onClick={() => submit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
