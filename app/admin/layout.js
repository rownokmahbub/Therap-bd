


import AdminNav from './AdminNav';


export default function DashBoardLayout({ children }) {

  return (
   
      <main className='container mx-auto px-4 md:px-0'>
        
        <AdminNav/>
            {children}
         
        </main>
    
    
     
  );
}
