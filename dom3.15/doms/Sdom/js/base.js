
// wv util
//1,获取节点
//使用： 
// query('要获取的节点')；
function query(dom) {
    const obj = document.querySelectorAll(dom);
    return obj.length > 1 ? obj : obj[0];
}
//////////////////////////////////////////////////////
//2，选项卡
//前提： 给按钮加 class：'tabs-btn',要切换的内容加class:'tabs-item',给他们共同的父级加class：'tabs-wrap';
//使用：	
// tabsChange([{
// 		changeClass: 'on1'//第一个选项卡要切换的class
// }, {
// 	changeClass: 'on2'//第二个选项卡要切换的class......
// }])
function tabsChange(config) {
    const tabsWrap = document.querySelectorAll('.tabs-wrap');
    for (let i = 0; i < tabsWrap.length; i++) {
        let tabsBtn = tabsWrap[i].querySelectorAll('.tabs-btn');
        let tabsItem = tabsWrap[i].querySelectorAll('.tabs-item');
        for (let j = 0; j < tabsBtn.length; j++) {
            tabsItem[j + 1] ? tabsItem[j + 1].style.display = 'none' : '';
            tabsBtn[j].addEventListener('click', () => {
                for (let k = 0; k < tabsBtn.length; k++) {
                    tabsBtn[k].classList.remove(config[i].changeClass);
                    tabsItem[k].style.display = 'none';
                }
                tabsBtn[j].classList.add(config[i].changeClass);
                tabsItem[j].style.display = 'block';
            })
        }
    }
}
///////////////////////////////////////////////////



////////////////////////////////////////////////////


window.onload = function () {






}



//////////////////////////////////////////////////////////////////////////////////
//图片懒加载
function isInSight(el) {
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    //如果只考虑向下滚动加载
    //const clientWidth=window.innerWeight;
    return bound.top <= clientHeight + 100;
}

let index = 0;
function checkImgs() {
    const imgs = document.querySelectorAll('.my-photo');
    for (let i = index; i < imgs.length; i++) {
        if (isInSight(imgs[i])) {
            loadImg(imgs[i]);
            index = i;
        }
    }
    // Array.from(imgs).forEach(el => {
    //   if (isInSight(el)) {
    //     loadImg(el);
    //   }
    // })
}

function loadImg(el) {
    if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
    }
}

function throttle(fn, mustRun = 500) {
    const timer = null;
    let previous = null;
    return function () {
        const now = new Date();
        const context = this;
        const args = arguments;
        if (!previous) {
            previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
            fn.apply(context, args);
            previous = now;
        }
    }
}






