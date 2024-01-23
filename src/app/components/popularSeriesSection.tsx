"use client";
import { Flex, FloatButton } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import CardList from "./cardList";
import PopularSeriesCard, {
  IPopularSeriesCardProps,
} from "./popularSeriesCard";
import { useEffect, useState } from "react";
import BookCard from "./bookCard";

const POPULAR_SELECTED_CARD_CLASS_NAME = "popular-card-selected";
const POPULAR_SERIES_LIST_CLASS_NAME = "card-list-scrollPopular Series";
const POPULAR_SERIES_LIST_SELECTED_CLASS_NAME = "card-list-scroll-selected";
const POPULAR_SERIES_CARD_DISABLED = "popular-series-card-disabled";
const POPULAR_SERIES_CARD = "popular-series-card";
const POPULAR_SERIES_BTN = "popular-series-btn";
const POPULAR_SERIES_DISABLED_BTN = "popular-series-disabled-btn";

export default function PopularSeriesSection(props: {
  seriesData: IPopularSeriesCardProps[];
}) {
  const { seriesData } = props;
  const [listData, setListData] = useState<
    null | IPopularSeriesCardProps["listData"]
  >(null);

  const onClickHandler = (index: number) => {
    // check close btn
    const closeBtn = document.getElementsByClassName(
      POPULAR_SERIES_DISABLED_BTN
    )[0];

    if (closeBtn == null) {
      return;
    }

    if (closeBtn && !closeBtn.className.includes(POPULAR_SERIES_BTN)) {
      closeBtn.className = closeBtn.className.replaceAll(
        POPULAR_SERIES_DISABLED_BTN,
        POPULAR_SERIES_BTN
      );
    }

    // rm previous selected className
    const selectedElement = document.getElementsByClassName(
      POPULAR_SELECTED_CARD_CLASS_NAME
    )[0];
    if (selectedElement) {
      selectedElement.className = selectedElement.className.replaceAll(
        POPULAR_SELECTED_CARD_CLASS_NAME,
        ""
      );
    }

    // add current selected className
    const id = index + 1;
    const elem = document.getElementById("popular-series-card-" + id);
    if (elem && !elem.className.includes(POPULAR_SELECTED_CARD_CLASS_NAME)) {
      elem.className += " " + POPULAR_SELECTED_CARD_CLASS_NAME;
    }

    // add diabled to other elements and remove from selected
    const allElements = document.getElementsByClassName(POPULAR_SERIES_CARD);
    for (let i = 0; i < allElements.length; i++) {
      if (i == index) {
        allElements[i].className = allElements[i].className.replaceAll(
          POPULAR_SERIES_CARD_DISABLED,
          ""
        );
      } else if (
        allElements[i].className &&
        !allElements[i].className.includes(POPULAR_SERIES_CARD_DISABLED)
      ) {
        allElements[i].className += " " + POPULAR_SERIES_CARD_DISABLED;
      }
    }

    // add overflow to list (container)
    const parentElem = document.getElementsByClassName(
      POPULAR_SERIES_LIST_CLASS_NAME
    )[0];
    if (
      parentElem &&
      !parentElem.className.includes(POPULAR_SERIES_LIST_SELECTED_CLASS_NAME)
    ) {
      parentElem.className += " " + POPULAR_SERIES_LIST_SELECTED_CLASS_NAME;
    }
  };

  const onCloseBtnHandler = () => {
    // check close btn
    const closeBtn = document.getElementsByClassName(POPULAR_SERIES_BTN)[0];
    if (
      closeBtn &&
      !closeBtn.className.includes(POPULAR_SERIES_CARD_DISABLED)
    ) {
      closeBtn.className = closeBtn.className.replaceAll(
        POPULAR_SERIES_BTN,
        POPULAR_SERIES_DISABLED_BTN
      );
    }

    // rm previous selected className
    const selectedElement = document.getElementsByClassName(
      POPULAR_SELECTED_CARD_CLASS_NAME
    )[0];
    if (selectedElement) {
      selectedElement.className = selectedElement.className.replaceAll(
        POPULAR_SELECTED_CARD_CLASS_NAME,
        ""
      );
    }

    // rm disabled and selected
    const allElements = document.getElementsByClassName(POPULAR_SERIES_CARD);
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].className = allElements[i].className.replaceAll(
        POPULAR_SERIES_CARD_DISABLED,
        ""
      );

      allElements[i].className = allElements[i].className.replaceAll(
        POPULAR_SELECTED_CARD_CLASS_NAME,
        ""
      );
    }

    //rm parent element overflow
    const parentElem = document.getElementsByClassName(
      POPULAR_SERIES_LIST_CLASS_NAME
    )[0];
    if (parentElem) {
      parentElem.className = parentElem.className.replaceAll(
        POPULAR_SERIES_LIST_SELECTED_CLASS_NAME,
        ""
      );
    }
  };

  return (
    <Flex vertical>
      <FloatButton
        icon={<CloseOutlined />}
        style={{
          position: "sticky",
          left: "95%",
        }}
        className="popular-series-disabled-btn"
        onClick={() => {
          onCloseBtnHandler();
          setListData(null);
        }}
      />
      <CardList
        components={seriesData.map((data, index) => {
          return (
            <PopularSeriesCard
              id={(index + 1).toString()}
              key={(index + 1).toString()}
              data={data}
              onClick={() => {
                onClickHandler(index);
                setListData(seriesData[index].listData);
              }}
            />
          );
        })}
        title="Popular Series"
        leftFloatButton={true}
        gap={40}
        justify="space-around"
        titleColor="white"
      />
      {listData != null ? (
        <div>
          <div className="popular-series-line"></div>
          <CardList
            components={listData.map((data, index) => {
              return (
                <BookCard
                  data={data}
                  id={"popular-series--" + index.toString()}
                  key={"popular-series--" + index.toString()}
                />
              );
            })}
          />
        </div>
      ) : (
        ""
      )}
    </Flex>
  );
}
