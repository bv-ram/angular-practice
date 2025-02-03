import { Injectable } from '@angular/core';
import { environment } from './environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  register(body:any){
    let url = environment.url + environment.auth.register
    return this.http.post(url,body)
  }
  login(body:any){
    interface LoginResponse{
      data:{
        token:string
      }
    }
    let url = environment.url + environment.auth.login
    return this.http.post<LoginResponse>(url, body).pipe((res)=> res)
  }
  userCreate(body:any){
    interface userData{
      data:{
        userId:any
      }
    }
    let token = environment.token
    let url = environment.url+environment.auth.userCreate
    return this.http.post<userData>(url,body,{headers:{'Authorization': `Bearer ${token}`}})
  }

  getUserById(id:any){
    interface singleUserData{
      data:any
    }
    let token = environment.token
    let url = environment.url+environment.auth.getUserById + `/${id}`
    return this.http.get(url,{headers:{"Authorization":`Bearer ${token}`}}).pipe((res)=>res)
  }

  getAllUsesr(page:number,limit:number){
    interface users{
      data:{
        users:any,
        pages:any,
        total:any
      }
    }
    let token = environment.token
    let url = environment.url + environment.auth.getAllUsers+ `?page=${page}&limit=${limit}`
    return this.http.get<users>(url,{headers:{"Authorization":`Beares ${token}`}}).pipe((res)=>res)
  }
}
