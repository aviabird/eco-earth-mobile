"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("../core/services");
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (services_1.ConfigService.isLoggedIn()) {
            console.log('here');
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXNEO0FBQ3RELDZDQUFpRDtBQUdqRCxJQUFhLFNBQVM7SUFDcEIsbUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2QywrQkFBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsd0JBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxTQUFTO0lBRHJCLGlCQUFVLEVBQUU7cUNBRWlCLGVBQU07R0FEdkIsU0FBUyxDQWFyQjtBQWJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBjYW5BY3RpdmF0ZSgpIHtcbiAgICBpZiAoQ29uZmlnU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=