import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe( param =>{
      let searchTerm_ = param['searchTerm'];
      if(searchTerm_){
        this.searchTerm = searchTerm_;
      }
    });
  }
  ngOnInit(): void {

  }
  search(term:string){
    console.log('Search Component:term:'+term);
    if(term){
      this.router.navigateByUrl('/search/'+term);
    }
  }
}
