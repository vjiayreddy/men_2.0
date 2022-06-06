import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

interface styledTabProps {
  image: string;
  backgroundSize?: string;
}

export const StyledThubnailMainWrapper = styled(Box)(({ theme }) => ({
  minHeight: 100,
  backgroundColor: theme.palette.COLOR_1,
}));
export const StyledThubnaiLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 20,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    backgroundColor: theme.palette.COLOR_2,
  },
}));

export const StyledTabsContainer = styled(Tabs)(({}) => ({
  width: "100%",
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export const StyledTab = styled(Tab)<styledTabProps>(
  ({ theme, image, backgroundSize }) => ({
    minWidth: 10,
    width: 75,
    height: 80,
    marginLeft: 10,
    borderRadius: 10,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: backgroundSize ? backgroundSize : "cover",
    backgroundImage: `url(${image})`,
    "&.Mui-selected": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  })
);

export const StyledActionsBoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.COLOR_1,
  minHeight: 100,
  minWidth: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: 30,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
}));

export const StyledLabelButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const StyledPriceLabel = styled(Typography)(({ theme }) => ({
  display: "block",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  fontSize: 20,
  fontWeight: 300,
  textAlign: "left",
  minWidth: 85,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: "19px",
    fontWeight: 500,
    color: theme.palette.primary.main,
    paddingBottom: 10,
  },
}));

export const StyledDividerVertical = styled(Box)(({ theme }) => ({
  height: 60,
  width: 1,
  backgroundColor: theme.palette.grey[300],
  marginLeft: 20,
  marginRight: 20,
  [theme.breakpoints.up("sm")]: {
    height: 10,
    backgroundColor: "none",
  },
}));
