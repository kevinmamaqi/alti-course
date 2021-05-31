import React from 'react';

// Styles
import {ModalStyled} from './Modal.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faPhone} from '@fortawesome/free-solid-svg-icons';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {launchModal, closeModal} from 'store/modal.slice';

function Modal() {
	const dispatch = useDispatch();
	const modals = useSelector((state) => state.modal.modals);

	const openUserModal = (innerBodyContent) => {
		dispatch(
			launchModal({
				isInnerModal: true,
				headerContent: `Inner modal`,
				bodyContent: innerBodyContent,
			})
		);
	};

	return (
		<React.Fragment>
			{modals && modals.length > 0
				? modals.map((modal, idx) => {
						return (
							<ModalStyled key={idx}>
								<div className="overlay" onClick={() => dispatch(closeModal())} />
								<div className="container">
									<div className="header">{modal.headerContent}</div>
									{!modal.isInnerModal ? (
										<button onClick={() => openUserModal(modal.bodyContent)}>
											more info
										</button>
									) : null}
									{modal.isInnerModal &&
										modal.bodyContent.split('\n').map((str, contentIdx) => {
											return (
												<div className="body" key={contentIdx}>
													{str.trim().startsWith('email') ? (
														<FontAwesomeIcon icon={faEnvelope} />
													) : null}
													{str.trim().startsWith('phone') ? (
														<FontAwesomeIcon icon={faPhone} />
													) : null}
													{str.trim().startsWith('address') ? (
														<FontAwesomeIcon icon={faHome} />
													) : null}
													{str}
												</div>
											);
										})}
								</div>
							</ModalStyled>
						);
				  })
				: null}
		</React.Fragment>
	);
}

export default Modal;
