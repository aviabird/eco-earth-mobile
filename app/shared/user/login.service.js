"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var services_1 = require("./../core/services");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(services_1.ConfigService.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    LoginService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(services_1.ConfigService.apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            services_1.ConfigService.token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.logoff = function () {
        services_1.ConfigService.token = "";
    };
    LoginService.prototype.resetPassword = function (email) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(services_1.ConfigService.apiUrl + "Users/resetpassword", JSON.stringify({
            Email: email
        }), { headers: headers }).catch(this.handleErrors);
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhDQUE2QztBQUM3QyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLHFDQUFtQztBQUNuQyxtQ0FBaUM7QUFHakMsK0NBQW1EO0FBR25ELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLCtCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLHdCQUFhLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNkLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLHdCQUFhLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLHdCQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ2pELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSx3QkFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLHdCQUFhLENBQUMsTUFBTSxHQUFHLHFCQUFxQixFQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3JCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQUVlLFdBQUk7R0FEbkIsWUFBWSxDQTREeEI7QUE1RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS9zZXJ2aWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnU2VydmljZS5hcGlVcmwgKyBcIlVzZXJzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICBFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgUGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgICApXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnU2VydmljZS5hcGlVcmwgKyBcIm9hdXRoL3Rva2VuXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgZ3JhbnRfdHlwZTogXCJwYXNzd29yZFwiXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgKVxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5kbyhkYXRhID0+IHtcbiAgICAgIENvbmZpZ1NlcnZpY2UudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgbG9nb2ZmKCkge1xuICAgIENvbmZpZ1NlcnZpY2UudG9rZW4gPSBcIlwiO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBDb25maWdTZXJ2aWNlLmFwaVVybCArIFwiVXNlcnMvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBFbWFpbDogZW1haWxcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn0iXX0=