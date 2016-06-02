
angular.module("cookbook")
    .directive("newElementForm", function () {
        
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // With template or templateUrl, we indicate the hierarchy of components whom navigator will renderize as directive view
            templateUrl: "views/new-element-form.html",
            // With scope, we define communication interface between directive and parent scope (Controller / component)
            scope: {
                onButtonClick: "&" // Notify event to parent scope
            },
            // With link, we either stablish directive logic or manipulate DOM in view
            link: function (scope) {
                // Save button handler
                scope.notifyText = function () {
                    // Notify to parent scope
                    scope.onButtonClick(
                        {
                            text: scope.text
                        }
                    );
                }
            }
        }
    });