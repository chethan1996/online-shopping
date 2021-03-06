import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service'
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription:Subscription;
  loading:boolean = false;

  constructor(private recipiesService: RecipesService , private dataStorageServie:DataStorageService) { }

  // recipe:Recipe[]=[new Recipe('Recipe name','descrption of recipe','https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg'),
  // new Recipe('Recipe name','descrption of recipe 2','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')]
   
  ngOnInit(): void {
    this.loading = true;
    this.recipes = this.recipiesService.getRecipes();
    
    this.subscription = this.recipiesService.recipeChanged.subscribe(
      (recipe:Recipe[]) => {
        this.recipes = recipe;
        this.loading = false;
      }
    )

    this.dataStorageServie.FetchData().subscribe();
  }

  // collectRecipeDetails(details:Recipe){
  //   this.selectedRecipe.emit(details);
  // }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
