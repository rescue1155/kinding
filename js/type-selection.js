document.getElementById("type-button-watch").addEventListener("click", () => {
    chrome.tabs.create({url : "https://www.google.com/search?sxsrf=ALeKk02YaTvLvu9y0HlE60FAYy88ece12w%3A1587782167542&source=hp&ei=F6KjXp_OHsjT-wTa8r54&q=watch&oq=watch&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQgwEyAggAMgUIABCDATICCAAyAggAMgIIADoECCMQJzoHCAAQgwEQQ1DtCFiDDmDIEWgBcAB4AIABa4gB0wOSAQM0LjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjftczAxYLpAhXI6Z4KHVq5Dw8Q4dUDCAk&uact=5", index : 0})
});

document.getElementById("type-button-listen").addEventListener("click", () => {
    chrome.tabs.create({url : "https://www.google.com/search?sxsrf=ALeKk02uTSCsAz9Ljwo7PD2wvlzg4CC6iw%3A1587782427225&ei=G6OjXvGxDcqE-gTHk42ABA&q=listen&oq=listen&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQgwEyAggAMgIIADICCAAyAggAMgUIABCDAToECAAQRzoECCMQJ1DUDVjGEWCYFGgAcAN4AIABa4gBjwSSAQM1LjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwixq7i8xoLpAhVKgp4KHcdJA0AQ4dUDCAw&uact=5", index : 0})
});

document.getElementById("type-button-read").addEventListener("click", () => {
    chrome.tabs.create({url : "https://www.google.com/search?sxsrf=ALeKk01cH926cO_s4JKHt7XiCd0oKcWF5w%3A1587782170199&ei=GqKjXojdC8_b-wTk_6LYDQ&q=read&oq=read&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzICCAAyAggAMgIIADICCAA6BAgAEEc6BQgAEIMBUK_JD1jXyw9g-c4PaABwBHgAgAFmiAHyApIBAzMuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiI0vDBxYLpAhXP7Z4KHeS_CNsQ4dUDCAw&uact=5", index : 0})
});

document.getElementById("type-button-play").addEventListener("click", () => {
    chrome.tabs.create({url : "https://www.google.com/search?sxsrf=ALeKk02uTSCsAz9Ljwo7PD2wvlzg4CC6iw%3A1587782427225&ei=G6OjXvGxDcqE-gTHk42ABA&q=play&oq=play&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIECAAQQzIECAAQQzICCAAyBAgAEEMyAggAMgIIADICCAAyAggAMgIIADoECAAQRzoECCMQJzoFCAAQgwFQ4klY2kxg5E5oAHADeACAAVqIAdwCkgEBNJgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwixq7i8xoLpAhVKgp4KHcdJA0AQ4dUDCAw&uact=5", index : 0, active : false},
    function (tab) {
        chrome.tabs.highlight({tabs:0})
    });
});