interface SubHeaderProps {
  title: string;
}
export const SubHeader = ({ title }: SubHeaderProps) => {
  return <div className="mb-3 font-medium text-quaternary-dark">{title}</div>;
};
