const RAND_MAX = 2 ** 32;

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)".split("");
const KEY_LENGTH = 50;

export function generateRandomValue(min: number, max: number): number {
  const sampleSize = max - min + 1;
  const upper = RAND_MAX - (RAND_MAX % sampleSize);
  let randomValue: number;
  do {
    randomValue = window.crypto.getRandomValues(new Uint32Array(1))[0];
  } while (randomValue >= upper);
  randomValue %= sampleSize;
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
