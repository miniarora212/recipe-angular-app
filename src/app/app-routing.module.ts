import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {
        path: '',					// Welcome To Recipe Page
        component: HomeComponent,
  },
  { 
  		path: 'recipes', 			// Recipes Listing page
  		component: RecipesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
