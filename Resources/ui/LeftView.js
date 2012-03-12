exports.LeftView= function() {
    var self = Ti.UI.createTableView({
        backgroundColor: '#32394a',
        separatorColor: '#3e4555',
        left: 0,
        width: 200,
        zIndex: 0
    });

    // event listner
    self.addEventListener('click', function(e) {
        e.row.callback();
    });
    // add menu
    self.addMenu = function(title, color, callback) {
        self.appendRow({title: title, color:color, callback: callback});
    };
    return self;
};




