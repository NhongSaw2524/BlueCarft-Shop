export default function Page () {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  <div className="container">
          <h1>สมัครบัญชี</h1>
<form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">อีเมล</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="********"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">รหัสผ่าน</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder="********"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">เบอร์โทรศัพท์</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="XXX XXX XXXX" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">ที่อยู่ปัจจุบัน</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="บ้านเลขที่, หมู่, รหัสไปรษณีย์" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">จังหวัด</label>
    <select id="inputState" className="form-select">
      <option selected>เลือก...</option>
      <option>เชียงใหม่</option>
      <option>นครสวรรค์</option>
      <option>นครราชสีมา</option>
      <option>กรุงเทพมหานคร</option>
      <option>พระนครศรีอยุธยา</option>
      <option>และอื่นๆ</option>
    </select>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">อำเภอ</label>
    <input type="text" className="form-control" id="inputState" placeholder="เขียน" />
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">ที่อยู่ลิ้งค์</label>
    <input type="text" className="form-control" id="inputZip" placeholder="วาง" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
       ยืนยันข้อมูล 100%
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary"><i class="bi bi-arrow-right-square-fill"></i>   สมัคร</button>
  </div>
  </form>
  </div>
  <br></br>

        </>
    )
}