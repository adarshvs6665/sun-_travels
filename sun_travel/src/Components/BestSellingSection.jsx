import React from "react";
import styled from "styled-components";
import image from "./assets/satellite.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import maldives from "./assets/maldives.jpg";
import dubai from "./assets/duabi.jpg";
import thailand from "./assets/Thailand.jpg";
export default function BestSellingSection({bestSellingRef}) {
  const HotSellTourDetails = [
    {
      id: 1,
      image: maldives ,
      place: "Maldives Paradise",
      days: "5 Days",
      price: 80000,
      offerType: "our best seller",
      description: "Relax in the stunning beaches of Maldives for 7 days.",
    },
    {
      id: 2,
      image: thailand,
      place: "Thailand",
      days: "10 Days",
      price: 10000,
      offerType: "20%offer",
      description: "Explore the adventurous side of Thailand for 10 days.",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
      place: "Bali Bliss",
      days: "5 Days",
      price: 1200,
      offerType: "50%offer",
      description: "Experience the blissful beauty of Bali for 5 days.",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300",
      place: "Singapore Cityscape",
      days: "4 Days",
      price: 1500,
      offerType: "combooffer",
      description: "Discover the vibrant cityscape of Singapore for 4 days.",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300",
      place: "Malaysian Marvels",
      days: "8 Days",
      price: 2000,
      offerType: "our best seller",
      description: "Marvel at the wonders of Malaysia for 8 days.",
    },
    {
      id: 6,
      image: "https://picsum.photos/200/300",
      place: "Vietnam Discovery",
      days: " 12 Days",
      price: 2800,
      offerType: "20%offer",
      description: "Embark on a cultural discovery in Vietnam for 12 days.",
    },
    {
      id: 7,
      image: "https://picsum.photos/200/300",
      place: "Cambodian Heritage",
      days: "6 Days",
      price: 1800,
      offerType: "50%offer",
      description: "Explore the rich heritage of Cambodia for 6 days.",
    },
    {
      id: 8,
      image: "https://picsum.photos/200/300",
      place: "Kashmir Valley Retreat",
      days: "7 Days",
      price: 2200,
      offerType: "combooffer",
      description: "Retreat to the scenic beauty of Kashmir for 7 days.",
    },
    {
      id: 9,
      image: "https://picsum.photos/200/300",
      place: "Golden Triangle & Himachal",
      days: "9 Days",
      price: 1900,
      offerType: "our best seller",
      description: "Discover the Golden Triangle and Himachal for 9 days.",
    },
    {
      id: 10,
      image: "https://picsum.photos/200/300",
      place: "Kerala Backwaters",
      days: "6 Days",
      price: 1600,
      offerType: "20% offer",
      description: "Experience the serene backwaters of Kerala for 6 days.",
    },
    {
      id:11,
      image:dubai,
      place:"Dubai Group Tour",
      days:"5 Days",
      price:28000,
      offerType:"Combo offer",
      description:"Experience the serene backwaters of Dubai for 6 days"

    }
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 1599, min: 1025 },
      items: 4,
      paritialVisibilityGutter: 20,
    },
    desktopLarge: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4,
      paritialVisibilityGutter: 20,
    },
    tabletLarge: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      paritialVisibilityGutter: -10,
    },
    tablet: {
      breakpoint: { max: 767, min: 576 },
      items: 4,
      paritialVisibilityGutter: -50,
    },
    tabletSmall: {
      breakpoint: { max: 575, min: 425 },
      items: 3,
      paritialVisibilityGutter: -60,
    },
    mobileLarge: {
      breakpoint: { max: 424, min: 375 },
      items: 2,
      paritialVisibilityGutter: -20,
    },
    mobile: {
      breakpoint: { max: 374, min: 321 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    mobileSmall: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
  };
  return (
    <Wrapper ref={bestSellingRef} >
      <HotSellingSection>
        <div className="headingLabel">
          <span>Hot-Selling </span>Tour Bundles
        </div>
      </HotSellingSection>

      <Carousel
        responsive={responsive}
        arrows={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop"
        sliderClass="carousel-slider"
        dotListClass="custom-dot-list-style"
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        slidesToSlide={1}
        swipeable={true}
        partialVisible={true}
        showDots={false}
        ssr={true}
        draggable={true}
        // beforeChange={handleBeforeChange}
        // afterChange={handleAfterChange}
      >
        {HotSellTourDetails?.map((item, id) => {
          return (
            <>
              <ContentWrapper
                // key={id}
                // onClick={e => handleDetails(e, item?.id, 'Announcement')}
                className="other-ContentWrapper"
              >
                <div className="cardWrapper">
                  <ImgStyle
                    className="image-style"
                    src={item.image}
                    alt={item.image}
                  />
                  <div className="boxShadow"></div>
                </div>
                <TagImage
                  className={
                    item.offerType === "our best seller" ? "greenTag" : "redTag"
                  }
                >
                  {item.offerType}
                </TagImage>
                <TextWrapper className="text-style">
                  <div style={{ textAlign: "left" }}>
                    <AnnouncemnetTitle className="announcemnetTitle">
                      {item.place}
                    </AnnouncemnetTitle>

                    <div className="hidingData">
                      <DateDiv>{item.description}</DateDiv>

                      <DayWrapper className="day">
                        <ion-icon name="today-outline"></ion-icon>
                        <div>{item.days}</div>
                        <MoneyWrapper>
                          <FaIndianRupeeSign style={{ color: "red" }} />
                          <div>{item.price}</div>
                        </MoneyWrapper>
                      </DayWrapper>
                    </div>
                  </div>
                </TextWrapper>
              </ContentWrapper>
            </>
          );
        })}
      </Carousel>

      <CardView className="otherNews-CardView"></CardView>
    </Wrapper>
  );
}
const CardView = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  /* background: ${(p) => p.theme.cardBgTheme}; */
  /* background-color: ${(p) => p.theme.cardBgTheme}; */
  border-radius: 0 0 20px 20px;
  /* padding: 25px; */
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 30px;
`;
const DateDiv = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 3px;
  text-transform: capitalize;
  /* letter-spacing: 1px; */
  padding-left: 10px;
`;
const ContentWrapper = styled.div`
  cursor: pointer;
  &:hover {
    .text-style {
      color: green;
      transform: translateY(-100%);
    }
    .hidingData {
      opacity: 1;
      visibility: visible;
      transition: transform 0.3s ease;
    }
  }
  .hidingData {
    opacity: 0;
    visibility: hidden;
  }
  position: relative;
  .boxShadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 97%) 0,
      rgb(197 191 191 / 9%) 60%,
      rgb(255 253 255 / 0%) 100%
    );
  }
  .cardWrapper {
    max-width: 250px;
    width: 250px;
    /* background: red; */
    height: 300px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 15px;
    position: relative;
    /* cursor: pointer; */
    &:hover .image-style {
      transform: scale(1.1);
    }
  }
  /* background-color: red; */
  /* width: 100%; */
  /* display: flex; */
  /* padding-bottom: 40px; */
  /* align-items: center; */
  position: relative;
  /* &:nth-last-child(1) {
    padding-bottom: 10px;
    b
  }  */
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;

  transition: transform 0.3s ease;
`;
const Wrapper = styled.div`
height: calc(100vh - 100px);
  bottom: 100px;
/* background-color: red; */
  position: relative;
`;
const AnnouncemnetTitle = styled.div`
  text-transform: uppercase;
  font-family: 20px;
  color: #fff;
  font-family: "Lato";
  font-weight: 600;
  word-spacing: 3px;
  /* text-align: left; */
  padding-left: 10px;
`;
const HotSellingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 10px; */
  .headingLabel {
    font-family: "Lato";
    font-size: 40px;
    text-align: left;
    padding: 10vh 90px;
    font-weight: 300;
    span {
      font-weight: 700;
      color: #001499;
    }
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  bottom: -33px;
  transition: transform 0.5s ease;
  /* padding-left: 10px; */
  width: 200px;
`;
const TagImage = styled.div`
  &.greenTag {
    background-color: #1ca749;
  }

  &.redTag {
    background-color: #ff0000;
  }
  text-transform: uppercase;
  border-radius: 3px;
  color: #fff;
  padding: 5px 15px;
  position: absolute;
  top: 20px;
  left: 0px;
  display: inline;
  font-size: 13px;
  font-family: "Lato";
  font-weight: 600;
  margin-left: 5px;
  letter-spacing: 1px;
`;
const CardSectionBesSelling = styled.div`
  /* margin-top: 10px; */

  padding: 0px;

  img {
    min-height: 380px;
    height: 100%;
    /* background-color: red; */
    margin-top: 15px;
    background: #fff;
    box-shadow: #00000063 0px 0px 22px;
    border-radius: 7px;
    /* box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.1); */
    width: 230px;
    overflow: hidden;

    object-fit: cover;
    transition: all.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      + .intro {
        height: 210px;
        background: black;
        bottom: 10px;
        border-radius: 7px;
        /* transform: scale(1.1) rotate(-3deg); */
        p {
          opacity: 1;
          visibility: visible;
          color: #fff;
        }
        .day {
          opacity: 1;
          visibility: visible;
        }
      }
      + .bestSeller {
        transform: scale(1.1);
      }
    }
  }
  .intro {
    height: 70px;
    width: 230px;
    /* padding: 6px; */
    box-sizing: border-box;
    font-size: 12px;
    position: absolute;
    background: rgba(27, 27, 27, 0.5);
    color: #fff;
    bottom: 229px;
    border-radius: 0px 0px 7px 7px;
    transition: 0.5s;
    /* z-index: 1; */
  }
  h1 {
    margin: 10px;
    font-size: 30px;
  }
  p {
    margin: 10px;
    font-size: 20px;
    opacity: 0;
    visibility: "hidden";
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
  .day {
    opacity: 0;
    visibility: "hidden";
  }
`;
const DayWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  margin-left: 10px;
  gap: 4px;
  margin-top: 10px;
`;
const MoneyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  /* gap: 4px; */
`;
