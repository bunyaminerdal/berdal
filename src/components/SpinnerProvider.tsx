import { Box, useTheme } from "@mui/material";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { HashLoader } from "react-spinners";

const spinnerContext = createContext<Dispatch<SetStateAction<boolean>> | null>(
  null
);
export const useSpinner = () => useContext(spinnerContext);
export default function SpinnerProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme();
  const [spin, setSpin] = useState(false);

  return (
    <Box style={{ width: "100vw", height: "100dvh", position: "relative" }}>
      {spin && (
        <Box
          style={{
            width: "100vw",
            height: "100dvh",
            position: "fixed",
            backgroundColor: "rgb(100,100,100,0.5)",
            zIndex: 1031,
          }}
        >
          <Box
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HashLoader color={theme.palette.secondary.main} size={150} />
          </Box>
        </Box>
      )}
      <spinnerContext.Provider value={setSpin}>
        {children}
      </spinnerContext.Provider>
    </Box>
  );
}
