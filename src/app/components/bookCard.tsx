import { Flex, Image } from "antd";
import {
  AddToWishListButton,
  BookStatsBar,
  HighlightedCardData,
} from "./highlightedCard";

export default function BookCard(props: {
  data: Pick<
    HighlightedCardData,
    "imageSrc" | "title" | "rating" | "peopleCount"
  >;
}) {
  const { data } = props;
  return (
    <Flex vertical className="book-card" align="center">
      <Image
        preview={false}
        src={data.imageSrc}
        className="book-card-image"
      ></Image>
      <p
        style={{
          marginTop: "5px",
          fontSize: "medium",
          fontWeight: 600,
        }}
      >
        {data.title}
      </p>
      <BookStatsBar data={data} />
      <AddToWishListButton width="100%" />
    </Flex>
  );
}
