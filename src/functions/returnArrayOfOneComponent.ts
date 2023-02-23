import { cloneElement } from "react";
import uuid4 from "uuid4";

export default function returnArrayOfOneComponent(
  desiredQuantity: number,
  component: JSX.Element
): JSX.Element[] {
  const componentArray = [];

  for (let i = 0; i < desiredQuantity; i++) {
    const componentWithKey = cloneElement(component, { key: uuid4() });

    componentArray.push(componentWithKey);
  }

  return componentArray;
}
