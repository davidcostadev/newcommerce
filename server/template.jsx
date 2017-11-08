export default ({ markup, helmet }) => `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">
</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id="root" style="height: 100%">${markup}</div>
  <script src="/dist/client.js" async></script>
</body>
</html>`;
