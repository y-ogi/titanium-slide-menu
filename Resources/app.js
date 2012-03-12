if(Ti.version < 1.8) {
    alert('Sorry, this applicatio is for Titanium Mobile 1.8 or later');
} else {

    // add a single variable to the global scope 
    var globals = {};

    (function() {
        var AppTabGroup = require('ui/AppTabGroup').AppTabGroup;
        var AppWindow = require('ui/AppWindow').AppWindow;
        var AppView = require('ui/AppView').AppView;
        var LeftView = require('ui/LeftView').LeftView;
        var HomeView = require('ui/HomeView').HomeView;
        var TableView = require('ui/TableView').TableView;


        // App View
        var appView = new AppView();

        // Left view
        var leftView = new LeftView();
        leftView.addMenu('Home', '#c4ccda', function() {
            var homeView = new HomeView();
            appView.switchView(homeView);
        });
        leftView.addMenu('Table', '#c4ccda', function() {
            var tableView = new TableView();
            appView.switchView(tableView);
        });
        leftView.addMenu('Settings', '#c4ccda', function(){
            alert('Settings');
            appView.openClose();
        });


        // App widow
        win = new AppWindow();
        win.add(appView);
        win.add(leftView);

        // create our global tab group
        globals.tabs = new AppTabGroup({
            window: win
        });

        // tab open
        globals.tabs.open();

    })();


}
