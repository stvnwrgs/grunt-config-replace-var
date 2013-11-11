/*
 * grunt-config-replace-var
 * https://github.com/steven/grunt-config-replace-var
 *
 * Copyright (c) 2013 Steven Wirges
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs');

module.exports = function(grunt) {
  var prompt = require('./lib/prompter.js');
  var repl = require('./../node_modules/simple-replace');

  grunt.registerMultiTask('config_replace_var', 'This plugin helps to replace vars from template files. You can use it for your config files or credential files. You can use it as step by step prompt or parameterized', function(param) {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      force: false
    });
    var args = grunt.cli.options;
    delete args.tasks;
    delete args.npm;
    console.log(args);

    if (args.length != 0) {
      this.files.forEach(function (file){
        var src = file.orig.src[0];
        var data = fs.readFileSync(src , {encoding:'utf8'});
        console.log(data);
        console.log(args);
        console.log(repl(data,args));
        //fs.writeFileSync(src + "asd", repl(data,args));
      });
    }
   
    // var done = this.async();
    // // prompt.promptVar('${Steven:-asd}');
    // prompt.promptVar('${username:-asd}', function(result) {
    //   console.log(result);
    //   done();
    // });
  });

};
