import minten from "../pictures/olskroken-karta.jpg";
import "./pages.css";
export function Minten() {
  return (
    <>
      <div className="backgroundThree">
        <header className="locationName">Olskroken | Thai Nisa</header>
        <div className="container">
          <div className="item">
            <h3 className="contact">Kontakta oss</h3>
            <p className="phone">Telefon: 031-84 26 39</p>

            <p className="adress">Mintensgatan 1</p>

            <p className="adress">416 63 Göteborg</p>
            <p className="adress">Mail: info@thainisa.se</p>
            <br />

            <h3 className="openHours">Öppettider: </h3>
            <p>Alla dagar 11:00 - 22:00</p>
          </div>
          <div className="item">
            <h3>Info</h3>
            <p>
              Under sommaren så har vi gjort en renovering av lokalen, och
              restaurangen har då varit stängd en kortare period i juli. Vi har
              ändrat kökets ventilation samt målat om väggar och tak samt satt
              upp bröstpanel på väggarna. Vi har också kompletterat med nya bord
              och stolar för att matcha uppfräschningen. Vi hoppas att ni ska
              tycka om det.
            </p>
            <img className="mapPicture" src={minten} alt="bild" />
          </div>
        </div>
      </div>
    </>
  );
}
