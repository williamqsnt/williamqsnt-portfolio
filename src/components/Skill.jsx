
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import reacticon from '../assets/icons/reacticon.png'
import nodejs from '../assets/icons/nodejs.svg'
import php from '../assets/icons/php.svg'
import python from '../assets/icons/python.png'
import mysql from '../assets/icons/mysql.svg'
import mongodb from '../assets/icons/mongodb.png'
import vscode from '../assets/icons/vscode.jpg'
import github from '../assets/icons/github.svg'
import netlify from '../assets/icons/netlify.jpg'
import canva from '../assets/images/canva.png'
import figma from '../assets/images/figma.png'
import whimsical from '../assets/images/whimsical.png'
import { useState } from 'react'


import styled from '@emotion/styled'



const Skill = () => {

    const Frontend = [
        { programmation : 'HTML', icons : html, width : '70px', height:'70px'},
        { programmation : 'CSS', icons : css, width : '70px', height : '70px'},
        { programmation : 'JS', icons : js, width : '70px', height : '70px'},
        { programmation : 'React', icons : reacticon, width : '70px', height : '70px'},
    ] 
    const Backend = [
        { programmation : 'Nodejs', icons : nodejs, width : '70px', height :'70px'},
        { programmation : 'PHP', icons : php, width : '70px', height : '70px'},
        { programmation : 'Python', icons : python, width : '70px', height : '70px'},
    ]
    const Database = [
        { programmation : 'MySQL', icons : mysql, width: '70px', height:'70px'},
        { programmation : 'Mongodb', icons : mongodb, width : '70px', height : '70px'}
    ]
    const DevTools = [
        {programmation : 'VSCode', icons : vscode, width : '55px'},
        {programmation : 'Github', icons : github, width: '55px'},
        {programmation : 'Netlify', icons : netlify, width: '55px'}
    ]
    const creativeTools = [
        { tools : 'Canva', icons : canva, width : '50px'},
        { tools : 'Figma', icons : figma, width : '50px'},
        { tools : 'Whimsical', icons : whimsical, width : '50px'},
    ]
    const SkillsComplementary = [
        { complementary : 'SEO'},
        { complementary : 'SEA'},
        { complementary : 'SMO'},
        { complementary : 'SEM'},
     
    ]

    const [isSkills, setIsSkills] = useState(true)


    return isSkills ?(
        <Container>
             <div className='btn' style={{display : 'flex', alignItems : 'center', justifyContent : 'center', marginTop : '2em'}}>
                <button style={{backgroundColor : '#49F2CA', color : '#0A192F'}}>Main Skills</button>
                <button onClick={()=>{ setIsSkills(false)}}>Complementary Skills</button>
            </div>

            <div className='all'>
                <div className='programming'>
                    <h2>Front end</h2>
                    {Frontend.map(({programmation, icons, width, height})=>{
                        return(
                            <div>
                                <img src={icons} alt="icons" width={width}/>
                            </div>
                        )
                    })}
                </div>

                <div className='programming'>
                    <h2>Back end</h2>
                    {Backend.map(({programmation, icons, width, height})=>{
                        return(
                            <div>
                                <img src={icons} alt="icons" width={width} height={height} />
                            </div>
                        )
                    })}
                </div>

                <div className='programming'>
                    <h2>Database</h2>
                    {Database.map(({programmation, icons, width, height})=>{
                        return(
                            <div>
                                <img src={icons} alt="icons" width={width} height={height} />
                            </div>
                        )
                    })}
                </div>


            </div>
    
        </Container>
    ):(
        <Container>
            <div className='btn' style={{display : 'flex', alignItems : 'center', justifyContent : 'center', marginTop : '2em'}}>
                <button onClick={()=>{ setIsSkills(true)}} >Main Skills</button>
                <button style={{backgroundColor : '#49F2CA', color : '#0A192F'}} onClick={()=>{ setIsSkills(false)}}>Complementary Skills</button>
            </div>

            <div className='all'>
                <div className='programming'>
                        <h2>Developer Tools</h2>
                        {DevTools.map(({programmation, icons, width})=>{
                             return(
                                <div>
                                    <img src={icons} alt="programmations" width={width} />
                                    <h3>{programmation}</h3>
                                </div>
                            )
                        })}
                </div>

                <div className='programming'>
                        <h2>Creative Tools</h2>
                        {creativeTools.map(({tools, icons, width})=>{
                        return(
                            <div className='frontend'>
                                <img src={icons} alt="programmations" width={width} />
                                <h3>{tools}</h3>
                            </div>
                            )
                        })}
                </div>

                <div className='programming'>
                        <h2>Digital marketing</h2>
              
                        {SkillsComplementary.map(({complementary})=>{
                            return(
                                <div className='frontend'>       
                                    <h3>{complementary}</h3>
                                </div>
                            )
                        })}
                </div>
            </div>
        </Container>
       
    )


}

const Container = styled.div`
@media(max-width : 740px){
    .programming{
        margin : unset;

        
    }
    .all{
        h2{
            font-size : 0.5em;
        }
    }
}
.all{

    display : flex;
    align-items : center;
    justify-content : center;

    h2{
        font-size : 2em;
    }
    
    .programming{
        display : flex;
        height : 500px;
        align-items : center;
        flex-direction : column;
        margin : 2em;

        img{
            background-color : white;
            padding : 1em;
            border-radius : 50%;
        }

        div{
            display : flex;
            margin-top : 2em;
            align-items : center;
            flex-direction : column;
            justify-content : center;


            h3{
                font-size : 1em;
                margin-top : 0.5em;
                color : #49F2CA;
            }
        }
    }

}

.btn button{
    width : 250px;
    padding : 1em;
    font-size : 1.2em;
    background : transparent;
    color :  #49F2CA;
    border : none;
    border: 1px solid #49F2CA;
    margin : 1em;
    font-family : monospace;
    cursor : pointer;
    font-weight : bolder;
}
`

export default Skill