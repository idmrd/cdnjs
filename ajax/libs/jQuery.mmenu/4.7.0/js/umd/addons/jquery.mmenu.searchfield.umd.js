(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",a="searchfield";e[n].addons[a]={_init:function(n){var l=this,i=this.opts[a],d=this.conf[a];if(i.add){switch(i.addTo){case"menu":var c=this.$menu;break;case"panels":var c=n;break;default:var c=e(i.addTo,this.$menu).filter("."+t.panel)}c.length&&c.each(function(){var s=e(this),n=s.is("."+t.menu)?d.form?"form":"div":"li";if(!s.children(n+"."+t.search).length){if(s.is("."+t.menu))var a=l.$menu,r="prependTo";else var a=s.children().first(),r=a.is("."+t.subtitle)?"insertAfter":"insertBefore";var o=e("<"+n+' class="'+t.search+'" />');if("form"==n&&"object"==typeof d.form)for(var c in d.form)o.attr(c,d.form[c]);o.append('<input placeholder="'+i.placeholder+'" type="text" autocomplete="off" />'),o[r](a)}i.noResults&&(s.is("."+t.menu)&&(s=s.children("."+t.panel).first()),n=s.is("."+t.list)?"li":"div",s.children(n+"."+t.noresultsmsg).length||e("<"+n+' class="'+t.noresultsmsg+'" />').html(i.noResults).appendTo(s))})}if(this.$menu.children("."+t.search).length&&this.$menu.addClass(t.hassearch),i.search){var h=e("."+t.search,this.$menu);h.length&&h.each(function(){var n=e(this);if("menu"==i.addTo)var a=e("."+t.panel,l.$menu),d=l.$menu;else var a=n.closest("."+t.panel),d=a;var c=n.children("input"),h=l.__findAddBack(a,"."+t.list).children("li"),u=h.filter("."+t.label),f=h.not("."+t.subtitle).not("."+t.label).not("."+t.search).not("."+t.noresultsmsg),p="> a";i.showLinksOnly||(p+=", > span"),c.off(o.keyup+" "+o.change).on(o.keyup,function(e){s(e.keyCode)||n.trigger(o.search)}).on(o.change,function(){n.trigger(o.search)}),n.off(o.reset+" "+o.search).on(o.reset+" "+o.search,function(e){e.stopPropagation()}).on(o.reset,function(){n.trigger(o.search,[""])}).on(o.search,function(s,n){"string"==typeof n?c.val(n):n=c.val(),n=n.toLowerCase(),a.scrollTop(0),f.add(u).addClass(t.hidden),f.each(function(){var s=e(this);e(p,s).text().toLowerCase().indexOf(n)>-1&&s.add(s.prevAll("."+t.label).first()).removeClass(t.hidden)}),e(a.get().reverse()).each(function(s){var n=e(this),a=n.data(r.parent);if(a){var d=n.add(n.find("> ."+t.list)).find("> li").not("."+t.subtitle).not("."+t.search).not("."+t.noresultsmsg).not("."+t.label).not("."+t.hidden);d.length?a.removeClass(t.hidden).removeClass(t.nosubresults).prevAll("."+t.label).first().removeClass(t.hidden):"menu"==i.addTo&&(n.hasClass(t.opened)&&setTimeout(function(){a.trigger(o.open)},1.5*(s+1)*l.conf.openingInterval),a.addClass(t.nosubresults))}}),d[f.not("."+t.hidden).length?"removeClass":"addClass"](t.noresults),l._update()})})}},_setup:function(){var s=this.opts[a];this.conf[a],"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[n].defaults[a],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo)},_add:function(){t=e[n]._c,r=e[n]._d,o=e[n]._e,t.add("search hassearch noresultsmsg noresults nosubresults"),o.add("search reset change"),l=e[n].glbl}},e[n].defaults[a]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."};var t,r,o,l}(jQuery);
}));