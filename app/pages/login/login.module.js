"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var login_routing_1 = require("./login.routing");
var login_component_1 = require("./login.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            login_routing_1.loginRouting
        ],
        declarations: [
            login_component_1.LoginComponent
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBMkQ7QUFFM0QsaURBQStDO0FBQy9DLHFEQUFtRDtBQWFuRCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLFdBQVc7SUFYdkIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw0QkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osZ0NBQWM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBsb2dpblJvdXRpbmcgfSBmcm9tIFwiLi9sb2dpbi5yb3V0aW5nXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIGxvZ2luUm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9Il19