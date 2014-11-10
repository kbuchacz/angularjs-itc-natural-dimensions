angular.module('itc.naturaldimensions', []);

(function ()
{
    'use strict';

    function itcNaturalDimensions()
    {
        return {
            restrict: 'A',
            link: function (scope, element, attrs)
            {
                element.load(function ()
                {
                    var dimensions = {height: this.naturalHeight, width: this.naturalWidth};
                    var binding = attrs.itcNaturalDimensions;
                    if (binding) {
                        scope.$apply(function ()
                        {
                            scope.$eval(binding + '=dimensions', {dimensions: dimensions});
                        });
                    }
                });
            }
        };
    }

    angular.module('itc.naturaldimensions').directive('itcNaturalDimensions', itcNaturalDimensions);
})();
