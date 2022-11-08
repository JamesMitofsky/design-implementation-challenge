import axios from "axios";
import { NFTStructure } from "../types/NFTObjectType";

const returnAllNFTs = async (): Promise<NFTStructure[]> => {
  const { data } = await axios.get("https://test-api.dev.kalao.io/search");

  // extract array from object property
  return data.nfts;
};

const setServerNFTsToLocalState = async (setNFTs: any) => {
  const allNFTs = await returnAllNFTs();
  setNFTs(allNFTs);
};

export { setServerNFTsToLocalState, returnAllNFTs };
