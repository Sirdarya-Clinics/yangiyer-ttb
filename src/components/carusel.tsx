"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//@ts-ignore
import { Carousel } from "react-responsive-carousel";
import Y1 from "../../public/bg1.jpg";
import Y2 from "../../public/bg2.jpg";
import Y3 from "../../public/bg3.jpg";
import Y4 from "../../public/bg4.jpg";
import Y5 from "../../public/bg5.jpg";
import Y6 from "../../public/bg6.jpg";
import { Component } from "react";
import Image from "next/image";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className=" max-w-7xl">
        <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}>
          {/* <div>
            <Image src={Y6} alt="image2" />
          </div> */}
          {/* <div>
            <Image src={Y1} alt="image2" />
          </div> */}
          <div>
            <Image src={Y2} alt="image3" />
          </div>
          <div>
            <Image src={Y3} alt="image3" />
          </div>
          <div>
            <Image src={Y4} alt="image3" />
          </div>

          <div>
            <Image src={Y5} alt="image3" />
          </div>
          {/* <div>
            <Image src={Y6} alt="image2" />
          </div> */}
          <div>
            <Image src={Y2} alt="image3" />
          </div>
          <div>
            <Image src={Y3} alt="image3" />
          </div>
          <div>
            <Image src={Y4} alt="image3" />
          </div>
          <div>
            <Image src={Y5} alt="image3" />
          </div>
        </Carousel>
      </div>
    );
  }
}
