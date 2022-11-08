export interface NFTStructure {
  asset_id: string;
  name: string;
  thumbnail: string;
  rank: number;
  balance: string;
  collection: {
    address: string;
    kind: string;
    name: string;
    certified: boolean;
    avatar: string;
  };
  offer: null;
  sale: {
    sale_id: string;
    seller: string;
    unitary_price_float: number;
  };
}
