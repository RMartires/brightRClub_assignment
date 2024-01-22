import { Comic_Neue } from "next/font/google";
import { Flex } from "antd";
import BookCard, { BookCardProps } from "./bookCard";

const comicNeue = Comic_Neue({
  weight: "700",
  subsets: ["latin"],
});

export default function NumberedBookCard(props: { data: BookCardProps }) {
  const { data } = props;

  const className = "numbered-book-card " + comicNeue.className;

  return (
    <Flex className={className}>
      <BookCard data={data} />
    </Flex>
  );
}
