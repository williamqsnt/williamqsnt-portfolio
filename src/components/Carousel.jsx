import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'

const Carousel = () => {

    const Proceed = [
        { title : "1 ▸ Your need", desc : 'Define your needs, the nature of your site, what type of audience is your site aimed at? What is the main purpose of your site ?'},
        { title : "2 ▸ SEO", desc : "The referencing of your site is an important issue to increase its visibility among Internet users. It will be important for me to establish SEO strategies, in order to apply them and place you at the top of the ranking."},
        { title : "3 ▸ The conception", desc : "After our discussion on your project, I will move on to the design of your website with regular monitoring by applying SEO strategies at the same time."},
        { title : "4 ▸ Test", desc : "Performing the test phase will ensure that all the elements work perfectly. This is an important final step to avoid all types of errors."},
        { title : "5 ▸ Delivery", desc : "We have arrived at the realization of your order. The site is delivered to you, as well as the possibility to stay in contact with me to solicit me for other projects !"}
    ]


    let settings = {
        dot : true,
        infinite : true,
        speed :300,
        slidesToShow : 3,
        slidestoScroll : 1,
        cssEase : "linear"
    }

    return(
        
    <Container>
          
        <div className='allpage'>
            <div className='page'>
                <Slider {...settings}>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[0].title}</h2>
                            <p>{Proceed[0].desc}</p>
                        </div>     
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[1].title}</h2>
                            <p>{Proceed[1].desc}</p>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[2].title}</h2>
                            <p>{Proceed[2].desc}</p>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[3].title}</h2>
                            <p>{Proceed[3].desc}</p>
                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <h2>{Proceed[4].title}</h2>
                            <p>{Proceed[4].desc}</p>
                        </div>
                    </div>
                </Slider>
           </div>          
        </div>
    </Container>
)
}

export default Carousel

const Container = styled.div`

.allpage{
  display : flex; 
  justify-content : center;
}
  .page{
      width : 70%; 
      border-radius : 10px;
    
  }  
  .card-wrapper{
      border : 5px solid black;
      width : 100%;
      height : 100%;
      background-color : #0A192F;
    border : none;
    border-radius : 10px;

  }
  .card{
      display : flex;
      flex-direction : column;
      justify-content : space-evenly;
      margin : 1em;
      color : lightgrey;
      border : 2px solid #49F2CA;
      border-radius : 20px;
      height : 300px;
      
      h2{
        font-family : monospace;
        margin-top : 1em;
        text-align : center;
      }

      p{  
          
          font-style : arial;
          margin : 1em;
          text-align : center;
          margin-bottom : 2em;
         
      }
  }
  

`