function SimpleWeb({ value, onChange }) {
  return (
    <>
      <input type="text" onChange={onChange} value={value} />
      <p>{value}</p>
    </>
  );
}

// class SimpleWeb extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({ value: evt.currentTarget.value });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.value}
//         />
//         <p>{this.state.value}</p>
//       </div>
//     );
//   }
// }

export { SimpleWeb };
