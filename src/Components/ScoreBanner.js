import React from 'react';

function ScoreBanner() {
    const styles = {
        'score-container': {
            verticalAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '1rem',
            width: '8rem',
            height: '8rem'
        },
        'score-banner': {
            display: 'grid',
            gridTemplateRows: '1fr 2fr',
            height: '100%'
        },
        'score-title': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            color: 'hsl(229, 64%, 46%)',
            textTransform: 'uppercase'
        },
        'score-value': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: 'hsl(229, 25%, 31%)',
            fontSize: '3.5rem',
            fontWeight: '700'
        }
    }
    return ( 
        <div className='score-container' style={styles['score-container']}>
            <div className='score-banner' style={styles['score-banner']}>
                <div className='score-title' style={styles['score-title']}>score</div>
                <div className='score-value' style={styles['score-value']}>12</div>
            </div>
        </div>

    );
}

export default ScoreBanner;