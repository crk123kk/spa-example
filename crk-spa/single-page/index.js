/**
 * @author:crk
 * @description:这个是关于spa(单页面应用的实例代码),
 * 通过监听hash的变化来控制加载的页面从而控制页面的变化
 */



/**
 * 监听hash的值是否变化
 * 根据hash的变化做不同的处理
 */
window.addEventListener('hashchange', function () {
    let _hashValue = location.hash.split("?");
    let _fileName = _hashValue[0].split("#")[1];
    this.loadPage(_fileName);
})

/**
 * 根据传入的文件名来加载不同的页面进而在单页面的主体中呈现加载的内容出来
 * @param fileName 
 */
function loadPage(fileName) {
    let _body = document.getElementsByTagName('body')[0];
    let _scriptFile = document.createElement('script');
    _scriptFile.type = 'text/javascript';
    _scriptFile.src = "./page/"+fileName+".js";
    _scriptFile.async = true;
    _body.appendChild(_scriptFile);
}