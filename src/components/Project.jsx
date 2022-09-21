import styled from '@emotion/styled'
import Learn from '../assets/images/Learn.jpg'
import Homely from '../assets/images/Homely.jpg'
import Petqo from '../assets/images/Petqo.jpg'
import Jobsa from '../assets/images/Jobsa.jpg'


const Project = () => {

    const ManyProjects = [
        { title : 'Learn', desc : 'Learn is a dribbble model, it is a single page where you can take courses ', background : Learn, alt : 'This is a project called Learn', url : 'https://williamqsnt.github.io/learn-dribbble/'},
        { title : 'Homely', desc : 'Homely is a dribbble model, it is a single page of accommodation reservation   ', background : Homely, alt : 'This is a project called Homely', url : 'https://williamqsnt.github.io/homely-dribbble/'},
        { title: 'Petqo', desc: 'Petqo is a dribbble model, it is a single page of a pet shop', background : Petqo, alt : 'This is a project called Petqo', url : 'https://williamqsnt.github.io/petqo-dribbble/'},
        { title: 'Jobsa', desc : 'Jobsa is a dribbble model, it is a single page of a job application.', background : Jobsa, alt : 'This is a project called Jobsa', url : 'https://williamqsnt.github.io/jobsa-dribble/'},
    ];

    return(
     <TextContent>

                   <div className="AllProjects">
                   
                    <div className="eprojects">
                        {ManyProjects.map(({title, desc, background, url}) => {
                          
                            return (
                                
                                    <a href={url} target="_blank" rel="noreferrer">

                                   
                                    <div className="eachProjects" style={{background: `url(${background})`, backgroundPosition : 'center', backgroundSize : '90%'}}>
                                        <div>
                                             <h3>{title}</h3>
                                             <p>{desc}</p>
                                        </div>
                                       
                                    </div>
                                    </a>
                              
                                
                            )
                        })}
                    </div>
                </div>
         </TextContent>
    )



}

export default Project



const TextContent = styled.div`

    *{
        text-decoration : none;
    }
 
    .AllProjects{
        display : flex;
        justify-content : center;
        flex-direction : column;
        padding-bottom : 5em;
        margin : 5em 5em 0 5em;
    }
    .eprojects{
        display : flex;
        justify-content : center;
        flex-wrap : wrap;
    }
    .eachProjects{
        display : flex;
        align-items : center;
        justify-content : center;
        width : 300px;
        margin : 1em;
        height : 300px;
        transition : 0.5s;
        text-decoration : none;
        a{
            text-decoration : none;
        }

        div{
            width : 100%;
            height : 100%;
            background-color : #49F2CA;
            opacity : 0;
            display : flex;
            align-items : center;
            justify-content : center;
            flex-direction : column;

            h3{
                font-family : monospace;
                font-size : 2em;
                color : rgb(10,25,47);
            }

            p{
                margin : 2em;
                text-align : center;
                color : rgb(10,25,47);
         
            }
            
            :hover{
                opacity : 0.9;
            }

            
            
        }
    }
    .eachProjects:hover{
        cursor : pointer;
        transform : scale(1.05);
        box-shadow : 0 0 0.5em grey;
        text-decoration : none;
    
    }
    .eachProjects a{
        width : 100%;
        height : 100%;
        text-decoration : none;
        :hover{
            text-decoration : none;
        }
    }



    @keyframes buttonZoom{
        from{height : 40%; width : 40%; opacity : 0.8; color : white}
        to{height : 55%; width : 55%; opacity : 0.95; color : white}
    }
`
