interface Props {
  marginRequiredOn: "left" | "right";
  bestOffer?: boolean;
}

export default function PriceIcon({ marginRequiredOn, bestOffer }: Props) {
  return (
    <svg
      strokeMiterlimit={10}
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        height: 10,
        marginRight: marginRequiredOn === "right" ? 5 : 0,
        marginLeft: marginRequiredOn === "left" ? 5 : 0,
      }}
      viewBox="0 0 42.467 42.961"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.234.668C9.74.668.42 9.987.42 21.481c0 11.493 9.319 20.812 20.813 20.812 11.493 0 20.812-9.319 20.812-20.812C42.046 9.987 32.727.668 21.234.668Zm-.188 8 4.406 7.375-7.468 13.532-8.97.062L21.047 8.668Zm6.969 12.5 4.75 7.469-9.125.344 4.375-7.813Z"
        fill={bestOffer ? "#00d6c0" : "#fff"}
      />
    </svg>
  );
}
