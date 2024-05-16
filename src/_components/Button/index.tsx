const Button = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <button
      className={`flex flex-col items-center justify-center text-[7px] ${
        isActive ? 'text-white' : 'text-gray-400'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
