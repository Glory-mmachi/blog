import "../App.css";
import Hero from "../Components/HeroSection";
import LatestPost from "../Components/LatestPost";
import ProjectSection from "../Components/ProjectSection";
function Home() {
  return (
    <div>
      <Hero />
      <ProjectSection />
      <LatestPost />
    </div>
  );
}

export default Home;
