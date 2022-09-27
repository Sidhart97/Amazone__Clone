import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71oVFU4QsBL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="Skybags Brat 22L Red Polyester Casual backpack"
            price={450}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/71oJhR5IV8L._AC_UL450_SR450,320_.jpg"
            }
            rating={4}
          />
          <Product
            id="4565878"
            title="The lean startup"
            price={1250}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="43534546"
            title="FIFA 23 | Standard Edition | PS4 (PlayStation 4)
            Electronic Arts"
            price={5250}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/81LRpNM98pL._AC_UL450_SR450,320_.jpg"
            }
            rating={4}
          />
          <Product
            id="789875687"
            title="Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={9299}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/81-fFXQdPTL._AC_UL450_SR450,320_.jpg"
            }
            rating={3}
          />
          <Product
            id="42690834"
            title="Dell 24 (60.96 cm) FHD Monitor 1920 x 1080 at 60Hz|IPS Panel|Contrast Ratio 1000:1|Aspect Ratio 16:9|Brightness 250 cd/m²|Response Time 8ms (Normal), 5ms (Fast) (G to G)|E2421HN-Black"
            price={12250}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/61fnaSPYpHL._AC_UL100_SR100,100_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="86765356"
            title="Top Torch® Portable High Pressure Flame Butane liquefied Gas Canister 225g Can Easy to use Perfect Suitable to Refill Flame lighters. Small Stove, Flame Torch, Welding Fuel Gas"
            price={250}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/61aiQ2mTTQL._AC_UL100_SR100,100_.jpgz"
            }
            rating={5}
          />
          <Product
            id="86765356"
            title="Top Torch® Portable High Pressure Flame Butane liquefied Gas Canister 225g Can Easy to use Perfect Suitable to Refill Flame lighters. Small Stove, Flame Torch, Welding Fuel Gas"
            price={250}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/61aiQ2mTTQL._AC_UL100_SR100,100_.jpgz"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
