import { useState } from "react";
import "./menu.css";

export function Menu() {
  const [selection, setSelection] = useState("all");

  function handleClick(option) {
    setSelection(option);
  }

  return (
    <>
      <div className="btnContainer">
        <button onClick={() => handleClick("all")}>Allt</button>
        <button onClick={() => handleClick("extras")}>Drickor/Tillval</button>
        <button onClick={() => handleClick("special")}>Specialmeny</button>
        <button onClick={() => handleClick("grytor")}>Grytor</button>
        <button onClick={() => handleClick("wokade")}>Wokade</button>
        <button onClick={() => handleClick("fried")}>Friterat</button>
      </div>
      <header>Meny: Thai Nisa</header>
      <h2>Lunchbuffé 110kr - ingår sallad, dricka och kaffe</h2>

      {(selection === "special" || selection === "all") && (
        <>
          <div className="selectionContainer">
            <h2>Special Meny</h2>
            <p>
              Kyckling 125:- Biff 135:- Räkor 140:- Tofu 125:- Fläskkött 135:-
            </p>
            <div className="container">
              <h4 className="title">Special 1</h4>
              <div className="price">100 kr</div>
              <p className="dish">
                Äggnudel-gryta med paneng-curry, kokosmjölk och paprika
              </p>
            </div>
            <div className="container">
              <h4 className="title">Special 2</h4>
              <div className="price">110 kr</div>
              <p>Äggnudel-gryta med grön curry, kokosmjölk och paprika</p>
            </div>
            <div className="container">
              <h4 className="title">Special 3</h4>
              <div className="price">110 kr</div>
              <p className="dish">
                Äggnudel-gryta med massamn-curry, kokosmjölk, paprika och
                grönsaker
              </p>
            </div>
            <div className="container">
              <h4 className="title">Special 4</h4>
              <div className="price">125 kr</div>
              <p className="dish">
                4 st friterade Kyckling med ost och bacon, serverseras med
                sallad och ris
              </p>
            </div>
            <div className="container">
              <h4 className="title">Special 5</h4>
              <div className="price">135 kr</div>
              <p className="dish">
                12st vårrullar fyllda med räkor och ost, serveras med sallad och
                ris
              </p>
            </div>
          </div>
        </>
      )}

      {(selection === "wokade" || selection === "all") && (
        <>
          <div className="selectionContainer">
            <h2>Wokade Rätter</h2>
            <p>
              Kyckling 120:- Biff 125:- Räkor 130:- Tofu 120:- Fläskkött 125:-
            </p>
            <div className="container">
              <h4 className="title">Khao Bai</h4>
              <div className="price">110 kr</div>
              <p className="dish">
                Wokat ris med kyckling, gullök, basilika, chili och vitlök
              </p>
            </div>
            <div className="container">
              <h4 className="title">Khao Pad</h4>
              <div className="price">110 kr</div>
              <p className="dish">
                Wokat ris med biff, ägg, gullök, broccoli, morötter och tomat i
                sojasås
              </p>
            </div>
            <div className="container">
              <h4 className="title">Pad Thai</h4>
              <div className="price">125 kr</div>
              <p className="dish">
                Wokade risnudlar med fläskkött, ägg, purjolök, vitlök, chili och
                jordnötter
              </p>
            </div>
            <div className="container">
              <h4 className="title">Pad Siiw</h4>
              <div className="price">135 kr</div>
              <p className="dish">
                Wokade risnudlar med kyckling, broccoli och morötter i sojasås
              </p>
            </div>
            <div className="container">
              <h4 className="title">Pad Kimao</h4>
              <div className="price">135 kr</div>
              <p className="dish">
                Wokade risnudlar med biff, basilika, chili och vitlök i
                ostronsås
              </p>
            </div>
          </div>
        </>
      )}

      {(selection === "grytor" || selection === "all") && (
        <>
          <div className="selectionContainer">
            <h2>Grytor med ris</h2>
            <p></p>
            <div className="container">
              <h4 className="title">Paneng</h4>
              <div className="price">125 kr</div>
              <p className="dish">
                Biffgryta med paneng curry, bambuskott med kokosmjölk och lime
              </p>
            </div>
            <div className="container">
              <h4 className="title">Khew Wahn</h4>
              <div className="price">120</div>
              <p className="dish">
                Kyckling i gryta med grön-curry, basilika och bambuskott
              </p>
            </div>
            <div className="container">
              <h4 className="title">Kaeng Massaman</h4>
              <div className="price">130 kr</div>
              <p className="dish">
                Kyckling i gryta med massaman-curry, morätter, gullök och
                paprika
              </p>
            </div>
          </div>
        </>
      )}

      {(selection === "fried" || selection === "all") && (
        <>
          <div className="selectionContainer">
            <h2>Friterade rätter med ris</h2>
            <p></p>
            <div className="container">
              <h4 className="title">Satay</h4>
              <div className="price">115 kr</div>
              <p className="dish">4st kycklingspett med jordnötssås</p>
            </div>
            <div className="container">
              <h4 className="title">Veganska vårrullar</h4>
              <div className="price">115 kr</div>
              <p className="dish">10st thailändska vårrullar med grönsaker</p>
            </div>
            <div className="container">
              <h4 className="title">Vårrullar</h4>
              <div className="price">120 kr</div>
              <p className="dish">
                4st stora vårrullar med kyckling och grönsaker
              </p>
            </div>
            <div className="container">
              <h4 className="title">Gung Tad</h4>
              <div className="price">135 kr</div>
              <p className="dish">Friterade tigerräkor med sweet chilisås</p>
            </div>
          </div>
        </>
      )}

      {(selection === "extras" || selection === "all") && (
        <>
          <div className="selectionContainer">
            <h2>Tillval och drickor</h2>
            <p></p>
            <div className="container">
              <h4 className="title">Dryck 33cl</h4>
              <div className="price">25 kr</div>
              <p className="dish"></p>
            </div>
            <div className="container">
              <h4 className="title">Extra ris/nudlar</h4>
              <div className="price">30 kr</div>
              <p className="dish"></p>
            </div>
            <div className="container">
              <h4 className="title">Extra sweet chilisås</h4>
              <div className="price">25 kr</div>
              <p className="dish"></p>
            </div>
            <div className="container">
              <h4 className="title">Extra Vårrullar</h4>
              <div className="price">50 kr</div>
              <p className="dish"></p>
            </div>
          </div>
        </>
      )}

      {(selection === "drinks" || selection === "all") && (
        <>
          <div className="selectionContainer">
            <h2></h2>
            <p></p>
            <div className="container">
              <h4 className="title"></h4>
              <div className="price"></div>
              <p className="dish"></p>
            </div>
            <div className="container">
              <h4 className="title"></h4>
              <div className="price"></div>
              <p className="dish"></p>
            </div>
            <div className="container">
              <h4 className="title"></h4>
              <div className="price"></div>
              <p className="dish"></p>
            </div>
            <div className="container">
              <h4 className="title"></h4>
              <div className="price"></div>
              <p className="dish"></p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
