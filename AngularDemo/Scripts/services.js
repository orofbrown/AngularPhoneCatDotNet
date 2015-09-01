'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function($resource){
        return $resource('/phones/getphone/:phoneId', {phoneId: 'phones'}, {
            //query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    }]);
