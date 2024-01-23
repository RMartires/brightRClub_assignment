import { Flex, Image } from "antd";
import Header from "./components/header";
import NumberedBookCard from "./components/numberedBookCard";
import CardList from "./components/cardList";
import HighlightedCard from "./components/highlightedCard";
import { HIGHLIGHTED_CARD_DATA } from "./dummyData";
import age_group_image from "../../public/age_group_image.png";

export default function Home() {
  return (
    <Flex gap="middle" wrap="wrap">
      <Header></Header>
      <div style={{ height: "100vh", width: "100%" }}>
        <section id="highlighted-card-list">
          <CardList
            components={HIGHLIGHTED_CARD_DATA.map((data, index) => {
              return <HighlightedCard data={data} />;
            })}
            leftFloatButton={true}
            justify="space-around"
            gap={50}
          />
        </section>

        <section
          id="group-by-age"
          style={{
            marginTop: "20px",
          }}
        >
          <Image src={age_group_image.src} preview={false} width="100%" />
        </section>

        <section id="numbered-card-list" style={{ marginTop: "20px" }}>
          <CardList
            components={HIGHLIGHTED_CARD_DATA.map((data, index) => {
              return <NumberedBookCard data={data} id={`${index + 1}`} />;
            })}
            title="Top 10 Books"
          />
        </section>
      </div>
    </Flex>
  );
}
