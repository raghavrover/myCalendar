const Select = ({ label, id, options, ...props }) => {
  return (
    <div className="w-full flex flex-col items-start">
      {label && (
        <label htmlFor={id} className="text-sm inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <select
        className={`${className} text-black  w-full px-2 py-2 rounded-md `}
        id={id}
        {...props}
      >
        {options?.map((element) => (
          <option key={element.value} value={element.name}>
            {element.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
