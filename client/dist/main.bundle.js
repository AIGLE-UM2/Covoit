webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var notAuth_guard_1 = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
var m_trajets_component_1 = __webpack_require__("../../../../../src/app/m-trajets/m-trajets.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var edit_trajet_component_1 = __webpack_require__("../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.ts");
var delete_trajet_component_1 = __webpack_require__("../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.ts");
var appRoutes = [
    { path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        canActivate: [notAuth_guard_1.NotAuthGuard] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [notAuth_guard_1.NotAuthGuard] // User must NOT be logged in to view this route
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'm-trajets',
        component: m_trajets_component_1.MTrajetsComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'edit-trajet/:id',
        component: edit_trajet_component_1.EditTrajetComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'delete-trajet/:id',
        component: delete_trajet_component_1.DeleteTrajetComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: '**',
        component: home_component_1.HomeComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                router_1.RouterModule.forRoot(appRoutes, // we pass in this module all of our routes witch we created top of here (appRoutes)
                { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n    <main role=\"main\" class=\"container\">\n\n      <div class=\"starter-template\">\n          <router-outlet></router-outlet>\n\n      </div>\n\n    </main><!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FrontEnd + BackEnd';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//main configuration file basicly it tells application everythings that we need
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var trajet_service_1 = __webpack_require__("../../../../../src/app/services/trajet.service.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var notAuth_guard_1 = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var nav_bar_component_1 = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var m_trajets_component_1 = __webpack_require__("../../../../../src/app/m-trajets/m-trajets.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var edit_trajet_component_1 = __webpack_require__("../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.ts");
var forms_2 = __webpack_require__("../../../forms/esm5/forms.js");
var delete_trajet_component_1 = __webpack_require__("../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_bar_component_1.NavBarComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent,
                m_trajets_component_1.MTrajetsComponent,
                dashboard_component_1.DashboardComponent,
                edit_trajet_component_1.EditTrajetComponent,
                delete_trajet_component_1.DeleteTrajetComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_2.FormsModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard,
                notAuth_guard_1.NotAuthGuard,
                trajet_service_1.TrajetService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is loggedin
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], NotAuthGuard);
    return NotAuthGuard;
}());
exports.NotAuthGuard = NotAuthGuard;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Bienvenue ...</h1>\r\n    <p class=\"lead\">Le covoiturage simplifie vos trajets.</p>\r\n    <img src=\"../assets/images/Free.png\" class=\"\" alt=\"\" width=\"\" height=\"\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Renseignez vos identifiants</h2>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Login Form -->\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\n  <!-- Username Field -->\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Password Field  -->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Submit Button -->\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/dashboard']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            router_1.Router,
            auth_guard_1.AuthGuard])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete Trajet</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Modal Confirmation Window -->\n<div class=\"col-md-6\"  *ngIf=\"foundTrajet\">\n  <!-- Model Outer Layer -->\n  <div class=\"modal-content\">\n    <!-- Modal Header -->\n    <div class=\"modal-header\">\n      <!-- Close Button -->\n      <!-- <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> -->\n      <!-- Modal Title -->\n      <h4 class=\"modal-title\">Confirm</h4>\n    </div>\n\n    <!-- Modal Body -->\n    <div class=\"modal-body\">\n      <p>Êtes-vous sûr de vouloir supprimer définitivement ce trajet?</p>\n    </div>\n\n    <!-- Modal Footer -->\n    <div class=\"modal-footer\">\n      <!-- Yes Button -->\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteTrajet()\">Oui</button>\n      <!-- No Button -->\n      <a routerLink=\"/m-trajets\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">Non</button></a>\n    </div>\n  </div>\n\n  <br />\n\n\n<!-- Panel Start -->\n<div>\n\n  <!-- Panel Outer Layer -->\n  <div class=\"panel panel-primary\">\n\n      \n    <!-- Panel Footer Start -->\n    <div>\n        <strong>Ville de départ: </strong>{{ trajet.vDepart }}\n        <br />\n        <strong>Ville de destination: </strong> {{ trajet.vDestination }}\n        <br />\n        <strong>Date de départ: </strong> {{ trajet.date }}\n        <br />\n\n\n  </div>\n  <!-- Panel Outer Layer -->\n</div>\n<!-- Panel End -->\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var trajet_service_1 = __webpack_require__("../../../../../src/app/services/trajet.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var DeleteTrajetComponent = /** @class */ (function () {
    function DeleteTrajetComponent(trajetService, activatedRoute, router) {
        this.trajetService = trajetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundTrajet = false;
        this.processing = false;
    }
    // Function to delete trajets
    DeleteTrajetComponent.prototype.deleteTrajet = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.trajetService.deleteTrajet(this.currentUrl.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to trajet page
                setTimeout(function () {
                    _this.router.navigate(['../m-trajets']); // Route users to trajet page
                }, 2000);
            }
        });
    };
    DeleteTrajetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve trajet
        this.trajetService.getSingleTrajet(this.currentUrl.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the trajet object to use in HTML
                _this.trajet = {
                    vDepart: data.trajet.vDepart,
                    vDestination: data.trajet.vDestination,
                    date: data.trajet.date
                };
                _this.foundTrajet = true; // Displaly trajet window
            }
        });
    };
    DeleteTrajetComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-trajet',
            template: __webpack_require__("../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/m-trajets/delete-trajet/delete-trajet.component.css")]
        }),
        __metadata("design:paramtypes", [trajet_service_1.TrajetService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DeleteTrajetComponent);
    return DeleteTrajetComponent;
}());
exports.DeleteTrajetComponent = DeleteTrajetComponent;


