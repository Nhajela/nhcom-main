// pages/blog/[slug].js

import { fetchGithubMarkdown } from "../../lib/fetchGithubMarkdown";  // adjust path as necessary
import MarkdownRenderer from "../../components/MarkdownRenderer";  // adjust path as necessary
import TopBar from "@components/TopBar";
import { useRouter } from "next/router";


function BlogPage({ markdown, error }) {

    const router = useRouter();

  return <div className="container">
<TopBar />
<div className="Hero">
    <div className="Title">
        {router.query.slug}
    </div>
    <div className="Subtitle">
        Date: 21-06-23 <br />
        Tags: ABCD, DEF
    </div>
    
</div>
    <div className="BlogContainer">
  <MarkdownRenderer markdown={markdown} error={error} /> </div> </div> ;
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const props = await fetchGithubMarkdown(slug);
  return { props };
}

export default BlogPage;
