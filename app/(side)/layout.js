import { Footer } from '../Footer';
import NavBar from '../Navbar'
export const metadata = {
  title: 'Therap BD LTD',
  description: 'Person-Centered Data-Driven Company Created by Rownok',
}

export default function RootLayout({ children }) {
  return (
   
        <main className=''>
        <NavBar/>
            {children}
    <Footer/>
        </main>
     
  );
}
