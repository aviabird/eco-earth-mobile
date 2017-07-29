import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { AuthGuard } from './shared/guards';
import { LoginComponent } from './pages/login/login.component';

export const authProviders = [
  AuthGuard
];

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent, canActivate: [AuthGuard] },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }