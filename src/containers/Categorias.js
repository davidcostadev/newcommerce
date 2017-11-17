import React from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/Navbar';

class CategoriasContainer extends React.Component {

  render() {
    // console.log(this)
    // return (<div>asdsad</div>)
    // return (<pre>{JSON.stringify(this.props.categories, null, "\t")}</pre>)
    if (this.props.categories.length === 0) {
     return <div>vazio</div>;
    }

    return (
     <NavBar categories={this.props.categories} />
    );
  }
}

const mapState = (state) => state

export default connect(mapState)(CategoriasContainer);
