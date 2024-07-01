import React, { useRef } from "react";
import "./Categories.css";
import { GrNext, GrPrevious } from "react-icons/gr";

function Categ() {
  const imgsrc = new Array(20).fill(
    "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709186812/Croma%20Assets/Test_Nikhil/Hybrid%20Homepage/catnav/2902/Desktop/Mobiles_ueht5o.png?tr=w-720"
  );
  const catsRef = useRef(null);
  const indexRef = useRef(10); // Initialize the index with 10

  const scrollToImage = (index) => {
    const imgNodes = catsRef.current.querySelectorAll(".ImgWrapper img");
    if (imgNodes[index]) {
      imgNodes[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const frontScroll = () => {
    let newIndex = indexRef.current + 9;
    if (newIndex > 19) newIndex = 19;
    indexRef.current = newIndex;
    scrollToImage(newIndex);
    console.log(newIndex);
  };

  const backScroll = () => {
    let newIndex = indexRef.current - 10;
    if (newIndex < 0) newIndex = 0;
    indexRef.current = newIndex;
    scrollToImage(newIndex);
    console.log(newIndex);
  };

  return (
    <>
      <div className="Cat-Container">
        <button className="btn" onClick={backScroll}>
          <GrPrevious size={30} />
        </button>
        <div className="Cats" ref={catsRef}>
          {imgsrc.map((src, index) => (
            <div key={index} className="ImgWrapper">
              <img className="CatIcon" src={src} alt="Mobiles" />
            </div>
          ))}
        </div>
        <button className="btn" onClick={frontScroll}>
          <GrNext size={30} />
        </button>
      </div>
    </>
  );
}

export default Categ;
