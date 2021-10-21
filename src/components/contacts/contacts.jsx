import React from 'react';
import './contacts.css';

const Contacts = () => {
    return(
        <article className="contacts">
                        <h3 className="contacts__header">Contacts</h3>
                        <ul className="contacts-list">
                            <li className="contacts-list__item">Email: denis.osipenko@inbox.ru.</li>
                            <li className="contacts-list__item">Tel: +375296722510.</li>
                            <li className="contacts-list__item">City: Minsk.</li>
                            <li className="contacts-list__item">Facebook:<a className='contacts-list__link' href='https://www.facebook.com/denis.osipenko.399' target='_blank'> Osipenko Denis.</a> </li>
                            <li className="contacts-list__item">Git:<a className="contacts-list__link" href='https://github.com/OsipenkoDenis' target="_blank"> Osipenko Denis.</a></li>
                        </ul>
                    </article>
    );
}

export default Contacts;