import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  addJob(jobId: any, jobName: any, date: any, budjet: any, required: any, hired: any, applicants: any) {
    const data = {
      jobId,
      jobName,
      date,
      budjet,
      required,
      hired,
      applicants
    }
    return this.http.post('http://localhost:3000/addJob', data)
  }


  updateHiring(jobId: any, required: any, hired: any, applicants: any) {
    const data = {
      jobId,
      required,
      hired,
      applicants
    }
    return this.http.post('http://localhost:3000/updateHiring', data)
  }


  viewJobs() {
    const data = {}
    return this.http.post('http://localhost:3000/viewJobs', data)
  }

  deleteJob(jobid:any){
    return this.http.delete("http://localhost:3000/deleteJob/"+jobid)
  }
}
