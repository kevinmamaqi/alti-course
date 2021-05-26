import React from 'react';

// Styles
import {ModalStyled} from './Modal.styles';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {closeModal} from 'store/modal.slice';

function Modal() {
	const dispatch = useDispatch();
	const isActive = useSelector((state) => state.modal.isActive);
	const headerContent = useSelector((state) => state.modal.headerContent);
	const bodyContent = useSelector((state) => state.modal.bodyContent);
	return (
		<React.Fragment>
			{isActive ? (
				<ModalStyled>
					<div className="overlay" onClick={() => dispatch(closeModal())} />
					<div className="container">
						<div className="header">{headerContent}</div>
						<div className="body">{bodyContent}</div>
					</div>
				</ModalStyled>
			) : null}
		</React.Fragment>
	);
}

export default Modal;
