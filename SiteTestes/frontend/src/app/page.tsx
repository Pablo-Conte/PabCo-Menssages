import './home.css';
import { GitHubIcon, SentIcon, Chevron } from '@/components/icons';
import { Lexend } from 'next/font/google';
import Link from 'next/link';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const Home = () => {
  return (
    <body className={`bg-[#E9E9E9] ${lexend}`}>
      <header>
        <Link href="/login">
          <div className="loginButton">
            <Chevron className="chevron" />
          </div>
        </Link>
      </header>
      <main>
        <div className="information">
          <div className="appInformation">
            <SentIcon className="SentIcon" />
            <h1>PabCo Messages</h1>
            <h2>Real Time Messages</h2>
            <h3>Test Application</h3>
          </div>
          <div className="devInformation">
            <a href="https://github.com/pablo-conte" target="_blank">
              <div className="linkToSocialMedia">
                <GitHubIcon className="githubIcon" />
                <p className="font-bold">Pablo Conte Correa</p>
              </div>
            </a>
          </div>
        </div>
        <div></div>
      </main>
    </body>
  );
};

export default Home;
