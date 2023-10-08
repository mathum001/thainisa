import React from "react";
import backa from "../pictures/backa-karta.jpg";
import "./menu.css";

export function Backa() {
  return (
    <>
      <div className="background">
        <header className="locationName">Backa | Thai Nisa</header>
        <div className="container">
          <div className="item">
            <h3 className="contact">Kontakta oss</h3>
            <p className="phone">Telefon: 031 - 52 32 10</p>

            <p className="adress">Backa Bergågatan 2A</p>
            <p className="adress">422 46 Hisings Backa</p>
            <p className="adress">Mail: info@thainisa.se</p>
            <br />

            <h3 className="openHours">Öppettider: </h3>
            <p>Mån-Fre 11:00 - 20:00</p>
            <p>Lördag & Söndag 12:00 - 20:00</p>
          </div>
          <div className="item">
            <h3>Info</h3>
            <p>
              Restaurangen ligger i Näs industriområde, på Näsgatan 30, mittemot
              Granngården.
            </p>
            <img className="mapPicture" src={backa} alt="bild" />
          </div>
        </div>
      </div>
    </>
  );
}
