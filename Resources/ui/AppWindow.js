exports.AppWindow = function() {
    var self = Ti.UI.createWindow({
        modal: false,
        title: 'Main Window',
        backgroundColor: '#000'
    });

    // 右ボタン

    // hide tab bar
    self.hideTabBar();
    self.navBarHidden = true;

    return self;
};


