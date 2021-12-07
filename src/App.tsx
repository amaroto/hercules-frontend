import Typography from "@mui/material/Typography";
import useAuth from "./hooks/useAuth";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Hercules Frontend"} {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  const routing = useRoutes(routes);
  const auth = useAuth();

  return auth.isInitialized ? routing : <></>;
}

export default App;