/***/ }),

/***/ "../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"page-header\">Edit Trajet</h1>\n\n<!-- Custom Success/Erro Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- Edit Trajet Form -->\n<form (submit)=\"updateTrajetSubmit()\" *ngIf=\"!loading\">\n  <!-- vDepart Field -->\n  <div class=\"form-group\">\n    <label for=\"vDepart\">Ville de départ:</label>\n    <!-- vDepart Input -->\n    <input [disabled]=\"processing\" type=\"text\" name=\"vDepart\" placeholder=\"*Ville de Départ\" class=\"form-control\" [(ngModel)]=\"trajet.vDepart\" />\n  </div>\n\n  <!-- vDestination Field -->\n  <div class=\"form-group\">\n    <label for=\"vDestination\">Ville de destination:</label>\n    <!-- vDestination Input -->\n    <input [disabled]=\"processing\" type=\"text\" name=\"vDestination\" placeholder=\"*Ville de Destination\" class=\"form-control\" [(ngModel)]=\"trajet.vDestination\" />\n  </div>\n\n    <!-- Date Field -->\n    <div class=\"form-group\">\n      <label for=\"date\">Date de départ:</label>\n      <!-- date Input -->\n      <input [disabled]=\"processing\" type=\"date\" name=\"date\" placeholder=\"*MM/DD/YYYY\" class=\"form-control\" [(ngModel)]=\"trajet.date\" />\n    </div>\n\n  <!-- Delete Button -->\n  <a [routerLink]=\"['/delete-trajet/', trajet._id]\"><button  [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n  <!-- Save Changes Button -->\n  <button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var trajet_service_1 = __webpack_require__("../../../../../src/app/services/trajet.service.ts");
var EditTrajetComponent = /** @class */ (function () {
    function EditTrajetComponent(location, activatedRoute, trajetService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.trajetService = trajetService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    // Function to Submit Update
    EditTrajetComponent.prototype.updateTrajetSubmit = function () {
        var _this = this;
        this.processing = true; // Lock form fields
        // Function to send trajet object to backend
        this.trajetService.editTrajet(this.trajet).subscribe(function (data) {
            // Check if PUT request was a success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set error bootstrap class
                _this.message = data.message; // Set error message
                _this.processing = false; // Unlock form fields
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set success bootstrap class
                _this.message = data.message; // Set success message
                // After two seconds, navigate back to trajet page
                setTimeout(function () {
                    _this.router.navigate(['/m-trajets']); // Navigate back to route page
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    EditTrajetComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditTrajetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.trajetService.getSingleTrajet(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.trajet = data.trajet;
                _this.loading = false;
            }
        });
    };
    EditTrajetComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-trajet',
            template: __webpack_require__("../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/m-trajets/edit-trajet/edit-trajet.component.css")]
        }),
        __metadata("design:paramtypes", [common_1.Location,
            router_1.ActivatedRoute,
            trajet_service_1.TrajetService,
            router_1.Router])
    ], EditTrajetComponent);
    return EditTrajetComponent;
}());
exports.EditTrajetComponent = EditTrajetComponent;


