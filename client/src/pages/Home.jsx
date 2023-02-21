import React from 'react'
import NavBar from '../components/NavBar';
import Section1 from '../components/Sections/Section1.jsx';
import Section2 from '../components/Sections/Section2.jsx';
import Section3 from '../components/Sections/Section3';
import Section4 from '../components/Sections/Section4';

const Home = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Section1 />
            </div>
            <div>
                <Section2 />
            </div>
            <div>
                <Section3 />
            </div>
            <div>
                <Section4 />
            </div>
        </div>
    )
}

export default Home