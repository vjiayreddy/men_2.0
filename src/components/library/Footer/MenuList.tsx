import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";

interface MenuListComponentProps {
  id: string;
  listTitle: string;
  links: any[];
}

const StyledList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginBottom: 35,
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginBottom: 5,
  cursor:"pointer",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 5,
  },
}));
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...theme.footerLink,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));
const StyledListSubHeader = styled(Typography)(({ theme }) => ({
  ...theme.footerLinkListHeader,
}));

const MenuListComponent: React.FC<MenuListComponentProps> = ({
  id,
  links,
  listTitle,
}) => {
  const router = useRouter();
  return (
    <StyledList id={id}>
      <StyledListSubHeader variant="body1">{listTitle}</StyledListSubHeader>
      {links.map((link, index) => (
        <StyledListItem
          onClick={() => {
            router.push(link.url);
          }}
          key={index}
          disablePadding
        >
          <StyledListItemText>{link.label}</StyledListItemText>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default MenuListComponent;
