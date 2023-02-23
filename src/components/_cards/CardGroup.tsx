import { returnAllNFTs } from "../../functions/fetchNFTs";
import { useState, useEffect, useRef } from "react";
import { NFTStructure } from "../../types/NFTObjectType";
import Card from "./Card";
import { Box } from "@mui/system";
import CardSkeleton from "./LoadingSkeleton";
import returnArrayOfOneComponent from "../../functions/returnArrayOfOneComponent";

export default function CardGroup() {
  // react state to hold incoming NFTs
  const [nfts, setNfts] = useState<NFTStructure[]>([]);

  const fetchBegun = useRef(false);
  useEffect(() => {
    if (fetchBegun.current) return;
    fetchBegun.current = true;
    fetchNFTs();

    // create internal async function to await server response
    async function fetchNFTs() {
      const allNFTs = await returnAllNFTs();
      setNfts(allNFTs);
    }
  }, []);

  const SkeletonComponents = returnArrayOfOneComponent(10, <CardSkeleton />);

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
      {nfts.length === 0 && SkeletonComponents.map((skeleton) => skeleton)}
      {nfts.map((nft) => {
        return <Card key={nft.asset_id} nftData={nft} />;
      })}
    </Box>
  );
}
