import { NFTStructure } from "../types/NFTObjectType";
import { CardContent, Typography } from "@mui/material";

const CardText = (props: NFTStructure) => {
  console.log(props);
  return (
    <CardContent>
      <Typography variant="h6" component="div">
        {props.name}
      </Typography>
      <Typography component="div">Price</Typography>
      <Typography component="div">
        {props?.sale?.unitary_price_float}
      </Typography>
      <Typography component="div">Best Offer</Typography>
    </CardContent>
  );
};
export default CardText;
