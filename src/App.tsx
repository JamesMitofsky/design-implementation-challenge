import NavBar from "./components/NavBar";
import { Container } from "@mui/system";
import PurchasePage from "./pages/PurchasePage";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ flex: 1, backgroundColor: "primary.main" }}>
      <NavBar />
      <Container maxWidth="xl" sx={{ mb: 3 }}>
        <PurchasePage />
      </Container>
    </Box>
  );
}
