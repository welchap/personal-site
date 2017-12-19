"use strict";
exports.__esModule = true;
var shell_component_1 = require("./shell/shell.component");
//import { AuthenticationGuard } from './authentication/authentication.guard';
/**
 * Provides helper methods to create routes.
 */
var Route = (function () {
    function Route() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return {Routes} The new routes using shell as the base.
     */
    Route.withShell = function (routes) {
        return [{
                path: '',
                component: shell_component_1.ShellComponent,
                children: routes,
                //canActivate: [AuthenticationGuard],
                // Reuse ShellComponent instance when navigating between child views
                data: { reuse: true }
            }];
    };
    return Route;
}());
exports.Route = Route;
