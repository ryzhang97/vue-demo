require('./index.css');
import printMe from '../js/print.js';
function component() {
    new Vue({
        el: '.hello',
        data: {
            message: 'vue'
        }
    });
}
component();

if (module.hot) {
    module.hot.accept('./index.js', function() {
        // printMe();
        component();
    })
}