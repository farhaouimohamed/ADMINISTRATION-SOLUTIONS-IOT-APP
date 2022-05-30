import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerClientAccount, WebClientAccount } from 'src/app/_models/UserAccount';
import { AdminService } from 'src/app/_services/admin.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-list-web-accounts',
  templateUrl: './list-web-accounts.component.html',
  styleUrls: ['./list-web-accounts.component.css']
})
export class ListWebAccountsComponent implements OnInit {

  isAddMode: Boolean = true;
  isDetailMode: Boolean = false;

  @ViewChild('model', { static: false}) model: ElementRef;

  webAccountForm: FormGroup;
  webClientAccounts: WebClientAccount [];
  totalElements: number = 0;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router,
    private adminService: AdminService,
    private token: TokenStorageService) { }

  ngOnInit() {
    this.getWebAccounts({page:"0", size:"5"});
    this.initUserForm();
  }
  private getWebAccounts(request){
    this.adminService.getAllWebAccounts(request).subscribe(
      data => {
        this.webClientAccounts = data['content'];
        console.log(this.webClientAccounts);
        this.totalElements = data['totalElements'];
      },
      err => {
        this.webClientAccounts = JSON.parse(err.error).message;
      }
    );
  }
  initUserForm(){
    this.webAccountForm = this.formBuilder.group({
      idCompteClientWeb: [0],
      login: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      dateCreation: [], 
      dateExpiration: [],
      administratorCompte: [this.token.getUser()],
      role: ['ROLE_WEB'], 
      rawPassword: [''],
      code_pays: [''],
      pool: [],
      telephone: [],
      area: [''],
      compteClientServer: [new ServerClientAccount()],
      notificationSubquery: [''],
      mobileNotif: [false],
      deviceFeeByDay: [],
      accountFeeByMonth: [],
      deviceFeePerMonth: [],
      simCardFeePerMonth: [],
      expired: [false],
    }, {
      //validator: MustMatch('password', 'confirmPassword')
    });
  }
  detailsWebClientAccount(id: number){

  }
  updateWebAccountForm(id: number){

  }
  deleteWebClientAccount(id: number){

  }

  changeisUpdate(){
    this.initUserForm();
    this.isAddMode=true;  
    this.isDetailMode = false;
  }

  @HostListener('document:click',['$event'])
  clickOutsideModelDialog(event){
    if (this.model.nativeElement.contains(event.target)){
      this.isDetailMode = false;
    }
  }

}
