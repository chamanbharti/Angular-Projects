import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  pageTitle = 'Food List';
  constructor(private api:FoodService,
    activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe( (params) =>{
        let searchTerm_ = params['searchTerm'];//params.searchTerm
        if(searchTerm_){
          this.foods = this.api.getAllFoodBySearchTerm(searchTerm_)
        }else{
          this.foods = api.getAll();// get all data return
        }
      });

  }
  ngOnInit(): void {
    console.log('food.stars:'+JSON.stringify(this.foods));
  }
  onRatingClicked(message:string):void{
    this.pageTitle = 'Food List: '+message;
  }
}
