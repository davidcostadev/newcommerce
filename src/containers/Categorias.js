import React from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';

class CategoriasContainer extends React.Component {

  render() {

    // return (<pre>{JSON.stringify(this.props.categories, null, "\t")}</pre>)
    if (this.props.categories.length === 0) {
     return <div>vazio</div>;
    }

    return (
     <NavBar categories={this.props.categories} />
    );
  }
}


export default CategoriasContainer;
