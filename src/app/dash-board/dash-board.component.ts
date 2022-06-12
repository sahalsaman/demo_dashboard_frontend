import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  addJob = this.fb.group({
    jobId: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    jobName: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    date: ["", [Validators.required]],
    budget: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    required: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    hired: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    applicants: ["", [Validators.required, Validators.pattern('[0-9]*')]]
  })

  hiringForm = this.fb.group({
    ujobId: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    urequired: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    uhired: ["", [Validators.required, Validators.pattern('[0-9]*')]],
    uapplicants: ["", [Validators.required, Validators.pattern('[0-9]*')]]
  })


  constructor(private fb: FormBuilder, private ds: DataService) { }

  ngOnInit(): void {
  }

  addjob() {
    let JobId = this.addJob.value.jobId
    let jobName = this.addJob.value.jobName
    let budjet = this.addJob.value.budget
    let date = this.addJob.value.date
    let required = this.addJob.value.required
    let hired = this.addJob.value.hired
    let applicants = this.addJob.value.applicants
    if (this.addJob.valid) {
      this.ds.addJob(JobId, jobName, date, budjet, required, hired, applicants).subscribe((result: any) => {
        if (result) {
          alert(result.messege)
        }
      }, result => {
        alert(result.error.messege)
      })
      // alert("hi"+jobName+budget+date+vaccancy)

    } else {
      alert("invalid form")
    }
  }


  updateHiring() {
    let required = this.hiringForm.value.urequired
    let hired = this.hiringForm.value.uhired
    let applicants = this.hiringForm.value.uapplicants
    let jobid = this.hiringForm.value.ujobId

    if (this.hiringForm.valid) {
      this.ds.updateHiring(jobid, required, hired, applicants).subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      }, result => {
        alert(result.error.message)
      })
    } else {
      alert("invalid form")
    }
  }


}
