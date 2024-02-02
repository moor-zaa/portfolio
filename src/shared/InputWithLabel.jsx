import PropTypes from "prop-types";

const InputWithLabel = ({
  value,
  name,
  onChange,
  type,
  placeholder,
  label,
  isTextarea = false,
}) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      {isTextarea ? (
        <textarea
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="7"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      )}
    </label>
  );
};

export default InputWithLabel;

InputWithLabel.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isTextarea: PropTypes.bool,
};
