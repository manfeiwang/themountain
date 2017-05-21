/**
 * Created by Administrator on 2017/5/18.
 */
var app = angular.module('myApp', ['ng','ngRoute']);
app.factory('$debounce', ['$rootScope', '$browser', '$q', '$exceptionHandler',
    function($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {},
            methods = {},
            uuid = 0;

        function debounce(fn, delay, invokeApply) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                timeoutId, cleanup,
                methodId, bouncing = false;

            // check we dont have this method already registered
            angular.forEach(methods, function(value, key) {
                if (angular.equals(methods[key].fn, fn)) {
                    bouncing = true;
                    methodId = key;
                }
            });

            // not bouncing, then register new instance
            if (!bouncing) {
                methodId = uuid++;
                methods[methodId] = { fn: fn };
            } else {
                // clear the old timeout
                deferreds[methods[methodId].timeoutId].reject('bounced');
                $browser.defer.cancel(methods[methodId].timeoutId);
            }

            var debounced = function() {
                // actually executing? clean method bank
                delete methods[methodId];

                try {
                    deferred.resolve(fn());
                } catch (e) {
                    deferred.reject(e);
                    $exceptionHandler(e);
                }

                if (!skipApply) $rootScope.$apply();
            };

            timeoutId = $browser.defer(debounced, delay);

            // track id with method
            methods[methodId].timeoutId = timeoutId;

            cleanup = function(reason) {
                delete deferreds[promise.$$timeoutId];
            };

            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            promise.then(cleanup, cleanup);

            return promise;
        }


        // similar to angular's $timeout cancel
        debounce.cancel = function(promise) {
            if (promise && promise.$$timeoutId in deferreds) {
                deferreds[promise.$$timeoutId].reject('canceled');
                return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
        };

        return debounce;
    }
]);

app.config(function ($routeProvider) {
    $routeProvider.when('/start',{
        templateUrl:'data/start.html',
        controller:'startCtrl'
    }).when('/main', {
        templateUrl: 'data/main.html',
        controller: 'mainCtrl'
    }).when('/detail/:pid', {
        templateUrl: 'data/detail.html',
        controller: 'detailCtrl'
    }).otherwise({redirectTo:'/start'})
});
app.factory('$debounce', ['$rootScope', '$browser', '$q', '$exceptionHandler',
    function($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {},
            methods = {},
            uuid = 0;

        function debounce(fn, delay, invokeApply) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                timeoutId, cleanup,
                methodId, bouncing = false;

            // check we dont have this method already registered
            angular.forEach(methods, function(value, key) {
                if (angular.equals(methods[key].fn, fn)) {
                    bouncing = true;
                    methodId = key;
                }
            });

            // not bouncing, then register new instance
            if (!bouncing) {
                methodId = uuid++;
                methods[methodId] = { fn: fn };
            } else {
                // clear the old timeout
                deferreds[methods[methodId].timeoutId].reject('bounced');
                $browser.defer.cancel(methods[methodId].timeoutId);
            }

            var debounced = function() {
                // actually executing? clean method bank
                delete methods[methodId];

                try {
                    deferred.resolve(fn());
                } catch (e) {
                    deferred.reject(e);
                    $exceptionHandler(e);
                }

                if (!skipApply) $rootScope.$apply();
            };

            timeoutId = $browser.defer(debounced, delay);

            // track id with method
            methods[methodId].timeoutId = timeoutId;

            cleanup = function(reason) {
                delete deferreds[promise.$$timeoutId];
            };

            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            promise.then(cleanup, cleanup);

            return promise;
        }
        // similar to angular's $timeout cancel
        debounce.cancel = function(promise) {
            if (promise && promise.$$timeoutId in deferreds) {
                deferreds[promise.$$timeoutId].reject('canceled');
                return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
        };

        return debounce;
    }
]);
app.controller('parentCtrl', ['$scope', '$location',
        function ($scope, $location) {
            $scope.jump = function (desPath) {
                $location.path(desPath);
            }
        }
    ])
