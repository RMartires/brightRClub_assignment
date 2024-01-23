"use client";
import { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Flex, FloatButton } from "antd";
import HighlightedCard, { HighlightedCardData } from "./highlightedCard";
import { HIGHLIGHTED_CARD_DATA } from "../dummyData";

export default function HighlightedCardList() {
  const [highlightedCards, setHighlightedCards] = useState(
    HIGHLIGHTED_CARD_DATA
  );

  return (
    <Flex
      vertical={false}
      justify="space-around"
      style={{
        width: "100%",
        height: "25%",
        overflow: "hidden",
      }}
      gap={50}
      className="highlighted-card-list"
    >
      <FloatButton
        style={{
          position: "absolute",
          top: "200px",
          left: "20px",
          width: "60px",
          height: "60px",
        }}
        icon={
          <LeftOutlined
            style={{
              color: "#5862ff",
            }}
          />
        }
        onClick={() => {
          const firstElem = highlightedCards.shift() as HighlightedCardData;
          const newList = [...highlightedCards, firstElem];
          setHighlightedCards(newList);
        }}
      />
      {highlightedCards.map((hc) => {
        return <HighlightedCard data={hc} />;
      })}
      <FloatButton
        style={{
          position: "absolute",
          top: "200px",
          width: "60px",
          height: "60px",
        }}
        icon={
          <RightOutlined
            style={{
              color: "#5862ff",
            }}
          />
        }
        onClick={() => {
          const lastElem = highlightedCards.pop() as HighlightedCardData;
          const newList = [lastElem, ...highlightedCards];
          setHighlightedCards(newList);
        }}
      />
    </Flex>
  );
}
