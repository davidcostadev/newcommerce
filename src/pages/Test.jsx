import React from 'react';
import Helmet from 'react-helmet';

// async function Time() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('LEGAL');
//     }, 5000);
//   });
// }

// const Test = async () => {
//   const test = await Time();

//   return (
//     <div className="page-home">
//       <Helmet title="Test" />
//       {test}
//     </div>
//   );
// };

// //////////////////////////////////////////////////////////////

// const comGists = (PassedComponent) =>
//   class ComGists extends React.Component {
//     state = {
//       gists: []
//     }

//     componentDidMount() {
//       fetch("https://api.github.com/gists/public")
//           .then((r) => r.json())
//           .then((gists) => this.setState({
//             gists: gists
//           }))
//     }

//     render() {
//       return (
//         <PassedComponent
//           {...this.props}
//           gists={this.state.gists}
//         />
//       )
//     }
//   }


// const Gists = ({ gists }) => (
//   <pre>{JSON.stringify(gists, null, 2)}</pre>
// );

// const ListaGists = comGists(Gists);

// const Test = () => (
//   <div className="page-home">
//     <Helmet title="Test" />
//     <ListaGists />
//   </div>
// );

const URL = 'https://api.github.com/repos/facebook/react-native';
class StarCount extends React.Component {
  constructor() {
    super();
    this.state = { stars: '?' };
  }

  async componentDidMount() {
    const response = await fetch(URL);
    const json = await response.json();
    const stars = json.stargazers_count;
    this.setState({ stars });
  }

  render() {
    return (
      <div>React Native has {this.state.stars} stars</div>
    )
  }
}

class Test extends React.Component {
  render() {
    return (
      <StarCount />
    );
  }
}

export default Test;
