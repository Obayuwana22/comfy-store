const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={` input input-bordered w-full ${size}`}
      />
    </div>
  );
};
export default FormInput;
