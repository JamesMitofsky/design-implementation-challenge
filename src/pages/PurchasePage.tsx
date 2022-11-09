import Cards from "../components/Cards";
import Divider from "../components/Divider";
import PageTitle from "../components/PageTitle";

const PurchasePage = () => {
  return (
    <>
      <PageTitle
        title="Explore"
        subtitle="Explore more than 100k of amazing NFT's on the marketplace
and filter them at your convenience."
      />
      <Divider />
      <Cards />
    </>
  );
};
export default PurchasePage;
