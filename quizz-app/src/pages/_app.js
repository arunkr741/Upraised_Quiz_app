import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import styles from './page.module.css'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className={styles.mainContainer}>
          <Component {...pageProps} />
        </div>
    </RecoilRoot>
  );
}
