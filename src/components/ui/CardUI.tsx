import { ReactNode } from "react";

interface CardUI {
  children: ReactNode;
}
export const CardUI = ({ children }: CardUI) => {
  return (
    <div className="rounded-xl border border-secondary-dark bg-primary-dark p-6 shadow">
      {children}
    </div>
  );
};
