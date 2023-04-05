import AppLoadingLoader from "@/components/Loaders/AppLoadingLoader";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
  loading: () => <AppLoadingLoader />,
});
