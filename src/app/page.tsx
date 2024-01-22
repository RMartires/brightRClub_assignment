import { Flex } from "antd";
import Header from "./components/header";
import HighlightedCard from "./components/highlightedCard";
import BookCard from "./components/bookCard";

export default function Home() {
  const highlightedCards = [
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/81P9B8sY4AL._AC_UF1000,1000_QL80_.jpg",
      ageRange: "3-6 years",
      tags: ["New Arriaval"],
      title: "How to Catch a Turkey - Adam Wallace",
      rating: 4.3,
      peopleCount: 123,
      description:
        "A New York Times Bestseller! From the bestselling How to Catch series comes a festive turkey tale ",
    },
  ];

  const listOfBooks = [
    {
      imageSrc:
        "https://m.media-amazon.com/images/I/81P9B8sY4AL._AC_UF1000,1000_QL80_.jpg",
      title: "How to Catch a Turkey - Adam Wallace",
      rating: 4.3,
      peopleCount: 123,
    },
  ];

  return (
    <Flex gap="middle" wrap="wrap">
      <Header></Header>
      <div style={{ height: "100vh", width: "100%" }}>
        <Flex
          vertical={false}
          justify="space-around"
          style={{ width: "100%", height: "25%" }}
        >
          {highlightedCards.map((hc) => {
            return <HighlightedCard data={hc} />;
          })}
        </Flex>
        <Flex vertical={false} justify="space-around" style={{ width: "100%" }}>
          {listOfBooks.map((book) => {
            return <BookCard data={book} />;
          })}
        </Flex>
      </div>
    </Flex>
  );
}
