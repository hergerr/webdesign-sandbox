import React from 'react';
import './customers-page.styles.css';
import { SearchBox } from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';
import bayer from '../../assets/images/bayer.png';
import bcg from '../../assets/images/bcg.png';
import general_electric from '../../assets/images/general_electric.png';
import hsbc from '../../assets/images/hsbc.png';
import jpmorgan from '../../assets/images/jpmorgan.png';
import lockheed from '../../assets/images/lockheed.png';
import lufthansa from '../../assets/images/lufthansa.png';
import ubs from '../../assets/images/ubs.png';
import singapore from '../../assets/images/singapore.png';


class CustomersPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            searchPhase: "",
            companies: [{desc: "Bayer AG", src: bayer}, {desc: "Boston Consulting Group", src: bcg},
                        {desc: "General Electric", src: general_electric}, {desc: "HSBC", src: hsbc},
                        {desc: "J.P. Morgan", src: jpmorgan}, {desc: "Lockheed Martin", src: lockheed},
                        {desc: "Lufthansa", src: lufthansa}, {desc: "UBS", src: ubs}, 
                        {desc: "Singapore Airlines", src: singapore}]
        }
    }

    handleChange =  e => {
        this.setState({searchPhase:e.target.value});
    }

    render() {
        const {companies, searchPhase} = this.state;
        const fileredCompanies = companies.filter(company => (
            company.desc.toLowerCase().includes(searchPhase.toLowerCase())
        ));

        return (
            <div className="Customer-container">
                <h3>Our Customers</h3>
                <SearchBox handleChange={this.handleChange}/>
                <CardList companies={fileredCompanies}/>
            </div>
        )
    }
}

export { CustomersPage }