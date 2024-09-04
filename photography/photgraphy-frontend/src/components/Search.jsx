import { FormControl, InputAdornment, OutlinedInput, styled } from "@mui/material";
import PropTypes from "prop-types";
import { SearchIcon } from "../../public/svgs/SearchIcon";



// const InputField = styled(OutlinedInput)(() => ({
//   "& .MuiOutlinedInput-input": {
//     height: "50px",
//     padding: "0 16px",
//     borderRadius: "8px",
//     backgroundColor: "transparent",
    
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     top: 0,
//   },
//   "& .MuiInputLabel-outlined": {
//     transform: "translate(14px, 18px) scale(1)",
//   },
//   "& .MuiInputLabel-shrink": {
//     transform: "translate(14px, -6px) scale(0.75)",
//   },
// }));


const InputField = styled(OutlinedInput)(({ sx }) => ({
  "& .MuiOutlinedInput-input": {
    height: "44px",
    padding: "0 16px",
    borderRadius: "8px",

    outline: "none",
    backgroundColor: sx ? sx.bgcolor : "transparent",
    color: "#9AE1BC",
    "&::placeholder": {
      color: "#9AE1BC",
    },
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
}));



export default function SearchInput({
  required = true,
  id,
  value,
  placeholder,
  onChange,
  name,
  width = "100%",
  type = "text",
  height = "44px",
  sx,
  rounded = false,
  bgcolor,
  border,
}) {
  return (
    <FormControl sx={{ width: width, height }}>
      <InputField
        type={type}
        fullWidth
        sx={{
          ...sx,
          borderRadius: rounded ? "40px" : "10px",
          bgcolor: bgcolor ?? "transparent",
          border: border ?? "1px solid #10281B",
        }}
        name={name}
        onChange={onChange}
        required={required}
        id={id}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        value={value}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

SearchInput.propTypes = {
  required: PropTypes.bool,

  id: PropTypes.string,

  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  startAdornment: PropTypes.element,
  details: PropTypes.string,
  border: PropTypes.string,
  onChange: PropTypes.func,
  sx: PropTypes.object,
  rounded: PropTypes.bool,
};
