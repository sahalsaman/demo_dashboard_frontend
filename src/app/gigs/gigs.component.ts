import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent implements OnInit {
  jobs:any

  constructor(private ds:DataService,private router:Router) {
    this.ds.viewJobs().subscribe(
      (result:any)=>{
        this.jobs=result.jobs
      },result=>{
        alert(result.error.messege)
      }
    )
   }

  ngOnInit(): void {
  }
  deleteJob(jobid:any){
    alert("delete the job")
    this.ds.deleteJob(jobid).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("/gigs")
      }
    },result=>{
      alert(result.error.message)
    })
  }
}
