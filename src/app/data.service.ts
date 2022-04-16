import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getTrendingGifs(){
  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=50&rating=g`)
  }
  searchGifs(title:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?${title}&api_key=${environment.apiKey}&limit=50&offset=0&rating=g&`)
  }
}
