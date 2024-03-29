import { Component, OnInit } from "@angular/core";
import template from "./newsfeed.component.html";
import style from "./newsfeed.component.scss";
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: "newsfeed",
  template,
  styles: [ style ]
})
export class NewsfeedComponent implements OnInit {

  data: any[] = [
    {
      id: 0,
      type: 'bug',
      details: 'Corn Weevil spotted 2km away.' 
    },
    {
      id: 1,
      type: 'fungi',
      details: 'Army worm spotted 1.5 km away.' 
    },
    {
      id: 2,
      type: 'weed',
      details: 'Aphid spotten 4 km away.' 
    },
    {
      id: 3,
      type: 'warning',
      details: 'Frost warning for your region' 
    }

  ];

  image: string[] =[
    "images/1.png", "images/2.png", "images/3.png", "images/4.png", 
  ];

  constructor(private _location: Location, public _router: Router) {
  }

  ngOnInit() {
  }

  selected(id){
    this._router.navigateByUrl('pest/' + id);
  }
}
