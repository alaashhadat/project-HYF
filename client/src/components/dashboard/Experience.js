import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import Moment from 'react-moment';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <ti key={exp._id}>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment>-{' '}
        {exp.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </ti>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credential</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">title</th>
            <th className="hide-sm" />
          </tr>
        </thead>
        <tbody>{experience}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default connect(
  null,
  { deleteExperience },
)(Experience);
