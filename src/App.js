import logo from './logo.svg';
import './App.css';
import projects from "./model/projects";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <nav>
          {projects.map((item) => {
            return(
              <a href="#">{item.title}</a>
            );
          })}
        </nav>
          <span>
            <img alt="Logo" src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" />
          </span>
      </header>
      <main className="Main">
        <div className="Main-Left">
          Personal Experience Left
        </div>
        <div className="Main-Scroll">
          <h3>Main Scroll</h3>
          
          <section className="Card-Section">
            <h4>Title</h4> 
            {/* title/h4; content(description)/p; linksWrapper/section; title/h5; link/a; imageLink/a img; */}
            <p>
              React JS is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and build single-page applications1. React makes it easy to create interactive UIs by breaking them down into small, reusable components that can be combined to create complex interfaces2. React is used by many popular websites and applications, including Facebook, Instagram, Netflix, and Airbnb3.
            </p>
            <section>
              <h5>
                Links e Arquivos
              </h5>
              <a href="#">Link</a>
              <img alt="Imagem" src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/d12e8157ea2d7339cbdb5bb5b39aedfc.jpg" />
              <a href="#">Link</a>
            </section>
          </section>

          <section className="Card-Section">
            <h4>Title</h4>
            <p>
              Conteúdo escrito
            </p>
            <section>
              <h5>
                Links e Arquivos
              </h5>
              <a>Link</a>
              <img alt="Imagem" />
              <a>Link</a>
            </section>
          </section>

          <section className="Card-Section">
            <h4>Title</h4>
            <p>
              Conteúdo escrito
            </p>
            <section>
              <h5>
                Links e Arquivos
              </h5>
              <a>Link</a>
              <img alt="Imagem" />
              <a>Link</a>
            </section>
          </section>

        </div>
        <div className="Main-Right">
          Personal Experience Right
        </div>
      </main>
    </div>
  );
}

export default App;
