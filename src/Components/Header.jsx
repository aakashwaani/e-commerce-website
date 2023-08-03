import "./Header.scss";
import { BiCart, BiSearchAlt, BiUser } from "react-icons/bi";
export default function Header() {
  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom py-lg-3 py-2">
          <div className="container">
            <div className="row gx-2 align-items-center d-flex">
              <div className="col-xl-2 col-lg col-6 col-sm-6 col-md flex-grow-0">
                <a href="" className="">
                  <h4>Logo</h4>
                  {/* <img src="" alt="" /> */}
                </a>
              </div>
              <div className="col-xl-7 col-lg-6 col-12 col-sm-12 col-md">
                <form action="#" className="search my-3 my-lg-0">
                  <div className="input-group d-flex">
                    <input
                      type="search"
                      className="form-control"
                      style={{ width: "55%" }}
                      placeholder="Search categories.."
                    />
                    <button className="btn search-btn">
                      <BiSearchAlt size={20} />
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xl-3 col-lg col-md-12 col-12">
                <div className="float-lg-end">
                  <div
                    className="widget-header text-center mx-2 "
                    style={{ minWidth: "44px" }}
                  >
                    <BiUser size={20} />
                    <small className="d-block text-truncate">Profile</small>
                  </div>
                  <div
                    className="widget-header text-center mx-2 "
                    style={{ minWidth: "44px" }}
                  >
                    <BiCart size={24} />
                    <small className="d-block text-truncate">My Cart</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
