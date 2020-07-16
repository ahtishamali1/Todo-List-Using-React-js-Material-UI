import React,{ useState } from 'react'
import "./TodoAppUsingMaterialicon.css"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom'

const TodoAppUsingMaterialicon = () =>{
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event)=>{
     setItem(event.target.value);
    }
    const listOfItems = ()=>{
        setNewItem((preValue)=>{
return [...preValue,item];
        });
        setItem(" ");
    }
return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add Items" value={item} onChange={itemEvent}/>
            <Button className="newBtn" onClick={listOfItems}><AddIcon /></Button>
            <br />
            <ol>
            {
            newItem.map((val,index)=>{
                return <ListCom Key={index} text={val}/>;
            })
            }
            </ol>
            <br />
        </div>
    </div>
    </>
)
}
export default TodoAppUsingMaterialicon;