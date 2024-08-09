import React from 'react'

const Card = (props) => {
    const { title, value, color, icon } = props;
    console.log(props)
    return (
        <>
            <div className="flex h-full w-full max-md:w-[40%] flex-col rounded-lg border border-gray-300 bg-white p-5 md:p-6" style={{ borderBottomColor: color, borderBottomWidth: '4px' }}>
                <div className="mb-auto flex w-full items-center justify-between">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-gray-200 mr-3">
                    {icon}
                    </div>
                    <div className="flex w-full flex-col text-right">
                        <span className="mb-1 text-base font-normal text-gray-600">{title}</span>
                        <span className="mb-2 text-2xl font-semibold text-gray-800">{value}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card