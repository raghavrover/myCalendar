function Input({ id, label, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}:
      </label>
      <input id={id} className="mt-1 p-2 border rounded-md w-full" {...props} />
    </div>
  );
}

export default Input;
