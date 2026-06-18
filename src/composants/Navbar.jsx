import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [open, setOpen] = useState(false)

  const Deconnexion = () => {
    localStorage.removeItem("token")
    navigate('/')
  }

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600"

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-orange-500"
        >
          StackMini
        </NavLink>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">

          <NavLink to="/" className={linkStyle}>
            Questions
          </NavLink>

          <NavLink to="/ask" className={linkStyle}>
            Poser une question
          </NavLink>

          <NavLink to="/profil" className={linkStyle}>
            Profil
          </NavLink>

          {!token ? (
            <>
              <NavLink
                to="/connexion"
                className="text-gray-700 hover:text-blue-600"
              >
                Connexion
              </NavLink>

              <NavLink
                to="/inscription"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Inscription
              </NavLink>
            </>
          ) : (
            <button
              onClick={Deconnexion}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Déconnexion
            </button>
          )}

        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t">

          <NavLink to="/" onClick={() => setOpen(false)}>
            Questions
          </NavLink>

          <NavLink to="/ask" onClick={() => setOpen(false)}>
            Poser une question
          </NavLink>

          <NavLink to="/profil" onClick={() => setOpen(false)}>
            Profil
          </NavLink>

          {!token ? (
            <>
              <NavLink
                to="/connexion"
                onClick={() => setOpen(false)}
              >
                Connexion
              </NavLink>

              <NavLink
                to="/inscription"
                onClick={() => setOpen(false)}
                className="text-blue-600 font-semibold"
              >
                Inscription
              </NavLink>
            </>
          ) : (
            <button
              onClick={Deconnexion}
              className="bg-red-500 text-white px-4 py-1 rounded w-fit"
            >
              Déconnexion
            </button>
          )}

        </div>
      )}

    </header>
  )
}

export default Navbar