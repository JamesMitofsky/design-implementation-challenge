export default function createRandomHue(): number {
  const randomHue = Math.floor(Math.random() * 999) + 1;

  return randomHue;
}
