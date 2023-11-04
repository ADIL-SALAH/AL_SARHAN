import Navbar from '../app/Components/Navbar'
import MenuBar from './Components/menuBar'
import HomePage from './Components/Home'

export default function Home() {
  return (
    <main className='pt-5 '>
      <Navbar />
      <MenuBar />
      <HomePage />
    </main>
  )
}
