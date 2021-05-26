import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from 'components/composed/Modal/Modal';

function Body({title, isLoading, children}) {
	return isLoading ? null : (
		<>
			<Header title={title} />
			{children}
			<Footer />
			<Modal />
		</>
	);
}

export default Body;
