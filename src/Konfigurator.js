import './Konfigurator.css';

import brez from './img/brez.png';
import kolesa from './img/kolescki.png';
import noge from './img/nogice.png';
import okrog from './img/okroglo.png';


function Konfigurator() {

  return (
      <div className="app flex-row">
          <div className="app__buttons">

              <div className="podnozje flex-row">
                  <p className="button podnozje__zvezdnato"><a onClick={function(){
                      document.getElementById("image").src=kolesa;
                      document.querySelector(".noge").classList.remove("hide");
                      document.querySelector(".naslonjalo").classList.add("hide");

                      document.querySelector(".podnozje__zvezdnato").classList.add("selected1");
                      document.querySelector(".podnozje__okroglo").classList.remove("selected1");
                      document.querySelector(".noge__kolescki").classList.remove("selected2");
                      document.querySelector(".noge__nogice").classList.remove("selected2");}}>
                      Zvezdnato podnozje</a></p>

                  <p className="button podnozje__okroglo"><a onClick={function(){
                      document.getElementById("image").src=okrog;
                      document.querySelector(".noge").classList.add("hide");
                      document.querySelector(".naslonjalo").classList.remove("hide");

                      document.querySelector(".podnozje__okroglo").classList.add("selected1");
                      document.querySelector(".podnozje__zvezdnato").classList.remove("selected1");
                      document.querySelector(".naslonjalo__z").classList.remove("selected2");
                      document.querySelector(".naslonjalo__brez").classList.remove("selected2");}}>
                      Okroglo podnozje</a></p>
              </div>

              <div className="noge hide">
                  <p className="button noge__kolescki"><a data-imgsrc={kolesa} onClick={function(){
                      document.getElementById("image").src=kolesa;
                      //document.getElementById("image").src=document.querySelector(".noge__kolescki").getAttribute('data-imgsrc');
                      document.querySelector(".noge__nogice").classList.remove("selected2");
                      document.querySelector(".noge__kolescki").classList.add("selected2");}}>
                      Kolescki</a></p>

                  <p className="button noge__nogice"><a data-imgsrc={noge} onClick={function(){
                      document.getElementById("image").src=noge;
                      //document.getElementById("image").src=document.querySelector(".noge__nogice").getAttribute('data-imgsrc');
                      document.querySelector(".noge__nogice").classList.add("selected2");
                      document.querySelector(".noge__kolescki").classList.remove("selected2");}}>
                      Gumijaste nogice</a></p>
              </div>

              <div className="naslonjalo hide">
                  <p className="button naslonjalo__z"><a data-imgsrc={brez} onClick={function(){
                      document.getElementById("image").src=brez;
                      //document.getElementById("image").src=document.querySelector(".naslonjalo__z").getAttribute('data-imgsrc');
                      document.querySelector(".naslonjalo__z").classList.add("selected2");
                      document.querySelector(".naslonjalo__brez").classList.remove("selected2");}}>
                      Z naslonjalom</a></p>
                  <p className="button naslonjalo__brez"><a data-imgsrc={okrog} onClick={function(){
                      document.getElementById("image").src=okrog;
                      //document.getElementById("image").src=document.querySelector(".naslonjalo__brez").getAttribute('data-imgsrc');
                      document.querySelector(".naslonjalo__z").classList.remove("selected2");
                      document.querySelector(".naslonjalo__brez").classList.add("selected2");}}>
                      Brez naslonjala</a></p>
              </div>
          </div>

          <div className="app__view">
              <div id="image-wrap">
                  <img id="image" src=""/>
              </div>
          </div>

      </div>
  );
}
export default Konfigurator;
