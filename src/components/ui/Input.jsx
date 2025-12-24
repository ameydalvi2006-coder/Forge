const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 bg-black border border-purple-500/30 rounded-lg ${className}`}
    />
  );
};

export default Input;
