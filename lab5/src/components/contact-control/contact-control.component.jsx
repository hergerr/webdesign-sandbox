import './contact-control.styles.css';
import { GenericButton } from '../generic-button/generic-button.component'
import React from 'react';

class ContactControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isContactShown: false }
    }

    handleShowContact = (e) => {
        this.setState({ isContactShown: true });
    }

    handleHideContact = (e) => {
        this.setState({ isContactShown: false });
    }

    render() {

        let contact_info;
        if (this.state.isContactShown) {
            contact_info = <p className="contact">
                <b>Email: </b>contact@learngerman.com <br/>
            <b>Phone number:</b> 123 456 789 <br/>
            <b>Adress:</b> Unten den Linder 23, Mitte, Berlin <br/>
        </p>
        }

        return (
            <div className="contact-box">
                <GenericButton value="Show" onClick={this.handleShowContact} />
                <GenericButton value="Hide" onClick={this.handleHideContact} />
                {contact_info}
            </div>
        )
    }
}

export { ContactControl }