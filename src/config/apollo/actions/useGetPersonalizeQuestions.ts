import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";

type optionType = {
  image: {
    imageUrl: string;
  };
  imageId: string;
  optionSortOrder: number;
};

export interface GetPersonalizeQuestionsFields {
  _id: string;
  input: string;
  options: optionType[];
}

export const GET_PERSONALIZE_QUESTIONS = gql`
  query getUserPersonalizationQuestions($userId: String) {
    getPersonalizeQuestions(userId: $userId) {
      _id
      input
      options {
        image {
          imageUrl
        }
        imageId
        optionSortOrder
      }
    }
  }
`;

export const useGetPersonalizeQuestions = () => {
  const { data: session } = useSession();

  const [questions, setQuestions] =
    useState<undefined | GetPersonalizeQuestionsFields | null>();
  const [
    getUserPersonalizationQuestions,
    { data: GUPQData, error: GUPQDError, loading: GUPQDLoading },
  ] = useLazyQuery<{ getPersonalizeQuestions: GetPersonalizeQuestionsFields }>(
    GET_PERSONALIZE_QUESTIONS,
    {
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    }
  );
  const getPersonalizeQuestions = async () => {
    await getUserPersonalizationQuestions({
      variables: {
        userId: session.user["_id"],
      },
    });
  };

  useEffect(() => {
    if (GUPQData) {
      const { getPersonalizeQuestions } = GUPQData;
      setQuestions(getPersonalizeQuestions);
    }
  }, [GUPQData]);

  return {
    getPersonalizeQuestions,
    questions,
    GUPQDLoading,
    GUPQDError,
  };
};
