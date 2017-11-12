export default ({ markup, helmet }) => `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}


  <!-- Favicons -->
  <link rel="apple-touch-icon" href="/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
  <link rel="icon" href="/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="manifest" href="/assets/img/favicons/manifest.json">
  <link rel="mask-icon" href="/assets/img/favicons/safari-pinned-tab.svg" color="#563d7c">
  <link rel="icon" href="/favicon.ico">
  <meta name="msapplication-config" content="/assets/img/favicons/browserconfig.xml">
  <meta name="theme-color" content="#563d7c">


  <!-- Meta -->
  <meta name="description" content="The most popular HTML, CSS, and JS library in the world.">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">

  <!-- Twitter -->
  <meta name="twitter:site" content="@getbootstrap">
  <meta name="twitter:creator" content="@getbootstrap">


  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bootstrap">
  <meta name="twitter:description" content="The most popular HTML, CSS, and JS library in the world.">
  <meta name="twitter:image" content="https://getbootstrap.com/assets/brand/bootstrap-social.png">


  <!-- Facebook -->

  <meta property="og:url" content="https://getbootstrap.com">
  <meta property="og:title" content="Bootstrap">
  <meta property="og:description" content="The most popular HTML, CSS, and JS library in the world.">

  <meta property="og:image" content="http://getbootstrap.com/assets/brand/bootstrap-social.png">
  <meta property="og:image:secure_url" content="https://getbootstrap.com/assets/brand/bootstrap-social.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">


  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-146052-10', 'getbootstrap.com');
  ga('send', 'pageview');
  </script>



  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css" />
  <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
      integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

</head>
<body ${helmet.bodyAttributes.toString()}>
  <div id="root" style="height: 100%">${markup}</div>
  <script src="/dist/client.js"></script>
</body>
</html>`;
