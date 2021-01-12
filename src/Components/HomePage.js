import logo from '../img/vernacuLearn.png';
import bulbIcon from '../img/bulb.svg';
import bookIcon from '../img/book.svg';
import bubbleIcon from '../img/bubble.svg';
import facelessPeople from '../img/faceless-people.jpg';


const HomePage = () => {
  return(
    <div>

      <header>
        <img src={logo} className="logo" />
        <nav className='home-header'>
          <button className="outline-btn">About VernacuLearn</button>
        </nav>
      </header>


      <main>
        <section className="hero-container">
          <section className="hero-image">
          </section>
          <section className="sign-in">
            <h1 className="homepage-header">Learn Essential Lingo Fast!</h1>

            <button className="home-btn green-btn">Get started</button>
            <button className="home-btn blue-btn">I already have an account</button>

          
          </section>
        </section>

        <section className="three-up-container">
          
          <div className="icon-container">
            <img src={bulbIcon} />
            <h1>Inspire!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?</p>
          </div>
          
          <div className="icon-container">
            <img src={bookIcon} />
            <h1>Study!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?</p>
          </div>
          
          <div className="icon-container">
            <img src={bubbleIcon} />
            <h1>Imagine!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?</p>
          </div>
        </section>
      </main>

    <footer className="footer">&copy; 2021. vernacuLearn. all rights reserved. privacy policy</footer>
    </div>
  )
}

export default HomePage;
