// TODO
let App = () => (
  <div>
    <h1> Grocery List </h1>
    <GroceryListItem groceryItem={['Milk', 'Watermelon', 'Salad', 'Chips']} />
  </div>
);

//GroceryListItem - Refactored to Class
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boldFont: false
    };
    this.bolded = this.bolded.bind(this);
  }

  bolded() {
    this.setState({
      boldFont: !this.state.boldFont
    });
    console.log('TESTING', this.bolded);
  }

  render() {
    let style = {
      fontWeight: this.state.boldFont ? 'bold' : 'normal'
    };
    return (
      <ul>
        <li style={style} onMouseEnter={this.bolded}>
          {this.props.groceryItem[0]}
        </li>
        <li>{this.props.groceryItem[1]} </li>
        <li> {this.props.groceryItem[2]}</li>
        <li> {this.props.groceryItem[3]}</li>
      </ul>
    );
  }
}

//Grocery List Component
// let GroceryList = () => (
//   <ul>
//     <Bread />
//     <Eggs />
//   </ul>
// );

//Bread Component
// let Bread = () => <div> Bread </div>;

//Eggs Component
// let Eggs = () => <div> Eggs </div>;

//Stateless Component
// let GroceryListItem = props => (
//   <ul>
//     <li> {props.groceryItem[0]}</li>
//     <li>{props.groceryItem[1]} </li>
//     <li> {props.groceryItem[2]}</li>
//     <li> {props.groceryItem[3]}</li>
//   </ul>
// );

ReactDOM.render(<App />, document.getElementById('app'));
