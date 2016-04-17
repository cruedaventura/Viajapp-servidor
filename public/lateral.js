/**
 * Created by carol on 14/04/16.
 */
angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newRuta  = {};
    $scope.rutas    = {};
    $scope.selected = false;
    $scope.confirma = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/routes').success(function (data) {
            console.log(data);
            $scope.rutas = data;
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectRuta = function (ruta) {
        $scope.newRuta  = ruta;
        $scope.selected = true;
        console.log($scope.newRuta, $scope.selected);
    };

}