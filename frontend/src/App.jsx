import { useState } from 'react'
import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/store'
import Navbar from './pages/general/nav'

import Home_page from './pages/general/main_page'
import Register from './pages/student/register'
import StudentLogin from './pages/student/login'
import OurCommunity from './pages/our_community/ourCommunity'
import Events from './pages/event_section/events'
import UpcomingEvents from './pages/event_section/upcommingEvents'
import AnnualFest from './pages/event_section/annual_event'
import AdminLogin from './pages/admin/login'
import AdminEvents from './pages/admin/events'
import AdminDashboard from './pages/admin/dashboard'
import AdminMembers from './pages/admin/members'
import AdminProtectedRoute from './pages/admin/adminProtectedRoutes'
import AdminList from './pages/admin/adminList'
import CreateAdmin from './pages/admin/createAdmin'
import EditAdmin from './pages/admin/editAdmin'
import ViewAdmin from './pages/admin/viewAdmin'
import StudentProfile from './pages/student/profile'
import StudentProtectedRoute from './pages/student/StudentProtectedRoutes'
import ManageEvents from './pages/admin/manageEvent'
import EditEvent from './pages/admin/editEvent'
import CreateEvent from './pages/admin/createEvent'
// import ViewAdmin from './pages/admin/'
// import EditAdmin from './pages/admin/'

export const myContext = createContext();

function App() {

  return (
    <>
      <Provider store={Store}>
        <myContext.Provider value={{ name: "Anand", class: "B.tech" }}>
          <BrowserRouter>
            <Navbar />

            <Routes>

              <Route path='/admin' element={<AdminLogin />} />

              {/* <Route path="/admin/events" element={<AdminEvents />} /> */}

              <Route path="/admin/members" element={<AdminMembers />} />

              <Route
                path="/admin/dashboard"
                element={
                  <AdminProtectedRoute>
                    <AdminDashboard />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/:id"
                element={
                  <AdminProtectedRoute>
                    <ViewAdmin />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/edit/:id"
                element={
                  <AdminProtectedRoute>
                    <EditAdmin />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/all"
                element={
                  <AdminProtectedRoute>
                    <AdminList />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/create"
                element={
                  <AdminProtectedRoute>
                    <CreateAdmin />
                  </AdminProtectedRoute>
                }
              />

              {/* <Route
                path="/admin/:id"
                element={
                  <AdminProtectedRoute>
                    <ViewAdmin />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/edit/:id"
                element={
                  <AdminProtectedRoute>
                    <EditAdmin />
                  </AdminProtectedRoute>
                }
              /> */}

              <Route
                path="/admin/events"
                element={<AdminProtectedRoute><ManageEvents /></AdminProtectedRoute>}
              />

              <Route
                path="/admin/events/create"
                element={<AdminProtectedRoute><CreateEvent /></AdminProtectedRoute>}
              />

              <Route
                path="/admin/events/:id"
                element={<AdminProtectedRoute><EditEvent /></AdminProtectedRoute>}
              />



              <Route path='/' element={<Home_page />} />
              <Route path='/login' element={<StudentLogin />} />
              <Route path='/register' element={<Register />} />
              <Route path='/our-community' element={<OurCommunity />} />
              <Route path='/events' element={<Events />} />
              <Route path='/events/upcoming' element={<UpcomingEvents />} />
              <Route path='/events/annual-fest' element={<AnnualFest />} />


              <Route path="/profile" element={
                <StudentProtectedRoute>
                  <StudentProfile />
                </StudentProtectedRoute>}
              />


            </Routes>
          </BrowserRouter>
        </myContext.Provider>
      </Provider>
    </>
  )
}

export default App



/**
 * Here we are required to route the page for which we have to use reactRouter ::
 * React Router comes due to Link functionality which provide spa :: change the url on only 
 * and the router load the currect page :: do not reload :: 
 */