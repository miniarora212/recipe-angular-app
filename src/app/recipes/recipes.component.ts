import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

 recipes: any = [];
 commonIngredients: any = [];
 selectedRecipes: any = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }

  selectedRecipe(recipeName){
    return this.selectedRecipes.includes(recipeName);
  }

  selectUnselect(recipe) {
  	if(this.selectedRecipes.includes(recipe)){
  	 	const index = this.selectedRecipes.indexOf(recipe);
  		this.selectedRecipes.splice(index, 1);
  	}else{
  		this.selectedRecipes = [...this.selectedRecipes, ...recipe];
  	}
  	this.updateIngredients();
  }

  updateIngredients(){
    let ingredients = [];
  	this.selectedRecipes.forEach(function(recipe) {
  		ingredients = [...ingredients, ...recipe.ingredients];
  	});
  	ingredients = ingredients.filter((el, i, a) => i === a.indexOf(el));
  	this.commonIngredients = ingredients.sort();
  }
}
