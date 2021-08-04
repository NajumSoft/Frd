import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/Models/user-detail';
import { AuthService } from 'src/Shard/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  userData:UserDetail;
  constructor(
    private _auth:AuthService
  ) { }

  ngOnInit(): void {
    this.userData = this._auth.getUserDetail();
  }

}
