// 可注册多个配置块
angular.module("adminManageApp",[
	'ngSanitize',
	'ngResource',
	'angular-timeline',
	'ui.router',
	'ui.bootstrap',
	'adminManageCtrls',
	'adminManageFilters',
	'adminManageServices',
	'adminManageDires',
	'com.2fdevs.videogular',
	'com.2fdevs.videogular.plugins.controls',
	'com.2fdevs.videogular.plugins.overlayplay',
	'com.2fdevs.videogular.plugins.poster',
	'com.2fdevs.videogular.plugins.buffering'
	])
/**
 * 整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 */
.run(function($rootScope,$state,$stateParams){
	$state = $rootScope.$state;
	$stateParams = $rootScope.$stateParams;
	var any = $rootScope.any={};
	any.status = 0;
	any.user='';
    any.activeLi='';
   any.activeCourseID='';

})

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/index");
	$stateProvider
	.state('index',{
		url:"/index",
		views:{
			'':{
				templateUrl:"tpls/index.html"
			},
			'main@index':{
				templateUrl:"tpls/login.html"
			},
			'topbar@index':{
				templateUrl:"tpls/topbar.html",
				controller:"topbarCtrl"
			}
		}
	})
	.state('index.test',{
		url:"/test",
		views:{
			'main@index':{
				templateUrl:"tpls/test.html",
				controller:"StudentsCtrl"
			}
		}
	})
	// 登录
	.state('index.login',{
		url:"/login",
		views:{
			'main@index':{
				templateUrl:"tpls/login.html",
				controller:"loginCtrl"
			}
		}
	})
	.state('index.major_course',{
		url:"/major_course",
		views:{
			'main@index':{
				templateUrl:"tpls/index.major_course.html",
				controller:"major_courseCtrl"
			}
		}
	})
	.state('index.course',{
		url:"/course",
		views:{
			'main@index':{
				templateUrl:"tpls/index.course.html"
			}
		}
	})
	.state('index.course.category',{
		url:"/{courseType:[0-9]{1,4}}",
		templateUrl:"tpls/index.mycourse.html",
		controller:'courseCtrl'
	})

	.state('index.course_detail',{
		url:'/course_detail',
		views:{
			'main@index':{
				templateUrl:"tpls/index.course_detail.html",
				controller:'courDetailCtrl'
			}
		}
	})

	.state('index.course_detail.courInfo',{
		url:'/courInfo/{courseId:[0-9]{1,4}}',
		views:{
			'content@index.course_detail':{
				templateUrl:"tpls/index.courInfo.html",
				controller:'courInfoCtrl'
			}
		}

	})

	.state('index.course_detail.courContent',{
		url:'/courContent/{courseId:[0-9]{1,4}}',
		views:{
			'content@index.course_detail':{
				templateUrl:"tpls/index.courContent.html",
				controller:'courContentCtrl'
			}
		}
	})


	// video
	.state('index.course_detail.courContent.video',{
		url:'/video',
		views:{
			'content@index.course_detail':{
				templateUrl:"tpls/index.video.html",
				controller:'courVideoCtrl'
			}
		}
	})


	.state('index.course_detail.courProgress',{
		url:'/courProgress/{courseId:[0-9]{1,4}}',
		views:{
			'content@index.course_detail':{
				templateUrl:"tpls/index.courProgress.html",
				controller:'courDetailCtrl'
			}
		}
	})

	.state('index.course_detail.courCommunity',{
		url:'/courCommunity/{courseId:[0-9]{1,4}}',
		views:{
			'content@index.course_detail':{
				templateUrl:"tpls/index.courCommunity.html",
				controller:'courDetailCtrl'
			}
		}
	})




/********************************** 个人主页*************/
	

	.state('index.myRoom',{
		url:"/room",
		views:{
			'main@index':{
				templateUrl:'tpls/index.myRoom.html',
				controller:'myRoomCtrl'
			}
		}

	})

	.state('index.myRoom.course',{
		url:"/course",
		templateUrl:"tpls/index.myRoom.majorCourses.html",
		controller:'myMajorCouCtrl'
	})

	.state('index.myRoom.notes',{
		url:"/notes",
		template:"<h1>这是我的笔记</h1>",
		// templateUrl:"tpls/index.mycourse.html"
		// controller:'courseCtrl'
	})

	.state('index.myRoom.statistics',{
		url:"/statistics",
		template:"<h1>这是我的学习统计</h1>",
		// templateUrl:"tpls/index.mycourse.html"
		// controller:'courseCtrl'
	})
	/****个人信息****/
	.state('index.myRoom.info',{
		url:"/info",
		templateUrl:"tpls/index.myRoom.info.html",
		controller:'userInfoCtrl'
	})
	.state('index.myRoom.info.basic',{
		url:"/basic",
		templateUrl:"tpls/index.myRoom.info.basic.html",
		controller:'userInfoCtrl'
	})
	.state('index.myRoom.info.image',{
		url:"/image",
		templateUrl:"tpls/index.myRoom.info.image.html",
		controller:'userInfoCtrl'
	})
	.state('index.myRoom.info.pwd',{
		url:"/pwd",
		templateUrl:"tpls/index.myRoom.info.pwd.html",
		controller:'pwdCtrl'
	})
});