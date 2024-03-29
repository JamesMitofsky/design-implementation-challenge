export interface NFTStructure {
  asset_id: string;
  name: string;
  thumbnail: string;
  rank: number;
  balance: string;
  collection: {
    address: string;
    kind: "erc1155" | "erc721";
    name: string;
    certified: boolean;
    avatar: string;
  };
  offer: {
    offer_id: string;
    kind: string;
    side: unknown;
    unitary_price_float: number;
  };
  sale: {
    sale_id: string;
    seller: string;
    unitary_price_float: number;
  };
}
