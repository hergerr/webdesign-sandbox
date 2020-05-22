import React from 'react';
import './customers-page.styles.css';
import { SearchBox } from '../../components/search-box/search-box.component';

class CustomersPage extends React.Component {
    render() {
        return (
            <div className="Customer-container">
                <h3>Our Customers</h3>
                <SearchBox />
            </div>
        )
    }
}

export { CustomersPage }