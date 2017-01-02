declare var google: any;
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OskyService } from '../osky.service';

@Component({
  selector: 'about',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./About.Component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
public  localState: any;
public  wtemp: any;
public  wTab = [];
public  options: any;
public  overlays: any;
public  image: any ;
public  displayDia: boolean = false;

  constructor(public route: ActivatedRoute, private _osky: OskyService) {

  }

 public ngOnInit() {
    this.newPosition();
    this.options = {
       center: {lat: 47.45, lng: 8.54},
       zoom: 10
    };
  }

//     get data, filtered plane around Zurich
 public newPosition() {
    this._osky.getAll().subscribe((data: any) => {
      this.wtemp = data;
      this.overlays = [];
      for (let i of this.wtemp) {
       this.image = this.dajImg(i[10]);
       this.overlays.push(new google.maps.Marker({
         position: {lat: i[6], lng: i[5]},
         title: i[1],
         icon: this.image
        } ));
      }
    });
  }

//     maka plane image
public  dajImg(l) {
    let j = Math.floor((l + 6) / 12);
    let wImage = {
      url:'https://opensky-network.org/components/com_opensky/css/images/newplanes/planes_large.png',
      size: new google.maps.Size(60, 60),
      origin: new google.maps.Point(j * 60, 180),
      anchor: new google.maps.Point(30, 30)
    };
    return wImage;
  }

public  handleOverlayClick(event) {
     let tit = event.overlay.title;
     let tw = this.wtemp.filter( (n) => n[1] === tit );
     this.wTab = tw[0];
     this.displayDia = true;
  }

//      m/s >> km/h 
 private speedKm() {
    return Math.floor(this.wTab[9] * 3.6 );
  }
//     time stamp >> local time
 private tsDate() {
    let st = new Date( this.wTab[3] * 1000 );
    return st.toLocaleTimeString();
  }
}
