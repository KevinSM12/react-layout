import Tree from "../components/tree.js"
import "../css/home.css"

const home = ()=>{
    return (
        <div classname="trees">
            <Tree name="Bald Cypress" image="images/bald.jpg" />
            <Tree name="Eastern Redbud" image="images/redbud.jpg"/>
            <Tree name="Live Oak" image="images/live.png"/>
        </div>
    );
};  

export default home;