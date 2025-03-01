import PropTypes from 'prop-types'
import React from 'react'


export default function Sample({fname = "Minaal", lname = "Imtiaz"}) {
  return (
    <div>
            Hi {fname} {lname}
    </div>
  )
}
Sample.propTypes = {
                    title: PropTypes.string,
};