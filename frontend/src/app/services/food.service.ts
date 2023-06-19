import { Food } from './../shared/models/Food';
import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll()
    .filter(food => food.name.toLowerCase()
    .includes(searchTerm.toLowerCase())
    )
  }
  getFoodById(foodId:string){
    console.log('getFoodById:'+foodId);
    return this.getAll().find(food => food.id == foodId)??new Food();
  }
}
