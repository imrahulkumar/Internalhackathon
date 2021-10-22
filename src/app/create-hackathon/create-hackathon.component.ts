import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-create-hackathon',
  templateUrl: './create-hackathon.component.html',
  styleUrls: ['./create-hackathon.component.css']
})
export class CreateHackathonComponent implements OnInit {

  constructor(private readonly api: ApiService, 
    private readonly router: Router,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService) { }

  hackIdeaFormGroup: FormGroup;

  ngOnInit(): void {
    
    this.hackIdeaFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      tech: new FormControl('', Validators.required),
    })

  }

  formSubmit(): void {
    this.ngxService.start();
    this.api.createNewIdea(this.hackIdeaFormGroup.value).subscribe(response => {
      this.ngxService.stop();
      this.toastr.success(response.message, 'Success');
        this.router.navigate(['/hackathon-dashboard'])
    }, err => {
      this.ngxService.stop();
      this.toastr.error('Something Went Wrong', 'Error');
    })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
