import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
    return (
        <div style={{ height: '500px', position: 'relative' }}>
            <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                <Header transparent title="Title" style={{ color: 'white' }}>
                    <Navigation>
                        <a href="#">Resume</a>
                        <a href="#">Project</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Resume</a>
                        <a href="#">Project</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        </div>
    );
}

export default App;
