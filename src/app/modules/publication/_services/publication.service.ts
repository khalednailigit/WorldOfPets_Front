import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, catchError, finalize } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PublicationService {

	constructor(public http: HttpClient, ) { }
	getAllPublication() {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);

		return this.http.get(environment.API_URL + 'api/ListPublications', { headers: headers })
			.pipe(map(res => {
				return res;
			}));
	}
	today: Date = new Date();

	createPub(Publication): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.post(environment.API_URL + "api/addPublication",
			{
				"titre": "test",
				"Description": Publication,
				"ImagePath": "",
				"DateDePublication": this.today,
				"UpdateDate": this.today,
				"CreateAt": this.today,

			}, { headers: headers }).pipe(map(res => {
				return res;
			}));
	}

	updateCommantaire(id, commantaire): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.put(environment.API_URL + "api/updateCommentaire/" + id,
			{
				"detail": commantaire,
				"updated_at": this.today,

			}, { responseType: 'text', headers: headers }).pipe(map(res => {
				return res;
			}));
	}
	update(publication): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.put(environment.API_URL + "api/updatePublication/" + publication.id,
			publication, { responseType: 'text', headers: headers }).pipe(map(res => {
				return res;
			}));
	}
	getPublicationById(id): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.get(environment.API_URL + 'api/Publication/' + id, { headers: headers })
			.pipe(map(res => {
				return res;
			}));
	}

	createCommantaire(id, commantaire) {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.post(environment.API_URL + "api/addCommentaire/" + id,
			{
				"detail": commantaire,
				"updated_at": this.today,
				"creation_date": this.today

			}, { responseType: 'text',headers: headers });
	}
	deleteCommantaire(id): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.delete(environment.API_URL + "api/deleteCommentaire/" + id, { responseType: 'text',headers: headers }).pipe(
			catchError(err => {
				console.error('DELETE ITEM', id, err);
				return of({});
			}),
			finalize(() => { })
		);
	}
	deletePublication(id): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		headers = headers.append("Authorization", 'Bearer ' + `${localStorage.getItem('token')}`);
		return this.http.delete(environment.API_URL + "api/deletePublication/" + id, { responseType: 'text',headers: headers}).pipe(
			catchError(err => {
				console.error('DELETE ITEM', id, err);
				return of({});
			}),
			finalize(() => { })
		);
	}
}
