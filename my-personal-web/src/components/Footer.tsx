import { Button, Icon } from 'react-bulma-components';
import packageJson from '../../package.json';

const { version } = packageJson;

export default function Footer() {
  return (
    <footer className="footer has-background-white-ter">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content has-text-centered">
              <p>
                © 2023 <strong>My Personal Web</strong> made with
                <Icon color="primary">
                  <i className="fa-solid fa-heart" />
                </Icon>
                by{' '}
                <a href="https://berviantoleo.my.id/">Bervianto Leo Pratama</a>.
              </p>
              <p>
                The source code is licensed
                <a href="https://opensource.org/licenses/mit-license.php">
                  {' '}
                  MIT
                </a>
                . The website content is licensed
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                  {' '}
                  CC BY NC SA 4.0
                </a>
                .
              </p>
              <p>
                Version <strong>{version}</strong>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content has-text-centered">
              <p>
                <a
                  href="https://github.com/bervProject/my-personal-web"
                  target="_blank"
                >
                  <Button color="primary">Github</Button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
