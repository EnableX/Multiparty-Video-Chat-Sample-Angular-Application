import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_API_URL = environment.baseApiURL;
  private username: string = 'demo';
  private password: string = 'enablex';
  
  constructor(private httpClient: HttpClient) {}

  public createRoom() {
    return this.httpClient.post(
      this.BASE_API_URL + 'api/room/multi/',
      {},
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
        })
      }
    );
  }

  public joinRoom(roomId){

    return this.httpClient.get(this.BASE_API_URL + `api/get-room/${roomId}`, {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
      })
    });

  }

  public createToken(details){

    return this.httpClient.post(
      this.BASE_API_URL + 'api/create-token/',
      details,
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
        })
      }
    );
  }
}
