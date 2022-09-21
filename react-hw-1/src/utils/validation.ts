const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;
const latinSymbol = /[A-Za-z]/;
const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;

export const validateRequired = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }
  return "";
};

export const validateEmail = (value: string): any => {
  if (value === "") {
    return "Обязательное поле";
  }
  if (!emailRegExp.test(value)) {
    alert("Неправильный формат email");
  }
  if (!latinSymbol.test(value)) {
    alert("Используйте латинские символы");
  }
};

export const validatePassword = (value: string) => {
  if (!passwordRegExp.test(value)) {
    alert("Пароль должен содержать цифры и буквы в разных регистрах");
  }
  return "";
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): any => {
  if (password !== confirmPassword) {
    return alert("Пароли не совпадают");
  }
  return "";
};
