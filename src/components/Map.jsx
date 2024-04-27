import React from 'react';
import styles from './Map.module.css'
 
const GoogleMap = () => {
    return (
        <iframe
                title="telran-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sfr!2sge!4v1714216199692!5m2!1sfr!2sge"
                className={styles.mapContainer}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">   
        </iframe>
    );
}

export default GoogleMap;