interface Props {
  text: string;
  className?: string;
}

export function UnderlineText({ text, className }: Props) {
  return (
    <span className="inline-block relative before:block before:absolute before:bottom-[10%] before:inset-x-0 before:h-[20%] before:bg-yellow">
      <span className={`relative ${className}`}>{text}</span>
    </span>
  );
}
