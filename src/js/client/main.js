define(['jquery', 'modules/app.module', 'modules/nav.module', 'modules/home.module'], function ($, AppModule, NavModule, HomeModule) {
  var args = Array.prototype.slice.call(arguments);

  $(document).ready(function () {
    args.forEach(function (value) {
      if((typeof value === 'object') && ('__$init' in value)) {
        value.__$init();
      }
    })
  })
});