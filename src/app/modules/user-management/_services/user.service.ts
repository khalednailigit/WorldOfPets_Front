import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, catchError, finalize } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(public http: HttpClient, ) { }
	getAll() {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.get(environment.API_URL + 'api/ListUtilisateurs', { headers: headers })
			.pipe(map(res => {
				return res;
			}));
  }
  getItemById(id){
    let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.get(environment.API_URL + 'api/Utilisateur/' + id, { headers: headers })
			.pipe(map(res => {
				return res;
			}));
  }
  update(User): Observable<any> {
	let headers = new HttpHeaders();
	headers = headers.append("Content-Type", "application/json");
	headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
    User.UpdateAt=this.today;
		return this.http.put(environment.API_URL + "api/updateUtilisateur/" + User.id,
		User, { responseType: 'text', headers: headers }).pipe(map(res => {
				return res;
			}));
  }
  delete(id): Observable<any> {
	let headers = new HttpHeaders();
	headers = headers.append("Content-Type", "application/json");
	headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.delete(environment.API_URL + "api/deleteUtilisateur/" + id, { responseType: 'text', headers: headers  }).pipe(
			catchError(err => {
				console.error('DELETE ITEM', id, err);
				return of({});
			}),
			finalize(() => { })
		);
	}
  create(user): Observable<any> {
    user.CreateAt=this.today;
	user.UpdateAt=this.today;
	// user.roles='["ROLE_USER"]';
	user.username='';

		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		return this.http.post(environment.API_URL + "api/addUtilisateur",
			user, { headers: headers }).pipe(map(res => {
				return res;
			}));
	}

	today: Date = new Date();
}
