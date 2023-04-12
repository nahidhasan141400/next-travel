import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/util/Loader/loader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Loader>
      <ToastContainer />
      <Component {...pageProps} />
    </Loader>
  );
}
