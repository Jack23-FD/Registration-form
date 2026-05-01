import html from "./assets/html.jpg";
import css from "./assets/css.jpg";
import javascript from "./assets/javascript.jpg";
import Course from "./Course.jsx";
function App() {
  return (
    <>
      <Course course="HTML" image={html} description="Learn the basics of HTML." show={true} />
      <Course course="CSS" image={css} description="Master the art of styling with CSS." show={true} />
      <Course course="JavaScript" image={javascript} description=" Dive into JavaScript programming." show={true} />
    </>
  );
}
 
export default App;