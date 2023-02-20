import { returnAllNFTs } from "../../functions/fetchNFTs";
import { useState, useEffect } from "react";
import { NFTStructure } from "../../types/NFTObjectType";
import Card from "./Card";
import { Box } from "@mui/system";

export default function CardGroup() {
  // react state to hold incoming NFTs
  const [nfts, setNfts] = useState<NFTStructure[]>([]);

  useEffect(() => {
    // inspired by this: https://stackoverflow.com/a/66071205/5395435
    let active = true;
    fetchNFTs();
    return () => {
      active = false;
    };

    // create internal async function to await server response
    async function fetchNFTs() {
      if (!active) return;

      const allNFTs = await returnAllNFTs();
      // assign response to react state
      setNfts(allNFTs);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1.7,
        mt: 4,
      }}
    >
      {nfts.map((nft) => {
        if (!nft) return null;
        return <Card key={nft.asset_id} {...nft} />;
      })}
    </Box>
  );
}
