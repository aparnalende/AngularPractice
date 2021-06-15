import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-userapicomp',
  templateUrl: './userapicomp.component.html',
  styleUrls: ['./userapicomp.component.css']
})
export class UserapicompComponent implements OnInit {

  users:User[];
  constructor(private userService:UserservService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data=>{
      this.users=data;
    })
  }

  doDelete(id:any) {
    console.log("i am in delete")
   this.userService.deleteUser(id).subscribe(res=>console.log(res));
  }
}
