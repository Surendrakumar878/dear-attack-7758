import React,{useState} from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousal.css";
let arr = [
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/228899_3-amul-spray-infant-milk-foodsubstitute.jpg?tr=w-1920,q=80",
    brand: "Amul",
    detail:
      "Spray Infant Milk Food/Substitute, Made by Spray-Drying Process MilkButterBread  ",
    cost: "₹430",
    kg:"1 kg-Pouch",
    rating:"725 Ratings",
    off:"10% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/20004207_8-johnsons-baby-baby-soap-blossoms.jpg?tr=w-1920,q=80",
    brand: "Johnson's baby",
    detail: "Baby Soap - Blossoms  JOHNSON'S® products are designed for baby's delicate skin ",
    cost: "₹65.96",
    kg:"75g",
    rating:"5 Ratings",
    off:"18% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40020805_4-himalaya-baby-shampoo-gentle-baby.jpg?tr=w-1920,q=80",
    brand: "Himalaya Baby",
    detail: "Shampoo - Gentle Baby Himalaya Anti-Hair Fall Shampoo is enriched with the goodness of Bhringraj",
    cost: "₹240.5",
    kg:"400ml-Bottle",
    rating:"15 Ratings",
    off:"29% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40085808_10-nestle-ceregrow-baby-cereal-multigrain-with-milk-fruits-from-2-5-years-rich-in-iron.jpg?tr=w-1920,q=80",
    brand: "Nestle ",
    detail:
      "Ceregrow Multigrain Cereal with Milk & Fruits - From 2-5 Years, Rich in Iron, High in Protein Box",
    cost: "₹300.5",
    kg:"300g-Box",
    rating:"1488 Ratings",
    off:"16% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40102625_2-mamaearth-baby-shampoo-gentle-cleansing-0-5-years.jpg?tr=w-1920,q=80",
    brand: "Mamaearth ",
    detail:
      "Baby Shampoo - Gentle Cleansing, 0-5 years made using safe, pure, gentle, natural,and toxin-free ",
    cost: "₹179",
    kg:"200ml",
    rating:"251 Ratings",
    off:"10% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40110176_7-himalaya-baby-baby-soap-gentle-4x75-gm.jpg?tr=w-1920,q=80",
    brand: "Himalaya Baby ",
    detail:
      "Baby Soap - Gentle  4X75 Gm The powerful oils of Neem and Turmeric, which are known for their antibacterial",
    cost: "₹154.6",
    kg:"300g-Buy 3 Get 1 Free",
    rating:"1036 Ratings",
    off:"38% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40113202_3-sebamed-baby-cleansing-bar.jpg?tr=w-1920,q=80",
    brand: "Sebamed ",
    detail:
      "Sebamed Baby Cleansing Bar |Ph 5.5 | With Panthenol|No tears & Soap Free bar| For Delicate skin",
    cost: "₹361.5",
    kg:"150g",
    rating:"119 Ratings",
    off:"18% OFF"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40129677_9-pampers-diaper-pants-extra-large.jpg?tr=w-1920,q=80",
    brand: "Pampers  ",
    detail:
      "Ceregrow Multigrain Cereal with Milk & Fruits - From 2-5 Years, Rich in Iron, High in Protein Box",
    cost: "₹869",
    kg:"56pcs",
    rating:"61 Ratings",
    off:"22% OFF"
  },
];

const Imagecarousel = () => {
  let box = document.querySelector(".product-container");
  const [changes,setChanges]=useState(false)

  const btnpressprev = () => {
    console.log(box.clientWidth);
    let width = box.clientWidth;
    console.log("width", width);
    box.scrollLeft = box.scrollLeft - box.clientWidth;
  };

  const btnpressnext = () => {
    setChanges(true)
    // console.log("kk", box.scrollLeft);
    // box.clientWidth=0
    
    box.scrollLeft = box.scrollLeft + box.clientWidth;
    console.log(box.scrollLeft);
  };
  return (
    <div className="product-carousel">
      
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container">
        {/* <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' /> */}
        {arr.map((ele) => (
          <Mycard cardimg={ele.url} cardbrand={ele.brand} carddetail={ele.detail} cardcost={ele.cost} selectkg={ele.kg} rating={ele.rating} offer={ele.off} />
        ))}
      </div>
    </div>
  );
};

export default Imagecarousel;




