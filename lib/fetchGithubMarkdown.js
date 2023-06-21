// lib/fetchGithubMarkdown.js

import { Octokit } from "@octokit/rest";

export async function fetchGithubMarkdown(slug) {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const { data } = await octokit.repos.getContent({
      owner: 'Nhajela',
      repo: 'nhcom-blog-md',
      path: `MainBlog/${slug}.md`,
    });

    const markdown = Buffer.from(data.content, 'base64').toString('utf8');

    return { markdown, error: false };
  } catch (err) {
    console.error(err);
    return { markdown: '', error: true };
  }
}
