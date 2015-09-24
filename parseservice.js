app.factory('parseService',  function($http, $window){
        
        var baseUrl                 = "https://api.parse.com/1";
        var PARSE_APPLICATION_ID    = "";
        var PARSE_REST_API_KEY      = "";


        return {

            setToken: function(token){
                $window.sessionStorage.token   = token;
            },
            getToken:  function(){
                return $window.sessionStorage.token;
            },
            
            setObjectIdSession: function(sessionId){
                $window.sessionStorage.sessionId = sessionId;
            },
            getObjectIdSession: function(){
                return $window.sessionStorage.sessionId;
            },
            signup: function(params) {

                return $http.post(baseUrl+'/users',
                params,
                {
                    headers: {
                        'X-Parse-Application-Id'            : PARSE_APPLICATION_ID,
                        'X-Parse-REST-API-Key'              : PARSE_REST_API_KEY,
                        'Content-Type'                      : 'application/json'
                    }
                }); 
            },
            signin: function(data) {
                return $http.get(baseUrl+'/login',
                {
                    headers: {
                        'X-Parse-Application-Id'        : PARSE_APPLICATION_ID,
                        'X-Parse-REST-API-Key'          : PARSE_REST_API_KEY
                    },
                    params : {
                        username : data.username,
                        password : data.password
                    }
                });
                
            },
            me: function(success,error) {
                return $http.get(baseUrl+'/users/me',
                {
                    headers: {
                        'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                        'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY,
                        'X-Parse-Session-Token'  : $window.sessionStorage.token
                    }
                });
            },
            session: function(success,error) {
                return $http.get(baseUrl+'/sessions/me',
                {
                    headers: {
                        'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                        'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY,
                        'X-Parse-Session-Token'  : $window.sessionStorage.token
                    }
                });
            },
            logout: function() {
                
                $http.delete(baseUrl+'/sessions/' + $window.sessionStorage.sessionId,
                {
                    headers: {
                        'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                        'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY,
                        'X-Parse-Session-Token'  : $window.sessionStorage.token
                    }
                   

                }).success(function(data){
                
                    delete $window.sessionStorage.token;
                    delete $window.sessionStorage.sessionId;
                    
                    //$window.location.href = 'login.html';
                }).error(function(error){

                });

            },
            requestPasswordReset: function(email, success, error) {

                $http.post(baseUrl+'/requestPasswordReset',
                {
                    email           : email
                },
                {
                    headers: {
                        'X-Parse-Application-Id'            : PARSE_APPLICATION_ID,
                        'X-Parse-REST-API-Key'              : PARSE_REST_API_KEY,
                        'Content-Type'                      : 'application/json'
                    }
                }).success(success).error(error); 

            },
            updateUser: function(id, params){

                return $http.put(baseUrl+'/users/'+id,
                params,
                {
                    headers: {
                        'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                        'X-Parse-Master-Key'     : "",
                        'Content-Type'           : 'application/json'
                    }
                  
                });
            },
            uploadFile: function(name, data, contentType){

                return $http.post(
                    baseUrl+'/files/' + name, data,
                    {
                        headers: {
                            'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                            'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY,
                            'Content-Type' : contentType
                        }
                    }
                );

            },
            getObjects: function(classParse, params){

                return $http.get(
                    baseUrl+'/'+classParse,
                    {
                        headers: {
                            'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                            'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY
                        },
                        params : params
                            
                    }
                );
            },
            deleteObject: function(classParse, id){

                return $http.delete(
                    baseUrl+'/classes/' + classParse + '/'+ id,
                    {
                        headers: {
                            'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                            'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY
                        } 
                    }
                );              
            },
            updateObject: function(classParse, id , params){

                return $http.put(
                    baseUrl+'/classes/'+ classParse + '/' + id,
                    params,
                    {
                        headers: {
                            'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                            'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY,
                        }
                    }
                );
            },
            createObject: function(classParse, params){

                return $http.post(
                    baseUrl+'/classes/'+classParse,
                    params,
                    {
                        headers: {
                            'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                            'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY
                        }
                    }
                );   
            },
            showObject: function(classParse,params,id){
                return $http.get(
                    baseUrl+'/classes/'+classParse+'/'+id,
                    {
                        headers: {
                            'X-Parse-Application-Id' : PARSE_APPLICATION_ID,
                            'X-Parse-REST-API-Key'   : PARSE_REST_API_KEY
                        },
                        params 
                    }
                );    
            }  
        };
    });



    

    








