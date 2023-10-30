import Navbar from '../Navbar'
import Hero from '../components/Hero'
import AboutDetails from '../components/AboutDetails'
import ExploreCarer from '../components/ExploreCarer'
import ManagingDirector from '../components/ManagingDirector'
import BesidesWorks from '../components/BesidesWorks'
import Locations from '../components/Locations'
import Services from '../components/Services'
export default function page() {
  return (
    <main className="px-4 lg:px-0">

 <Hero/>
 <Services/>

 <AboutDetails/>
    <ExploreCarer/>
    <ManagingDirector/>
    <BesidesWorks/>
    <Locations/>
    </main>
  )
}
