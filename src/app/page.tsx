import { Flex, Image } from "antd";
import Header from "./components/header";
import NumberedBookCard from "./components/numberedBookCard";
import CardList from "./components/cardList";
import HighlightedCard from "./components/highlightedCard";
import PopularSeriesSection from "./components/popularSeriesSection";
import { HIGHLIGHTED_CARD_DATA, POPULAR_SERIES_DATA } from "./dummyData";
import age_group_image from "../../public/age_group_image.png";
import BookCard from "./components/bookCard";
import Footer from "./components/footer";

export default function Home() {
  return (
    <Flex gap="middle" wrap="wrap">
      <Header></Header>
      <div style={{ height: "auto", width: "100%" }}>
        <Flex vertical gap={20}>
          <section id="highlighted-card-list">
            <CardList
              components={HIGHLIGHTED_CARD_DATA.map((data, index) => {
                return <HighlightedCard data={data} key={index} />;
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
                return (
                  <NumberedBookCard
                    data={data}
                    id={`${index + 1}`}
                    key={`${index + 1}`}
                  />
                );
              })}
              title="Top 10 Books"
              leftMargin="30px"
            />
          </section>

          <section id="popular-series-list">
            <PopularSeriesSection seriesData={POPULAR_SERIES_DATA} />
          </section>

          <section id="best-sellers">
            <CardList
              components={HIGHLIGHTED_CARD_DATA.map((data, index) => {
                return (
                  <BookCard
                    data={data}
                    id={`${index + 1}`}
                    key={`${index + 1}`}
                  />
                );
              })}
              title="Best Sellers"
              leftMargin="30px"
            />
          </section>

          <section id="new-arrivals">
            <CardList
              components={HIGHLIGHTED_CARD_DATA.map((data, index) => {
                return (
                  <BookCard data={data} id={`${index + 1}`} key={index + 1} />
                );
              })}
              title="New Arrivals"
              leftMargin="30px"
            />
          </section>

          <section id="peppa-pig">
            <CardList
              components={HIGHLIGHTED_CARD_DATA.map((data, index) => {
                return (
                  <BookCard data={data} id={`${index + 1}`} key={index + 1} />
                );
              })}
              title="Peppa Pig"
              leftMargin="30px"
            />
          </section>
        </Flex>
      </div>
      <Footer />
    </Flex>
  );
}
