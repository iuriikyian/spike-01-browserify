var utils = require('./utils');
var _ = require('underscore');
_.mixin(require('underscore.deferred'));

function foo(){
	var dfd = new _.Deferred();
	_.delay(function(){
		dfd.resolve();
	}, 500);
	return dfd.promise();
}

foo().done(function(){
	console.log(utils.hello('script'));	
});

