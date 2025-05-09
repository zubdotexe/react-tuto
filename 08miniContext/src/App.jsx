import Profile from "./components/Profile"
import Login from "./components/Login"
import UserContextProvider from "./Context/UserContextProvider"


function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
