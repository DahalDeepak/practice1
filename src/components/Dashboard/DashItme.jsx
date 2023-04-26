import React from 'react';
import IMG1 from '../../Images/folder.png';
import IMG2 from '../../Images/jpg.png';
import IMG3 from '../../Images/xls.jpg';
import IMG4 from '../../Images/folder2.png';
import DashButton from './DashButton';
export default function DashItme() {
  return (
    <>
    <DashButton/>
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
  <div className="col">
    <div className="card">
      <img src={IMG1} className="card-img-top" alt="..."  style={{width:120,height: 130,margin:"auto"}}/>
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <br/>
      <img src={IMG2} className="card-img-top" alt="..."  style={{width:100,height: 100,margin:"auto"}} />
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG3} className="card-img-top" alt="..."  style={{width:120,height: 130,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG4} className="card-img-top" alt="..." style={{width:120,height: 130,margin:"auto"}}/>
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <br/>
      <img src={IMG2} className="card-img-top" alt="..."  style={{width:100,height: 100,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
</div>

{/* Second Row */}
<br/>
<div className="row row-cols-1 row-cols-md-5 g-4">
  <div className="col">
    <div className="card">
      <img src={IMG3} className="card-img-top" alt="..."  style={{width:120,height: 130,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG1} className="card-img-top" alt="..."  style={{width:120,height: 130,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG4} className="card-img-top" alt="..."  style={{width:120,height: 130,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
        <br/>
      <img src={IMG2}className="card-img-top" alt="..."   style={{width:100,height: 100,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={IMG4} className="card-img-top" alt="..."  style={{width:120,height: 130,margin:"auto"}} />
      <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a longer
        </p>
      </div>
    </div>
  </div>
</div>


    </div>
    
    </>
  )
}
