import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipesStartPageComponent } from './recipes-start-page/recipes-start-page.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard';
import { RecipeResolverService } from './recipe-resolver.service';


const routes: Routes = [
    { path:'', component:RecipesComponent , canActivate:[AuthGuard],
     children:[
      { path:'' , component:RecipesStartPageComponent},
      { path:'new' , component: RecipeEditComponent},
      { path:':id' , component:RecipeDetailComponent , resolve:[RecipeResolverService] },
      { path:':id/edit' , component: RecipeEditComponent , resolve:[RecipeResolverService]}

]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RecipesRoutingModule { }