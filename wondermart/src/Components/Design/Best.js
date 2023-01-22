import React,{useState} from "react";
import "./Best.css";
import MyBestCard from "./MyBestCard.js";
let arr = [
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/10000148_30-fresho-onion.jpg?tr=w-1920,q=80",
    brand: "Fresho",
    detail:
      "Onion most widely cultivated species of the genus Allium.known as a hidden . ",
    cost: "₹31",
    kg:"1 kg"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/10000097_19-fresho-coriander-leaves.jpg?tr=w-1920,q=80",
    brand: "Fresho",
    detail: "Coriander leaves are rich in Vitamin C and Vitamin E and both these nutrients ",
    cost: "₹11.5",
    kg:"100g"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg?tr=w-1920,q=80",
    brand: "BB Royal",
    detail: "Rice/Biyyam - Raw, Sona Masoori, 12-17 Months Old Rice/Biyyam - Raw, Sona.",
    cost: "₹510",
    kg:"10 kg-Bag"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/10000144_13-fresho-ladies-finger.jpg?tr=w-1920,q=80",
    brand: "Fresho ",
    detail:
      " ladies finger, bhindi is a type of green vegetable, long finger like, having a small tip at the .",
    cost: "₹39",
    kg:"500 g"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40102625_2-mamaearth-baby-shampoo-gentle-cleansing-0-5-years.jpg?tr=w-1920,q=80",
    brand: "Mamaearth ",
    detail:
      "Baby Shampoo - Gentle Cleansing, 0-5 years made using safe, pure, gentle, natural,and toxin-free ",
    cost: "₹179",
    kg:"200ml"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40110176_7-himalaya-baby-baby-soap-gentle-4x75-gm.jpg?tr=w-1920,q=80",
    brand: "Himalaya Baby ",
    detail:
      "Baby Soap - Gentle  4X75 Gm The powerful oils of Neem and Turmeric, which are known for their antibacterial",
    cost: "₹154.6",
    kg:"300g-Buy 3 Get 1 Free"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40113202_3-sebamed-baby-cleansing-bar.jpg?tr=w-1920,q=80",
    brand: "Sebamed ",
    detail:
      "Sebamed Baby Cleansing Bar |Ph 5.5 | With Panthenol|No tears & Soap Free bar| For Delicate skin",
    cost: "₹361.5",
    kg:"150g"
  },
  {
    url: "https://www.bigbasket.com/media/uploads/p/m/40129677_9-pampers-diaper-pants-extra-large.jpg?tr=w-1920,q=80",
    brand: "Pampers  ",
    detail:
      "Ceregrow Multigrain Cereal with Milk & Fruits - From 2-5 Years, Rich in Iron, High in Protein Box",
    cost: "₹869",
    kg:"56pcs"
  },
];

const Best = () => {
  let box = document.querySelector(".product-container");
  const [changes,setChanges]=useState(false)

  const btnBestpressprev = () => {
    console.log(box.clientWidth);
    let width = box.clientWidth;
    console.log("width", width);
    box.scrollLeft = box.scrollLeft - box.clientWidth;
  };

  const btnBestpressnext = () => {
    setChanges(true)
    // console.log("kk", box.scrollLeft);
    // box.clientWidth=0
    
    box.scrollLeft = box.scrollLeft + box.clientWidth;
    console.log(box.scrollLeft);
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnBestpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnBestpressnext}>
        <p>&gt;</p>
      </button>

      <div className="best-container">
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
          <MyBestCard cardimg={ele.url} cardbrand={ele.brand} carddetail={ele.detail} cardcost={ele.cost} selectkg={ele.kg} rating={ele.rating} />
        ))}
      </div>
    </div>
  );
};

export default Best;




