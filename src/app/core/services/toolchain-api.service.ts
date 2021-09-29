import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// eslint-disable-next-line @typescript-eslint/naming-convention
const options = {headers: {'Content-Type': 'application/json'}};
const url = 'http://localhost:5002/api/v1';

@Injectable({
    providedIn: 'root'
})
export class ToolchainApiService {

    constructor(private http: HttpClient) {
    }

    // noinspection JSUnusedGlobalSymbols
    public postToolchain(data: string): Observable<any> {
        return this.http.post<any>(url, data, options);
    }
}
