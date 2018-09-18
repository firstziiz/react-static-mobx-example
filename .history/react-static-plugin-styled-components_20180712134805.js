import React from 'react'
import { ServerStyleSheet } from 'styled-components'

module.exports = {
  // Extract the styles into the page meta
  App: (Comp, { meta }) => {
  },
  AppRendered: (app, {meta}) = {
    const sheet = new ServerStyleSheet()
    const CollectedApp = sheet.collectStyles(app)
    meta.styledComponentsTags = sheet.getStyleElement()
    return CollectedApp
  }
  // Place the styles into the HEad
  Head: ({ meta }) =>
    console.log(meta) || <React.Fragment>{meta.styledComponentsTags}</React.Fragment>,
}
