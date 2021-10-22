import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hackathons-dashboard',
  templateUrl: './hackathons-dashboard.component.html',
  styleUrls: ['./hackathons-dashboard.component.css']
})
export class HackathonsDashboardComponent implements OnInit {

  constructor(private readonly api: ApiService,
    private readonly toastr: ToastrService,
    private readonly router: Router,
    private ngxService: NgxUiLoaderService) { }
 
  hackathonList: any =[];

  ngOnInit(): void {
    this.getHackIdea();
  }


  getHackIdea(): void {
    this.ngxService.start();
    this.api.gethackIdeaList().subscribe(response => {
      this.ngxService.stop();
      this.toastr.success(response.message, 'Success');
       this.hackathonList = response;
    }, err => {
      this.ngxService.stop();
      this.toastr.error('Something Went Wrong', 'Error');
    })
  }


  upVote(d): void {
    this.ngxService.start();
    this.api.upVote({"hackId": d}).subscribe(response => {
      this.ngxService.stop();
      this.toastr.success(response.message, 'Success');
       this.getHackIdea();
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
