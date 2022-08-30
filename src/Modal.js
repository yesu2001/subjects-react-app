
const Modal = ({close,subjectsId,subjectsdata}) => {

	return (
		<div className='Modal'>
			<textarea id="w3review" name="w3review" rows="10" cols="50">
				{subjectsId}
			</textarea>
			<button>Edit</button>
			<button onClick={close}>close</button>
		</div>
	)
}

export default Modal