import * as Yup from "yup";
import { Zoom, toast } from "react-toastify";
export const newsletterValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const pinValidation = Yup.object({
  pin1: Yup.string().required("Required").length(1, "Invalid"),
  pin2: Yup.string().required("Required").length(1, "Invalid"),
  pin3: Yup.string().required("Required").length(1, "Invalid"),
  pin4: Yup.string().required("Required").length(1, "Invalid"),
});

export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /[a-zA-Z]/,
      "Password must contain both upper and lower case letters."
    )
    .matches(/[0-9]+/, "Password must contain at least one number."),
});
export const passwordEmailValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const userValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /[a-zA-Z]/,
      "Password must contain both upper and lower case letters."
    )
    .matches(/[0-9]+/, "Password must contain at least one number.")
    .matches(
      /[@$!%*?&]+/,
      "Password must contain at least one special character (@, $, !, %, *, ?, &, _, etc.)."
    ),
});
export const userDetailValidation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  linkedIn: Yup.string().url("Invalid URL format"),
  instagram: Yup.string().url("Invalid URL format"),
  facebook: Yup.string().url("Invalid URL format"),
  twitter: Yup.string().url("Invalid URL format"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const notify = (message, type) => {
  const notifyObject = {
    info: () =>
      toast.info(message, {
        position: "top-right",
        autoClose: 2000,
        toastId: "01",
        transition: Zoom,
      }),

    success: () =>
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        toastId: "02",
        transition: Zoom,
      }),

    warn: () =>
      toast.warn(message, {
        position: "top-right",
        autoClose: 2000,
        toastId: "03",
        transition: Zoom,
      }),

    error: () =>
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        toastId: "04",
        transition: Zoom,
      }),
  }[type]();
};

export const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};
