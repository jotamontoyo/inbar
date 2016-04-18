
    exports.sp = function(req, res) {
        res.redirect('/');
    };

    exports.en = function(req, res) {
        res.render('languages/en', {errors: []});
    }
