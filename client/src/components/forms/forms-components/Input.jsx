const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative group mb-4 w-full">
      <div className="relative flex items-center">
        {Icon && (
          <Icon className=" absolute z-50 left-3 text-space-primary-opacity-40 w-5 h-5 group-hover:text-space-primary transition-colors duration-300" />
        )}
        <input
          {...props}
          className="w-full py-3 px-10 rounded-lg bg-space-background/40 border border-space-primary-opacity-20  text-space-primary placeholder-space-primary-opacity-40 outline-none focus:border-space-primary-opacity-50 hover:border-space-primary-opacity-30 transition-all duration-300 backdrop-blur-sm"
        />
      </div>
    </div>
  );
};

export default Input;
