import React, {useState} from "react";
import mainCover from "../images/photo2.jpg";
import formCover from "../images/photo1.png";

//import LoginButton from "./LoginButton";

function MainPage(){

const [inputText, setInputText] = useState("");
const [name, setName] = useState("");
const [loginButtonText, setLoginButtonText] = useState("התחברות");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [inputVisibility, setInputVisibility] = useState("visible");
const inputStyle ={visibility: inputVisibility };
const [createBtnVisibility, setCreateBtnVisibility] = useState("hidden");
const createBtnStyle ={visibility: createBtnVisibility };
const [page, setPage] = useState("main");

// const [test, setTest] = useState();




function handleChange(event){
  setInputText(event.target.value);
}

function handleLoginClick(){
  if(isLoggedIn===false){
    setName(inputText);
    setLoginButtonText("התנתקות");
    setIsLoggedIn(true);
     setInputVisibility("hidden");
     setCreateBtnVisibility("visible");

  }
  else{
    setName("");
    setLoginButtonText("התחברות");
    setIsLoggedIn(false);
     setInputVisibility("visible");
     setCreateBtnVisibility("hidden");

  }
}

function handleCreateBookClick(){
  setPage("form");
}

// function fetchName(){
//   fetch("localhost:8080/greeting?name:gili").then((response) => {
//     return response.json();
//   }).then((data) => {
//     const transformeName = data.results.map(nameData=>{
//       return {
//         name:nameData.name
//       }
//     })
//     data.results;
//   });
//   }

  return(

    <div>
    { 
      page === 'main' &&
     (<div> 
  <div class="split left">
    <div class="centered">
  
    <img src={mainCover} />
   
    <br></br>
  <br></br>
  <br></br>
  <button onClick={handleCreateBookClick}
  style = {createBtnStyle}>
  {"צור ספר"}
  </button>
    </div>
  
  </div>
  
  <div class="split right">
  <div class="centered">
  <h1> ,שלום {name} </h1>
  <br></br>
  {/* <LoginButton/>  ------> how can we send here all the data that we have in the page ? */}
  
  <input 
  style = {inputStyle}
  onChange = {handleChange} 
  type="text"
   placeholder="מה שמך ?"
  dir = "rtl">
  </input>

  <br></br>
  <br></br>
  <button onClick={handleLoginClick}>{loginButtonText}</button>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
      <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי..</p>

    </div>
    </div>
  </div>)
    }


    {
      page === 'form' && 
    (<div>
      <div class="split left">
    <div class="centered">

  <form action="" method="post">
    
    <input 
  type="text"
  dir = "rtl">
  </input>
    <label> - שם הדמות הראשית </label>
    <br></br>
  <br></br>
   
  <input type="radio" name="gender"></input> 
  <label> זכר </label>
  <input type="radio"  name="gender"></input> 
  <label> נקבה </label>


<br></br>
<br></br>
  <select>
  <option>סבתא</option>
  <option>סבא</option>
 </select>
 <label> - דמות מישנית</label>
  <br></br>
  <br></br>
  
  <select>
  <option>זאב</option>
  <option>אריה</option>
  <option>נמר</option>

 </select>
 <label> - חיה מרושעת</label>
  <br></br>
  <br></br>
  <br></br>

    <img src={formCover} />

    <br></br>
  <br></br>
   
  <button type="submit">
  {"סיימתי"}
  </button>

  </form>

    </div>
  
  </div>
  
  <div class="split right">
  <div class="centered">
  <h1>  הוראות למילוי השאלון </h1>

  <br></br>
  <br></br>
  <br></br>
  <select>
  <option>כיפה אדומה</option>
 </select>
 <label> - ראשית יש לבחור ספר</label>
  <br></br>
  <br></br>
      <p>לורם איפסום קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.

קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי</p>

    </div>
    </div>
    </div>)
    }
    </div>
  );
  }

export default MainPage;

