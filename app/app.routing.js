"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./components/search/search.component');
var about_component_1 = require('./components/about/about.component');
var appRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map