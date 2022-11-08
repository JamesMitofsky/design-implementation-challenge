import NavBar from "./components/NavBar";
import { Container } from "@mui/system";
import PurchasePage from "./pages/PurchasePage";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <NavBar />
      <Container maxWidth="xl">
        <PurchasePage />
      </Container>
    </Box>
  );
};

export default App;
