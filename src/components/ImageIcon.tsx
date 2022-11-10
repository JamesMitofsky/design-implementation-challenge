import { Image } from "mui-image";

const ImageIcon = ({ profileImage }: { profileImage: string }) => {
  return (
    <>
      <Image src={profileImage} alt="profile" width={30} />
    </>
  );
};
export default ImageIcon;
