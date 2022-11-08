import { returnAllNFTs } from "../functions/fetchNFTs";
import { useState, useEffect } from "react";
import { NFTStructure } from "../types/NFTObjectType";
import Card from "./Card";
import { Box } from "@mui/system";

const Cards = () => {
  // react state to hold incoming NFTs
  const [nfts, setNfts] = useState<NFTStructure[]>([]);

  // use effect to avoid infinitely calling server
  useEffect(() => {
    // create internal async function to await server response
    const fetchNFTs = async () => {
      const allNFTs = await returnAllNFTs();
      // assign response to react state
      setNfts(allNFTs);
    };
    fetchNFTs();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1.7,
      }}
    >
      {nfts.map((nft) => {
        if (!nft) return null;
        return <Card key={nft.asset_id} {...nft} />;
      })}
    </Box>
  );
};

export default Cards;
