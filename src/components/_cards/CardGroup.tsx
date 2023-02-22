import { returnAllNFTs } from "../../functions/fetchNFTs";
import { useState, useEffect, useRef } from "react";
import { NFTStructure } from "../../types/NFTObjectType";
import Card from "./Card";
import { Box } from "@mui/system";

export default function CardGroup() {
  // react state to hold incoming NFTs
  const [nfts, setNfts] = useState<NFTStructure[]>([]);

  const fetchCompleted = useRef(false);
  useEffect(() => {
    if (fetchCompleted.current) return;
    fetchCompleted.current = true;
    fetchNFTs();

    // create internal async function to await server response
    async function fetchNFTs() {
      const allNFTs = await returnAllNFTs();
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
