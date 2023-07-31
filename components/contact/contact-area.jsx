import React from 'react';
import Link from 'next/link';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-200 pb-130">
        <div className="container">
          <div className="row">
            <div class="col-xl-12 col-lg-12 d-flex justify-content-center">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Alamat Email</h4>
                  <span><Link href="mailto:(pbk.fkom@uniku.ac.id)">(pbk.fkom@uniku.ac.id)</Link></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Whatsapp</h4>
                  <span><Link href="https://wa.me/+6285320148791"><u>+6285320148791
                                    (Dadan Abdilah)</u></Link></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Sekretariat</h4>
                  <span><Link href="https://goo.gl/maps/aTeKpp7b7Jkptn937" target="blank"><u>Lantai 2 Kampus 2
                                    Universitas Kuningan</u></Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;