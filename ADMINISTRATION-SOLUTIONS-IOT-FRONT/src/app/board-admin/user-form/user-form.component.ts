import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  roles = new Array<string>()


  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private adminService: AdminService) { 
        this.user = new User();
      }

  ngOnInit() {
    this.roles = ["ROLE_ADMIN","ROLE_USER","ROLE_SERVER"];
  }

  onSubmit() {
    this.adminService.saveUser(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/all']);
  }

}
