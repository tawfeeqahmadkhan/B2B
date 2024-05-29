const features = [
    { name: 'Order Date', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Order() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product name</h2>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  <p>₹120</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
             
                <div  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Order Date</dt>
                  <dd className="mt-2 text-sm text-gray-500"> 01/01/2024</dd>
                </div>
                <div  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Quantity</dt>
                  <dd className="mt-2 text-sm text-gray-500">10</dd>
                </div>
                <div  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Total Price</dt>
                  <dd className="mt-2 text-sm text-gray-500">₹1200</dd>
                </div>
                <div  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Supplier</dt>
                  <dd className="mt-2 text-sm text-gray-500">Supplier Name</dd>
                </div>
                <div  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900"> Order Status</dt>
                  <dd className="mt-2 text-sm text-red-500">ON Way</dd>
                </div>
                <div  className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900"> Payment</dt>
                  <dd className="mt-2 text-sm text-green-500">Successful</dd>
                </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            /> 
              <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            /> 
          </div>
        </div>
      </div>
    )
  }
  