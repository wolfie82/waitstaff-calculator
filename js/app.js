/**
 * Created by pbaker on 9/16/14.
 */
angular.module('waiterEarningsCalculator', [])
    .controller('CalculatorCtrl', ['$scope', CalculatorCtrl]);

function CalculatorCtrl($scope) {
    $scope.meal = {};
    $scope.customer = {};
    $scope.earnings = {};

    $scope.submit = function () {
        if ($scope.mealDetail.$valid) {
            // Calculate Customer Charges
            $scope.customer.subtotal = (($scope.meal.taxPercentage / 100) * $scope.meal.price) + $scope.meal.price;
            $scope.customer.tip = (($scope.meal.tipPercentage / 100) * $scope.meal.price);
            $scope.customer.total = $scope.customer.subtotal + $scope.customer.tip;

            // Calculate Earnings
            $scope.earnings.tipTotal = $scope.customer.tip + ($scope.earnings.tipTotal || 0);
            $scope.earnings.mealCount = ++$scope.earnings.mealCount || 1;
            $scope.earnings.averageTip =   $scope.earnings.tipTotal / $scope.earnings.mealCount;

            // Reset Meal
            $scope.meal = {};
        }
    };

    $scope.cancel = function () {
        $scope.meal = {};
    };

    $scope.reset = function () {
        $scope.meal = {};
        $scope.customer = {};
        $scope.earnings = {};
    };
}
