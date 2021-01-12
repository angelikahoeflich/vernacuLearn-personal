import logo from '../img/vernacuLearn.png';
import facelessPeople from '../img/faceless-people.jpg';


const HomePage = () => {
  return(
    <div>

      <header>
        <img src={logo} className="logo" />
        <nav className='home-header'>
          <button>About VernacuLearn</button>
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
          
        </section>
      </main>

    <footer className="footer">&copy; 2021. vernacuLearn. all rights reserved. privacy policy</footer>
    </div>
  )
}

export default HomePage;
