import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private readonly api: ApiService,
     private readonly router: Router,
     private readonly toastr: ToastrService,
     private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      employeeId: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    });

  }

  formSubmit(): void {
    this.ngxService.start();
    this.api.signup(this.signupForm.value).subscribe(response => {
      this.ngxService.stop();
      this.toastr.success(response.message, 'Success');
      localStorage.setItem('user', response.user);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/login']);
    },error => {
      this.ngxService.stop();
      this.toastr.error('Something Went Wrong', 'Error');
    })
  }

}
