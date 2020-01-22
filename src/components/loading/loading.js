import React from 'react'
import { Spin } from 'antd'

export default function Loading(props) {
  return (
    <React.Fragment>
      {props.loading && (
        <div className={'loading'}>
          <Spin />
        </div>
      )}
    </React.Fragment>
  )
}
