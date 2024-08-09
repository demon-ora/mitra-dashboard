import React from 'react';
import Card from './summarycomponent/Card';

const OrderStatus = () => {

    const data = [
        {
            title: 'Pending Orders',
            value: '0',
            color: 'rgb(30, 174, 152)',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="orange" stroke-width="2" fill="none" />
                <line x1="12" y1="6" x2="12" y2="12" stroke="orange" stroke-width="2" />
                <line x1="12" y1="12" x2="16" y2="16" stroke="orange" stroke-width="2" />
            </svg>

        },
        {
            title: 'Processing Orders',
            value: '14',
            color: 'rgb(134, 93, 255)',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#FCB36B" d="M16 28.063a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM26 28.063a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM30.999 7.063h-8a1 1 0 0 1 .76 1.65l-6 7a1 1 0 0 1-1.76-.65v-4h-2a1 1 0 0 1-.76-1.65l2.014-2.35H6.672l4.281 13.7c.007.021.009.044.014.066a.822.822 0 0 1 .027.206c0 .032.002.064 0 .097a1.012 1.012 0 0 1-.016.108c-.004.022-.004.044-.01.066l-.163.65 20.335-2.905a1 1 0 0 0 .859-.988v-10a1 1 0 0 0-1-1Z"></path><path fill="#723535" d="M28 24.061H11a.5.5 0 0 1-.545-.7l.515-2.059c.006-.022.006-.044.01-.066.007-.036.012-.072.016-.108v-.097a.817.817 0 0 0-.027-.206c-.006-.022-.007-.044-.014-.066l-5-16A1 1 0 0 0 5 4.062H1a1 1 0 0 0 0 2h3.264l4.697 15.03-.447 1.787A2.488 2.488 0 0 0 11 26.06h17a1 1 0 0 0 0-2Z"></path><path fill="#723535" d="M23.908 7.644a1 1 0 0 0-.909-.582h-2v-4a1 1 0 0 0-1.759-.65l-6 7a1 1 0 0 0 .76 1.65h2v4a1 1 0 0 0 1.76.65l6-7a1 1 0 0 0 .148-1.068Z"></path></svg>
        },
        {
            title: 'Complete Orders',
            value: '0',
            color: 'rgb(255, 107, 107)',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="orange" stroke-width="2" fill="none" />
                <path d="M6 12l4 4l8-8" stroke="orange" stroke-width="2" fill="none" />
            </svg>


        },
        {
            title: 'Cancelled Orders',
            value: '0',
            color: 'rgb(251, 191, 36)',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="10" stroke="orange" stroke-width="2" fill="none" />
                <line x1="8" y1="8" x2="16" y2="16" stroke="orange" stroke-width="2" />
                <line x1="16" y1="8" x2="8" y2="16" stroke="orange" stroke-width="2" />
            </svg>



        },
    ];

    return (
        <>
            <div className="col-span-full rounded-lg bg-white m-5 p-6 md:p-7">
                <div className="mb-5 flex items-center justify-between md:mb-7">
                    <h3 className="relative mt-1 text-lg font-semibold text-gray-800 before:absolute before:h-7 ">
                        Order Status
                    </h3>
                </div>
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {data.map((item, index) => (
                        <Card key={index} title={item.title} value={item.value} color={item.color} icon={item.icon} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OrderStatus;
