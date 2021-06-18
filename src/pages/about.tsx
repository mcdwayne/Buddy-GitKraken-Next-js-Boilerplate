import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About this webinar" description="Improve your continuous integration and continuous deployment while learning how to set up and manage your NextJS site, from the initial theme cloning to final production on Netlify, using GitKraken and Buddy. Register for free webinar on June 22." />}>
    <p>
   Manage your Jamstack code and deployments with Buddy and GitKraken
June 22 - 9:00am PDT (UTC -7)
Learn how to set up and manage your NextJS site, from the initial theme cloning to final production on Netlify, using GitKraken and Buddy. This is the first of two webinars in our collaboration with Buddy, with the second part on June 30, 2021.
</p>
{''}
<p>
What attendees will learn:
Learn about the benefits of using the GitKraken Git GUI for better code management.
Explore GitKraken features like drag and drop push, graph visualization, and the Undo button.
Git best practices for working on a NextJS site.
Proper feature branching when collaborating with a remote team.
See how to manage GitHub Pull Requests without needing to open the GitHub website.
Learn how to integrate Buddy with GitHub and Netlify.
How to use Buddy’s Sandbox feature to easily add testing into the CI/CD pipeline for your Jamstack site.
How to set up a workflow to manage code locally and automagically push the built site to production on Netlify.

    </p>
  </Main>
);

export default About;
