import { CiSearch } from "react-icons/ci"
import { FaDumbbell } from "react-icons/fa"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartThin } from "react-icons/pi"


const Navbar = () => {
  return (
    <>
      <nav>
          <div>
            {/* Logo section */}
            <div>
              <FaDumbbell />
              <p>Coders</p>
              <p>Gym</p>
            </div>
            {/* Menu section */}
            <div>
              <ul>
                {NavbarMenu.map((item) => {
                  return (
                    <li key={item.id}>
                      <a href={item.link}>
                        {item.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* Icons section */}
            <div>
              <button>
                <CiSearch />
              </button>
              <button>
                <PiShoppingCartThin />
              </button>
              <button>
                Login
              </button>
            </div>
            {/* Mobile hamburger Menu section */}
            <div>
              <MdMenu />
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar
