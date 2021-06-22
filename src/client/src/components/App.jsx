import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import FormPage from "./FormPage";

function App(){

    const [page, setPage] = useState("main");


    return (
    <div>
        <Header/>
        

        {page === 'main' && <MainPage/>}

      {page === 'form' && <FormPage/> }


        <Footer/>
    </div>
    )
    }

export default App;