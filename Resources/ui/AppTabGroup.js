exports.AppTabGroup = function() { 

    // tab group
    var self = Ti.UI.createTabGroup();

    for(var i = 0, l = arguments.length; i < l; i++) {
        var tab = Ti.UI.createTab(arguments[i]);
        if(i === 0) {
            self.currentTab = tab;
        }
        self.addTab(tab);
    }
    self.addEventListener('focus', function(e) {
        self.currentTab = e.tab;
    });
    return self;

};
