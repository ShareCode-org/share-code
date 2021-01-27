import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: blue;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    font-size: 1.5rem;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    }
  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
  }
  }
`;

export const StyledBurger = styled.button`
    display: none;
    @media (max-width: 768px) {
        position: absolute;
        top: 5%;
        left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2.5rem;
        background: transparent;
        z-index: 1;
        border: none;
        cursor: pointer;
        padding: 4px;
        z-index: 10;
        div {
            width: 2rem;
            height: 0.25rem;
            background-color: ${({ open }) => open ? '#fff' : '#000'};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
        
            :first-child {
              transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }
        
            :nth-child(2) {
              opacity: ${({ open }) => open ? '0' : '1'};
              transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
            }
        
            :nth-child(3) {
              transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
          }
          &:focus {
            outline: none;
          }
    }
`;