const SubmitButton = ({ content }) => {
  return (
    <div className="relative group mt-6">
      <button
        type="submit"
        className="relative w-full py-3 px-6 rounded-full bg-gradient-to-r from-space-primary-opacity-20 to-space-primary-opacity-30 border border-space-primary-opacity-30 text-space-primary font-medium  hover:from-space-primary-opacity-30 hover:to-space-primary-opacity-40 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
      >
        <span className="text-space-primary group-hover:text-space-primary-light transition-colors duration-300">
          {content}
        </span>
      </button>
    </div>
  );
};

export default SubmitButton;
