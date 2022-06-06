import { AUTH_STATE } from "./../../../utils/enums";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { GET_PERSONALIZE_QUESTIONS } from "./useGetPersonalizeQuestions";
export interface SavePersonalizeQuestionsPayload {
  _id: string;
}
export interface SavePersonalizeQuestionsParms {
  imageIds: string[];
  questionId: string;
  userId: string;
}

export const SAVE_PERSONALIZED_SELECTIONS = gql`
  mutation userSaveUserSelections($body: UserSelectionInput) {
    saveUserSelections(body: $body) {
      _id
    }
  }
`;

export const useSavePersonalizeSelections = () => {
  const { data: session, status } = useSession();
  const [userSaveUserSelections, { loading: USUSoading }] = useMutation<
    { saveUserSelections: SavePersonalizeQuestionsPayload },
    { body: SavePersonalizeQuestionsParms }
  >(SAVE_PERSONALIZED_SELECTIONS, {
    refetchQueries: [
      {
        query: GET_PERSONALIZE_QUESTIONS,
        variables: {
          userId: session?.user["_id"],
        },
        fetchPolicy: "network-only",
      },
    ],
  });

  const saveSelectedQuestions = async (
    selectedIds: string[],
    qusId: string
  ) => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      await userSaveUserSelections({
        variables: {
          body: {
            userId: session?.user["_id"],
            imageIds: selectedIds,
            questionId: qusId,
          },
        },
      });
    }
  };

  return {
    saveSelectedQuestions,
    USUSoading,
  };
};
