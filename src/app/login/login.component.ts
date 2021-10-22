import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly api: ApiService, 
    private readonly router: Router,
    private readonly toastr: ToastrService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      employeeId: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    });

  }

  formSubmit(): void {
    this.ngxService.start();
    this.api.login(this.loginForm.value).subscribe(response => {
      this.toastr.success(response.message, 'Success');
      this.ngxService.stop();
      localStorage.setItem('user', response.user);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/hackathon-dashboard']);
    },error => {
      this.ngxService.stop();
      this.toastr.error('Something Went Wrong', 'Error');
    })
  }

}
