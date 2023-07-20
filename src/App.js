import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './content/style/style.css';
import model from "./model";

function App() {

  const [content, setContent] = React.useState(model.filter(item => item.name == "home").shift());
  const [sideBars, setSideBars] = React.useState(null);

  function handleHeaderClick(index){
    setContent(model.filter(item => item.index == index).shift());
  }

  function handleCompetenceClick(skillId){
    const competence = model.filter((item) => item.name == "competence").shift();
    const skill = competence.skills.filter((item) => item.id == skillId);
    const relationships = competence.relationships.filter((item) => item.skillIds.filter((id) => id == skillId).length > 0);
    const educations = competence.education.filter((item) => relationships.filter((relationship) => relationship.educationId == item.id).length > 0);
    setSideBars({
      left: educations,
      right: skill
    })
  }
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let formatter = new Intl.DateTimeFormat('en-US', options);

  return (
    <div className="App">
      <header className="Header">
        <nav>
          {model.map((item) => {
            return(
              <a onClick={() =>handleHeaderClick(item.index)} href="#">{item.title}</a> 
            );
          })}
        </nav>
        <span>
          <img alt="Logo" src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" />
        </span>
      </header>
      <main className="Main">

        {content.type == "list" && 
          <React.Fragment>

            {sideBars && 
              <div className="Main-Left">
                {sideBars.left.map((education) => {
                  return (
                    <React.Fragment>
                      <h5>{education.title}</h5>
                      <p>{education.description}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            }
            
            <div className="Main-Scroll">
              <h3>{content.title}</h3>
              
              {content.data.map((data) => {
                return (
                  <section className="Card-Section">
                    <h4>{data.title}</h4> 
                    {/* title/h4; content(description)/p; linksWrapper/section; title/h5; link/a; imageLink/a img; */}
                    <p>
                      {data.description}
                    </p>
                    {data.skillIds && 
                      <section>
                        <h5>
                          Competências
                        </h5>
                        <p>
                          {data.skillIds.map((skillId) => {
                            const competence = model.filter((item) => item.name == "competence").shift();
                            const skill = competence.skills.filter((item) => item.id == skillId).shift();
                            return (<a onClick={() => handleCompetenceClick(skill.id)} href="#">{skill.title}</a>);
                          })}
                        </p>
                      </section>
                    }
                    {data.links &&
                      <section>
                        <h5>
                          Links e Arquivos
                        </h5>
                        <a href="#">Link</a>
                        <img alt="Imagem" src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/d12e8157ea2d7339cbdb5bb5b39aedfc.jpg" />
                        <a href="#">Link</a>
                      </section>
                    }
                    {data.date &&
                      <section>
                        <h5>
                          Duração
                        </h5>
                        <p>
                          <a>Início: {Date(data.date.start.substring(0, 4), data.date.start.substring(4, 6), data.date.start.substring(6, 8))}</a>
                          <a>Conclusão: {data.date.end ? Date(data.date.end.substring(0, 4), data.date.end.substring(4, 6), data.date.end.substring(6, 8)) : "Em andamento"}</a>
                        </p>
                      </section>
                    }
                  </section>
                );
              })}
              
            </div>
            {sideBars && 
              <div className="Main-Right">
                {sideBars.right.map((skill) => {
                  return (
                    <React.Fragment>
                      <h5>{skill.title}</h5>
                      <p>{skill.description}</p>
                    </React.Fragment>
                  );
                })}
              </div>   
            }
            
          </React.Fragment>
        }

        {content.type == "form" &&
          <React.Fragment>
            <div className="Main-Scroll">
              <h3>{content.lang['en-us'].title}</h3>

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
            </div>
          </React.Fragment>
        }
      </main>
    </div>
  );
}

export default App;
