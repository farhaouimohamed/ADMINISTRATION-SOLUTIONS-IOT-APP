import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User [];
  passedParameters: any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.users = JSON.parse(err.error).message;
      }
    );
  }

  deleteUser(id:number){
    this.adminService.deleteUser(id).subscribe(
      data => {
        this.adminService.getAllUsers().subscribe(data=>{
          this.users = data;
      })
      },
      err => {
        this.users = JSON.parse(err.error).message;
      }
    );
  }

  updateUser(id:number){
    this.adminService.getUser(id).subscribe(
      data => {
        this.passedParameters = {
          selectedUser : data,
          isAddMode :  false
        };
      },
      error => console.log(error)
    );
  }

}
