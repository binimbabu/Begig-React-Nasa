import axios from "axios";
import React, { Fragment } from "react";
import Header from "./Header";
import './App.css';
const baseURL = "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true";
function App() {
  const [post, setPost] = React.useState(null);
 
   React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
   function truncate(str) {
    return str.length > 10 ? str.substring(0, 300) + "..." : str;
}

  return (
    <div>
      <Header />
        <h1>{post[0]?.title}</h1>
        <div className="parent">
        <div>
        <p>{truncate(post[0]?.explanation)}</p>
        </div>
         
          <div className="firstImg">
          <img height={300} src={post[0]?.url}></img>
          </div>
        </div>
       
        <div className="imageFirst">{
            post.slice(0,7).map((item)=>{
              return (
                <div className="demoImg" >
                  <img height={90} src={item?.url}></img>
                  <div className="item-info">
  
                 <h4>
                {item?.title}
            </h4>
            <h4 className="price">
              {item?.date}
            </h4>
          </div>
                </div>
                
              )
              
            })
          }
          
          </div>
        
          <div className="image">{
            post.map((item)=>{
              return (
                <div className="demoImg" >
                  <img height={90} src={item?.url}></img>
                  <div className="item-info">
  
                 <h4>
                {item?.title}
            </h4>
            <h4 className="price">
              {item?.date}
            </h4>
          </div>
                </div>
                
              )
              
            })
          }
          
          </div>
    </div>
  );
}

export default App;
