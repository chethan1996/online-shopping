import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipesStartPageComponent } from './recipes/recipes-start-page/recipes-start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropDownDirective,
    ErrorPageComponent,
    RecipesStartPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
