import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../model/post';
import {Responce} from '../model/responce'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://dev.groupado.tn/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Responce> {
    return this.httpClient.get<Responce>(this.apiURL + '/exp/rest/api/v1/activity?extendedLevel=1&extendableLevel=2&distinct=true&includeInactive=false&activityStatus=all&locationTypeId=2&currencyId=840&tags=[]&page=1&perPage=30')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(post): Observable<Responce> {
    return this.httpClient.get<Responce>(this.apiURL + '/exp/rest/api/v1/activity?extendedLevel=1&extendableLevel=2&distinct=true&includeInactive=false&activityStatus=all&locationTypeId=2&currencyId=840&tags=[]&page=1&perPage=30')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id : number): Observable<Responce> {
    return this.httpClient.get<Responce>(this.apiURL + 'exp/rest/api/v1/activity?page=1&perPage=1&experienceId='+ id+ '&currencyId=978&distinct=true&includeInactive=true' , this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, post): Observable<Responce> {
    return this.httpClient.get<Responce>(this.apiURL + 'exp/rest/api/v1/activity?page=1&perPage=1&experienceId='+ id+ '&currencyId=978&distinct=true&includeInactive=true' , this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.get<Responce>(this.apiURL + 'exp/rest/api/v1/activity?page=1&perPage=1&experienceId='+ id+ '&currencyId=978&distinct=true&includeInactive=true' , this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
