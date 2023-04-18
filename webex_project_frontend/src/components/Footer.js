import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-left text-white'>
            <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright: {' '}
                <a className='text-white' href='https://mdbootstrap.com/'>
                    WEBEX (MDBootstrap.com)
                </a>
            </div>
        </MDBFooter>
    );
}
