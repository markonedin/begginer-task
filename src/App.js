import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import GitHubImage from "./images/github.png";
import ProfileImage from "./images/profile.jpg";
import TaskImage from "./images/taskimage.png";
import BrojacTaskova from "./BrojacTaskova";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal social platform informations</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="About me"
                image={ProfileImage}
                description="The proactive and hard-working developer who believes in success and
                seeks it. Effective communicator who pays close attention to accuracy and
                details. Mastered the art of working under strict deadlines.
                "
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Github"
                handle="@markonedin"
                image={GitHubImage}
                description="Check my projects on Github: 
                https://github.com/markonedin"
              />
            </div>
            <div className="column-is-3">
              <BrojacTaskova title="Tasks" image={TaskImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