/***/ }),

/***/ "../../../../../src/app/m-trajets/m-trajets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Dropdown Button */\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/m-trajets/m-trajets.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Itinéraire</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- New Post Button -->\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newTrajetForm()\">Nouveau\nTrajet  </button>\n\n<!-- Reload Button -->\n<button [disabled]=\"loadingTrajets\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadTrajets()\">Reload</button>\n\n<br />\n<br />\n\n<!-- New Trajet Form -->\n<form [formGroup]=\"form\" name=\"trajetForm\" (submit)=\"onTrajetSubmit()\" *ngIf=\"newPost\">\n  <!-- Ville depart Input -->\n  <div class=\"form-group\">\n    <label for=\"vDepart\">D’où partez-vous ?</label>\n    <div [ngClass]=\"{'has-success': form.controls.vDepart.valid, 'has-error': (form.controls.vDepart.dirty && form.controls.vDepart.errors)}\">\n      <input type=\"text\" name=\"vDepart\" class=\"form-control\" placeholder=\"*Ville de départ\" autocomplete=\"off\" formControlName=\"vDepart\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.vDepart.dirty && form.controls.vDepart.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.vDepart.dirty && form.controls.vDepart.errors?.minlength) || (form.controls.vDepart.dirty && form.controls.vDepart.errors?.maxlength)\">Max length: 30, Min length: 3</li>\n        <li *ngIf=\"form.controls.vDepart.dirty && form.controls.vDepart.errors?.alphabetValidation\">Must be just letters</li>\n      </ul>\n    </div>\n  </div>\n    <!-- Ville Destination Input -->\n    <div class=\"form-group\">\n      <label for=\"vDestination\">Où allez-vous ?</label>\n      <div [ngClass]=\"{'has-success': form.controls.vDestination.valid, 'has-error': form.controls.vDestination.dirty && form.controls.vDestination.errors}\">\n        <input type=\"text\" name=\"vDestination\" class=\"form-control\" placeholder=\"*Ville de destination\" autocomplete=\"off\" formControlName=\"vDestination\" />\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.vDestination.dirty && form.controls.vDestination.errors?.required\">This field is required.</li>\n          <li *ngIf=\"(form.controls.vDestination.dirty && form.controls.vDestination.errors?.minlength) || (form.controls.vDestination.dirty && form.controls.vDestination.errors?.maxlength)\">Max length: 30, Min length: 3</li>\n          <li *ngIf=\"form.controls.vDestination.dirty && form.controls.vDestination.errors?.alphabetValidation\">Must be just letters</li>\n        </ul>\n      </div>\n    </div>\n\n    <!-- Date Input -->\n    <div class=\"form-group\">\n      <label for=\"date\">Quelle date ?</label>\n      <div>\n        <input type=\"date\" name=\"date\" class=\"form-control\" placeholder=\"MM/DD/YYYY\" autocomplete=\"off\" formControlName=\"date\" />\n\n      </div>\n    </div>\n\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\n  <!-- Submit Button -->\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\n\n</form>\n<!-- New Trajet Form -->\n\n\n<!-- Panel Start -->\n<div *ngIf=\"!newPost\">\n\n  <!-- Panel Outer Layer -->\n  <div class=\"panel panel-primary\" *ngFor=\"let trajet of trajetPosts\">\n\n      \n    <!-- Panel Footer Start -->\n    <div>\n        <strong>Ville de départ: </strong>{{ trajet.vDepart }}\n        <br />\n        <strong>Ville de destination: </strong> {{ trajet.vDestination }}\n        <br />\n        <strong>Date de départ: </strong> {{ trajet.date }}\n        <br />\n\n      <!-- Edit Button -->\n      <a [routerLink]=\"['/edit-trajet/', trajet._id]\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\n      <!-- Delete Button -->\n      <a [routerLink]=\"['/delete-trajet/', trajet._id]\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\n\n      <br />\n      <br />\n      <br />\n      <br />\n\n\n  </div>\n  <!-- Panel Outer Layer -->\n</div>\n<!-- Panel End -->"

