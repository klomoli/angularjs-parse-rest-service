# angularjs-parse-rest-service
Simple AngularJS factory that facilitate the communication between an AngularJS app and the REST services on Parse.com

Usage
-----

Example:
```js
var params 		 = {limit : 400, skip : 0, order: '-createdAt'}; //Customize your query here
//var params 	 = {where: {'' : ''}, limit : 400, skip : 0, order: '-createdAt'}; //Another example
var centers      = [];
var classParse   = 'Centers'; //Type your parse class name here

$scope.getCenters = function()
{
  parseService.getObjects(classParse, params).success(function(centers){
      if (centers.results.length > 0) 
        console.log(centers.results);
      else
        console.log('nothing here');
  }).error(function(error){
      console.log(error);
  });
};
```

Developed By
------------
- [Ismael Morales](http://ismaelmorales.xyz)
