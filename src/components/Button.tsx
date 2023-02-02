interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="self-center lg:self-start uppercase px-12 py-5 bg-purple text-white text-[17px] font-bold rounded-lg hover:bg-purple/80 transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
}
