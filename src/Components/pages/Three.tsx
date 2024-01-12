"use client";
import { ClashGrotesk } from "@/utils/font";
import React from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const Three = () => {
  const swiperConfig: SwiperProps = {
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
      667: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        simulateTouch: false,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 10,
        simulateTouch: false,
      },
    },
  };
  return (
    <main
      className={`${ClashGrotesk.variable} first-section flex h-screen flex-col items-center justify-center gap-16 text-center md:gap-8 `}
    >
      <div className="space-y-7 ">
        <p className="font-clashgrotesk text-3xl ">
          <span className="font-semibold text-base-vilolet">Your minted</span>{" "}
          <span className="font-medium text-white">PAAL Xclusive NFT</span>
        </p>
        <p className="font-clashgrotesk text-xl font-medium text-[#828282]">
          You have got 15 NFTs
        </p>
      </div>

      <Swiper
        breakpoints={swiperConfig.breakpoints}
        modules={[Navigation, Autoplay]}
        autoplay={swiperConfig.breakpoints}
        navigation={true}
      >
        <SwiperSlide>
          <section className="flex h-full flex-col items-center justify-center gap-4">
            <div className=" h-[370px] w-[370px] rounded-xl border-[2px] border-base-violet-light p-4 ">
              <img
                className="h-[336px] w-[336px] rounded-xl"
                src="/image3.png"
                alt=""
              />
            </div>
            <p className=" font-clashgrotesk text-xl font-semibold text-base-vilolet">
              PAAL Xclusive NFT#229
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex h-full flex-col items-center justify-center gap-4">
            <div className=" h-[370px] w-[370px] rounded-xl border-[2px] border-base-violet-light p-4 ">
              <img
                className="h-[336px] w-[336px] rounded-xl"
                src="/image3.png"
                alt=""
              />
            </div>
            <p className=" font-clashgrotesk text-xl font-semibold text-base-vilolet">
              PAAL Xclusive NFT#229
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex h-full flex-col items-center justify-center gap-4">
            <div className=" h-[370px] w-[370px] rounded-xl border-[2px] border-base-violet-light p-4 ">
              <img
                className="h-[336px] w-[336px] rounded-xl"
                src="/image3.png"
                alt=""
              />
            </div>
            <p className=" font-clashgrotesk text-xl font-semibold text-base-vilolet">
              PAAL Xclusive NFT#229
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex h-full flex-col items-center justify-center gap-4">
            <div className=" h-[370px] w-[370px] rounded-xl border-[2px] border-base-violet-light p-4 ">
              <img
                className="h-[336px] w-[336px] rounded-xl"
                src="/image3.png"
                alt=""
              />
            </div>
            <p className=" font-clashgrotesk text-xl font-semibold text-base-vilolet">
              PAAL Xclusive NFT#229
            </p>
          </section>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Three;
