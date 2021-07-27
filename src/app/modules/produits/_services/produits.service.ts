import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(public http: HttpClient,) { }
  getAllProduits() {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		return this.http.get(environment.API_URL + 'api/articles', { headers: headers })
			.pipe(map(res => {
				return res;
			}));
	}
	today: Date = new Date();

	createProduits(produits): Observable<any> {
		let headers = new HttpHeaders();
		headers = headers.append("Content-Type", "application/json");
		return this.http.post(environment.API_URL + "api/articles",
			{ headers: headers }).pipe(map(res => {
				return res;
			}));
	}
  deleteProduits(id): Observable<any> {
		return this.http.delete(environment.API_URL + "api/article/{id}" + id, { responseType: 'text' }).pipe(
			catchError(err => {
				console.error('DELETE ITEM', id, err);
				return of({});
			}),
			finalize(() => { })
		);
	}
}
