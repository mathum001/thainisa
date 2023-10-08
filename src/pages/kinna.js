import kinna from "../pictures/kinna.PNG";
import "./pages.css";
export function Kinna() {
  return (
    <>
      <div className="backgroundTwo">
        <header className="locationName">Kinna | Thai Nisa</header>
        <div className="container">
          <div className="item">
            <h3 className="contact">Kontakta oss</h3>
            <p className="phone">Telefon: 0320-78 52 27</p>

            <p className="adress">Näsgatan 30</p>
            <p className="adress">511 56 Kinna</p>
            <p className="adress">Mail: info@thainisa.se</p>
            <br />

            <h3 className="openHours">Öppettider: </h3>
            <p>Mån-Fre 11:00 - 18:00</p>
            <p>Lördag & Söndag stängt</p>
          </div>{" "}
          <div className="item">
            <h3>Info</h3>
            <p>
              Restaurangen ligger i Näs industriområde, på Näsgatan 30, mittemot
              Granngården.
            </p>
            <img className="mapPicture" src={kinna} alt="bild" />
          </div>
        </div>
      </div>
    </>
  );
}
