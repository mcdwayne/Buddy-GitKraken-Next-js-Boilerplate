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
    <a href="https://gitkraken.com/webinar/jamstack-nextjs">
      <img
        src={`${process.env.baseUrl}/assets/images/buddy-webinar-hero.png`}
        alt="Buddy + GitKraken webinar logo"
      />
    </a>
    <h1 className="font-bold text-2xl">
     Hello Everybody!
    </h1>
    {' '}
   
    <p>
    Learn how to set up and manage your NextJS site, from the initial theme cloning to final production on Netlify, using GitKraken and Buddy. This is the first of two webinars in our collaboration with Buddy, with the <a href="https://buddy.works/webinar">second part on June 30, 2021</a>.
    </p>
      ------
   
       
    <h2>
      <a href="https://buddy.works/">About Buddy 
          <img 
            alt='Buddy logo' 
            width='25%' 
            src={`${process.env.baseUrl}/assets/images/buddy-logo.png`}>
        </img>
      </a>
    </h2>
    {' '}
    
    <p>
    Buddy is the most effective way to build better apps faster. Acclaimed by top developers world-wide, Buddy combines impeccable user experience with top-notch performance into one solution for teams that want to painlessly introduce CI/CD and accelerate the development lifecycle of their software.
    </p>
    <p>
        Sign up today at <a href="https://buddy.works">https://buddy.works</a>
    </p>
    <p>
      ------
    </p>

    <h2>
      About <a href="https://gitkraken.com">GitKraken
        <img 
          alt='GitKraken logo' 
          width='27%' 
          src={`${process.env.baseUrl}/assets/images/gitkraken-logo-dark.png`}>
        </img>
      </a>
    </h2>
    <p>
    Over 2 million developers worldwide rely on GitKraken to get their work done. 
    You can use the cross-platform Git Client to visualize file history and changes to your repos in a beautiful graph; 
    </p>
    <p>
      Download your own version of GitKraken today at <a href="https://gitkraken.com">https://gitkraken.com</a>
    </p>
    <p>
      ------
    </p>
    <p>

    <h2>
      About the presenters
    </h2>
    <div className="row">
      <div className="column">
        <a href="https://twitter.com/palmiak_fp">
        <img 
          className="rounded-full" 
          alt="Maciek Palmowski" 
          width="100%"
          src="https://1v5ymx3zt3y73fq5gy23rtnc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/maciek-palmowski-300x300.jpg">
        </img>
        Maciek Palmowski
        
        WordPress Ambassador at Buddy & GitKraken Ambassador
        </a>
      </div>
      <div className="column">
      <a href="https://twitter.com/McDwayne">
        <img 
          className="rounded-full" 
          alt="Dwayne McDaniel" 
          width="100%"
          src="https://1v5ymx3zt3y73fq5gy23rtnc-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/dwayne-mcdaniel-300x300.jpg">
        </img>
        
        Dwayne McDaniel
        <br></br>
        GitKraken Developer Evangelist
        </a>
      </div>
    </div>




      ------
    </p>
    <h2>
      About this NextJS Template.
    </h2>
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
    <p>
      Check our GitHub project for more information about
      {' '}
      <a href="https://github.com/ixartz/Next-js-Boilerplate">Nextjs Boilerplate</a>
      .
    </p>
  </Main>
);

export default Index;
