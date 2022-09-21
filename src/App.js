import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';
import styled from '@emotion/styled'
import desktop from './img/desktop.png'
import mail from './img/mail.svg'
import pp from './img/pp.jpg'
import Skill from './components/Skill';
import axians from './assets/projects/axians.png'
import Contacts from './components/Contacts';
import Carousel from './components/Carousel';
import Project from './components/Project';
import logo from './assets/icons/logo.png'
import { Link } from 'react-scroll'
import Mobile from './Mobile';


function App() {


  return ( 
    <div className="App">
    <BrowserView>
      <Wrapper>
        <div className='fixed'>
          <div className='menus'>
          <img src={logo} alt="logo" width='80px' style={{margin : '2e', position : 'absolute; top : 20px; left : 20px'}} />
            <nav>
              <ul>
                <Link  
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                to="about"><li>About</li></Link>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills"><li>Skills</li></Link>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="experience"><li>Experiences</li></Link>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"><li>Projects</li></Link>
               <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"><li>Contact</li></Link>  
              </ul>
            </nav>
          </div>
        </div>

        
        <Body>
          <div className='left'>
            <h2 style={{color : '#49F2CA', fontSize : '2.5em', fontFamily : 'monospace', marginBottom : '1em'}}>I'm William</h2>
            <h1 style={{color : 'white', fontSize : '5em'}}>FRONT END</h1>
            <h2 style={{color : 'white', fontWeight : '300', fontSize : '3em'}}>DEVELOPER</h2>
          </div>
          <div className='right'>
            <img className='desktop' src={desktop} alt="desktop" width='40%' />
            <h2 style={{color : 'lightgrey', fontWeight : '500'}}>I offer my services to develop the <strong style={{color : '#49F2CA'}}>interface</strong>, the <strong style={{color : '#49F2CA'}}>design </strong><br/> and <strong style={{color : '#49F2CA'}}>SEO</strong>  of your company - brand. I am available for short projects.</h2>
            <div className='mail'>  
              <div className='ch'>
                <p style={{cursor : 'pointer', fontWeight : 'bolder', color : 'rgb(10, 25, 47)'}}>CLICK HERE</p>
              </div>
              <div className='link'>
                <a href="mailto:quesnot.william@hotmail.com">
                  <p>quesnot.william@hotmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </Body>

        <About id="about">
          <div className='all'>
            <div className='left'>
              <H2>ABOUT</H2>
              <img src={pp} alt="pp" />
            </div>
            <div className='right'>
              <p style={{fontWeight : "400", color : 'lightgrey', textAlign : 'justify'}}>My name is <strong style={{color : '#49F2CA'}}> William Quesnot</strong>. I did a scientific baccalaureate. Then, I did a Google distance training in digital marketing and I obtained the diploma <strong style={{color : '#49F2CA'}}> "The fundamentals of Digital Marketing"</strong>.<br/><br/>
                    Being passionate about new technologies and computers, I learned JavaScript programming language on my own, often used in interactive web pages. Subsequently I combined it with <strong style={{color : '#49F2CA'}}>HTML and CSS </strong> technologies to do <strong style={{color : '#49F2CA'}}>web development</strong>. <br/>I am currently in computer engineering school to perfect my knowledge and skills.<br/><br/>
                    I am motivated and curious to learn new things. I want to develop my knowledge and skills in order to put them into practice in various projects and accomplish my professional goals.
              </p>
            </div>

            
          </div>

          <div className='carousel' style={{marginTop : '5em'}}>
            <H2 style={{textAlign :'center', marginBottom : '1em',}}>HOW I PROCEED</H2>
            <Carousel />
          </div>
        </About>

        <Skills>
          <H2 id="skills" style={{textAlign : 'center'}}>SKILLS</H2>
          <div>
            <Skill/>
          </div>
        </Skills>

        <Experience id="experience">
          <H2 style={{textAlign : 'center'}}>EXPERIENCES</H2>
          
          <div className='all'>
            <div className='exp'>
              <div className='hover'>
                <a href="https://google.com" rel="noreferrer" target="_blank">View</a>
              </div>
              <div className='img'>
                <img src={axians} width='200px' alt="taishifood"/>
              </div>
              <div className='desc'>
                <h3>Axians Audiovisuel Lyon</h3>
                <ul>
                  <li>NextJS</li>
                  <li>Tailwind</li>
                  <li>CMS Contentful</li>
                  <li>API</li>
                </ul>

                <p style={{textAlign : 'justify', margin : '2em'}}>
                I did 2 months ofx internship at Axians, an audiovisual company. We had the mission to create their website to make sales. Indeed we used the NextJS framework mainly for its server side and its natural referencing thanks to the speed of loading of NextJS. So we used a CMS, Contentful, which allows the company to easily modify the information on the website.
                </p>
              </div>
            </div>
          </div>
        </Experience>

        <Projects id="projects">
          <H2 style={{textAlign : 'center'}}>PROJECTS</H2>
          <Project />
        </Projects>

      
        <Contact id="contact">
          <H2 style={{textAlign : 'center'}}>CONTACT</H2>
          <Contacts />
        </Contact>

        <footer style={{height : '30vh',borderTop : '1px solid #49F2CA', backgroundColor : '#0A192F'}}>
      <div style={{width : '100%', height : '100%', display : 'flex',flexDirection : 'column'  ,alignItems : 'center', justifyContent : 'space-around'}}>

          <div style={{display : 'flex'}} >
            <a href="#about" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>About</li></a>
            <a href="#skills" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Skills</li></a>
            <a href="#skills" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Experiences</li></a>
            <a href="#projects" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Projects</li></a>
          </div>
     
          <div>
          <a href="mailto:quesnot.william@hotmail.com"  style={{display : 'flex', alignItems : 'center', justifyContent : 'center', textDecoration : 'none', color : '#49F2CA'}}><img src={mail} alt="mail" width='40px' style={{marginRight : '0.5em'}}/>quesnot.william@hotmail.com</a>
          </div>
        
      </div>    
    

      <p style={{backgroundColor : '#0A192F', textAlign : 'center',padding : '3em 0 2em 0', color : '#49F2CA'}}> &copy; William Quesnot | 2022</p>

      
    </footer>

      </Wrapper>
    
    </BrowserView>

    <MobileView>
      <Mobile />
    </MobileView>
    </div>
  );
}

