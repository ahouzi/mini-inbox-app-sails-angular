
module.exports = {
	index: function(req, res) {
		res.view('app', { layout: 'staticlayout' });
    }
};