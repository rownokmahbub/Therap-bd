
import AboutDetails from '../components/AboutDetails'
import ExploreCarer from '../components/ExploreCarer'
import ManagingDirector from '../components/ManagingDirector'
import BesidesWorks from '../components/BesidesWorks'
import Locations from '../components/Locations'
import Services from '../components/Services'
import Carousel from '../components/Carousel'
export default function page() {
  return (
    <main className="px-4 lg:px-0">
<Carousel/>

 <Services/>

 <AboutDetails/>
    <ExploreCarer/>
    <ManagingDirector/>
    <BesidesWorks/>
    <Locations/>
    </main>
  )
}
