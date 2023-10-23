
import { List, Avatar } from "antd" 

const {Item} = List 

const SingCourseLesson = ({lessons, setPreview, showModal, setShowModal})=> {

    return(
        
        <div className="container">
            <div className="row">
                <div className="col lesson-list pt-4">
                    {/* the line below shows number of lessons */}
                    {/* {lessons && <h4>{lessons.length} Lessons</h4>}  */} 
                    <h4>Requirements</h4>
                    <hr/> 

                    <List 
                        itemLayout="horizontal" 
                        dataSource={lessons} 
                        renderItem={(item, index)=> (
                            <Item>
                                <Item.Meta avatar={<Avatar>{index + 1}</Avatar>} title={item.title} />

                                    {item.video && item.video !== null && item.free_preview && ( 

                                        <span 
                                        className="text-primary"
                                        style={{ cursor: "pointer" }} 
                                        onClick={()=> {
                                            setPreview(item.video.Location) 
                                            setShowModal(!showModal) 
                                        }}>
                                        Preview
                                        </span>
                                    )}

                            </Item>
                        )}
                    />

                </div>
            </div>
        </div> 
        
    )
}

export default SingCourseLesson