//app.controller('parentCtrl', ['$scope','$http','$debounce', function ($scope,$http,$debounce) {
    //$scope.has=true;
    ////console.log($scope.kw); 没有值
    ////  监听用户的输入
    //$scope.$watch('kw', function () {
    //    //防抖动处理
    //    $debounce(watchHandler,300);
    //});
    //
    //watchHandler = function () {
    //    //console.log($scope.kw);
    //    if ($scope.kw) {
    //        $http
    //            .get('phpdata/getbykw.php?kw=' + $scope.kw)
    //            .success(function (data) {
    //                //console.log(data);
    //                //搜索是由结果的
    //                if (data.length > 0) {
    //                    //将搜索到的结果显示在main页面的列表上
    //                    $scope.dishList = data;
    //                }
    //                else{
    //                    $scope.has=false;
    //                }
    //            })
    //    }
    //}
//}]);
app.controller('startCtrl', ['$scope',function ($scope) {

}]);
app.controller('headCtrl', ['$scope','$rootScope','$http','$debounce', function ($scope,$rootScope,$http,$debounce) {
    $rootScope.has=true;
    //console.log($rootScope.kw);// 没有值
    //  监听用户的输入
    $scope.$watch('kw', function () {
        //防抖动处理
        $debounce(watchHandler,300);
    });

    watchHandler = function () {
        //console.log($scope.kw);
        if ($scope.kw) {
            $http
                .get('phpdata/getbykw.php?kw=' + $scope.kw)
                .success(function (data) {
                    //console.log(data);
                    //搜索是由结果的
                    if (data.length > 0) {
                        //将搜索到的结果显示在main页面的列表上
                        $rootScope.dishList = data;
                    }
                    else{
                        $scope.has=false;
                    }
                })
        }
    }

    //列表
    $scope.navlist1=['2017新设计','兽人','虎豹狮狼-猛兽','猛禽飞鸟','远古生物&海洋','野生动物','食物系列'];
    $scope.navlist2=['2017新设计','魔法世界&仙女&独角兽','星空科幻&外星人','战争&盔甲'];
    $scope.navlist3=['2017新设计','猫咪','狗狗','仓鼠&兔子&其他'];
    $scope.navlist4=['2017新设计','经典骷髅','僵尸&吸血鬼&狼人'];
    $scope.navlist5=['2017新设计','涂鸦系列','史密森尼系列'];
    $scope.navlist6=['S码','M码','L码','XL码'];
    $scope.navlist7=['女士T恤 Ladies T-Shirt','连衣裙 Mini Dress','长袖T恤 LS T-shirt','卫衣 Hoodie'];
}]);

app.controller('mainCtrl',
    ['$scope', '$http','$debounce',
        function ($scope, $http,$debounce) {

            $scope.hasMore = true;

            //  加载到代码片段，进到控制器处理函数中，发起请求拿数据
            $http
                .get('phpdata/getbypage.php?start=0')
                .success(function (data) {
                    //console.log(data);
                    $scope.dishList = data;
                });
            //加载更多
            $scope.loadMore = function () {
                $http
                    .get('phpdata/getbypage.php?start='
                    + $scope.dishList.length)
                    .success(function (data) {
                        if (data.length < 8) {
                            //没有更多数据：将按钮隐藏掉，显示一个提示信息
                            $scope.hasMore = false;
                        }
                        //数组拼起来保存在dishList
                        $scope.dishList = $scope.dishList.concat(data);
                    })
            }
        }]);
app.controller('detailCtrl', ['$scope', '$routeParams', '$http',
        function ($scope, $routeParams, $http) {
            var pid = $routeParams.pid;
            //console.log(pid);
            $http
                .get('phpdata/getbypid.php?pid=' + pid)
                .success(function (data) {
                    //console.log(data);
                    $scope.dish = data[0];
                });
            $scope.Size=[
                {s:'S',jk:'43-44 CM',xw:'92-94 CM',yc:'66-68 CM',tz:'55-65 KG',sg:'170-175 CM'},
                {s:'M',jk:'47-48 CM',xw:'102-104 CM',yc:'70-74 CM',tz:'65-80 KG',sg:'175-180 CM'},
                {s:'L',jk:'53-54 CM',xw:'110-112 CM',yc:'76-78 CM',tz:'80-95 KG',sg:'180-185 CM'},
                {s:'XL',jk:'58-59 CM',xw:'120-122 CM',yc:'80-82 CM',tz:'95-110 KG',sg:'185-190 CM'}
            ];
        }
    ]
);







