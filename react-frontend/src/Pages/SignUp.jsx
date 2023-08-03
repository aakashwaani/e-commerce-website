import "./SignUp.scss";

export default function SignUpForm() {
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
              <h4 className="card-title mb-4"> Sign Up</h4>
              <form>
                <div className="row gx-2">
                  <div className="col-6 mb-3">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                {/* row */}
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Phone</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor=""> Create Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-4">
                  <label htmlFor=""> Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Register Now
                  </button>
                </div>
                <hr />
                <p className="text-center mb-2">
                  Already have an account ?{" "}
                  <a href="" className="sign-link">
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
