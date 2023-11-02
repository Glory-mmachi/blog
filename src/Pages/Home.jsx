import '../App.css'
import Hero from '../Components/HeroSection'
import LatestPost from '../Components/LatestPost'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import ProjectSection from '../Components/ProjectSection'

function Home() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <ProjectSection/>
      <LatestPost/>
      <Newsletter/>
    </div>
  )
}

export default Home
