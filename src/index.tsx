import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsUtils from "@date-io/date-fns";
import createI18next from "./i18next";

const i18next = createI18next();

ReactDOM.render(
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <CssBaseline />
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <AuthProvider>
              <App />
            </AuthProvider>
          </BrowserRouter>
        </I18nextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </HelmetProvider>,
  document.querySelector("#root")
);
