import Navbar from '../Navbar'
import Hero from '../components/Hero'
import PopularCategory from '../components/PopularCategory'
import Courses from '../components/Courses'
import Notice from '../components/Notice'
import AboutDetails from '../components/AboutDetails'
import ExploreCarer from '../components/ExploreCarer'
import ManagingDirector from '../components/ManagingDirector'
export default function page() {
  return (
    <main className="px-4 lg:px-0">

 <Hero/>
 <Notice/>
<PopularCategory/>
 <Courses/>
 <AboutDetails/>
    <ExploreCarer/>
    <ManagingDirector/>
    </main>
  )
}
