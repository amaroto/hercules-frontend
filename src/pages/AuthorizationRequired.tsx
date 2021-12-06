import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Box, Button, Container, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function AuthorizationRequired() {
  const { t } = useTranslation(["errors", "common"]);
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Helmet>
        <title>{`Adiona - ${t("error")}: ${t("authorizationRequired")}`}</title>
      </Helmet>
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "background.paper",
          display: "flex",
          minHeight: "100%",
          px: 3,
          py: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            color="textPrimary"
            variant={mobileDevice ? "h4" : "h1"}
          >
            401: {t("authorizationRequired")}
          </Typography>
          <Typography
            align="center"
            color="textSecondary"
            sx={{ mt: 0.5 }}
            variant="subtitle2"
          >
            {t("authorizationRequiredGenericDecription")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Box
              alt="Under development"
              component="img"
              src={`/static/error/error401_${theme.palette.mode}.svg`}
              sx={{
                height: "auto",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Button
              color="primary"
              component={RouterLink}
              to="/"
              variant="outlined"
            >
              {t("common:backHome")}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AuthorizationRequired;
