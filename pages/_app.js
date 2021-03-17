import "@styles/globals.scss";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Site</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          crossorigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          crossorigin="anonymous"
        />
        <script src="/CustomJs.js"/>
      </Head>
      <div className="container-fluid p-0">
        <Header title="LOGO" />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default Application;
