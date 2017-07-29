"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var color_1 = require("color");
var connectivity_1 = require("connectivity");
var animation_1 = require("ui/animation");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Groceries requires an internet connection to log in.");
            return;
        }
        this.userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this.router.navigate(["/"]);
        }, function (error) {
            alert("Unfortunately we could not find your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            alert("Groceries requires an internet connection to register.");
            return;
        }
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        }, function (message) {
            // TODO: Verify this works
            if (message.match(/same user/)) {
                alert("This email address is already in use.");
            }
            else {
                alert("Unfortunately we were unable to create your account.");
            }
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.userService.resetPassword(data.text.trim())
                    .subscribe(function () {
                    alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }, function () {
                    alert("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var mainContainer = this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    LoginComponent.prototype.showMainContent = function () {
        var initialContainer = this.initialContainer.nativeElement;
        var mainContainer = this.mainContainer.nativeElement;
        var logoContainer = this.logoContainer.nativeElement;
        var formControls = this.formControls.nativeElement;
        var signUpStack = this.signUpStack.nativeElement;
        var animations = [];
        // Fade out the initial content over one half second
        initialContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            initialContainer.style.visibility = "collapse";
            mainContainer.style.visibility = "visible";
            logoContainer.style.visibility = "visible";
            // Fade in the main container and logo over one half second.
            animations.push({ target: mainContainer, opacity: 1, duration: 500 });
            animations.push({ target: logoContainer, opacity: 1, duration: 500 });
            // Slide up the form controls and sign up container.
            animations.push({ target: signUpStack, translate: { x: 0, y: 0 }, opacity: 1, delay: 500, duration: 150 });
            animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
            // Kick off the animation queue
            new animation_1.Animation(animations, false).play();
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("initialContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "initialContainer", void 0);
__decorate([
    core_1.ViewChild("mainContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "mainContainer", void 0);
__decorate([
    core_1.ViewChild("logoContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "logoContainer", void 0);
__decorate([
    core_1.ViewChild("formControls"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "formControls", void 0);
__decorate([
    core_1.ViewChild("signUpStack"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "signUpStack", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "gr-login",
        moduleId: module.id,
        templateUrl: "./login.component.html",
        styleUrls: ["./login-common.css", "./login.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_1.LoginService,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQkFBOEI7QUFDOUIsNkNBQWlFO0FBQ2pFLDBDQUF5QztBQUV6QyxzQ0FBb0M7QUFDcEMsZ0NBQStCO0FBRS9CLDBDQUF1RDtBQVF2RCxJQUFhLGNBQWM7SUFhekIsd0JBQW9CLE1BQWMsRUFDeEIsV0FBeUIsRUFDekIsSUFBVTtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWJwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFhdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFpQkM7UUFoQkMsRUFBRSxDQUFDLENBQUMsZ0NBQWlCLEVBQUUsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEQsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNSO1lBQ0UsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNKLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQXVCQztRQXRCQyxFQUFFLENBQUMsQ0FBQyxnQ0FBaUIsRUFBRSxLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsVUFBQyxPQUFPO1lBQ04sMEJBQTBCO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUNELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUFBLGlCQWlCQztRQWhCQyxnQkFBTSxDQUFDO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsb0ZBQW9GO1lBQzdGLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUM3QyxTQUFTLENBQUM7b0JBQ1QsS0FBSyxDQUFDLDRHQUE0RyxDQUFDLENBQUM7Z0JBQ3RILENBQUMsRUFBRTtvQkFDRCxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztnQkFDckUsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksYUFBYSxHQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzNELGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDcEIsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQzdFLFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUF3QixHQUF4QixVQUF5QixVQUFVO1FBQ2pDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0UsSUFBSSxnQkFBZ0IsR0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ2pFLElBQUksYUFBYSxHQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzNELElBQUksYUFBYSxHQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzNELElBQUksWUFBWSxHQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksV0FBVyxHQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVwQixvREFBb0Q7UUFDcEQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sZ0VBQWdFO1lBQ2hFLHFFQUFxRTtZQUNyRSxtRUFBbUU7WUFDbkUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDL0MsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzNDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUUzQyw0REFBNEQ7WUFDNUQsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN0RSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLG9EQUFvRDtZQUNwRCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0csVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTVHLCtCQUErQjtZQUMvQixJQUFJLHFCQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXhKRCxJQXdKQztBQWxKZ0M7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBbUIsaUJBQVU7d0RBQUM7QUFDaEM7SUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7OEJBQWdCLGlCQUFVO3FEQUFDO0FBQzFCO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUFnQixpQkFBVTtxREFBQztBQUMzQjtJQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQzs4QkFBZSxpQkFBVTtvREFBQztBQUMxQjtJQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs4QkFBYyxpQkFBVTttREFBQztBQUMzQjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTtnREFBQztBQVhqQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQztLQUMzRCxDQUFDO3FDQWM0QixlQUFNO1FBQ1gsbUJBQVk7UUFDbkIsV0FBSTtHQWZULGNBQWMsQ0F3SjFCO0FBeEpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBVc2VyLCBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1sb2dpblwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuXG5cbiAgQFZpZXdDaGlsZChcImluaXRpYWxDb250YWluZXJcIikgaW5pdGlhbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcIm1haW5Db250YWluZXJcIikgbWFpbkNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImxvZ29Db250YWluZXJcIikgbG9nb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImZvcm1Db250cm9sc1wiKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzaWduVXBTdGFja1wiKSBzaWduVXBTdGFjazogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpIHtcbiAgICAgIGFsZXJ0KFwiRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcbiAgICAgIGFsZXJ0KFwiR3JvY2VyaWVzIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcbiAgICAgIGFsZXJ0KFwiR3JvY2VyaWVzIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gcmVnaXN0ZXIuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgLy8gVE9ETzogVmVyaWZ5IHRoaXMgd29ya3NcbiAgICAgICAgICBpZiAobWVzc2FnZS5tYXRjaCgvc2FtZSB1c2VyLykpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhpcyBlbWFpbCBhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlLlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHByb21wdCh7XG4gICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEdyb2NlcmllcyB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IDxWaWV3PnRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIG1haW5Db250YWluZXIuYW5pbWF0ZSh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICBkdXJhdGlvbjogMjAwXG4gICAgfSk7XG4gIH1cblxuICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XG4gICAgICBzY2FsZTogeyB4OiAxLjAsIHk6IDEuMCB9LFxuICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgfSk7XG4gIH1cblxuICBzaG93TWFpbkNvbnRlbnQoKSB7XG4gICAgbGV0IGluaXRpYWxDb250YWluZXIgPSA8Vmlldz50aGlzLmluaXRpYWxDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IDxWaWV3PnRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBsb2dvQ29udGFpbmVyID0gPFZpZXc+dGhpcy5sb2dvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGZvcm1Db250cm9scyA9IDxWaWV3PnRoaXMuZm9ybUNvbnRyb2xzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IHNpZ25VcFN0YWNrID0gPFZpZXc+dGhpcy5zaWduVXBTdGFjay5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBhbmltYXRpb25zID0gW107XG5cbiAgICAvLyBGYWRlIG91dCB0aGUgaW5pdGlhbCBjb250ZW50IG92ZXIgb25lIGhhbGYgc2Vjb25kXG4gICAgaW5pdGlhbENvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIC8vIEFmdGVyIHRoZSBhbmltYXRpb24gY29tcGxldGVzLCBoaWRlIHRoZSBpbml0aWFsIGNvbnRhaW5lciBhbmRcbiAgICAgIC8vIHNob3cgdGhlIG1haW4gY29udGFpbmVyIGFuZCBsb2dvLiBUaGUgbWFpbiBjb250YWluZXIgYW5kIGxvZ28gd2lsbFxuICAgICAgLy8gbm90IGltbWVkaWF0ZWx5IGFwcGVhciBiZWNhdXNlIHRoZWlyIG9wYWNpdHkgaXMgc2V0IHRvIDAgaW4gQ1NTLlxuICAgICAgaW5pdGlhbENvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBsb2dvQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgICAgLy8gRmFkZSBpbiB0aGUgbWFpbiBjb250YWluZXIgYW5kIGxvZ28gb3ZlciBvbmUgaGFsZiBzZWNvbmQuXG4gICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IG1haW5Db250YWluZXIsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA1MDAgfSk7XG4gICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGxvZ29Db250YWluZXIsIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA1MDAgfSk7XG5cbiAgICAgIC8vIFNsaWRlIHVwIHRoZSBmb3JtIGNvbnRyb2xzIGFuZCBzaWduIHVwIGNvbnRhaW5lci5cbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogc2lnblVwU3RhY2ssIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sIG9wYWNpdHk6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOiAxNTAgfSk7XG4gICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGZvcm1Db250cm9scywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDY1MCwgZHVyYXRpb246IDE1MCB9KTtcblxuICAgICAgLy8gS2ljayBvZmYgdGhlIGFuaW1hdGlvbiBxdWV1ZVxuICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpO1xuICAgIH0pO1xuICB9XG59Il19