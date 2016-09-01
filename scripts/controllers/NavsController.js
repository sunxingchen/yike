
var Nav = angular.module('Nav', []);

Nav.controller('NavsController', ['$scope', function($scope) {

	$scope.navs = [
		{text: '今日一刻', icon: 'icon-home'},
		{text: '往期内容', icon: 'icon-file-empty'},
		{text: '热门作者', icon: 'icon-pencil'},
		{text: '栏目浏览', icon: 'icon-menu'},
		{text: '我的喜欢', icon: 'icon-heart'},
		{text: '设置', icon: 'icon-cog'}
	];

}]);