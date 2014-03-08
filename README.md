# sconfuse malware [![NPM version](https://badge.fury.io/js/sconfuse.png)](http://badge.fury.io/js/sconfuse)

Sconfuse malware by converting all of your html tags into entities. Ripped from the headlines of
[@jennschiffer](https://github.com/jennschiffer)'s incredibly eye-opening DHTMLConf talk about the dangers of malware
and also an MIT thread somewhere.

### Install
```npm install -g sconfuse```

### Usage
```
$ cat index.htm
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>V.I.R.U.S</title>
</head>
<body>
  <img src="http://stream1.gifsoup.com/view3/4746482/swordfish-hacker-o.gif" />
</body>
</html>

```

```
$ sconfuse index.htm
&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;V.I.R.U.S&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;img src=&quot;http://stream1.gifsoup.com/view3/4746482/swordfish-hacker-o.gif&quot; /&gt;
&lt;/body&gt;
&lt;/html&gt;
```
