import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrlShortnerService {
  [x: string]: any;
  baseURL: string = 'http://localhost:5000/api/shortner/';
  constructor(private http: HttpClient) {}
  //post request
  shortenUrl(link: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post('http://localhost:5000/api/shortner/', { link });
  }
  //get request
  getUrl(shortUrl: any) {
    console.log('shorturl', shortUrl);
    return this.http.get(`http://localhost:5000/api/shortner/${shortUrl}`);
  }
}
