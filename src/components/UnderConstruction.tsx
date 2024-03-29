import { Box } from "@mui/material";
import Image from "next/image";

const UnderConstruction = () => {
  //deneme
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        alt="coming soon"
        src="/images/underconstruction.png"
        width="300"
        height="300"
        placeholder="empty"
      />
    </Box>
  );
};

export default UnderConstruction;
