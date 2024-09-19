function getStr(langs, key) {
    var table = langs[key];
    if(table == null) {
        return "key";
    } else {
        var str;
        var lan = navigator.language;
        if(lan.search("zh") >= 0) {
            str = table["zh_cn"];
        } else if(lan.search("ko") >= 0) {
            str = table["ko_kr"];
        }
        if(str == null) {
            str = table["en"];
        }
        if(str == null) {
            str = key;
        }
        return str;
    }
}