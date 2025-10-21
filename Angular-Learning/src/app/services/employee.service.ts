import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient ) { }
   url='http://localhost:8020/api/employee'

  getEmployees():Observable<user[]>{
    //const url='https://jsonplaceholder.typicode.com/posts';
    return this.http.get<user[]>(this.url);
  }
  saveUesr(user:user): Observable<string> {
    return this.http.post<string>(this.url, user, { responseType: 'text' as 'json' })
  }

  deleteUser(id?:number):Observable<string>{
    return this.http.delete<string>(`${this.url}/${id}`,{responseType:'text' as 'json'});
    //or
   // return this.http.delete(this.url+"/"+id);
  }
  getUserById(id?:number):Observable<user>{
    return this.http.get<user>(this.url+"/"+id);
}
  updateById(id:number ,user:user):Observable<user>{
    return this.http.put<user>(this.url+"/"+id,user);
  }

}
