import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
export const StyledInfoContentTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.COLOR_4,
  lineHeight: "44px",
  width: "85%",
}));

export const StyledSpanLabel = styled("span")(({ theme }) => ({
  color: theme.palette.common.black,
}));