export default App;

const Contact = styled.div`
  
  height : 100vh;
`


const Projects = styled.div`
  background-color : rgb(10,25,47);
`

const Experience = styled.div`
  @media(max-width : 740px){
    .all{
      .exp{
        width : 300px;  
      }
    }
  }

  background-color : rgb(10,25,47);
  height : 100vh;
  width : 100%;
  margin-top : 0em;

    .all{
      height : 80%;
      width : 100%;
      display : flex;
      align-items : center;
      flex-direction : column;
      justify-content : center;

      .exp{
        border : none;
        padding : 0;
        margin : 0;
        width : 750px;
        height : 370px;
        display : flex;
        background-color : white;

        :hover{
          transform : scale(1.05);
          transition : 0.5s;
        
        }

        .hover{
          position : absolute;
          background-color : transparent;
          width :750px;
          height : 370px;
          display  :flex;
          align-items : center;
          justify-content : center;
          opacity : 0;
          
          :hover{
            background-color : #49F2CA;
            opacity : 0.8;
          }
        }

        a{
          color : white;
          opacity : 1;
          padding : 0.5em 1em;
          font-weight : bolder;
          font-size : 1.5em;
          background-color : rgb(10,25,47);
          border : 2px solid rgb(10,25,47);
          border-radius : 50px;
          text-decoration :none;

          :hover{
            transform : scale(1.1);
            transition : 0.3s;
          }
        }

       

        .desc{
          display : flex;
          flex-direction : column;
          color : black;
          width : 500px;
          align-items : center;

      
          
          h3{
            margin : 1.5em 0 0.5em 0;
          }

          ul{
            display : flex;

            li{
              margin : 0.25em;
              border : 1px solid lightgrey;
              padding : 0.25em 1em;
              border-radius : 20px;  
              list-style-type : none;
            }
          }

        }

        .img{
          img{
            height : 100%;
            width : 250px;
          }
        }

      }




    }

  
`

