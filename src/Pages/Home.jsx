import "../App.css";
import Hero from "../Components/HeroSection";
import LatestPost from "../Components/LatestPost";
import Loading from "../Components/Loading";
import ProjectSection from "../Components/ProjectSection";
function Home() {
  return (
    <div>
    {/* <Loading/> */}
      <Hero />
      <ProjectSection />

      <LatestPost />
    </div>
  );
}

export default Home;
