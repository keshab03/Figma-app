import React from 'react'
import { useState } from 'react';
import "./body.css"
import img1 from "./image1.png"
import img2 from "./image2.png"
import img3 from "./image3.png"
import link from "./link.png"
const Body = () => {

  const [zoomLevel, setZoomLevel] = useState(.2);
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenEnabled, setFullScreenEnabled] = useState(true);
  const [options, setOptions] = useState(false);
  const toggleOptions = () => setOptions(!options);

  const zoomIn = () => {
    if (zoomLevel < 2) {
        setZoomLevel(zoomLevel + 0.1);
    }
};

const zoomOut = () => {
    if (zoomLevel > .2) {
        setZoomLevel(zoomLevel - 0.1);
        setFullScreenEnabled(true);
    }
};

const zoomPercentage = Math.round(zoomLevel * 100);

const handleFullScreen = () => {
    if (fullScreenEnabled) {
        setFullScreen(!fullScreen);
        setZoomLevel(1);
        setFullScreenEnabled(false);
    }
};


  return (
    <div>

<div id='bpic'>

<div id='drop' onDoubleClick={() => setOptions(false)}>
            <span role="img" aria-label="smiley">Pages: 😊 Index </span>
            <span style={{ backgroundColor: ' rgb(77, 75, 75)' }} onClick={toggleOptions}>{<i className="fa-solid fa-angle-down"></i>}</span>
            {options && (
                <ul id='options' onClick={() => setOptions(true)}>
                    <li>😊 Index</li>
                    <li>Home Pages</li>
                    <li><span style={{ color: "goldenrod" }}>&#9733;</span> Download Full website Template</li>
                </ul>
            )}
        </div>
        
            <img
                className={`canvas_viewer--hubFileLoadingCoverImage--fRLp3 canvas_viewer--resourceLoadingCoverImage--Fn69g ${fullScreen ? "full-screen" : ""}`}
                src="https://s3-alpha.figma.com/hub/file/560731507/027faadf-4fc4-4618-8bbf-e0e6702ca1a8-cover.png"
                alt="Capgemen - Figma Corporate Web Design preview"
                style={{ transform: `scale(${zoomLevel})` }}
            />
            <div id='zoom'>
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
                <div id='zoom-percentage'>{zoomPercentage}%</div>
                <button onClick={handleFullScreen} disabled={!fullScreenEnabled}>
                    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                </button>
            </div>
    </div>

    <div id='body'>
      <div id='container'>
      <p>
        <strong>
          ⭐Full Website Template :
        </strong>
      </p>
      <p><a href="##">Download Full Website Template</a></p>
      <br />
      <p>
        <strong>
          ⭐More Free Templates:
        </strong>
      </p>
      <p>Visite <a href="##">Figmaland</a> to discover other free figma templates.</p>
      <br />
      <p>
        Capgemen is a trendy design and elegant Figma template, made for corporate. This beautiful Figma template comes with simple components and ui elements that you can fully customize to fit your needs. With the Figma Capgemen template, you have the ability to start designing a modern corporate website easily.
      </p>
      <br />
      <p>
        <strong>Highlights</strong>
        <ol style={{ marginLeft: '30px' }}>
          <li>Built for Figma,</li>
          <li>Super-easy to Change Styles,</li>
          <li>Minimal and Elegant,</li>
          <li>Mobile-first Ready,</li>
          <li>Figma Auto layout integrated,</li>
          <li>Editable aolor and font styles,</li>
          <li>Resizeable layouts,</li>
          <li>Boottrap Grids</li>
        </ol>
      </p>
    <br />
      <p><strong>More by this creator</strong></p>
      <br />
      <div id='img'>
        <div id='img1'>
      <img  src={img1} alt=""/>
      <span>Physionic- Doctor Appointment Webs...</span>
      </div>
      <div id='img2'>
      <img  src={img2} alt="" />
      <span>Insurantly - insurance agency html5...</span>
      </div>
      <div id='img3'>
      <img  src={img3} alt="" />
      <span>Insurebound - html5 template for in...</span>
      </div>
      </div>
      <div id='inp'>
        <span>A</span>
        <input type="text" placeholder='Add a comment'/>
        <button>Post</button>
      </div>
      <p id='comment'>0 comments</p>
      </div>
     

      <div id='sidemenu'>
        <div id='announcement'>
          <div id='icon'>
          <svg class="svg" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M19.569 9.064c-1.684 1.235-3.677 1.967-5.749 2.12-.315-.69-1.012-1.17-1.82-1.17H8c-1.105 0-2 .896-2 2v4c0 1.105.895 2 2 2h.333l1.211 3.633c.272.816 1.037 1.367 1.897 1.367h1.172c.682 0 1.164-.668.948-1.316l-1.236-3.71c.667-.109 1.223-.548 1.495-1.143 2.072.153 4.065.885 5.749 2.12l.635.466c.33.242.796.006.796-.404V9.002c0-.41-.465-.646-.796-.403l-.635.466zm-8.29 8.95H9.387l1.106 3.316c.136.409.518.684.948.684h1.172l-1.334-4zm.721-1c.552 0 1-.447 1-1v-4c0-.552-.448-1-1-1H8c-.552 0-1 .448-1 1v4c0 .553.448 1 1 1h4zm2-1.159v-3.682c2.155-.179 4.228-.932 6-2.187v8.057c-1.772-1.256-3.845-2.009-6-2.188zM24.5 14c0-.828-.672-1.5-1.5-1.5v-1c1.38 0 2.5 1.12 2.5 2.5 0 1.38-1.12 2.5-2.5 2.5v-1c.828 0 1.5-.672 1.5-1.5z" fill-rule="evenodd" fill-opacity="1" fill="#000" stroke="none"></path></svg>
          </div>
          
          <div id='note'>
          <b>This is a Figma Community file.</b>
        <p>Community is a space for Figma users to share things they create.</p>
        <a href="##">Get started with a free account →</a>
          </div>
        </div>

        <div id='tag'>
          <h3>Tag</h3>

          <div id='corp'>
            corporate
          </div>

          <div id='design'>
            design
          </div>
          
          <div id='free'>
            free
          </div>

          <div id='temp'>
            template
          </div>

          <div id='web'>
            web design
          </div>

          <div id='site'>
            website
          </div>      
        </div>


        <div id='share'>
        <h3>Share</h3>
        <div>
        <img src={link} alt="" />
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-square-facebook"></i>
        </div>

        <div id='line'>
        <i class="fa-solid fa-pen-nib"></i>
        <p>More for Figma design</p>
        </div>

        
        <div id='last'>
        <p>Last update 2 years ago</p>        
        </div>

        <div id='last1'>
        <p>Licensed under <a href="##">CC BY 4.0</a></p>
        </div>

        <p style={{margin:'25px',color:'rgb(176, 169, 169)'}}>Reported resouece</p>
           </div>
      </div>
    </div>
    </div>
  )
}
export default Body