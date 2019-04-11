import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  constructor(private httpService: HttpClient) { }

  getRecipes() {
    return this.httpService.get('../../assets/recipes.json');
  }

}