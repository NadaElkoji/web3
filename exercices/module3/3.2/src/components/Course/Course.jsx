import Content from "components/Content/Content";
import Header from "components/Header/Header";

const Course = ({course}) =>{
    const { name: courseName, parts: courseParts } = course;
    
    return (
        <div>
            <Header course = {courseName}/>
            <Content courses={courseParts}/>
        </div>
    )
}
export default Course;