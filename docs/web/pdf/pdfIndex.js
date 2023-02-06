// var url = location.search.substring(1);
// console.log(location.search.substring(1));

function getQueryString(name) {

    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

    var r = location.search.substring(1).match(reg);
    if(r != null){
        var v = r[2];
        v = decodeURIComponent(v);
        return v;
    }
    return null;
    // if(r!=null)return unescape(r[2]); return null;

}
// var url = getQueryString('url')

PDFJS.cMapUrl = 'https://unpkg.com/pdfjs-dist@1.9.426/cmaps/';
PDFJS.cMapPacked = true;

var pdfDoc = null;

function createPage() {
    var div = document.createElement("canvas");
    document.body.appendChild(div);
    return div;
}

function renderPage(num) {
    pdfDoc.getPage(num).then(function (page) {
        var viewport = page.getViewport(2.0);
        var canvas = createPage();
        var ctx = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}

// PDFJS.getDocument(url).then(function (pdf) {
//     var wait = document.getElementById("pdf_wait");
//     if(wait != null){
//         wait.hidden = true;
//     }
//
//     pdfDoc = pdf;
//     for (var i = 1; i <= pdfDoc.numPages; i++) {
//         renderPage(i)
//     }
// });

function getDocument(url) {
    PDFJS.getDocument(url).then(function (pdf) {
        var wait = document.getElementById("pdf_wait");
        if(wait != null){
            wait.hidden = true;
        }

        pdfDoc = pdf;
        for (var i = 1; i <= pdfDoc.numPages; i++) {
            renderPage(i)
        }
    });
}

