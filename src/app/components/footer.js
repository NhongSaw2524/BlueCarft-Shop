import Image from "next/image";  

export default function footer() {
    return(
    <footer>
      <div className="container-fluid bg-white">
        <footer className="py-5"> 
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <form>
                <h5>บริการข่าวสาร</h5>
                <p>กรอกอีเมลเพื่อรับข่าวสารแนะนำรายการสินค้าใหม่ของเรา</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    ที่อยู่อีเมล
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="ที่อยู่อีเมล"
                  />
                  <button className="btn btn-primary" type="button">
                    ติดตาม
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All Rights Reserved By DrifterCars</p>
            <i class="bi bi-instagram"></i> <i class="bi bi-youtube"></i> 
            <i class="bi bi-facebook"></i> <i class="bi bi-line"></i> 
            <i class="bi bi-twitter"></i> 
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
    )
}