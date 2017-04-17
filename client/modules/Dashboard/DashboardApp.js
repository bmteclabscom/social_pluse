import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class DashboardApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.userData.username}
        <Link to="/account/profile">/account/profile</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userData } = state;
  return { userData };
};

export default connect(mapStateToProps)(DashboardApp);
