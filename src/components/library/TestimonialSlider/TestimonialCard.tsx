import React from "react";
import {
  TestimonialCoverImage,
  TestimonialCardBox,
  TestimonialImageOverly,
  TestimonialReviewContent,
  TestimonialAuthor,
  TestimonialCaption,
} from "./styled";

interface TestimonialCardProps {
  cardData: {
    image: string;
    content: string;
    author: string;
    designation: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  cardData,
}) => {
  return (
    <TestimonialCardBox>
      <TestimonialCoverImage
        objectFit="cover"
        layout="fill"
        placeholder="blur"
        quality={100}
        blurDataURL={cardData.image}
        src={cardData.image}
      />
      <TestimonialImageOverly>
        <TestimonialReviewContent variant="body1">
          {cardData.content}
        </TestimonialReviewContent>
        <TestimonialAuthor variant="body1">{cardData.author}</TestimonialAuthor>
        <TestimonialCaption>{cardData.designation}</TestimonialCaption>
      </TestimonialImageOverly>
    </TestimonialCardBox>
  );
};

export default TestimonialCard;
