const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander.',
      role: '120',
      imageUrl:
        'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
      lastSeen: '24 aug',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander.',
        role: '120',
        imageUrl:
          'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
        lastSeen: '24 aug',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Leslie Alexander',
        email: 'leslie.alexander.',
        role: '120',
        imageUrl:
          'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
        lastSeen: '24 aug',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Leslie Alexander',
        email: 'leslie.alexander.',
        role: '120',
        imageUrl:
          'https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg',
        lastSeen: '24 aug',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
  ]
  
  export default function Transactions() {
    return (
      <ul role="list" className="divide-y divide-gray-100 lg:m-10 sm:m-0 mx-[1.5rem]">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-2 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">Supplier : {person.name}</p>
                <p className="text-sm font-semibold leading-6 text-gray-900">vendor: {person.email}</p>
                <p className="text-sm font-semibold leading-6 text-gray-900">Transactoin ID: 12345678</p>
              </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Amount: ₹{person.role}</p>
              <p className="text-sm leading-6 text-gray-900">Quantity: 4</p>
             
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Date: <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  