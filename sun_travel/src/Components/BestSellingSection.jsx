import React from "react";
import styled from "styled-components";
import image from "./assets/satellite.jpg";
import { FaIndianRupeeSign } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BestSellingSection() {
  const HotSellTourDetails = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
      place: "Maldives Paradise",
      days: " 7 Days",
      price: 2500,
      offerType: "bestseller",
      description: "Relax in the stunning beaches of Maldives for 7 days.",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300",
      place: "Thai Adventure",
      days: "10 Days",
      price: 1800,
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
      offerType: "bestseller",
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
      offerType: "bestseller",
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
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
  };
  return (
    <Wrapper>
      <HotSellingSection>
        <div className="headingLabel">
          <span>Hot-Selling </span>Tour Bundles
        </div>
        <SplittingDiv>
          <CarouselWrapper>
            <Slider {...settings}>
              {HotSellTourDetails.map((item) => {
                return (
                  <>
                    <CardSectionBesSelling className="card">
                      <img src={item.image} alt="" />

                      <div className="intro">
                        <h1>{item.place}</h1>
                        <p className="para">{item.description}</p>
                        <DayWrapper className="day">
                          <ion-icon name="today-outline"></ion-icon>
                          <div>{item.days}</div>
                          <MoneyWrapper>
                            <FaIndianRupeeSign style={{ color: "red" }} />
                            <div>{item.price}</div>
                          </MoneyWrapper>
                        </DayWrapper>
                      </div>
                    </CardSectionBesSelling>
                  </>
                );
              })}
            </Slider>
          </CarouselWrapper>
        </SplittingDiv>
      </HotSellingSection>
    </Wrapper>
  );
}
const CarouselWrapper = styled.div`
  width: 98%; /* Adjust the width as needed */
  /* margin: auto; */
  /* overflow-y: hidden; */
`;

const MoneyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
`;
const DayWrapper = styled.div`
  padding: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  ion-icon {
    font-size: 15px;
    color: #001499;
  }
`;
const SplittingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;
`;
const Wrapper = styled.div`
  height: 100vh;
  bottom: 200px;

  position: relative;
`;
const HotSellingSection = styled.div`
/* margin: 10px; */
  .headingLabel {
    font-family: "Lato";
    font-size: 40px;
    text-align: left;
    padding: 15px 90px;
    font-weight: 300;
    span {
      font-weight: 700;
      color: #001499;
    }
  }
`;
const CardSectionBesSelling = styled.div`
  /* margin-top: 10px; */

  padding: 0px;

  img {
    min-height: 380px;
    height: 100%;
    background-color: red;
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
const ReadMore = styled.div`
  position: absolute;
  bottom: 350px;
  font-size: 12px;
  background-color: red;
  border-radius: 1px solid blue;
  right: 11px;
  padding: 7px;
  border-radius: 6px;
  color: #fff;
  font-family: "Lato";
`;
const BestSeller = styled.div`
  font-size: 12px;
  font-family: "Lato";
  background-color: #1ca749;
  padding: 5px 26px;
  width: 90px;
  position: absolute;
  top: 26px;
  left: -13px;
  height: 20px;
  z-index: 1000;
  /* position: relative; */
  span {
    display: block;
    background-color: #fec100;
    width: 14px; /* Width of the yellow section */
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-radius: 1px 3px 3px 1px;
  }
`;
