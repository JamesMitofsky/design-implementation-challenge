import NavBar from "./components/NavBar";
import { Container } from "@mui/system";
import PurchasePage from "./pages/PurchasePage";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ flex: 1, backgroundColor: "primary.main" }}>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 2, mb: 3 }}>
        <PurchasePage />
      </Container>
    </Box>
  );
};

export default App;
