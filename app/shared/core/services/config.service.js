"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var ConfigService = (function () {
    function ConfigService() {
    }
    ConfigService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(ConfigService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    return ConfigService;
}());
ConfigService.apiUrl = "https://api.everlive.com/v1/GWfRtXi1Lwt4jcqK/";
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZEQUE0RDtBQUU1RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFFekI7SUFBQTtJQWNBLENBQUM7SUFYUSx3QkFBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsc0JBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7SUFLSCxvQkFBQztBQUFELENBQUMsQUFkRDtBQUNTLG9CQUFNLEdBQUcsK0NBQStDLENBQUM7QUFEckQsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmNvbnN0IHRva2VuS2V5ID0gXCJ0b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLmV2ZXJsaXZlLmNvbS92MS9HV2ZSdFhpMUx3dDRqY3FLL1wiO1xuXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRTdHJpbmcoXCJ0b2tlblwiKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXQgdG9rZW4odGhlVG9rZW46IHN0cmluZykge1xuICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcbiAgfVxufSJdfQ==