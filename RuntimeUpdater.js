
/**
 * RuntimeUpdater
 * 
 * @todo    Follow same paradigm as other simple classes for config, _scan, etc.
 * @access  public
 * @var     Object
 */
var RuntimeUpdater = (function() {

    /**
     * Properties
     * 
     */

    /**
     * __config
     * 
     * @access  private
     * @var     Object
     */
    var __config = {
    };

    /**
     * __string
     * 
     * @access  private
     * @var     String (default: 'RuntimeUpdater')
     */
    var __string = 'RuntimeUpdater';

    /**
     * Methods
     * 
     */

    /**
     * Public methods
     */
    return {

        /**
         * init
         * 
         * @access  public
         * @return  Boolean
         */
        init: function() {
            return true;
        },

        /**
         * updateYears
         * 
         * @access  public
         * @param   undefined|String selector (default: undefined)
         * @return  Boolean
         */
        updateYears: function(selector) {
            var year = new Date().getFullYear(),
                selector = selector || '[data-lookup="year"]',
                $elements = document.querySelectorAll(selector);
            for (var $element of $elements) {
                var str = $element.innerText;
                str = parseInt(str, 10);
                if (str === year) {
                    continue;
                }
                $element.innerText = year;
            }
            return true;
        }
    };
})();
