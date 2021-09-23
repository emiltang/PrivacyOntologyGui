import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolchainApiService {


  private url = 'http://localhost:5002/api/v1';

  constructor(private http: HttpClient) {
  }

  // noinspection JSUnusedGlobalSymbols
  public postToolchain(data: string): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.post<any>(this.url, data, options);
  }
}
