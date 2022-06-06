import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import {
  StyledBoxWrapper,
  StyledQuestionsView,
  StyledLooksView,
  StyledSectionHeader,
  StyledAiLookGenerator,
  StyledCognitiveView,
  StyledMyStyledTitle,
  StyledMyStyledCaption,
  StyledAiEngineSinalIndication,
  StyledMobileSliderWrapper,
  StyledCloseButton,
} from "./styled";
import { AUTH_STATE } from "../../utils/enums";
import { useSession } from "next-auth/react";
import Image from "next/image";
import _ from "lodash";

// Apollo
import { useGetPersonalizeQuestions } from "../../config/apollo/actions/useGetPersonalizeQuestions";
import { useSavePersonalizeSelections } from "../../config/apollo/actions/useSavePersonalizeSelections";
import { useGetRecommendedLooks } from "../../config/apollo/actions/useGetRecommendedLooks";
import { useRouter } from "next/router";

// Utils
import useElementSize from "../../utils/useElementSize";

// Components
import FormButtonComponent from "../../components/library/Form/FormButton/FormButton";
import SectionHeader from "./SectionHeader";
import AnimatedCircles from "../../components/library/animatedCircles/AnimatedCircles";
import LoadingComponent from "../../components/library/Loading/LoadingIndex";
import MobileQuestionsView from "./MobileQuestionsView";
import QuestionsView from "./QuestionView";
import InfoMessage from "./InfoMessage";
import { route } from "next/dist/server/router";
import { ROUTES } from "../../config/routes/routes";

interface AiFashionProfilerProps {
  onClose: () => void;
}

const AiFashionProfiler: React.FC<AiFashionProfilerProps> = ({ onClose }) => {
  const [qusView, { height: qusViewHeight }] = useElementSize();
  const router = useRouter();
  const { status } = useSession();
  const [selectedIds, setSelectedIds] = useState([]);
  const { getPersonalizeQuestions, GUPQDLoading, questions } =
    useGetPersonalizeQuestions();
  const { saveSelectedQuestions, USUSoading } = useSavePersonalizeSelections();
  const { getRecommendedLooks, looks, GURLLoading } = useGetRecommendedLooks();

  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      getPersonalizeQuestions();
      getRecommendedLooks();
    }
  }, [status]);

  const handleSelectedQuestions = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const handleSubmitQuestions = async () => {
    if (!_.isEmpty(questions?.options)) {
      if (selectedIds.length <= 0) {
        alert("Please select options");
      } else {
        await saveSelectedQuestions(selectedIds, questions._id);
      }
    } else {
      if (!_.isEmpty(looks)) {
        router.push(ROUTES.LOOKS);
      } else {
        await getRecommendedLooks();
      }
    }
  };


  return (
    <StyledBoxWrapper height={qusViewHeight} ref={qusView}>
      <StyledQuestionsView>
        <StyledSectionHeader>
          <SectionHeader
            content="Find your style by choosing your preferences below"
            title="AI Fashion Profiler"
          />
        </StyledSectionHeader>
        <Hidden only={["xs", "sm"]}>
          {GUPQDLoading || GURLLoading ? (
            <>
              <LoadingComponent sx={{ position: "relative" }} />
            </>
          ) : (
            <>
              {questions ? (
                <QuestionsView
                  questions={questions}
                  handleChange={(selectedIds: string[]) => {
                    handleSelectedQuestions(selectedIds);
                  }}
                />
              ) : (
                <InfoMessage
                  iconUrl="/icons/blub.png"
                  iconHeight={50}
                  iconWidth={50}
                  infoMessage="No Questions Found"
                />
              )}
            </>
          )}
        </Hidden>
      </StyledQuestionsView>
      <StyledLooksView>
        <StyledAiLookGenerator>
          <Hidden only={["xs", "sm"]}>
            <Box sx={{ marginBottom: 15 }}>
              <StyledMyStyledTitle variant="subtitle2">
                My style
              </StyledMyStyledTitle>
              <StyledMyStyledCaption variant="caption">
                Choose your preferences to build your look
              </StyledMyStyledCaption>
            </Box>
          </Hidden>

          <StyledCognitiveView>
            {!_.isEmpty(looks) ? (
              <img width="80%" src={looks[0]["image"]} />
            ) : (
              <>
                <AnimatedCircles />
                <StyledAiEngineSinalIndication variant="caption">
                  Our Cognitive Clothing AI Engine is building your style
                  profile
                </StyledAiEngineSinalIndication>
              </>
            )}
          </StyledCognitiveView>
          <Hidden only={["md", "lg", "xl"]}>
            {GUPQDLoading || GURLLoading ? (
              <>
                <StyledMobileSliderWrapper>
                  <LoadingComponent sx={{ position: "relative" }} />
                </StyledMobileSliderWrapper>
              </>
            ) : (
              <>
                {questions ? (
                  <MobileQuestionsView
                    questions={questions}
                    handleChange={(selectedIds: string[]) => {
                      handleSelectedQuestions(selectedIds);
                    }}
                  />
                ) : (
                  <StyledMobileSliderWrapper>
                    <InfoMessage
                      iconUrl="/icons/blub.png"
                      iconHeight={50}
                      iconWidth={50}
                      infoMessage="No Questions Found"
                    />
                  </StyledMobileSliderWrapper>
                )}
              </>
            )}
          </Hidden>
        </StyledAiLookGenerator>
        <Box>
          <FormButtonComponent
            circularProgressProps={{
              size: 16,
              sx: { color: (theme) => theme.palette.common.white },
            }}
            variant="contained"
            id="btn-view-looks"
            fullWidth={true}
            loading={USUSoading || GURLLoading}
            onClick={handleSubmitQuestions}
            label={!_.isEmpty(questions?.options) ? "NEXT" : "VIEW MY LOOKS"}
            sx={{ borderRadius: 0 }}
          />
        </Box>
      </StyledLooksView>
      <StyledCloseButton>
        <IconButton onClick={onClose} id="button-close">
          <Image
            layout="fixed"
            width={20}
            height={20}
            alt="assets-close-icon"
            src="/assets/closeIcon.svg"
          />
        </IconButton>
      </StyledCloseButton>
    </StyledBoxWrapper>
  );
};

export default AiFashionProfiler;