const Skills = styled.div`
  @media(max-width : 740px){
    padding-top : 0;
  }
  background-color : rgb(10,25,47);
  color : lightgrey;
  height :  120vh;
  width : 100%;
  padding-top : 42.5em;
`



const About = styled.div`
  @media(max-width : 740px){
    height : 100vh;
    .carousel{
      display : none;
    }
    .all{
      flex-direction : column;
      align-items : center;
      justify-content : center;

      .left{
        align-items : center;
        justify-content : center;
      }
      .right{
        
      }
    }
  }
  height : 50vh;
  width : 100%;
  background-color : ligthgrey;

  .all{
    display : flex;
    width : 100%;
    height : 100%;
    background-color : rgb(10, 25, 47);

    .left{
      display : flex;
      flex-direction : column;
      align-items : flex-end;
      justify-content : center;
      width : 50%;
      height : 100%;
      margin-right : 2em;
      img{
        width : 50%;
        filter : grayscale(80%);
        border-top-left-radius : 30px;
        border-bottom-right-radius : 30px;
      }
    }
    .right{
      display : flex;
      align-items : center;
      justify-content : center;
      margin-left : 2em;
      margin-right : 5em;
      width : 50%;
      height : 100%;
      
    }

   
  }


`

const Body = styled.div`
  @media(max-width : 740px){
    align-items : center;
    justify-content : center;
    flex-direction : column;

    h1{
      text-align : center;
    }
  }

  height : 100vh;
  background-color : rgb(10, 25, 47);
  display : flex;

  .left{
    width : 50%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
  }

  .right{
    width : 50%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    text-align : center;

    img{
      margin : 0 0 1em 0;
    }

    .desktop{
      animation : moveimg 3.5s infinite;
    }

    @keyframes moveimg{
      0%{ position : relative; bottom : 30px}
      50%{ position : relative; bottom : 0px}
      100%{ position : relative; bottom : 30px}
    }
    

    h2{
      margin : 1em;
    }

    .mail{
      border : 1px solid #49F2CA;
      padding : 1em;

      :hover{
        transition : 0.8s;
        box-shadow: inset 400px 0 0 0 #49F2CA;
        
      }

      .ch{
        display : flex;
        align-items : center;
        justify-content : center;
        
        p{
          margin-top : 1em;
          padding : 2em;
          position : absolute;

          :hover{
            z-index : 5
          }
        }
      }

      img{
        display : flex;
        align-items : center;
        justify-content : center;
        margin : 1em 1em 1em 0;
        width : 10%;
      }

      a{
        text-decoration : none;
        color : #49F2CA;
        font-size : 1em;
        display : flex;
        justify-content : center;
        align-items : center;
        width : 300px;

        :hover{
          color : transparent;
        }

        p{
          z-index : 1;
        }
      }
      
    }

  }
`

const Wrapper = styled.div`
  @media(max-width : 740px){
    .fixed{
      display : none;
    }
  }

  *{
    padding : 0;
    margin : 0;
  }

  .fixed{
    position : fixed;
    width : 100%;
    z-index : 1000;
    opacity : 0.8;
  }
  .menus{
    display : flex;
    align-items : center;
    justify-content : space-around;
    background-color : rgb(10, 25, 47);

    nav{
      display : flex;
  
      ul{
        display : flex;


        a{
          text-decoration : none;
          color : #49F2CA;
          cursor : pointer;
  
          :hover{
            border-bottom : 1px solid #49F2CA;
          }
        }
        li{
          list-style-type : none;
          margin : 2em;
        }
      }
    }
  }


`

const H2 = styled.h2`
  font-size : 5em;
  color : #49F2CA;

`