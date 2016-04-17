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

    // Función para registrar a una persona
    $scope.registrarRuta = function () {
            $http.post('/route', $scope.newRuta)
                .success(function (data) {
                    $scope.newRuta = {}; // Borramos los datos del formulario
                    $scope.rutas   = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };



    // Función para editar los datos de una persona
    $scope.modificarRuta = function (newRuta) {
        $http.put('/route/update', $scope.newRuta)
            .success(function (data) {
                $scope.newRuta  = {}; // Borramos los datos del formulario
                $scope.rutas    = data;
                $scope.selected = false;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // Función que borra un objeto persona conocido su id
    $scope.borrarRuta = function (name, res) {
        if (confirm ("you want to delete de route? "))

        {
        console.log("borrar persona " + name);
        $http.delete('/route/delete/' + name)
            .success(function (data) {
                $scope.newRuta  = {};
                $scope.rutas    = data;
                $scope.selected = false;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });}
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectRuta = function (ruta) {
        $scope.newRuta  = ruta;
        $scope.selected = true;
        console.log($scope.newRuta, $scope.selected);
    };

}