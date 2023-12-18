const Select = ({ label, id, options, onMonthChange, ...props }) => {
  return (
    <div className="flex flex-col items-start">
      {label && (
        <label htmlFor={id} className="text-sm inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <select
        className={"text-black  w-full px-2 py-2 rounded-md"}
        id={id}
        onChange={(e) => onMonthChange(parseInt(e.target.value))}
        {...props}
      >
        {options?.map((element, i) => (
          <option key={element} value={i}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
