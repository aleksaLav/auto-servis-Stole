!function(a){a.fn.extend({easyResponsiveTabs:function(t){var e=t=a.extend({type:"default",width:"auto",fit:!0},t),s=e.type,i=e.fit,r=e.width,n="vertical",c="accordion";this.each(function(){var t,e=a(this);e.find("ul.resp-tabs-list li").addClass("resp-tab-item"),e.css({display:"block",width:r}),e.find(".resp-tabs-container > div").addClass("resp-tab-content"),function(){s==n&&e.addClass("resp-vtabs");1==i&&e.css({width:"100%",margin:"0px"});s==c&&(e.addClass("resp-easy-accordion"),e.find(".resp-tabs-list").css("display","none"))}(),e.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");var o=0;e.find(".resp-accordion").each(function(){t=a(this);var s=e.find(".resp-tab-item:eq("+o+")").text();e.find(".resp-accordion:eq("+o+")").append(s),t.attr("aria-controls","tab_item-"+o),o++});var d=0;e.find(".resp-tab-item").each(function(){$tabItem=a(this),$tabItem.attr("aria-controls","tab_item-"+d),$tabItem.attr("role","tab"),e.find(".resp-tab-item").first().addClass("resp-tab-active"),e.find(".resp-accordion").first().addClass("resp-tab-active"),e.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style","display:block");var t=0;e.find(".resp-tab-content").each(function(){a(this).attr("aria-labelledby","tab_item-"+t),t++}),d++}),e.find("[role=tab]").each(function(){var t=a(this);t.click(function(){var s=t.attr("aria-controls");if(t.hasClass("resp-accordion")&&t.hasClass("resp-tab-active"))return e.find(".resp-tab-content-active").slideUp("",function(){a(this).addClass("resp-accordion-closed")}),t.removeClass("resp-tab-active"),!1;!t.hasClass("resp-tab-active")&&t.hasClass("resp-accordion")?(e.find(".resp-tab-active").removeClass("resp-tab-active"),e.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),e.find("[aria-controls="+s+"]").addClass("resp-tab-active"),e.find(".resp-tab-content[aria-labelledby = "+s+"]").slideDown().addClass("resp-tab-content-active")):(e.find(".resp-tab-active").removeClass("resp-tab-active"),e.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),e.find("[aria-controls="+s+"]").addClass("resp-tab-active"),e.find(".resp-tab-content[aria-labelledby = "+s+"]").addClass("resp-tab-content-active").attr("style","display:block"))}),a(window).resize(function(){e.find(".resp-accordion-closed").removeAttr("style")})})})}})}(jQuery);