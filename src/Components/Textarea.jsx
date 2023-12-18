function Textarea({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}:
      </label>
      <textarea
        rows={3}
        id={id}
        className="mt-1 p-2 border rounded-md w-full"
        {...props}
      />
    </div>
  );
}
export default Textarea;
