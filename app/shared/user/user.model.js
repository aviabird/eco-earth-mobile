"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUU3QztJQUFBO0lBT0EsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBcbiAgaXNWYWxpZEVtYWlsKCkge1xuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XG4gIH1cbn0iXX0=