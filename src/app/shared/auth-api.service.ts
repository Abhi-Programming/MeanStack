import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { signUp } from './interfaces/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  
  endpoint: string = environment.frontendUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

   // Add student
   signUp(data: signUp): Observable<any> {
     debugger
    let API_URL = `${this.endpoint}/auth/signup`;
    return this.http.post(API_URL, data)  
      .pipe(
        catchError(this.errorMgmt)
      )
  }


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
