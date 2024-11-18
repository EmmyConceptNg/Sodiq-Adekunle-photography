import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import Text from "./Text";
import { useField } from "formik";
// ... other imports

const SelectField = styled(Select)(({ height, sx }) => ({
  // Styles similar to your InputField, adjusted for Select component
  "& .MuiSelect-select": {
    height: height,
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid gray",
    outline: "none",
    backgroundColor: sx ? sx.bgcolor : "#fff",
    color: "#2DDB81",
    fontSize: "inherit",
    "&::placeholder": {
      color: "gray",
    },
  },
  "&.MuiOutlinedInput-root": {
    padding: "0px !important", // Remove internal padding
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.4375em",
    letterSpacing: "0.00938em",
    color: "rgba(0, 0, 0, 0.87)",
    boxSizing: "border-box",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    outline: "none",
  },
  "& .MuiInputLabel-outlined": {
    transform: "translate(14px, 18px) scale(1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.75)",
  },
  // ... other styles if needed
}));
export default function SelectInput({
  required = true,
  id,
  label,
  name,
  height = "44px",
  width,
  options = [],
  placeholder = "Select an option", // Add a placeholder prop
  sx,
}) {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth sx={{ height, ...sx }} variant="outlined">
      {label && (
        <label id={`${id}-label`} style={{ color : '#fff' }}>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <SelectField
        labelId={`${id}-label`}
        id={id}
        label={label}
        fullWidth
        name={name}
        required={required}
        displayEmpty
        {...field}
        sx={{ width }}
      >
        {/* Placeholder MenuItem */}
        <MenuItem value="" disabled style={{ color: "gray" }}>
          {placeholder}
        </MenuItem>

        {/* Render Options */}
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectField>
      {meta.touched && meta.error ? (
        <Text fw="400" color="red" fs="0.75rem">
          {meta.error}
        </Text>
      ) : null}
    </FormControl>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  sx: PropTypes.object,
};
