'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
        $scope.detailView = false;

        $scope.getDetails = function (id) {
            $scope.phone = Phone.get({ phoneId: id }, function (phone) {
                $scope.mainImageUrl = phone.images[0];
            });
            $scope.detailView = true;
        }

        $scope.getList = function() {
            $scope.detailView = false;
            console.log($scope.phones);
        }

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
]);
