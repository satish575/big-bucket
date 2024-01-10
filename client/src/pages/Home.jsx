import React from 'react'
import Styled from "styled-components"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <HeroSectionWrapper>
      <div className="hero-testimoneal">
          <div className="service-message">
             <img src="bagvector.png" alt="" />
             <p>Grocery Delivery Service</p>
          </div>
          <div className="service-testimoneal">
            <p>Fastest</p>
            <p id='service-highlighted'>Delivery & Easy</p>
            <p> <span id='service-bold'>Pickup</span></p>
            <div className="testimoneal-actions">
               <Link to={'/products'}>
                  Shop Now
               </Link>
            </div>
          </div>
      </div>
      <img src="heroproduct.png" alt="" />

    </HeroSectionWrapper>
    <SatisfiedCustomer>
        <div className="image">
            <img src="hero.png" alt="" />
        </div>
        <div className="animation">
            <h1>Some Text Here</h1>
        </div>
    </SatisfiedCustomer>

    <CategoryListSection>
        <h1>Categories</h1>
        <div className="categories">
            <div className="category">
                <img src="veg.png" alt="" />
                <p>Vegetables</p>
            </div>
            <div className="category">
                <img src="non veg.png" alt="" />
                <p>Non Veg</p>
            </div>
            <div className="category">
                <img src="household.png" alt="" />
                <p>Household</p>
            </div>
            <div className="category">
                <img src="snacks.png" alt="" />
                <p>Snacks</p>
            </div>
            <div className="category">
                <img src="beauty.png" alt="" />
                <p>Cosmetics</p>
            </div>
            
        </div>
    </CategoryListSection>
    </>
  )
}

const CategoryListSection=Styled.div`
  
  background-color:#F4F3EF;
  width:100vw;
  padding:0px 5vw;
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
  font-family:"Poppins";
  h1{
    margin-top:20px;
  }
  .categories{
    width:100vw;
    height:250px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;

    .category{
      background-color:white;
      width:200px;
      height:200px;
      box-shadow:2px 2px 5px 5px gray;
      border-radius:8px;
      display:flex;
      flex-direction:column;
      align-items:center;


      img{
        width:70%;
        height:75%;
        object-fit:cover;
      }
    }
  }
   
   .category:hover{
     width:210px;
     height:210px;
     transition:all ease 0.1s;
   }

`;
const HeroSectionWrapper=Styled.div`
      background-color:#F4F3EF;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      padding:0px 5vw;

      .hero-testimoneal{
        width:50vw;
        padding-top:50px;
        display:flex;
        flex-direction:column;
        gap:20px;
      }
      
    img{
      width:50vw;
        height:653px;
        object-fit:cover;
    }
    .service-message{
      width:250px;
      padding:2px 5px;
      background-color:#EFE1DC;
      color:#F36969;
      font-family:"Poppins";
      display:flex;
      align-items:center;
      justify-content:center;
      gap:5px;
      border-radius:3px;
    }
    .service-message img{
      width:20px;
      height:30px;
      object-fit:cover;
    }
    .service-testimoneal{
      font-family:"Poppins";
      font-size:60px;

    }
    .service-testimoneal #service-highlighted{
      font-weight:500;
      color:#FF561E;
    }
    .service-testimoneal #service-bold{
      font-weight:500;
    }
    .testimoneal-actions a{
      text-decoration:none;
      font-family:"Poppins";
      font-size:20px;
      color:white;
      background-color:#FF561E;
      padding:10px 20px;
      border-radius:30px;
    }
`;

const SatisfiedCustomer=Styled.div`
        width:100vw;
        height:500px;
        padding:0px 5vw;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color:seagreen;
    .image{
      width:50vw;
    }
    .animation{
      width:50vw;
      text-align:center;
    }
    .animation h1{
      font-family:"Poppins";
    }
    img{
        width:50vw;
        height:500px;
        object-fit:cover;
        
    }
   
`;

export default Home