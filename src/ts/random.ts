const RAND_MAX = 2 ** 8;

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)".split("");
const KEY_LENGTH = 50;

export function generateRandomValue(min: number, max: number): number {
  const generatorMax = max - min;
  if (generatorMax > RAND_MAX) {
    throw "Generating range is too large";
  }

  let randomValue: number;
  do {
    randomValue = window.crypto.getRandomValues(new Uint8Array(1))[0];
  } while (randomValue > generatorMax);

  return min + randomValue;
}

export function getSecretKey() {
  const key = [];
  for (let i = 0; i < KEY_LENGTH; i++) {
    const index = generateRandomValue(0, CHARS.length);
    key.push(CHARS[index]);
  }
  return key.join("");
}
