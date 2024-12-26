const ErrorMessage = ({ message }) => {
    if (!message) return null;
    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-red-500/5 rounded-lg blur-md" />
        <div className="relative p-3 rounded-lg bg-[#0A1128]/30 border border-red-500/30 text-red-400 text-sm backdrop-blur-sm">
          {message}
        </div>
      </div>
    );
  };

  export default ErrorMessage