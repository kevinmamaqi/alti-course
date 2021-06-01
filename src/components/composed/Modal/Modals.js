import React from 'react';
import Modal from './Modal';

// Redux
import {useSelector} from 'react-redux';

function Modals() {
	const modals = useSelector((state) => state.modal);
	return modals.map((modal) => (
		<Modal
			key={modal.id}
			id={modal.id}
			headerContent={modal.headerContent}
			bodyContent={modal.bodyContent}
		/>
	));
}

export default Modals;
