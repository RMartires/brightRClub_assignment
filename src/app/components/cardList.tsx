"use client";
import { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Flex, FloatButton } from "antd";
import Title from "antd/es/typography/Title";

export default function CardList(props: {
  components: React.ReactNode[];
  title?: string;
  leftFloatButton?: boolean;
  justify?: string;
  gap?: number;
  leftMargin?: string;
  titleColor?: string;
}) {
  const {
    components,
    title,
    leftFloatButton,
    justify,
    gap,
    leftMargin,
    titleColor,
  } = props;
  const showLeftScrollBtn = leftFloatButton ?? false;
  const justifyOption = justify ?? "";
  const gapWidth = gap ?? 10;
  const marginLeft = leftMargin ?? "";
  const _titleColor = titleColor ?? "";

  const [list, setList] = useState(components);
  const [y, setY] = useState(0);

  return (
    <Flex
      vertical
      style={{
        width: "100%",
        marginLeft: marginLeft,
      }}
      className={"card-list" + title}
    >
      <Title
        level={2}
        style={{
          marginLeft: "20px",
          color: _titleColor,
        }}
      >
        {title ?? ""}
      </Title>
      <Flex
        vertical={false}
        justify={justifyOption}
        style={{
          width: "100%",
        }}
        gap={gapWidth}
        className={"card-list-scroll" + title + " card-list"}
      >
        {list.map((component) => {
          return component;
        })}
        {showLeftScrollBtn ? (
          <FloatButton
            style={{
              position: "sticky",
              marginTop: "70px",
              width: "60px",
              height: "60px",
              right: "95%",
            }}
            icon={
              <LeftOutlined
                style={{
                  color: "#5862ff",
                }}
              />
            }
            onClick={() => {
              const listElem = document.getElementsByClassName(
                "card-list-scroll" + title
              )[0];
              if (listElem) {
                listElem.scroll({
                  left: y - 200,
                  behavior: "smooth",
                });
              }
              setY(y - 200);
            }}
          />
        ) : (
          ""
        )}
        <FloatButton
          style={{
            position: "sticky",
            marginTop: "70px",
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
            const listElem = document.getElementsByClassName(
              "card-list-scroll" + title
            )[0];
            if (listElem) {
              listElem.scroll({
                left: y + 200,
                behavior: "smooth",
              });
            }
            setY(y + 200);
          }}
        />
      </Flex>
    </Flex>
  );
}
