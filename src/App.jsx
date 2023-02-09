import React from 'react';
import Pages from "./pages/Pages"
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={"/"}>
                        Mlem Mlem
                    </Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  align-items: center;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
