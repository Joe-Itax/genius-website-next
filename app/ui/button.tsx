export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`leading-[27px] border text-lg font-medium cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] px-[1.2rem] py-[0.7rem] rounded-lg border-solid border-transparent bg-red ${className}`}
    >
      {children}
    </button>
  );
}
