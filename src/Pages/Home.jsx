import '../App.css'
import Hero from '../landing-page-component/HeroSection'
import LatestPost from '../landing-page-component/LatestPost'
import Navbar from '../landing-page-component/Navbar'
import Newsletter from '../landing-page-component/Newsletter'
import ProjectSection from '../landing-page-component/ProjectSection'

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
