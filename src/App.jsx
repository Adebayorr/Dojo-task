import { 
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
 } from "react-router-dom"
import RootLayout from "./Layouts/RootLayouts"

import DashBoard, { dashBoardLoader } from "./Pages/DashBoard"
import Create from "./Pages/Create"
import Profile from "./Pages/Profile"

function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />} loader={dashBoardLoader}/>
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />

      </Route>
    )
  )

  return (
    <RouterProvider router={Router}/>
  )
}

export default App
