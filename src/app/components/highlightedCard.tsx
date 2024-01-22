import { Flex, Image, Badge, Avatar, Button } from "antd";
import { StarOutlined, LineOutlined, HeartOutlined } from "@ant-design/icons";
import { AMAZON_LOGO_URL, PEOPLE_LOGO_URL } from "../constants";
import Paragraph from "antd/es/typography/Paragraph";

export interface HighlightedCardData {
  imageSrc: string;
  ageRange: string;
  tags: string[];
  title: string;
  rating: number;
  peopleCount: number;
  description: string;
}

export function BookStatsBar(props: {
  data: Pick<HighlightedCardData, "rating" | "peopleCount">;
}) {
  const { data } = props;
  return (
    <Flex gap="small" align="center" style={{ paddingBottom: "10px" }}>
      <Avatar size={"small"} src={AMAZON_LOGO_URL}></Avatar>
      <Flex justify="center" align="center">
        <StarOutlined
          style={{
            padding: "5px",
            color: "#ef9f37",
          }}
        />
        {data.rating}
      </Flex>
      <LineOutlined rotate={90} />
      <Flex>
        <Avatar
          size={"small"}
          src={PEOPLE_LOGO_URL}
          style={{
            marginRight: "5px",
          }}
        ></Avatar>
        {data.peopleCount}
      </Flex>
    </Flex>
  );
}

export function AddToWishListButton(props: { width?: string }) {
  const _width = props.width ?? "80%";

  return (
    <Button
      icon={<HeartOutlined />}
      type="primary"
      ghost
      style={{
        width: _width,
        alignSelf: "flex-start",
      }}
      className="highlighted-card-add-to-wishlist-btn"
    >
      Add to Wishlist
    </Button>
  );
}

function RightTextBox(props: {
  data: Pick<
    HighlightedCardData,
    "ageRange" | "description" | "peopleCount" | "rating" | "tags" | "title"
  >;
}) {
  const data = props.data;

  return (
    <Flex
      vertical
      style={{
        width: "60%",
        padding: "10px",
      }}
    >
      <Flex gap="small">
        {data.tags.map((tag) => {
          return <Badge className="badge-highlighted">{tag}</Badge>;
        })}
        <Badge className="badge-normal">{data.ageRange}</Badge>
      </Flex>
      <h2
        style={{
          marginTop: "5px",
        }}
      >
        {data.title}
      </h2>
      <BookStatsBar data={data} />
      <Paragraph
        ellipsis={{
          rows: 2,
          expandable: true,
        }}
      >
        {data.description}
      </Paragraph>
      <AddToWishListButton />
    </Flex>
  );
}

function ImageBox(props: { imageSrc: string }) {
  return (
    <Image
      preview={false}
      height="100%"
      width="60%"
      src={props.imageSrc}
      style={{
        borderRadius: "40px",
        padding: "10px",
      }}
      className="highlighted-card-image"
    ></Image>
  );
}

export default function HighlightedCard(props: { data: HighlightedCardData }) {
  const highlightedData = props.data;

  return (
    <Flex justify="flex-start" align="center" className="highlighted-card-box">
      <ImageBox imageSrc={highlightedData.imageSrc}></ImageBox>
      <RightTextBox data={highlightedData} />
    </Flex>
  );
}
