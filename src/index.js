/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>hello</h1>, document.querySelector('main'))

// HMR
import {setStatefulModules} from 'fuse-box/modules/fuse-hmr'
setStatefulModules(name => {
  return /init\.js/.test(name)
})
