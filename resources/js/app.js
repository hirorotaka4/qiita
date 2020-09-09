require("./bootstrap");

// ここから追記する

import marked from "marked";

// マークダウンをプレビュー画面に表示する
$(function() {
    marked.setOptions({
        langPrefix: "",
        breaks: true,
        sanitize: true
    });

    $("#markdown_editor_textarea").keyup(function() {
        var html = marked(getHtml($(this).val()));
        $("#markdown_preview").html(html);
    });

    // ここから追記する

    // 個別の記事画面のマークダウンをHTMLに変換する
    var target = $(".item-body");
    var html = marked(getHtml(target.html()));
    $(".item-body").html(html);

    // ここまで追記する

    // 比較演算子が &lt; 等になるので置換
    function getHtml(html) {
        html = html.replace(/&lt;/g, "<");
        html = html.replace(/&gt;/g, ">");
        html = html.replace(/&amp;/g, "&");
        return html;
    }
});

// ここまで追記する
