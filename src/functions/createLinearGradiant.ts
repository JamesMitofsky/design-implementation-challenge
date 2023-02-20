import createHslValue from "./createHslValue";
import createRandomHue from "./createRandomHue";

// format these hues into an array of strings using the HSL color format
// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl_colors
export default function createLinearGradiant(cardTopperColor: number): string {
  // the first hue must be given as a known value because the card may have additional layers
  // stacked behind it (if the collection.kind matches "erc1155")
  const primaryHsl = createHslValue(cardTopperColor);
  const secondaryHsl = createHslValue(createRandomHue());

  const linearGradiant = `linear-gradient(0deg, ${secondaryHsl} 0%, ${primaryHsl} 100%)`;

  return linearGradiant;
}
