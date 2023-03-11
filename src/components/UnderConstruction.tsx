import { Box } from "@mui/material";
import Image from "next/image";

const UnderConstruction = () => {
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
      />
    </Box>
  );
};

export default UnderConstruction;
