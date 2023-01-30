import Sponsors from './components/Sponsors';
import Subscribe from './components/Subscribe';
import { useState } from 'react';
import AlreadySubscribed from './components/AlreadySubscribed';
import TwoColumns from './components/TwoColumns';

function App() {
  const [isSubscribed, setSubscribred] = useState(false);
  const [name, setName] = useState('valentino');

  return (
    <main>
      <section className="fullpage-banner elephant-background">
        <div className='principal-banner-text'>
          <div className='white-cube width-60 height-60 content-centered'>
            <h1>Let save the planet!!</h1>
            <a href="#sign">
              I want to help!
            </a>
          </div>
        </div>
      </section>
      <Sponsors />
      {
        isSubscribed === false ? <Subscribe /> : <AlreadySubscribed isName={name} />
      }
      <TwoColumns />
    </main>
  )
}

export default App