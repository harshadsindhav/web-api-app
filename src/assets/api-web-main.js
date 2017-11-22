$(window).load(function () {
    console.log("testttttttttttttt");

   /* $('li').each(function () {
        console.log("harshad testt");
        var that = $(this);
        var header = that.children('h4');
        var body = that.children('ul');
        body.hide();
        header.toggle(
            function () { body.slideDown('fast'); },
            function () { body.slideUp('fast');  }
        );
    });
*/
    /*$('.collapsible-menu').on('click', '> li > h4', function () {
        console.log("harshad");
        var self = $(this);
        var el = self.find('+ ul');
        console.log(el);
        //self.toggleClass('expanded').toggleClass('collapsed');
        if (el.hasClass('collapsed')) {
            el.slideUp('medium');
        }
        else {
            el.slideDown('medium');
        }
    });
    */

    

    //$('.collapsible-menu a.expanded').toggleClass('expanded').toggleClass('collapsed').click();
});