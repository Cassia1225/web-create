import {Profile} from "./../pages/Profile";
import {Form} from "./../pages/Form";
import {useState} from "react";
import {Lesson4} from "./../pages/Lesson4";
import {Lesson5} from "./../pages/Lesson5";
import {TestLesson6} from "./../pages/TestLesson6";
import {Lesson6} from "./../pages/Lesson6";
import {TestLesson7} from "./../pages/TestLesson7";
import {Lesson7} from "./../pages/Lesson7";
import {TestLesson8} from "./../pages/TestLesson8";
import {Lesson8} from "./../pages/Lesson8";
import {Lesson9} from "./../pages/Lesson9";
import {PokemonSearchForm} from "./../pages/PokemonSearchForm";
import {SpotCard2} from "./../compornents/SpotCard2";
import {Lesson5_html} from "./../study/Lesson5_html";
import {Lesson7_html} from "./../study/Lesson7_html";
import {Lesson7_test} from "./../study/lesson7_test";
import {ProfileCard} from "./../study/Lesson8";
import {SpotCard} from "./../study/lesson9_html"

function App() {
  
  return(
    <div>
      <SpotCard 
      name="プロフィール" 
      location="エンジニア"
      recommended={true}
      />
    </div>
  );
}

export default App;