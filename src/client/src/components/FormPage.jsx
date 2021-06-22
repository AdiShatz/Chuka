import React, {useState} from "react";
import bookcover from "../images/photo1.png";


function FormPage(){

  return(
  <div>
  <div class="split left">
    <div class="centered">
  
    
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
  <option>אמא</option>
  <option>אבא</option>
  <option>דודה</option>
 </select>
 <label> - דמות מישנית</label>
  <br></br>
  <br></br>
  
  <select>
  <option>זאב</option>
  <option>אריה</option>
  <option>נמר</option>
  <option>דב</option>
 </select>
 <label> - חיה מרושעת</label>
  <br></br>
  <br></br>
  <br></br>

    <img src={bookcover} />

    <br></br>
  <br></br>
   
  <button /*onClick={{move to FormPage}*/>
  {"סיימתי"}
  </button>
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
  </div>
  );
  }

export default FormPage;

