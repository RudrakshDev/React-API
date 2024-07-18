import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GitHubData from './GithubData'

function App() {
  return (
    <>
      <h1>GitHub User Information</h1>
      <GitHubData></GitHubData>
    </>
  )
}

export default App
