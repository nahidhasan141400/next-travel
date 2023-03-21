import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loader from "../components/util/Loader/loader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Loader>
      <Component {...pageProps} />
    </Loader>
  );
}
