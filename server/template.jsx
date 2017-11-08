export default ({ markup, helmet }) => `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id="root" style="height: 100%">${markup}</div>
  <script src="/dist/client.js" async></script>
</body>
</html>`;
