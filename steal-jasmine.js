'format amd';
define(['jasmine-core/lib/jasmine-core/jasmine',
    'jasmine-core/lib/jasmine-core/jasmine-html',
    'jasmine-core/lib/jasmine-core/boot',
    'jasmine-core/lib/jasmine-core/jasmine.css!'], function(jasmineRequire) {
        steal.done().then(function(){
            window.onload();
        });
        return jasmineRequire;
});
