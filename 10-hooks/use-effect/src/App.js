import React from 'react'
import { PruebasComponent } from './components/PruebasComponent'
import { AjaxComponent } from './components/AjaxComponent'

export const App = () => {
  return (
    <div>
      <h2>Empezando con use Effect</h2>
      <PruebasComponent />

      <h2>Emepzando con AJAX</h2>
      <AjaxComponent />
    </div>
  )
}
