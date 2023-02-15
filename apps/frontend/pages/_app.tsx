import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
// import 'tailwindcss/tailwind.css';
// import "../styles/global.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Provider store={store}>
      <main className="app">
        <Component {...pageProps} />
      </main>
      </Provider>
    </>
  );
}

export default CustomApp;
