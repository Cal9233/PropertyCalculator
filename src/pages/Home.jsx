import React, {useState} from 'react';
import GoogleMapNav from '../Components/GoogleMapNav';
import Modal from 'react-responsive-modal';
import Search from '../Components/Search';

const Home = () => {
    const [modal, setmodal] = useState(false);
    const [data, setData] = useState(null)
  return (
    <div>
        <Search />
        <div className="flex mb-4">
            <div className="w-1/2 mb-4 ml-2 mr-2 shadow-lg " >
                <div style={{ width: "100%", height: "100vh" }} >
                    <GoogleMapNav
                        setmodal={setmodal}
                        setData={setData}
                    />
                </div>
            </div>
        </div>

    {data ? <Modal
    open={modal}
    onClose={() => setmodal(false)}
    >
    <div className="flex">
    <div className="w-full">
        <img src={data.properties.Image} style={{ width: '100px', height: '100px' }} alt='img'/>
    </div>
    <div className="w-full ml-3">
        <h1>{data.properties.NAME}</h1>
        <p>{data.properties.DESCRIPTION}</p>
    </div>
    </div>
    </Modal>
    : null}
    </div>
  )
}

export default Home