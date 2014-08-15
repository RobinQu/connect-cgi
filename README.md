connect-cgi
===========



## TL; DR


```
var app = require("express"),
    cgi = require("connect-cgi");

app.get("/php", cgi({
  //Document root
  root: "./php-app-root/",
  //Gateway script, optional
  script: "index.php",
  //cgi bin to execute, optional
  cgi: "php-cgi",
  //stderr to which cgi bin is piped, optional
  stderr: process.stderr
}));
app.listen(9000);

```

## Configuration

See `options` at [cgi-run](https://github.com/RobinQu/cgi-run)

## License

MIT