import React from 'react';
import PropTypes from 'prop-types';

export interface Props {
  data: any;
}

export interface State {
  data: any;
  error?: object;
}

class SqlResultRender extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  static get propTypes() {
    return {
      data: PropTypes.array,
      error: PropTypes.any,
    };
  }

  render() {
    if (this.state.error) {
      return <pre>{JSON.stringify(this.state.error, null, 2)}</pre>;
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
              <div key={propertyName}>{propertyName}</div>
            );
          }
          tds.push(
            <div key={index + propertyName}>{row[propertyName]}</div>
          );
        }
        tbody_trs.push(
          <div key={index}>{tds}</div>
        )
        if (initHead === false) {
          thead_trs.push(
            <div key={index}>{head_tds}</div>
          );
          initHead = true;
        }
      }

      return (
        <div className='table'>
          <div className='table-header'>
            {thead_trs}
          </div>
          <div className='table-body'>
            {tbody_trs}
          </div>
        </div>
      );
    }
    return (<span />);
  }
}

export default SqlResultRender;