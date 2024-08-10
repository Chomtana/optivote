interface TextHeaderProps {
  title: string;
  description: string;
}

export const TextHeader = ({ title, description }: TextHeaderProps) => {
  return (
    <div>
      <div className="text-display-sm font-semibold text-primary-dark">
        {title}
      </div>
      <div className="mt-1 text-md text-tertiary-dark">{description}</div>
    </div>
  );
};
