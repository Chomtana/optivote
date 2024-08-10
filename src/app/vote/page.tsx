"use client";

import { Progress } from "@/components/ui/progress";
import { ProjectCardItem } from "@/components/ui/project/vote/CardItem";
import { Separator } from "@/components/ui/separator";
import data from "../../../public/projects.json"; // Import the JSON data
export default function Vote() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-8 pb-12 pt-8 text-[#101828]">
        <div className="text-display-sm font-semibold text-[#101828]">Vote</div>
        <p className="text-md text-[#475467]">
          empower developers through community-driven project voting in the
          Ethereum and Optimism ecosystems.
        </p>
        <div className="mt-8">
          <div className="flex gap-6">
            <div className="w-1/3">
              <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#E4E7EC] p-6 shadow-sm">
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src="/image/avatar.png"
                      className="rounded-full"
                      alt=""
                    />
                    <img
                      src="/icons/github.svg"
                      alt=""
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                  <div>
                    <div className="mb-1 text-lg font-semibold">
                      Poonpetch.29
                    </div>
                    <div className="text-[#475467]">
                      I’m Petch nice to meet you all
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="rounded-md border border-[#FDAA8A] bg-[#FFEDE6] px-1.5 py-0.5 text-[#B23200]">
                    OP Stack expert
                  </div>
                </div>
                <Separator className="h-[1px] w-full bg-[#E4E7EC]" />
                <div className="flex gap-2">
                  <div className="text-[#667085]">Username</div>
                  <div className="font-semibold">@poonpetch</div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#667085]">Email</div>
                  <div className="font-semibold">poonpetch2000@gmail.com</div>
                </div>
                <div className="text-[#667085]">Achievement Onchain</div>
                <div className="rounded-2xl bg-[#F2F4F7] p-2">
                  <img src="/image/vote-1.png" className="w-[177px]" alt="" />
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#E4E7EC] p-6 shadow-sm">
                <div className="flex gap-5">
                  <div className="w-1/2 rounded-2xl bg-[#F2F4F7] p-4">
                    <div className="mb-2 text-sm font-medium text-[#475467]">
                      Total OP Allocation
                    </div>
                    <div className="text-display-xs font-semibold text-[#E44000]">
                      15,000,000
                    </div>
                  </div>
                  <div className="w-1/2 rounded-2xl bg-[#F2F4F7] p-4">
                    <div className="mb-2 text-sm font-medium text-[#475467]">
                      Total Available
                    </div>
                    <div className="text-display-xs font-semibold text-[#079455]">
                      5,000,000
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={50} />
                  <div>50%</div>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-5 rounded-3xl border border-[#E4E7EC] p-6 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-3">
                  <img src="/icons/stack.svg" alt="" />
                  <div className="text-md font-semibold">
                    Ethereum Core Contributions
                  </div>
                </div>
                {Array.from(Array(20).keys()).map((index) => {
                  const ele = data[index];
                  return (
                    <ProjectCardItem
                      key={ele.id}
                      name={ele.name}
                      value={60}
                      image={ele.profileImageUrl}
                    />
                  );
                })}
              </div>
              <div className="mt-5 rounded-3xl border border-[#E4E7EC] p-6 text-right shadow-sm">
                <button className="rounded-full bg-[#E44000] px-4 py-2.5 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
