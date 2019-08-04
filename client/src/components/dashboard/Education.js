import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';
const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <ti key={edu._id}>
      <td className="hide-sm">{edu.school}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.to}</Moment>-
        {edu.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
      </td>
      <td>
        <button
          onClick={() => {
            deleteEducation(edu._id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </ti>
  ));
  return (
    <Fragment>
      <h2 className="my-2">education Credential</h2>
      <table className="table">
        <thead>
          <tr>
            <th>school</th>
            <th className="hide-sm">degree</th>
            <th className="hide-sm" />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};
connect();
export default connect(
  null,
  { deleteEducation },
)(Education);
