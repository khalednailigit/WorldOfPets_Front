import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PublicationService {

	constructor(public http: HttpClient, ) { }
	getAllPublication() {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		return this.http.get(environment.API_URL + 'api/ListPublications', { headers: headers })
			.pipe(map(res => {
				return res;
			}));
	}
	today: Date = new Date();

	createPub(Publication): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");

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
}
