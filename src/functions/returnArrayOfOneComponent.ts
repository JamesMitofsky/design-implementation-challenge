export default function returnArrayOfOneComponent(
  desiredQuantity: number,
  component: JSX.Element
): JSX.Element[] {
  const componentArray = [];

  for (let i = 0; i < desiredQuantity; i++) {
    componentArray.push(component);
  }

  return componentArray;
}
