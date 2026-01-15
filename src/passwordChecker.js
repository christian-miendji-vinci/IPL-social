function isValidPassword(password) {
  if (typeof password !== "string") return false;

  // a. Au moins 8 caractères
  if (password.length < 8) return false;

  // b. Au moins un caractère spécial
  const specialCharRegex = /[^A-Za-z0-9]/;
  if (!specialCharRegex.test(password)) return false;

  // c. Au moins un chiffre
  const digitRegex = /[0-9]/;
  if (!digitRegex.test(password)) return false;

  // d. Ne peut pas contenir "IPL" (insensible à la casse)
  if (password.toLowerCase().includes("ipl")) return false;

  return true;
}

module.exports = { isValidPassword };
