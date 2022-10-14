
import Part from "components/Part/Part";
  const Content = ({courses}) =>{
    console.log(courses);
    return (
      <div>
        {courses.map(course => 
          <li key={course.id}>
            <Part name={course.name} number={course.exercises}/>
          </li>
        )}
      </div>
    )
  };
  export default Content;