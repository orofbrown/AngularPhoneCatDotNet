'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function ($resource) {
        /* 
         *  params should be something like
         *    '/phones/:phoneId'
         */
        return $resource('/phones/getphone/:phoneId', { phoneId: 'phones' }, {
            /* get: { method: 'GET'},       // expects single object back
             * save: { method: 'POST'},
             * query: { method: 'GET', isArray: true },     // does a getAll()
             * remove/delete: { method: 'DELETE' }
             */
        });
    }]);
