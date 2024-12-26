const CreateFormInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full bg-white rounded-full px-4 py-2.5 text-space-background text-sm border border-gray-200 placeholder:text-gray-400 outline-none ring-0 focus:border-space-primary focus:ring-2  focus:ring-space-primary/20 transition-all duration-200"
      />
    </div>
  );
};

export default CreateFormInput;
