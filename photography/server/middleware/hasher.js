import argon2 from "argon2";

export const Hash = async (string) => {
  const hash = await argon2.hash(string);
  return hash;
};

export const VerifyHash = async (string, hash) => {
  const isValid = await argon2.verify(hash, string);
  return isValid;
};
