import { dataCy } from "Support/utils/common";

export const loginSelectors = {
  emailTextField: dataCy("login-email-text-field"),
  passwordTextField: dataCy("login-password-text-field"),
  submitButton: dataCy("login-submit-button"),
  signUpLink: dataCy("sign-up-link"),
  forgotPasswordLink: dataCy("forgot-password-link"),
  inputErrorMessage: ".nui-input__error",
};
