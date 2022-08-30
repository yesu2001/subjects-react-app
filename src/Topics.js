import {useState} from 'react';
import ModalTopic from './ModalTopic';
import {doc,updateDoc,arrayRemove} from "firebase/firestore"; 
import {db} from './Firebase';

const Topics = ({data}) => {
	const [open,setOpen] = useState(false);
	var arr = []


	const getTopics = () => {
		arr = data.subData
	}
	
	if(data.length === 0) {
		return (
			<p> Double Click on Topic</p>
		)
	}else {
		getTopics();
	}

	


	const handleTopic = () => {
		setOpen(true);
	}

	const handleDeleteTopic = (id,title,notes) => {
		const docref = doc(db,'subjects',id);
		updateDoc(docref,{
			topics: arrayRemove({
				title: title,
				notes: notes
			})
		}).then(() => console.log('deleted topic successfully')).catch(e=>console.log(e.message))
	}

	return (
		<div className="Topics">
			<button className="add_topic_btn" onClick={handleTopic}>Add Topic</button>
			{
				arr.map(item => {
					return (
						<>	
							<div className="header">
								<h2>{item.title}</h2>
								<button className="Delete_topic_btn" onClick={() => handleDeleteTopic(data.id , item.title,item.notes)}>🗑️ </button>
							</div>
							<p>{item.notes}</p>
						</>
					)	
				})
			}
			{
		        open && <ModalTopic data={data} close={() =>setOpen(false)}/>
		    }
		</div>
	)
}

export default Topics;