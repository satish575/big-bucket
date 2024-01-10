import React from "react";
import Styled from "styled-components";
import { NavLink,Link } from "react-router-dom";
const HeaderWrapper = Styled.div`
    background-color:#F4F3EF;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px 5vw;
    .logo h1{
        font-family:'Lemon';
        color:#597E52;
    }
    nav ul{
        width: 40vw;
        display:flex;
        align-items:center;
        justify-content:space-between;
        li{
        list-style-type:none;

        a{
            text-decoration:none;
            color:#597E52;
            font-family:"Poppins";
        }
    }
}
.user-addtocart{
    display:flex;
    align-items:center;
    gap:20px;
}
.addToCart{
    position:relative;
    
}
.addToCart h3{
    position:absolute;
    top:5%;
    left:50%;
    color:white;
    background-color:#FF561E;
    font-family:"Poppins";
    font-size:13px;
    width:20px;
    height:20px;
    text-align:center;
    border-radius:50%;
    z-index:10;
}

   
    #login-btn{
        text-decoration:none;
        background-color:#FF561E;
        color:white;
        font-family:"Poppins";
        padding:5px 15px;
        border-radius:5px;
    }
    .activeNav{
        color:#FF561E;
        font-weight:bold;
        
    }
    .pending{
        color:gray;
    }

   
`;
function Header() {
  return (
    <HeaderWrapper>
      <div className="logo">
        <h1>Big Bucket</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeNav" : ""
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"} className={({isActive,isPending})=>
                isPending ? "pending" : isActive ? "activeNav" : ""
            }>Products</NavLink>
          </li>
          <li>
            <Link to={"/orders"}>Orders</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="user-addtocart">
      <div className="addToCart">
        
        <svg
          width="50"
          height="50"
          viewBox="0 0 71 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25.3438C0 24.0449 0.928819 23 2.08333 23H6.03299C7.94271 23 9.63542 24.25 10.4253 26.125H46.1024C48.3854 26.125 50.0521 28.5664 49.4531 31.0469L45.8941 45.9199C45.1562 48.9863 42.6823 51.125 39.8611 51.125H14.8177L15.2865 53.9082C15.4774 55.0117 16.3368 55.8125 17.3351 55.8125H42.3611C43.5156 55.8125 44.4444 56.8574 44.4444 58.1562C44.4444 59.4551 43.5156 60.5 42.3611 60.5H17.3351C14.3316 60.5 11.7535 58.0977 11.1979 54.7871L6.71875 28.3223C6.65799 27.9512 6.37153 27.6875 6.03299 27.6875H2.08333C0.928819 27.6875 0 26.6426 0 25.3438ZM11.1111 68.3125C11.1111 67.6969 11.2189 67.0874 11.4283 66.5187C11.6377 65.95 11.9446 65.4332 12.3315 64.9979C12.7184 64.5627 13.1777 64.2174 13.6833 63.9818C14.1888 63.7462 14.7306 63.625 15.2778 63.625C15.825 63.625 16.3668 63.7462 16.8723 63.9818C17.3778 64.2174 17.8371 64.5627 18.2241 64.9979C18.611 65.4332 18.9179 65.95 19.1273 66.5187C19.3367 67.0874 19.4444 67.6969 19.4444 68.3125C19.4444 68.9281 19.3367 69.5376 19.1273 70.1063C18.9179 70.675 18.611 71.1918 18.2241 71.6271C17.8371 72.0623 17.3778 72.4076 16.8723 72.6432C16.3668 72.8788 15.825 73 15.2778 73C14.7306 73 14.1888 72.8788 13.6833 72.6432C13.1777 72.4076 12.7184 72.0623 12.3315 71.6271C11.9446 71.1918 11.6377 70.675 11.4283 70.1063C11.2189 69.5376 11.1111 68.9281 11.1111 68.3125ZM40.2778 63.625C41.3828 63.625 42.4427 64.1189 43.2241 64.9979C44.0055 65.877 44.4444 67.0693 44.4444 68.3125C44.4444 69.5557 44.0055 70.748 43.2241 71.6271C42.4427 72.5061 41.3828 73 40.2778 73C39.1727 73 38.1129 72.5061 37.3315 71.6271C36.5501 70.748 36.1111 69.5557 36.1111 68.3125C36.1111 67.0693 36.5501 65.877 37.3315 64.9979C38.1129 64.1189 39.1727 63.625 40.2778 63.625Z"
            fill="#2E8B57"
          />
         
          
        </svg>
        <h3>3</h3>
      </div>
      
         <Link to={'/login'} id="login-btn">
            Login
         </Link>
      
      </div>
    </HeaderWrapper>
  );
}

export default Header;
