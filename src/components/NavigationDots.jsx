import React from 'react'


const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'services', 'work', 'testimonial', 'contact'].map((item, index) => (
                // eslint-disable-next-line
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#E7717D'}: {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots