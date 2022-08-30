import './App.css';
import {useState,useEffect} from 'react';
import {collection,addDoc,getDocs,deleteDoc,doc,updateDoc,getDoc, deleteField} from "firebase/firestore"; 
import {db} from './Firebase';
import Modal from './Modal';
import Topics from './Topics'

function App() {
  const [inputSubject,setInputSubject] = useState('');
  const [subjects,setSubjects] = useState([]);
  const [subjectsData,setSubjectsData] =  useState([])
  const [subs, setSubs] = useState([])
  const [open,setOpen] = useState(false);

  const getData = () => {
    getDocs(collection(db, "subjects")).then(response => {
      setSubjects(response.docs.map(doc => ({
        id:doc.id,
        data:doc.data()
      })))
      setSubjectsData(subjects.map(subject => subject.data))
    })
  }
  useEffect(() => {
    getData();
  },[subjects])
  




  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSubject === '') return
    try {
      addDoc(collection(db, 'subjects'), {
      'subjectname': inputSubject,
      'topics': []
    })
    } catch(e) {console.log(e.message)}
    setInputSubject('')

  }


  const deleteSubject = (id) => {
    const docref = doc(db,'subjects',id)
    deleteDoc(docref)
    .then(() => console.log('subject deleted'))
    .catch(e => console.log(e.message))
  }

  const deleteTopic = (id) => {
    const docref = doc(db,'subjects',id);
    updateDoc(docref, {
      [`subjects.data['topics']`]: deleteField(),
    })
  }

  const handleChangeSubject = (id) => {
    const docref = doc(db,'subjects',id);
    getDoc(docref).then(doc => {
      setSubs({id:doc.id,subData:doc.data().topics})
    })
  }



  return (
    <div className="App">
      <header>
        <form>
          <input type='text' value={inputSubject} onChange={e=>setInputSubject(e.target.value)} placeholder='Enter a subject name..'/>
          <button onClick={handleSubmit}>Add Subject</button>
        </form>
        <div className='subjects'>
          {
            subjects.map((subject => <div key={subject.id} className='subjectName' onClick={() => handleChangeSubject(subject.id)}>
              {subject.data.subjectname}<button onClick={() => deleteSubject(subject.id)}>x</button></div>
            ))
          }
        </div>
      </header>
      <hr/>
      <div className='topics'>
        <Topics data={subs}/>
      </div>
      {
        open && <Modal subjectsId={subjects.id} subjectsdata={subjects.data} close={() =>setOpen(false)}/>
      }
    </div>
  );
}

export default App;
