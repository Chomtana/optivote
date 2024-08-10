import { useVoting } from "@/reducer/votingReducer";
import { Progress } from "../../progress";
import { Separator } from "../../separator";
import { numText, textNum } from "@/lib/utils";

interface ProjectCardItemProps {
  name: string;
  projectId: string;
  image: string;
  maxOP: number;
}
export const ProjectCardItem = ({
  name,
  projectId,
  image,
  maxOP,
}: ProjectCardItemProps) => {
  const [ voting, dispatch ] = useVoting()

  const project = voting.projects.find(x => x.projectId == projectId) || {
    projectId,
    allocation: 0,
  }

  const percent = maxOP ? project.allocation / maxOP * 100 : 0

  return (
    <div>
      <div className="flex items-center">
        <div className="flex w-48 items-center gap-3 px-6 py-4">
          <img src={image} className="h-10 w-10 rounded-full" alt="" />
          <div className="text-sm font-medium">{name}</div>
        </div>
        <div className="px-6 py-4">
          <Progress
            value={percent}
            className="w-[110px]"
            progressColor="#079455"
          />
          <div className="mt-2 text-right text-[#344054]">{percent.toFixed(2)}%</div>
        </div>
        <div className="flex-1 px-6 py-4">
          <div className="relative flex">
            <input
              type="text"
              value={numText(project.allocation)}
              onChange={e => dispatch({
                type: 'projectChange',
                projectId,
                allocation: textNum(e.target.value),
              })}
              className="w-full rounded-md border border-[#D0D5DD] py-2.5 pl-3.5 pr-8 shadow-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-md text-[#344054]">
              OP
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <img src="/icons/chevron-down.svg" className="-rotate-90" />
        </div>
      </div>
      <Separator className="h-[1px] w-full bg-[#E4E7EC]" />
    </div>
  );
};
