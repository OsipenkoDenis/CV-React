import React from "react";
import "./contacts.css";

const Contacts = () => {
    return(
        <article className="contacts">
            <h3 className="contacts__header">Contacts</h3>
            <ul className="contacts-list">
                <li className="contacts-list__item">Email: osipenkodenisv@gmail.com.</li>
                <li className="contacts-list__item">Tel: +375296722510.</li>
                <li className="contacts-list__item">City: Minsk.</li>
                <li className="contacts-list__item">LinkedIn:<a className="contacts-list__link" href="https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE-71649960/9" target="_blank"> Osipenko Denis.</a></li>
              <li className="contacts-list__item">Git:<a className="contacts-list__link" href="https://github.com/OsipenkoDenis" target="_blank"> Osipenko Denis.</a></li>
            </ul>
        </article>
    );
};

export default Contacts;