import DataItem from "./DataItem";
import './DataItem.css'
const DataList = props =>{
    const {messagesList} = props 
    return(
        <div>
            <h1 className="heading">Data Center</h1>
            <div>
               {messagesList.map(eachList => (
                <DataItem key={eachList.id} dataDetails={eachList}/>
               ))}
            </div>
        </div>
    )

}
export default DataList