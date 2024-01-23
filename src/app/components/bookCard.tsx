import { Flex, Image } from "antd";
import {
  AddToWishListButton,
  BookStatsBar,
  IHighlightedCardData,
} from "./highlightedCard";

export type BookCardProps = Pick<
  IHighlightedCardData,
  "imageSrc" | "title" | "rating" | "peopleCount"
>;

export default function BookCard(props: { data: BookCardProps; id: string }) {
  const { data, id } = props;
  return (
    <Flex vertical className="book-card" align="center" key={"book-card-" + id}>
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
      <div className="book-card-div"></div>
      <AddToWishListButton width="100%" />
    </Flex>
  );
}
