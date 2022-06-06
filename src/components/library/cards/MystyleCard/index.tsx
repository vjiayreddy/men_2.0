import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Image from "next/image";

type cardType = {
  image: string;
  itemId: string;
  lookId: string;
  lookName: string;
};

interface MyStyledCardComponent {
  data: cardType;
  onClickView: () => void;
  btnName: string;
}

const StyledCardBaseWrapper = styled(Box)(({ theme }) => ({}));
const StyledCardImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "180px",
  position: "relative",
  borderRadius: 35,
  marginBottom: 8,
}));

const StyledCardImage = styled(Image)(({ theme }) => ({
  borderRadius: 35,
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 400,
  lineHeight: "24px",
}));
const StyledCardDate = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.COLOR_16,
}));
const StyledDateBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 8,
}));

const StyledViewButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  textTransform: "none",
  fontFamily: "Poppins",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "24px",
  border: "1px solid #EFEFFF",
  minWidth: 160,
}));

const MyStyledCardComponent: React.FC<MyStyledCardComponent> = ({
  data,
  onClickView,
  btnName,
}) => {
  return (
    <StyledCardBaseWrapper>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledCardImageWrapper>
            <StyledCardImage
              alt={data.lookName}
              src={data.image}
              layout="fill"
              placeholder="blur"
              blurDataURL={data.image}
              quality={100}
              objectFit="cover"
            ></StyledCardImage>
          </StyledCardImageWrapper>
        </Grid>
        <Grid item xs={12}>
          <StyledCardTitle variant="subtitle2">{data.lookName}</StyledCardTitle>
        </Grid>
        <Grid item xs={12}>
          <StyledDateBoxWrapper>
            <Box mt={1} mr={1}>
              <Image
                width={14}
                height={14}
                layout="fixed"
                alt="date-icon"
                src="/assets/dateIcon.svg"
              />
            </Box>
            <Box>
              <StyledCardDate variant="body1">14/03/2022</StyledCardDate>
            </Box>
            <Box></Box>
          </StyledDateBoxWrapper>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", marginTop: 8 }}>
            <StyledViewButton
              onClick={onClickView}
              variant="outlined"
              color="primary"
            >
              {btnName}
            </StyledViewButton>
          </Box>
        </Grid>
      </Grid>
    </StyledCardBaseWrapper>
  );
};

export default MyStyledCardComponent;
