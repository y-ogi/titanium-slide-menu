exports.AppView = function() {

    var self = Ti.UI.createView({
        backgroundColor: '#333366',
        top: 0,
        width: 320,
        zIndex: 3
    });

    // current view
    self.currentView = false;
    // open flag
    self.opened = false;

    // create main view
    var mainView = createMainView();

    // create tool bar 
    var toolbar = createToolbar();

    // create left button
    var leftButton = createLeftButton();
    leftButton.addEventListener('click', function(e) {
        self.openClose();
    });
    // open close 
    self.openClose = function() {
        if(self.opened) {
            // close view
            var animation = Ti.UI.createAnimation({
                left: 320, 
                duration: 100 
            });
            animation.addEventListener('complete', function() {
                var animation = Ti.UI.createAnimation({
                    left: 0,
                    duration: 200 
                });
                self.animate(animation);

            });
            self.animate(animation);

        } else {
            // open view
            var animation = Ti.UI.createAnimation({
                left: 200, 
                duration: 350
            });
            self.animate(animation);
        }
        self.opened = !self.opened;

    };
    // add button to toolbar
    toolbar.add(leftButton);

    // add mainView to AppView
    self.mainView = mainView;
    self.add(self.mainView);
    // add toolbar to AppView
    self.add(toolbar);


    // swith view method
    self.switchView = function(view) {

        // remove current view
        if(self.currentView) {
            self.mainView.remove(self.currentView);
        }
        
        // switch view
        self.currentView = view
        self.mainView.add(view);

        self.openClose();
    };

    return self;
};

var createMainView = function() {
    var mainView = Ti.UI.createView({
        backgroundColor: 'blue',
        top: 42, 
        width: 320,
        zIndex: 4
    });
    return mainView;
};

var createToolbar = function() {
    var toolbar = Ti.UI.createView({
        backgroundColor: 'red',
        top: 0, 
        height: 42,
        width: 320,
        zIndex: 4
    });
    return toolbar;
};

var createLeftButton = function() {
    var button = Ti.UI.createButton({
        top: 7,
        left: 5,
        width: 40,
        height: 31,
        title: 'L'
    });
    return button
};
