module.exports = function() {
	return {
    module: {
    rules: 
    [
       {
         test:/\.html$/,
         use: ['html-loader']
       }
  ]
       
  }
	}
};

