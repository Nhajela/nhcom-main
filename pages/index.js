import TopBar from "@components/TopBar";
import ImageHolder from "@components/ImageHolder";
export default function Home() {
  return (
    <div className="container">
      <TopBar />
      <div className="Center">
        <div className="Hero">
          <div className="Title"> I love bringing crazy people together!</div>

          <div className="Subtitle">
            Coz’ when crazy folks come together, they make <b> magic</b> happen.
          </div>
        </div>

        <div className="TextBox">
          <div id="content">
            <p>
              Hi, I’m Naman!
              <br />
              Nice to meet you :)
            </p>
            <p>
              I just turned 21, and am not too fond of roles or designations.
            </p>
            <p>
              However, you can find me investing my time as a community
              experiences designer at{" "}
              <a href="https://www.linkedin.com/company/waricrew/">@wariCrew</a>
              , learning about social media analytics and strategy, and
              tinkering with tech.
            </p>
          </div>
        </div>
        <ImageHolder />

        <div className="TextBox">
          <div id="content">
            <p>
              I’ve been blessed with the serendipity to be around people who’re
              crazy the same way as me. Through all that I do, I try to
              facilitate the same serendipity for others.{" "}
            </p>
            <p>
              <strong>Crazy (adj):</strong> <br />
              Folks who don’t self-dismiss, folks delusional enough to bring
              their wildest dreams them to reality. <br />
              <strong>Magic (noun):</strong> <br />
              Also known as emergence, the power of the outcomes of a group to
              be different (and better) than the individuals.{" "}
            </p>
            <p>When crazy folks come together, magic happens!</p>
          </div>
        </div>

        <ImageHolder imgList={[{url:"https://picsum.photos/200", caption:"That's me!"}]}/>

        <div className="TextBox">
          <div id="content">
            <p>
            Thanks for coming this far, <br />
If there’s anything that me or my crazy self can help you with, I’m always down for a conversation. 
            </p>
          </div>
        </div>

        <div className="TextBox">
          <div id="content">
            <p>
Afterall, strangers are just friends who haven’t yet met! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
