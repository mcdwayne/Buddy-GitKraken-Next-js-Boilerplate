import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Buddy + GitKraken"
        description="Improve your continuous integration and continuous deployment while learning how to set up and manage your NextJS site, from the initial theme cloning to final production on Netlify, using GitKraken and Buddy. Register for free webinar on June 22."
      />
    )}
  >
    <a href="https://github.com/ixartz/Next-js-Boilerplate">
      <img
        src={`${process.env.baseUrl}/assets/images/buddy-webinar-hero.png`}
        alt="Nextjs starter banner"
      />
    </a>
    <h1 className="font-bold text-2xl">
      HELLO WORLD!
    </h1>
    
    <div className="row">
      <div className="column">
        <img alt="Maciek Palmowski" src="https://1v5ymx3zt3y73fq5gy23rtnc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/maciek-palmowski-300x300.jpg" width="100%"></img>
      </div>
      <div className="column">
        <img alt="Dwayne McDaniel" src="https://1v5ymx3zt3y73fq5gy23rtnc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/dwayne-mcdaniel-300x300.jpg" width="100%"></img>
      </div>
    </div>

    <p>
      <span role="img" aria-label="rocket">
        🚀
      </span>
      {' '}
      This page is based on the Next.js Boilerplate.
      {' '}
      <span role="img" aria-label="zap">
        ⚡️
      </span>
      {' '}
      Made with
      {' '}
      <a href="https://nextjs.org" rel="nofollow">
        Next.js
      </a>
      ,
      {' '}
      <a href="https://eslint.org" rel="nofollow">
        ESLint
      </a>
      ,
      {' '}
      <a href="https://prettier.io" rel="nofollow">
        Prettier
      </a>
      ,
      {' '}
      <a href="https://postcss.org" rel="nofollow">
        PostCSS
      </a>
      ,
      {' '}
      <a href="https://tailwindcss.com" rel="nofollow">
        Tailwind CSS
      </a>
      .
    </p>
    <h2 className="font-semibold text-lg">Next js Boilerplate Features</h2>
    <p>Developer experience first:</p>
    <ul>
      <li>
        <span role="img" aria-label="fire">
          🔥
        </span>
        {' '}
        <a href="https://nextjs.org" rel="nofollow">
          Next.js
        </a>
        {' '}
        for Static Site Generator
      </li>
      <li>
        <span role="img" aria-label="art">
          🎨
        </span>
        {' '}
        Integrate with
        {' '}
        <a href="https://tailwindcss.com" rel="nofollow">
          Tailwind CSS
        </a>
      </li>
      <li>
        <span role="img" aria-label="nail_care">
          💅
        </span>
        {' '}
        <a href="https://postcss.org" rel="nofollow">
          PostCSS
        </a>
        {' '}
        for processing
        {' '}
        <a href="https://tailwindcss.com" rel="nofollow">
          Tailwind CSS
        </a>
      </li>
      <li>
        <span role="img" aria-label="tada">
          🎉
        </span>
        {' '}
        Type checking Typescript
      </li>
      <li>
        <span role="img" aria-label="pencil2">
          ✏️
        </span>
        {' '}
        Linter with
        {' '}
        <a href="https://eslint.org" rel="nofollow">
          ESLint
        </a>
      </li>
      <li>
        <span role="img" aria-label="hammer_and_wrench">
          🛠
        </span>
        {' '}
        Code Formatter with
        {' '}
        <a href="https://prettier.io" rel="nofollow">
          Prettier
        </a>
      </li>
      <li>
        <span role="img" aria-label="fox_face">
          🦊
        </span>
        {' '}
        SEO metadata,
        {' '}
        <a
          href="https://developers.google.com/search/docs/guides/intro-structured-data"
          rel="nofollow"
        >
          JSON-LD
        </a>
        {' '}
        and
        {' '}
        <a href="https://ogp.me/" rel="nofollow">
          Open Graph
        </a>
        {' '}
        tags with
        {' '}
        <a href="https://github.com/garmeeh/next-seo">Next SEO</a>
      </li>
      <li>
        <span role="img" aria-label="rainbow">
          🌈
        </span>
        {' '}
        Include a FREE minimalist theme
      </li>
      <li>
        <span role="img" aria-label="hundred">
          💯
        </span>
        {' '}
        Maximize lighthouse score
      </li>
    </ul>
    <p>Built-in feature from Next.js:</p>
    <ul>
      <li>
        <span role="img" aria-label="coffee">
          ☕
        </span>
        {' '}
        Minify HTML &amp; CSS
      </li>
      <li>
        <span role="img" aria-label="dash">
          💨
        </span>
        {' '}
        Live reload
      </li>
      <li>
        <span role="img" aria-label="white_check_mark">
          ✅
        </span>
        {' '}
        Cache busting
      </li>
    </ul>
    <h2 className="font-semibold text-lg">Our Stater code Philosophy</h2>
    <ul>
      <li>Minimal code</li>
      <li>SEO-friendly</li>
      <li>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        {' '}
        Production-ready
      </li>
    </ul>
    <p>
      Check our GitHub project for more information about
      {' '}
      <a href="https://github.com/ixartz/Next-js-Boilerplate">Nextjs Boilerplate</a>
      .
    </p>
  </Main>
);

export default Index;
