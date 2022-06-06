import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";
import Image from "next/image";

// Apollo
import { useUpdateItemQuantity } from "../../apollo/actions/useUpdateItemQuantity";

// Components
import FormSelectComponent from "../../components/library/Form/FormSelect/FormSelect";

interface StyledCardBoxProps {
  divider?: boolean;
}

export type productType = {
  name: string;
  title: string;
  images: string[];
};

const StyledCardBox = styled(Box)<StyledCardBoxProps>(({ theme, divider }) => ({
  display: "flex",
  width: "100%",
  borderBottom: divider ? `1px dotted ${theme.palette.divider}` : "none",
  padding: "20px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: 15,
  },
}));

const StyledItemTileBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
}));

const StyledItemTile = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  textAlign: "left",
}));

const StyledCartItemActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledClosedImage = styled(Image)(({ theme }) => ({
  marginTop: -10,
}));

export type cartItemType = {
  lookName: string;
  price: number;
  quantity: number;
  productId: string;
  product: productType;
};

interface CartItemComponentProps {
  data: cartItemType;
  onDelete: () => void;
  divider?: boolean;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({
  data,
  onDelete,
  divider,
}) => {
  const { gqlUpdateUserCartQuantity, UPQUCLoading } = useUpdateItemQuantity();

  const handleChangeQuantity = (productId: string, quantity: number) => {
    gqlUpdateUserCartQuantity(productId, quantity)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledCardBox divider={divider}>
      <StyledItemTileBox>
        <StyledItemTile variant="h6">{data.product.title}</StyledItemTile>
      </StyledItemTileBox>
      <StyledCartItemActions>
        <Box mt={1} pl={3} pr={3}>
          <StyledItemTile variant="h6">${data.price}</StyledItemTile>
        </Box>
        <FormSelectComponent
          value={data.quantity}
          handleChange={(e) => {
            handleChangeQuantity(data.productId, Number(e.target.value));
          }}
        />
        <Box pl={3}>
          <IconButton onClick={onDelete} sx={{ padding: 0 }}>
            <StyledClosedImage
              width={12}
              layout="fixed"
              height={12}
              alt="cross-icon"
              src="/assets/closeIcon.svg"
            />
          </IconButton>
        </Box>
      </StyledCartItemActions>
    </StyledCardBox>
  );
};

export default CartItemComponent;
