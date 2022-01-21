import React from 'react';
import ScoreBanner from './ScoreBanner';

function HeaderBanner() {
    const styles = {
        'header-container': {
            display: 'flex',
            justifyContent: 'center'
        },
        'header-banner': {
            display: 'flex',
            border: 'solid hsl(217, 16%, 45%)',
            borderRadius: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '40rem',
            padding: '0.5rem 2rem'
        },
        'header-items': {
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'uppercase',
            color: 'white',
            fontSize: '1.4rem'
        }
    };

    return ( 
        <div className='header-container' style={styles['header-container']}>
            <div className='header-banner' style={styles['header-banner']}>
                <div className='header-items' style={styles['header-items']}>
                    <div>rock</div>
                    <div>paper</div>
                    <div>scissor</div>
                    <div>splock</div>
                    <div>lizard</div>
                </div>
                <ScoreBanner />
            </div> 
        </div>
    );
}

export default HeaderBanner;