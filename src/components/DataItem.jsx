import './DataItem.css'
const DataItem = props =>{
    const {dataDetails} = props 
    const {id,subject,body,view_count} = dataDetails
    return(
        <div className="container">
            <p>id:{id}</p>
            <p>subject:{subject}</p>
            <p>body:{body}</p>
            <p>view-count:{view_count}</p><hr/>
        </div>
    )
}
export default DataItem