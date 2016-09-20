angular.module('friendsList', [])

var Friend = function() {
    this.name = prompt('What is your name?');
    this.friend = false;
}

angular.module('friendsList').controller('mainCtrl', function($scope) {
    $scope.friends = ["Chase", "Joel", "Elijah", "Kyle"];
    var brock = new Friend();
    function findOutFriend(obj) {
        if (obj.friend === false) {
            obj.friend = prompt('Do you want to be my friend?');
        }
        if (obj.friend.toLowerCase().indexOf('y') > -1) {
            $scope.friends.push(obj.name);
        }
    }
    findOutFriend(brock);
});
