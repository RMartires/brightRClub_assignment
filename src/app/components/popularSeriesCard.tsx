import { Flex, Image } from "antd";
import { IHighlightedCardData } from "./highlightedCard";

export interface IPopularSeriesCardProps {
  imageSrc: string;
  title: string;
  numberOfBooks: number;
  listData: IHighlightedCardData[];
}

export default function PopularSeriesCard(props: {
  data: IPopularSeriesCardProps;
  id: string;
  onClick?: () => void;
}) {
  const { data, onClick, id } = props;
  const onClickHandler = onClick ?? undefined;

  return (
    <Flex
      vertical
      align="flex-start"
      className="popular-series-card"
      id={"popular-series-card-" + id}
      onClick={onClickHandler}
    >
      <Image
        src={data.imageSrc}
        preview={false}
        className="popular-series-card-image"
      />
      <h4 style={{ margin: "5px" }}>{data.title}</h4>
      <span>{data.numberOfBooks + " books"}</span>
    </Flex>
  );
}
