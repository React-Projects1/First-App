import "./ContentPageComponent.css";
import MyPosts from './MyPosts';
import MySideMenuComponent from './MySideMenuComponent';
export default function ContentPageComponent(){
    return(
        <div className="ContentPageComponent">

        <div className="myPosts">
        <MyPosts/>
        <MyPosts/>
        <MyPosts/>
        <MyPosts/>
        <MyPosts/>
        <MyPosts/>
        </div>

        <div className="mySideMenuComponent">
        <MySideMenuComponent/>
        </div>
            
        </div>
    );
}