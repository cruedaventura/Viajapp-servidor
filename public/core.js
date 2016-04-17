angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newSubject = {};
    $scope.newStudent = {};
    $scope.subjects = {};
    $scope.students = {};
    $scope.selected = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/subjects').success(function(data) {
        console.log(data);
            $scope.subjects = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Obtenemos todos los datos de la base de datos
    $scope.mostrarStudent = function() {
        
        $http.get('/students').success(function(data) {
            console.log(data);
            $scope.students = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });}

    // Función para registrar a una persona
    $scope.registrarStudent = function() {

        $http.post('/student', $scope.newStudent)
            .success(function(data) {
                $scope.newStudent = {}; // Borramos los datos del formulario
                $scope.students = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para registrar a una persona
    $scope.registrarSubject = function() {

        $http.post('/subject', $scope.newSubject)
            .success(function(data) {
                $scope.newSubject = {}; // Borramos los datos del formulario
                $scope.subjects = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


    // Función para editar los datos de una persona
    $scope.modificarSubject = function(newSubject) {
        $http.put('/subject/update', $scope.newSubject)

            .success(function(data) {
                $scope.newSubject = {}; // Borramos los datos del formulario
                $scope.subjects = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función que borra un objeto persona conocido su id
    $scope.borrarPersona = function(name) {
        console.log("borrar persona " + name);
        $http.delete('/user/delete/' + name)
            .success(function(data) {
                $scope.newPersona = {};
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectStudent = function(student) {
        $scope.newStudent = student;
        $scope.selected = true;
        console.log($scope.newStudent, $scope.selected);
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectSubject = function(subject) {
        $scope.newSubject = subject;
        $scope.selected = true;
        console.log($scope.newSubject, $scope.selected);
    };

    $scope.verificar = function verificar(v){
            var p1 = document.getElementById('pass1');
            if( p1.value != v){
                document.getElementById('mensaje').innerHTML = "no coincide";

            }else{
                document.getElementById('mensaje').innerHTML = "ok";
                return true;
            }
        }

}