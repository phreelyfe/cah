game.controller('GameNavController', function($scope, UserSocket) {
    // console.log("Call from Card Service");
    var nav = {
        home: {
            name: 'home',
            sref: 'home.app',
            hash: '/'
        },
        lobby: {
            name: 'lobby',
            sref: 'game.lobby',
            hash: '/lobby'
        },
        levelOne: {
            name: 'one',
            sref: 'game.one',
            hash: '/one'
        },
        levelTwo: {
            name: 'two',
            sref: 'game.two',
            hash: '/two'
        },
        options: {
            name: 'options',
            sref: 'game.options',
            hash: '/options'
        }
    }

    $scope.nav = nav;
});