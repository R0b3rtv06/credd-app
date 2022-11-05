import Sealy from './assets/Sealy.jpg'
import Boxyy from './assets/boxyy.gif'
import DoMore from './assets/do-more.gif'
import Selfimprove from './assets/selfimprove.gif'
import './App.css';
import React, { useState } from 'react'

function App() {
    //holds data for the display property
    const [display, setDisplay] = useState('none')
    const [display2, setDisplay2] = useState('none')
    const [display3, setDisplay3] = useState('none')
    //holds the number of the gifs
    const [gif, setGif] = useState(0)
    const [gif2, setGif2] = useState(0)
    const [gif3, setGif3] = useState(0)
   


    return (
        <div>
            {/* <!-- importing image from my assets and making it a different image class for it, relevnat later on --> */}
            <img className="img" src={Sealy} height="300" />
            <div className="main-content">
                {/* <!-- The main title of my website --> */}
                <h1>
                    Top 3 leadership creed I need to Practice
                </h1>
                {/* <!-- Smaller title for the three leadership creeds I will be working on  --> */}
                <h3>
                    1. I belive in the habit of doing more than what is asked for
                </h3>
                {/* <!-- class Two will be a different color than the other p tags- easthetic purposes --> */}
                <p className="two">
                    I can work on not only doing what is asked for but also striving
                    to go above and beyond. Ways I could work on doing this outside of
                    the SEALS program is when doing a project, either by going more in
                    depth in an explanation or a detailed example like drawing for example.
                </p>


                {/* <!-- Small list under my short explenations that will also be a different color to blend in more with the background --> */}

                <h2>Where can I implement this?</h2>
                  {/* <!-- the list will be moere translusant that the previous header to blend in better  --> */}
                <ul>
                    <li>School work</li>
                    <li>Chores</li>
                    <li>Studying</li>
                </ul>
                {/* <!-- inputs a botton that will use onclick that will send a signal of 0, if the signal is more that one, the loop will stop working,
     the loop will let me use one button to either pop up the naimation or close it --> */}
                <input type="button" value="H/S"
                    id="startbtn1" onClick={() => {
                        if (gif === 1){
                            setDisplay('inline')
                          setGif(0)
                        } else if (gif === 0){
                            setDisplay('none')
                            setGif(1)
                        }

                    }
                    } /><br></br>
                {/* <!-- each img has a different id to connect to different animation so that all the buttons won't connect to one image,
instead each button responds to the corresponding image --> */}
                <img id="gif" src={DoMore} alt="more" style={{width:280,
                    height: 180, display: display}} />
            </div>
            <div className="main-content">
                <h3>
                    2. I will strive to know myself better and seek self-improvement
                </h3>
                <p className="two">
                    I will work on my self imrpovement to be a better me than who I was yesterday. I can do this
                    by recognizing when I make a mistake and seeing where it wrong. I will also learn to take in
                    constructive criticizm even if it can be tough to accept.
                </p>

                <h2> How can I implement this? </h2>

                <ul>
                    <li>Be more open minded</li>
                    <li> Be an active listener</li>
                </ul>
                <input type="button" value="H/S"
                    id="startbtn1" onClick={() => {
                        if (gif2 === 1){
                            setDisplay2('inline')
                          setGif2(0)
                        } else if (gif2 === 0){
                            setDisplay2('none')
                            setGif2(1)
                        }

                    }
                    } /><br></br>
                <img id="gif2" src={Selfimprove} alt="more" style={{width:280,
                    height: 180, display: display2}} />
            </div>
            <div className="main-content">
                <h3>
                    3. I will think outside the box
                </h3>
                <p className="two">
                    I will work on thinking outside the box more by not limiting myslef to what is expected, instead
                    trying to figure something out in more than one way. I will also work on not restricting myself
                    to thiking outside the norms when I think something won't work out or thinking too extra for something.
                </p>

                <h2> How can I implement this? </h2>

                <ul>
                    <li>Research and study</li>
                    <li>Experimentation</li>
                    <li>Trial and error</li>
                </ul>
                <input type="button" value="H/S"
                    id="startbtn1" onClick={() => {
                        if (gif3 === 1){
                            setDisplay3('inline')
                          setGif3(0)
                        } else if (gif3 === 0){
                            setDisplay3('none')
                            setGif3(1)
                        } 

                    }
                    } /><br></br>
                <img id="gif3" src={Boxyy} alt="more" style={{width:280,
                    height: 180, display: display3 }} />
            </div>
        </div>
    );
}
// do you need help creating the repo, same thing like last time? yes 

export default App;
