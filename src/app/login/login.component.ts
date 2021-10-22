import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly api: ApiService, private readonly router: Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      employeeId: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    });

  }

  formSubmit(): void {
  
    this.api.login(this.loginForm.value).subscribe(response => {
      console.log('response', response);
      localStorage.setItem('user', response.user);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/hackathon-dashboard']);
    },error => {
      console.log('error', error);
    })
  }

}
