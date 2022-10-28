import { Layout } from 'antd';
import { ReactComponent as Github } from '@/assets/github.svg';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Discord } from '@/assets/discord.svg';
import { ReactComponent as Medium } from '@/assets/medium.svg';
import { ReactComponent as Telegram } from '@/assets/telegram.svg';
import { ReactComponent as Youtube } from '@/assets/youtube.svg';
import { ReactComponent as Gitbook } from '@/assets/gitbook.svg';
import styles from './index.less';
const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <div className={styles.connect}>
        <a
          target="_blank"
          href="https://keep-finance.gitbook.io/keep-finance/"
          title="Gitbook"
        >
          <Gitbook />
        </a>
        <a
          target="_blank"
          href="https://github.com/KEEP-Finance"
          title="Github"
        >
          <Github />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/Keep_Finance"
          title="Twitter"
        >
          <Twitter />
        </a>
        <a target="_blank" href="https://t.me/Keep_Finance" title="Telegram">
          <Telegram />
        </a>
      </div>
    </Layout.Footer>
  );
};
export default Footer;