/***/ }),

/***/ "../../../../../src/app/m-trajets/m-trajets.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var trajet_service_1 = __webpack_require__("../../../../../src/app/services/trajet.service.ts");
var MTrajetsComponent = /** @class */ (function () {
    function MTrajetsComponent(formBuilder, trajetService) {
        this.formBuilder = formBuilder;
        this.trajetService = trajetService;
        this.newPost = false;
        this.loadingTrajets = false;
        this.processing = false;
        this.createNewTrajetForm(); // Create new Trajet form on start up
    }
    // Function to create new Trajet form
    MTrajetsComponent.prototype.createNewTrajetForm = function () {
        this.form = this.formBuilder.group({
            vDepart: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30),
                    forms_1.Validators.minLength(3),
                    this.alphabetValidation
                ])],
            vDestination: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(30),
                    forms_1.Validators.minLength(3),
                    this.alphabetValidation
                ])],
            date: ''
        });
    };
    // Enable new Trajet form
    MTrajetsComponent.prototype.enableFormNewTrajetForm = function () {
        this.form.get('vDepart').enable(); // Enable vDepart field
        this.form.get('vDestination').enable(); // Enable vDestination field
    };
    // Disable new Trajet form
    MTrajetsComponent.prototype.disableFormNewTrajetForm = function () {
        this.form.get('vDepart').disable(); // Disable vDepart field
        this.form.get('vDestination').disable(); // Disable vDestination field
    };
    // Validation for Vills
    MTrajetsComponent.prototype.alphabetValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphabetValidation': true }; // Return error in validation
        }
    };
    MTrajetsComponent.prototype.newTrajetForm = function () {
        this.newPost = true;
    };
    MTrajetsComponent.prototype.reloadTrajets = function () {
        var _this = this;
        this.loadingTrajets = true;
        this.getAllTrajets();
        // Get All Trajets
        setTimeout(function () {
            _this.loadingTrajets = false; // Release button lock after four seconds
        }, 4000);
    };
    MTrajetsComponent.prototype.onTrajetSubmit = function () {
        var _this = this;
        // console.log( this.form)
        this.processing = true;
        this.disableFormNewTrajetForm();
        // Create Trajet object from form fields
        var trajet = {
            vDepart: this.form.get('vDepart').value,
            vDestination: this.form.get('vDestination').value,
            date: this.form.get('date').value // date field
        };
        // Function to save blog into database
        this.trajetService.newTrajet(trajet).subscribe(function (data) {
            // Check if blog was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewTrajetForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllTrajets();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewTrajetForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    MTrajetsComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Function to get all trajets from the database
    MTrajetsComponent.prototype.getAllTrajets = function () {
        var _this = this;
        // Function to GET all trajets from database
        this.trajetService.getAllTrajets().subscribe(function (data) {
            _this.trajetPosts = data.trajets; // Assign array to use in HTML
        });
    };
    MTrajetsComponent.prototype.ngOnInit = function () {
        this.getAllTrajets();
    };
    MTrajetsComponent = __decorate([
        core_1.Component({
            selector: 'app-m-trajets',
            template: __webpack_require__("../../../../../src/app/m-trajets/m-trajets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/m-trajets/m-trajets.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            trajet_service_1.TrajetService])
    ], MTrajetsComponent);
    return MTrajetsComponent;
}());
exports.MTrajetsComponent = MTrajetsComponent;


/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../assets/images/blabla-logo.png\" class=\"\" alt=\"\" width=\"100\" height=\"20\"> </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item active \">\n            <a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"./register\">Inscription <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" routerLink=\"./login\">Connexion</a>\n          </li>\n          <li class=\"nav-item\">\n              <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" routerLink=\"./profile\">Profil</a>\n          </li>\n          <li class=\"nav-item\">\n            <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" routerLink=\"./m-trajets\">Proposer un trajet</a>\n          </li>\n          <li class=\"nav-item\">\n              <a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\" >Logout</a>\n          </li>\n\n          <!-- <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </li> -->\n        </ul>\n\n      </div>\n    </nav>\n\n\n   "

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to logout user
    NavBarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;


/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Informations personnelles</h2>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">Username: {{ username }}</li>\n  <li class=\"list-group-item\">Email: {{ email }}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.username = '';
        this.email = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Once component loads, get user's data to display on profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Set username
            _this.email = profile.user.email; // Set e-mail
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Pas encore membre ? </h1>\n<h3>Inscrivez-vous gratuitement!</h3>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\">\n      {{ message }}\n    </div>\n  </div>\n<!-- Registration Form -->\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\n  \n\n    <!--.................................... Username Input ..................................-->\n\n    <div class=\"form-group\" >\n      <label for=\"username\">Username</label>\n      <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty), 'has-success': !form.controls.username.errors}\">\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" />\n        <ul class=\"help-block\">\n\n            <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\n            <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 5, Maximum characters: 15</li>\n            <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\n        \n        \n        \n          </ul>\n      </div>\n    </div>\n\n    <!--................................... Email Input ......................................-->\n\n\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty), 'has-success': !form.controls.email.errors}\" >\n          <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" />\n          <ul class=\"help-block\">\n\n              <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n              <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n              <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n          </ul>\n        </div>\n      </div>\n  \n    \n  \n    <!--................................... Password Input ...................................-->\n  \n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\n          <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\n          <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\n              <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n              <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\n            </ul>\n        </div>\n      </div>\n  \n    <!--.................................... Confirm Password Input ..........................-->\n    <div class=\"form-group\">\n        <label for=\"confirm\">Confirm Password</label>\n        <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors}\">\n            <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\n            <ul class=\"help-block\">\n                <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n                <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n            </ul>\n        </div>\n      </div>\n  \n\n      <!-- <p>Username: {{form.controls.username.value}}</p>\n      <p>Email: {{form.controls.email.value}}</p>\n      <p>Password: {{form.controls.password.value}}</p>\n      <p>Confirm: {{form.controls.confirm.value}}</p> -->\n\n\n\n    <!-- Submit Input -->\n    <input [disabled]=\"!form.valid || processing\"  type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n\n\n    </form>\n  <!-- Registration Form /-->"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router
        // private router: Router
    ) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(30),
                    this.validateUsername // Custom validation
                ])],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            password: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(30),
                    this.validatePassword // Custom validation
                ])],
            confirm: ['', forms_1.Validators.required]
        }, { validator: this.matchingPasswords('password', 'confirm') });
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set an error class
                _this.message = data.message; // Set an error message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
        // console.log(this.form.get('username').value);
        // console.log(this.form.get('email').value);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            router_1.Router
            // private router: Router
        ])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/services/trajet.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var TrajetService = /** @class */ (function () {
    function TrajetService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    TrajetService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    // Function to create a new trajet post
    TrajetService.prototype.newTrajet = function (trajet) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + 'trajets/newTrajet', trajet, this.options).map(function (res) { return res.json(); });
    };
    // Function to get all trajets from the database
    TrajetService.prototype.getAllTrajets = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'trajets/allTrajets', this.options).map(function (res) { return res.json(); });
    };
    // Function to get the trajet using the id
    TrajetService.prototype.getSingleTrajet = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'trajets/singleTrajet/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to edit/update trajet 
    TrajetService.prototype.editTrajet = function (trajet) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + 'trajets/updateTrajet/', trajet, this.options).map(function (res) { return res.json(); });
    };
    // Function to delete a trajet
    TrajetService.prototype.deleteTrajet = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + 'trajets/deleteTrajet/' + id, this.options).map(function (res) { return res.json(); });
    };
    TrajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            http_1.Http])
    ], TrajetService);
    return TrajetService;
}());
exports.TrajetService = TrajetService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map