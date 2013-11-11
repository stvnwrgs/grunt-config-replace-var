
var prompt = require('./../../node_modules/prompt');
// The module to be exported.
var prompter = module.exports ={};

prompter.promptVar = function (value,callback) {
	
	value = value.substr(2);
	value = value.substr(0, value.length -1);

	var extracted = {};

	if (value.indexOf(':-') != -1) {
		extracted.name = value.substr(0,value.indexOf(':-'));
		extracted.default = value.substr(value.indexOf(':-')+2);
	} else {
		extracted.name = value;
		extracted.default = '';
	}


	var properties = [];
	properties.push({
		name:extracted.name,
		required: true
	});
	// properties[extracted.name] = {
	// 	name: extracted.name,
	// 	description: "Please input the value for " +extracted.name,
	// 	default: extracted.default,
	// 	required: true
	// };

  properties = {properties:properties};
	console.log(properties);
	prompt.get(properties, function (err, result) {
    callback(result);
  });
};


