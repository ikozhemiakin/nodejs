// подключение express
const express = require("express");
require('../app');
const jsdom = require("jsdom");
// создаем объект приложения
const app = express();

function validate(entry) {
    if (entry.charAt(0) == '+') {
        entry = entry.substring(1, entry.length);
        searchType = SEARCHURL;
    } else if (entry.substring(0, 4) == "url:") {
        entry.substring(5, entry.length);
    } else {
        searchType = SEARCHANY;
    }
    while (entry.charAt(0) == ' ') {
        entry = entry.substring(1, entry.length);
        document.forms[0].query.value = entry;
    }
    while (entry.charAt(entry.length - 1) == ' ') {
        entry = entry.substring(0, entry.length - 1);
        document.forms[0].query.value = entry;
    }
    if (entry.length < 3) {
        alert("You cannot search strings that small. Elaborate a little.");
        document.forms[0].query.focus();
        return;
    }
    convertString(entry);
}

function convertString(reentry) {
    var searchArray = reentry.split(" ");
    if (searchType = (SEARCHANY | SEARCHALL)) {
        //requireAll(searchArray);
    } else {
        allowAny(searchArray);
    }
}

function allowAny(t) {
    var findings = [0];

    for (var i = 0; i < profiles.length; i++) {
        var compareElement = profiles[i].toUpperCase();
        if (searchType == SEARCHANY) {
            var refineElement = compareElement.substring(0, compareElement.indexOf('|HTTP'))
        } else {
            var refineElement = compareElement.substring(compareElement.indexOf('|HTTP'), compareElement.length);
        }
        for (var j = 0; j < t.length; j++) {
            var compareString = t[j].toUpperCase();
            if (refineElement.indexOf(compareString) != -1) {
                findings[findings.length] = profiles[i];
                break;
            }
        }
    }
//     verifyManage(findings);
}

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
app.use("/about", function(request, response){
    let id = request.query.id;
    let search = request.query.search;
    GLOBAL.document = new JSDOM(html).window.document;
    response.send("<TABLE WIDTH=\"95%\" BORDER=\"0\" ALIGN=\"CENTER\">\n" +
        "    <TR>\n" +
        "        <TD VALIGN=MIDDLE>\n" +
        "            <FONT FACE=\"Arial\">\n" +
        "                <B>Client-Side Search Engine</B>\n" +
        "            </FONT>\n" +
        "        </TD>\n" +
        "        <TD>\n" +
        "            <FORM id=\"search\" NAME=\"search\">\n" +
        "                <INPUT type=\"text\" name=\"search\" Size=\"33\">\n" +
        "                <INPUT TYPE=\"hidden\" name=\"standin\" value=\"\">\n" +
        "            </FORM>\n" +
        "        </TD>\n" +
        "        <TD>\n" +
        "            <div class=\"centered\">\n" +
        "            </div>\n" +
        "            <div data-foo=0></div>\n" +
        "            <div data-foo=1></div>\n" +
        "        </TD>\n" +
        "        <TD VALIGN=\"ABSMIDDLE\">\n" +
        "            <FONT FACE=\"Arial\">\n" +
        "                <B><A href=\"main.html\" target=\"main\">Help</A></B>\n" +
        "            </FONT>\n" +
        "        </TD>\n" +
        "    </TR>\n" +
        "</TABLE>" +
        "<h1>Информация</h1><p>name=" + search + "</p>");
    validate(document.forms[0].query.value);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3001);
