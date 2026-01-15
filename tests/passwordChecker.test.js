const { isValidPassword } = require("../src/passwordChecker");

test("mot de passe trop court", () => {
  expect(isValidPassword("Ab!2")).toBe(false);
});

test("mot de passe sans caractère spécial", () => {
  expect(isValidPassword("Abcdef12")).toBe(false);
});

test("mot de passe sans chiffre", () => {
  expect(isValidPassword("Abcdef!!")).toBe(false);
});

test("mot de passe contenant 'IPL' (insensible à la casse)", () => {
  expect(isValidPassword("Abc!123ipl")).toBe(false);
  expect(isValidPassword("IPL!1234")).toBe(false);
  expect(isValidPassword("iPl!1234")).toBe(false);
});

test("mot de passe valide", () => {
  expect(isValidPassword("Abc!1234")).toBe(true);
});
