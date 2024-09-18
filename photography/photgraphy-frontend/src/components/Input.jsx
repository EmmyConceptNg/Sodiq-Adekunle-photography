import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import Text from "./Text";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useField } from "formik";

const InputField = styled(OutlinedInput)(
  ({ isPin, height, sx, multiline }) => ({
    "& .MuiOutlinedInput-input": {
      // Removed height and unnecessary padding
      padding: multiline ? "10px" : "10px 14px",
      borderRadius: "8px",
      border: "1px solid gray",
      outline: "none",
      backgroundColor: sx ? sx.bgcolor : "#fff",
      color: isPin ? "#2DDB81" : "#2DDB81",
      fontSize: isPin ? "48px" : "inherit",
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
  })
);

export default function Input({
  required = true,
  isPin = false,
  id,
  label,
  placeholder,
  onInput,
  inputProp,
  readOnly = false,
  name,
  height = "auto", // Default to auto for height to accommodate multiline
  width,
  type = "text",
  details,
  sx,
  defaultValue,
  multiline = false,
  rows = 1, // Default rows to 1
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (field) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field],
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [field, meta] = useField(name);
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword[name] ? "text" : type;

  return (
    <FormControl fullWidth sx={{ height: multiline ? "auto" : height }}>
      {label && (
        <label htmlFor={id} style={{ marginBottom: "10px" }}>
          <Text
            fw="500"
            fs="14px"
            ml={5}
            color="#fff"
            sx={{ textAlign: "left" }}
          >
            {label}
          </Text>
        </label>
      )}
      <InputField
        {...field}
        onInput={onInput}
        readOnly={readOnly}
        inputProp={inputProp}
        height={height}
        type={inputType}
        fullWidth
        sx={{ width, ...sx }}
        name={name}
        required={required}
        id={id}
        isPin={isPin}
        defaultValue={defaultValue}
        multiline={multiline}
        rows={rows}
        endAdornment={
          isPasswordField ? (
            <InputAdornment position="end">
              <IconButton
                sx={{ color: "#9AE1BC" }}
                aria-label={`toggle ${name} visibility`}
                onClick={() => handleClickShowPassword(name)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword[name] ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <Text fw="400" color="red" fs="0.75rem">
          {meta.error}
        </Text>
      ) : null}
      {details && (
        <Text fw="400" fs="14px" ml={5} color="#475467" sx={{ mt: 1 }}>
          {details}
        </Text>
      )}
    </FormControl>
  );
}

Input.propTypes = {
  required: PropTypes.bool,
  isPin: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  endAdornment: PropTypes.element,
  details: PropTypes.string,
  sx: PropTypes.object,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
};
