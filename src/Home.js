import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className ='home '>
       <div className="home__container">
           <img className="home__image " src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 " alt=""/>
           
           
           <div className="home__row">
               <Product 
               id="39999999"
               title='produsul 1 ' 
               price={29.99} 
               image="https://images.unsplash.com/photo-1651514460531-6fe009279f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
               rating= {5} />
               
               
               <Product 
               id="39999998"
               title='produsul 2 ' 
               price={39.99} 
               image="https://images.unsplash.com/photo-1651464524587-e35be1f9b4cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
               rating= {4} />
               
           </div>
           <div className="home__row">
           <Product
           id="39999997"
           title='produsul 3 ' 
           price={49.99} 
           image="https://images.unsplash.com/photo-1651513819110-f86d1569f9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
           rating= {3}  />
           
           
           <Product
           id="39999996"
           title='produsul 4' 
           price={69.99} 
           image="https://images.unsplash.com/photo-1651521778676-6753614916e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
           rating= {3} />
           
           
           <Product
           id="39999995"
           title='produsul 5 ' 
           price={79.99} 
           image="https://images.unsplash.com/photo-1651309098943-8503c148ef55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
           rating= {3} />
               </div>
               <div className="home__row">
               
               
               <Product
               id="39999994"
               title='produsul 6 ' 
               price={89.99} 
               image="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
               rating= {3} />
               </div>

       </div>

    </div>
  )
}

export default Home