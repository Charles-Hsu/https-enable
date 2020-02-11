# https-enable

為了使用 facebook messager 來發送訊息, 啟動 https 給 6e.com.tw 以及 cloth2.tw

[How to get FREE SSL Certificate for Website (HTTPS) ?](https://geekflare.com/free-ssl-tls-certificate/)

以前用 Let’s Encrypt, 但都沒有成功, 這次改用 [SSL For Free](https://geekflare.com/free-ssl-tls-certificate/)

![](https://github.com/Charles-Hsu/https-enable/blob/master/ssl-for-free-1.png)

填幾個 domain name 就會產生幾個檔案下載驗證

選擇 Manual Verification

![](https://github.com/Charles-Hsu/https-enable/blob/master/ssl-for-free-2.png)

依照上面的只是一步步完成即可, 最後把檔案下載下來, 解壓縮, 放到網站的根目錄

編輯 https.conf.js

    var fs = require("fs");

    module.exports = {
	    cert: fs.readFileSync(__dirname + "/certificate.crt"),
	    key: fs.readFileSync(__dirname + "/private.key"),
	    passphrase: "12345"
    };
    
執行, sudo 是因為 port 443 必須要 root 的權限

    $ sudo live-server --https=https.conf.js --port=443
    
之後到瀏覽器執行 https://cloth2.tw, https://www.cloth2.tw, https://6e.com.tw 或者 https://www.6e.com.tw 就可以瀏覽 https 的網站了
