import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModalDirective} from "ngx-bootstrap";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,) { }
  public loginPerson
  public flag=1
  public userType
  @ViewChild('loginModal') public loginModal:ModalDirective;
  ngOnInit() {
    let val=localStorage.getItem("flag");
    this.userType=localStorage.getItem("userType");
    console.log(this.userType)
    this.flag=Number(val)
    this.loginPerson=localStorage.getItem("name")
    console.log(this.loginPerson)
  }
  clear()
  {
    localStorage.clear();
    this.router.navigateByUrl('#');
    window.location.reload()
  }
  login()
  {
    this.router.navigateByUrl('/login');
  }
}
