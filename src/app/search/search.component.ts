import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[]=[]
  constructor(private dataService:DataService) {

  }
  showResults(searchQuery:string){
    this.dataService.searchGifs(searchQuery).subscribe((response:any)=>{
      console.log(response)
      this.results = response.data;
    })
  }

  ngOnInit(): void {

  }

}
