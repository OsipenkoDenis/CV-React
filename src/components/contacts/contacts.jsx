/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./contacts.css";

const Contacts = () => {
	return (
		<article className="contacts">
			<h3 className="contacts__header">Contacts</h3>
			<ul className="contacts-list">
				<li className="contacts-list__item">Email: osipenkodenisv@gmail.com.</li>
				<li className="contacts-list__item">Tel: +375296722510.</li>
				<li className="contacts-list__item">City: Minsk.</li>
				<li className="contacts-list__item">Git:<a className="contacts-list__link" href="https://github.com/OsipenkoDenis" target="_blank"> Osipenko Denis.</a></li>
			</ul>
		</article>
	);
};

export default Contacts;