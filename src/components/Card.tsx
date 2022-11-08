import { NFTStructure } from "../types/NFTObjectType";
import { Card, CardContent } from "@mui/material";

const Cards = ({ name }: NFTStructure) => {
  return (
    <Card>
      <CardContent>{name}</CardContent>
    </Card>
  );
};

export default Cards;
