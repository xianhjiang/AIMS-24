function loadPage(pageName) {
        console.log(pageName)
        document.getElementById('PageContent').src = pageName;
    }

// 获取固定定位的 div 相对于文档顶部的距离，包括滚动距离
window.addEventListener('scroll', function() {
    var masthead = document.querySelector('.masthead');
    var titles = document.querySelectorAll('#title1 a');
    var mastheadHeight = masthead.offsetHeight;

    var fixedDiv = document.getElementById('title1');
    var fixedDivTop = fixedDiv.getBoundingClientRect().top + window.scrollY;
    // console.log('距离文档顶部的距离（包括滚动距离）：', fixedDivTop);
    // console.log("mastheadHeight"+mastheadHeight)
    if (fixedDivTop > mastheadHeight) {
            // 如果滚动超过阈值，将链接文字颜色改为黑色
            titles.forEach(link => {
                link.style.color = 'black';             
            });
        } else {
            // 滚动未超过阈值，将链接文字颜色还原为初始颜色
            titles.forEach(link => {
            link.style.color = 'white'; // 还原默认颜色，也可以是其他颜色值
        });
    }

});