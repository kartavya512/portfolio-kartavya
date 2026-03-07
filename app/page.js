
import Navbar from './components/Navbar'
import My from './components/my'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Stats from './components/Stats'

export default function Home() {
  return (
    <div className="bg-white max-w-6xl mx-auto">
      <My></My>
      <Skills />
      <Experience/>
      <Work />
      <Projects/>
      <Stats/>
      <Certificates/>
      <Footer />

    </div>
  )
}
