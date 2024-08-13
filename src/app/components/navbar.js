import Image from "next/image" 
import Link from "next/link"

export default function navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src="/assets/img/BLUECRAFTSHOP.gif" alt="Bootstrap" width={197} height={70} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" /> 
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/">หน้าแรก</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                รายละเอียด
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/shop">ร้านค้า</Link></li>
                                <li><Link className="dropdown-item" href="/donate">บริจาค</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                    </ul>
                    <Link href="/signin" className="btn btn-outline-success">เข้าสู่ระบบ</Link> 
                    <Link href="/signup" className="btn btn-outline-success">สมัครบัญชี</Link>
                </div>
            </div>
        </nav>
    )
}