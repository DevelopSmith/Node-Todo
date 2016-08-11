var configValues = {
	username: 'test',
	password: 'test'
}

module.exports = {
	getDBConnectionStr : function(){
		return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds153705.mlab.com:53705/nodetodods';
	}
}