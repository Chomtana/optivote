import { Copy } from "lucide-react";

interface InputCopyTextProps {
  title: string;
  text: string;
}

export const InputCopyText = ({ text, title }: InputCopyTextProps) => {
  return (
    <div>
      <div className="mb-1.5 text-sm font-medium text-secondary-dark">
        {title}
      </div>
      <div className="flex">
        <div className="flex-grow rounded-lg rounded-r-none border border-r-0 border-primary-dark bg-primary-dark px-3.5 py-2.5 text-primary-dark">
          {text}
        </div>
        <div className="flex items-center gap-1.5 rounded-full rounded-l-none border border-primary-dark bg-primary-dark px-3.5 py-2.5 text-md text-[#CECFD2]">
          <Copy className="h-5 w-5" />
          Copy
        </div>
      </div>
    </div>
  );
};
