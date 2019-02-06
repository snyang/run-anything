import React from 'react';
import PropTypes from 'prop-types';

class SqlResultRender extends React.Component {

  /**
   * 
   * @param {data: 'rows array', error: 'error message'} props 
   */
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  static get propTypes() {
    return {
      data: PropTypes.array,
      error: PropTypes.any
    };
  }

  render() {
    if (this.state.error) {
      return <pre>{JSON.stringify(JSON.parse(this.state.error), null, 2)}</pre>;
    }

    if (this.state.data) {

      var rows = this.state.data;
      var initHead = false;
      var thead_trs = [];
      var tbody_trs = [];

      for (let index in rows) {
        let row = rows[index]
        let tds = [];
        let head_tds = [];
        for (let propertyName in row) {
          if (initHead === false) {
            head_tds.push(
              <td key={propertyName}>{propertyName}</td>
            );
          }
          tds.push(
            <td key={index + propertyName}>{row[propertyName]}</td>
          );
        }
        tbody_trs.push(
          <tr key={index}>{tds}</tr>
        )
        if (initHead === false) {
          thead_trs.push(
            <tr key={index}>{head_tds}</tr>
          );
          initHead = true;
        }
      }

      return (
        <table className='resultTable'>
          <thead>
            {thead_trs}
          </thead>
          <tbody>
            {tbody_trs}
          </tbody>
        </table>
      );
    }
    return (<span />);
  }
}

export default SqlResultRender;