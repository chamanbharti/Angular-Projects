import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!:Food;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private foodService:FoodService,
    private cartService:CartService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      // if(params.id)
    this.food = this.foodService.getFoodById(params['id'])
    });
    console.log('this.food:'+JSON.stringify(this.food))

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('cart-page');
  }

}
