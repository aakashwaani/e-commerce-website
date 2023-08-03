import "./SignUp.scss";

export default function LogInForm() {
  return (
    <>
      <header>
        <section className="section-main border-bottom py-lg-3 py-2">
          <div className="container">
            <div className="row gy-3 align-items-center">
              <div className="col-4">
                {/* <a href=""></a> */}
                <h4>Logo</h4>
              </div>
              <div className="col-8">
                <div className="float-end ">
                  <a href="" className="btn btn-outline-primary mx-2">
                    Sign Up
                  </a>
                  <a href="" className="btn btn-primary">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="padding-y" style={{ minWidth: "80vh" }}>
        <div className="container">
          <div className="card mx-auto shadow" style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <h3 className="card-title text-center mb-4"> Log In</h3>
              <form>
                {/* row */}
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-4">
                  <label htmlFor=""> Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Log In{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
