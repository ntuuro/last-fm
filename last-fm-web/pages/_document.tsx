import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Last.fm | Play songs, Find music</title>
      <link rel="shortcut icon" href="images/lastfm_flat.png" />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/bootstrap-grid.min.css" rel="stylesheet" />
      <link href="css/bootstrap-reboot.min.css" rel="stylesheet" />
      <link href="css/font-awesome.min.css" rel="stylesheet" />
      <link href="css/last.fm_ui.css" rel="stylesheet" />
      <link href="css/index.css" rel="stylesheet" />
      <link href="css/animate.css" rel="stylesheet" />
      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      <link rel="stylesheet" href="css/owl.theme.default.min.css" />
      <link href="fonts/style.css" rel="stylesheet" />
      <link href="css/sweetalert.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />

      <script
        src="https://kit.fontawesome.com/4cffa8630a.js"
        crossOrigin="anonymous"
      ></script>
      <Head />
      <body id="page-top" className="index">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
