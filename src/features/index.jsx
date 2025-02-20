import React from 'react'
import HeaderCostum from '../module/HeaderCostum'

const LayautFilm = ({ children }) => {
    return (
        <div className='flex w-full flex-col h-[100vh] overflow-y-auto'>
            <HeaderCostum />
            <div className='!h-[93.3vh] pb-10 overflow-y-auto bg-gray-900'>
                {children}
            </div>
        </div>
    )
}

export default LayautFilm