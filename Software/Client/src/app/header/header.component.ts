import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public flag=1
  constructor(private router: Router) {

  }

  ngOnInit() {
    let val=localStorage.getItem("flag");
    this.flag=Number(val)

  }
  clear()
  {

    localStorage.clear();
    this.router.navigateByUrl('#');
    window.location.reload()
  }


}
