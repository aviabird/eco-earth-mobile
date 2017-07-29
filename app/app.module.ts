import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule, authProviders } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { LoginService } from './shared/user';
import { ConfigService } from './shared/core/services';
import { LoginModule } from "./pages/login/login.module";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    AppRoutingModule,
    LoginModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  providers: [
    ItemService,
    LoginService,
    ConfigService,
    authProviders
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
