const RAND_MAX = 2 ** 8;

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)".split("");

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
  const keyLength = generateRandomValue(50, 60);

  const key = [];
  for (let i = 0; i < keyLength; i++) {
    const index = generateRandomValue(0, CHARS.length - 1);
    key.push(CHARS[index]);
  }
  return key.join("");
}
