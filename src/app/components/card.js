import Image from "next/image" 

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row"> 
                

            <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM01.jpg" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">ริสแบนด์ BlueCraft</h5>
                 <p className="card-text">ราคา 170 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM03.jpg" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">ขายสวย</h5>
                 <p className="card-text">แกลลอรี่แต่งหญิง</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/MM02.jpg" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">T Shirt ลาย BlueCraft</h5>
                 <p className="card-text">ราคา 450 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}