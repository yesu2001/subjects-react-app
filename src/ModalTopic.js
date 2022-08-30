import {useState} from 'react';
import {doc,updateDoc,arrayUnion} from "firebase/firestore"; 
import {db} from './Firebase';

const ModalTopic = ({close,data}) => {
	const [newTitle,setNewTitle] = useState('');
	const [newNotes,setNewNotes] = useState('');

	const handleAddTopic = () => {
		const docref = doc(db,'subjects',data.id)
		updateDoc(docref,{
			topics: arrayUnion({
				title: newTitle,
				notes: newNotes
			})
		}).then(() => {
			console.log('topic added succesfully')
		}).catch(e => console.log('error message: ',e.message))
		setNewTitle('');
		setNewNotes('');
		
	}

	return (
		<div className='Modal'>
			<div className="container">
				<input type="text" value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder='enter the topic...'/>
				<textarea value={newNotes} placeholder="Enter the notes here..." onChange={e => setNewNotes(e.target.value)} rows="20" cols="100">
					
				</textarea>
				<div>
					<button className="blue" onClick={handleAddTopic}>Add</button>
					<button className="red" onClick={close}>close</button>
				</div>
			</div>
		</div>
	)
}

export default ModalTopic;