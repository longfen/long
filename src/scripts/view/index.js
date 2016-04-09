var IScroll=require('iScroll/iscroll-probe.js');
var $=require("jquery.js");

 

    var myScroll = new IScroll('#section', {
        probeType: 3,
        scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
    });
    myScroll.scrollBy(0, -30);

    var head = $('.xiala img'),
        topImgHasClass = head.hasClass('up');
    var foot = $('.foot img'),
        bottomImgHasClass = head.hasClass('down');
    myScroll.on('scroll', function () {
        var y = this.y,
            maxY = this.maxScrollY - y;
        if (y >= 0) {
            !topImgHasClass && head.addClass('up');
            return '';
        }
        if (maxY >= 0) {
            !bottomImgHasClass && foot.addClass('down');
            return '';
        }
    });
    myScroll.on('scrollEnd', function () {
        if (this.y >= -30 && this.y < 0) {
            myScroll.scrollTo(0, -30);
            head.removeClass('up');
        } else if (this.y >= 0) {
            head.attr('src', 'img/img/ajax-loader.gif');
            //TODO ajax下拉刷新数据
            setTimeout(function () {
                myScroll.scrollTo(0, -30);
                head.removeClass('up');
                head.attr('src', 'img/img/arrow.png');
            }, 1000);
        }
        var maxY = this.maxScrollY - this.y;
        if (maxY > -30 && maxY < 0) {
            var self = this;
            myScroll.scrollTo(0, self.maxScrollY + 100);
            foot.removeClass('down')
        } else if (maxY >= 0) {
            foot.attr('src', 'img/img/ajax-loader.gif');
            //TODO ajax上拉加载数据
            var self = this;
            setTimeout(function () {
                $('.foot').before( 
                    '<div class="content-list"><div class="content-L"><img src="img/img/list3.png" /></div><div class="content-C"><p class="content-p1">免费云同步的最美记账应用</p><p class="content-p2">财务</p><p class="content-p3">&#xe714;&#xe714;&#xe714;&#xe714;&#xe715;<span>(50)</span></p></div><div class="content-R"><div class="btn">￥ 18.00<p class="jia">&#xe681;</p></div></div></div>'+
                    '<div class="content-list"><div class="content-L"><img src="img/img/list3.png" /></div><div class="content-C"><p class="content-p1">免费云同步的最美记账应用</p><p class="content-p2">财务</p><p class="content-p3">&#xe714;&#xe714;&#xe714;&#xe714;&#xe715;<span>(50)</span></p></div><div class="content-R"><div class="btn">￥ 18.00<p class="jia">&#xe681;</p></div></div></div>'+
                    '<div class="content-list"><div class="content-L"><img src="img/img/list2.png" /></div><div class="content-C"><p class="content-p1">小绿帽</p><p class="content-p2">图书</p><p class="content-p3">&#xe714;&#xe714;&#xe714;&#xe714;&#xe715;<span>(50)</span></p></div><div class="content-R"><div class="btn">￥ 18.00<p class="jia">&#xe681;</p></div></div></div>'+
                    '<div class="content-list"><div class="content-L"><img src="img/img/list1.png" /></div><div class="content-C"><p class="content-p1">Remixlive - Play loops on pads.</p><p class="content-p2">音乐</p><p class="content-p3">&#xe714;&#xe714;&#xe714;&#xe714;&#xe715;<span>(52)</span></p></div><div class="content-R"><div class="btn">获取<p class="jia">&#xe681;</p></div></div></div>'
                    );
                myScroll.refresh();
                myScroll.scrollTo(0, self.y + -100);
                foot.removeClass('down');
                foot.attr('src', 'img/img/arrow.png');
            }, 1000);
        }
    })

