exports.TableView = function() {

    var rows = [
        {title:'Row 1', hasChild:true},
        {title:'Row 2', hasDetail:true},
        {title:'Row 3', hasCheck:true},
        {title:'Row 4'}
    ];
    // 先ほどのデータに基づいてTable Viewを起こします。
    var self = Ti.UI.createTableView({
        data: rows
    });
    return self;
};


