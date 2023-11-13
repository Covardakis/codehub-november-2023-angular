import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CreateNewFormComponent } from "./components/create-new-form/create-new-form.component";


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        // Lazy loading of component
        path: 'create-new-bug',
        loadComponent: () => import('./components/create-new-form/create-new-form.component').then(c => c.CreateNewFormComponent)
    },

];