import "./CategoryTile.scss";
import Data from "../utils/data";

export default function CategoryTile() {
  return (
    <>
      <section className="pb-3">
        <div className="container">
          <div className="card overflow-hidden">
            <div className="row gx-0">
              <aside className="col-lg-3 p-5 bg-cover background">
                <header>
                  <h3 className="mb-3">Home and outdoor items</h3>
                  <a href="#" className="btn btn-light">
                    Source Now
                  </a>
                </header>
              </aside>
              <div className="col-lg-9">
                <ul className="row g-0 bordered-cols m-0">
                  {Data.map((val, index) => (
                    <li className="col-6 col-lg-3 col-md-4" key={index}>
                      <div className="card-product py-5 px- pe-0">
                        <a href="" className="title">
                          {val.title}
                        </a>
                        <img
                          src={val.cover}
                          alt=""
                          sizes="72px"
                          className="float-end mb-2 size-72"
                          style={{ width: "72px" }}
                        />
                        <p className="text-muted small">From {val.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
