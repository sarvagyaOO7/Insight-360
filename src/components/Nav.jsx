
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women ♀',
        featured: [
          // Featured items can be added or modified here.
        ],
        sections: [
          {
            id: 'ethnic-wear',
            name: 'Ethnic Wear',
            items: [
              { name: 'Saree', href: '#' },
              { name: 'Salwar Kameez', href: '#' },
              { name: 'Anarkali Suit', href: '#' },
              { name: 'Ghaghara/Lehenga Choli', href: '#' },
              { name: 'Palazzo Suit', href: '#' },
              { name: 'Kurti(chinkari)', href: '#' },
            ],
          },
          {
            id: 'seasonal-fashion-winter',
            name: 'Seasonal Fashion - Winter',
            items: [
              { name: 'Coats and Parkas', href: '#' },
              { name: 'Cashmere Sweaters', href: '#' },
              { name: 'Faux Fur Accessories', href: '#' },
              { name: 'Knee-High Boots', href: '#' },
              { name: 'Knitted Dresses', href: '#' },
            ],
          },
          {
            id: 'casual-fashion',
            name: 'Casual Fashion',
            items: [
              { name: 'T-shirts', href: '#' },
              { name: 'Tank tops', href: '#' },
              { name: 'Blouses', href: '#' },
              { name: 'Shorts', href: '#' },
              { name: 'Leggings', href: '#' },
              { name: 'Pajamas', href: '#' },
              { name: 'Nightgowns', href: '#' },
              { name: 'Robes', href: '#' },
              { name: 'Slips', href: '#' },
              { name: 'Panties', href: '#' },
            ],
          },
          {
            id: 'footwear',
            name: 'Footwear',
            items: [
              { name: 'Heels', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sneakers', href: '#' },
              { name: 'Slippers', href: '#' },
            ],
          },
          {
            id: 'innerwear',
            name: 'Innerwear',
            items: [
              { name: 'Bras', href: '#' },
              { name: 'Panties', href: '#' },
              { name: 'Maternity Underwear', href: '#' },
            ],
          },
          {
            id: 'urban-wear',
            name: 'Urban Wear',
            items: [
              { name: 'High-Waisted Jeans', href: '#' },
              { name: 'Crop Tops', href: '#' },
              { name: 'Denim Jackets', href: '#' },
              { name: 'Bodycon Dresses', href: '#' },
              { name: 'Drop Shoulder Tees', href: '#' },
            ],
          },
          {
            id: 'hair-accessories',
            name: 'Hair Accessories',
            items: [
              { name: 'Headbands', href: '#' },
              { name: 'Hair Clips', href: '#' },
              { name: 'Hairpins', href: '#' },
              { name: 'Hair Ties', href: '#' },
              { name: 'Scrunchies', href: '#' },
              { name: 'Bobby Pins', href: '#' },
              { name: 'Hair Combs', href: '#' },
              { name: 'Hair Chains', href: '#' },
            ],
          },
          {
            id: 'hand-accessories',
            name: 'Hand Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Bracelets', href: '#' },
              { name: 'Rings', href: '#' },
              { name: 'Hand Chains', href: '#' },
              { name: 'Beaded Jewelry', href: '#' },
              { name: 'Cuffs', href: '#' },
              { name: 'Pearl Bracelets', href: '#' },
              { name: 'Anklets', href: '#' },
              { name: 'Tech Jewelry', href: '#' },
              { name: 'Gloves with Embellishments', href: '#' },
            ],
          },
          {
            id: 'sportswear',
            name: 'Sportswear',
            items: [
              { name: 'Sports Bras', href: '#' },
              { name: 'Leggings/Tights', href: '#' },
              { name: 'Yoga Pants', href: '#' },
              { name: 'Athletic Tank Tops', href: '#' },
              { name: 'Running Shorts', href: '#' },
              { name: 'Workout Jackets', href: '#' },
              { name: 'Crop Tops', href: '#' },
              { name: 'Active Skirts', href: '#' },
            ],
          },
          {
            id: 'workwear',
            name: 'Workwear',
            items: [
              { name: 'Pencil Skirts', href: '#' },
              { name: 'Blouses', href: '#' },
              { name: 'Pantsuits', href: '#' },
              { name: 'Sheath Dresses', href: '#' },
              { name: 'Blazers', href: '#' },
              { name: 'Tights or Hosiery', href: '#' },
            ],
          },
          // Additional sections for Women...
        ],
      },
      {
        id: 'men',
        name: 'Men ♂️',
        featured: [
          // Featured items for Men can be added here.
        ],
        sections: [
          {
            id: 'ethnic-wear',
            name: 'Ethnic Wear',
            items: [
              { name: 'Kurta Pajama', href: '#' },
              { name: 'Sherwani', href: '#' },
              { name: 'Bandh gala', href: '#' },
              { name: 'Nehru Jacket', href: '#' },
            ],
          },
          {
            id: 'seasonal-fashion-winter',
            name: 'Seasonal Fashion - Winter',
            items: [
              { name: 'Winter Jackets', href: '#' },
              { name: 'Woolen Sweaters', href: '#' },
              { name: 'Thermals (Body Warmer)', href: '#' },
              { name: 'Scarves and Beanies', href: '#' },
              { name: 'Insulated Boots', href: '#' },
            ],
          },
          {
            id: 'footwear',
            name: 'Footwear',
            items: [
              { name: 'Casual Sneakers', href: '#' },
              { name: 'Athletic Shoes', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Loafers', href: '#' },
              { name: 'Flip-Flops', href: '#' },
              { name: 'Dress Boots', href: '#' },
            ],
          },
          {
            id: 'innerwear',
            name: 'Innerwear',
            items: [
              { name: 'Boxers', href: '#' },
              { name: 'Briefs', href: '#' },
              { name: 'Undershirts', href: '#' },
            ],
          },
          {
            id: 'urban-wear',
            name: 'Urban Wear',
            items: [
              { name: 'Denim Jeans', href: '#' },
              { name: 'Graphic T-shirts', href: '#' },
              { name: 'Sweat Shirts', href: '#' },
              { name: 'Cargo Pants', href: '#' },
            ],
          },
          {
            id: 'hair-accessories',
            name: 'Hair Accessories',
            items: [
              { name: 'Head Wraps', href: '#' },
              { name: 'Hair Clips', href: '#' },
              { name: 'Elastic Headbands', href: '#' },
              { name: 'Hair Ties', href: '#' },
              { name: 'Hair Comb', href: '#' },
            ],
          },
          {
            id: 'hand-accessories',
            name: 'Hand Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Leather Bracelets', href: '#' },
              { name: 'Metal Bracelets', href: '#' },
              { name: 'Cufflinks', href: '#' },
              { name: 'Rings', href: '#' },
              { name: 'Leather Gloves', href: '#' },
            ],
          },
          {
            id: 'workwear',
            name: 'Workwear',
            items: [
              { name: 'Suits', href: '#' },
              { name: 'Dress Shirts', href: '#' },
              { name: 'Ties', href: '#' },
              { name: 'Dress Trousers', href: '#' },
              { name: 'Blazers', href: '#' },
              { name: 'Formal Belts', href: '#' },
              { name: 'Bows & Pocket Squares', href: '#' },
              { name: 'Suspenders', href: '#' },
            ],
          },
          {
            id: 'sportswear',
            name: 'Sportswear',
            items: [
              { name: 'Performance T-shirts', href: '#' },
              { name: 'Compression Shorts', href: '#' },
              { name: 'Track Pants', href: '#' },
              { name: 'Athletic Shorts', href: '#' },
            ],
          },
          {
            id: 'casual-fashion',
            name: 'Casual Fashion',
            items: [
              { name: 'T-shirts', href: '#' },
              { name: 'Sandos', href: '#' },
              { name: 'Button-down shirts', href: '#' },
              { name: 'Shorts', href: '#' },
              { name: 'Joggers', href: '#' },
              { name: 'Pajamas', href: '#' },
              { name: 'Boxers', href: '#' },
              { name: 'Briefs', href: '#' },
            ],
          },
          // Additional sections for Men...
        ],
      },
      {
        id: 'unisex',
        name: 'Unisex ⚥',
        featured: [
          // Featured items for Unisex can be added here.
        ],
        sections: [
          {
            id: 'ethnic-wear',
            name: 'Ethnic Wear',
            items: [
              { name: 'Dupatta', href: '#' },
              { name: 'Ethnic Jackets', href: '#' },
              { name: 'Traditional Accessories', href: '#' },
            ],
          },
          {
            id: 'seasonal-fashion-winter',
            name: 'Seasonal Fashion - Winter',
            items: [
              { name: 'Puffer Jackets', href: '#' },
              { name: 'Snow Boots', href: '#' },
              { name: 'Thermal Socks', href: '#' },
            ],
          },
          {
            id: 'footwear',
            name: 'Footwear',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Canvas Shoes', href: '#' },
              { name: 'Loafers', href: '#' },
              { name: 'Slip-Ons', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Flip-Flops', href: '#' },
              { name: 'Espadrilles', href: '#' },
              { name: 'Running Shoes', href: '#' },
            ],
          },
          {
            id: 'urban-wear',
            name: 'Urban Wear',
            items: [
              { name: 'Denim Jackets', href: '#' },
              { name: 'Graphic Tees', href: '#' },
              { name: 'Plaid Shirts', href: '#' },
              { name: 'Cargo Pants', href: '#' },
            ],
          },
          {
            id: 'hair-accessories',
            name: 'Hair Accessories',
            items: [
              { name: 'Head Wraps', href: '#' },
              { name: 'Hair Ties', href: '#' },
              { name: 'Bobby Pins', href: '#' },
              { name: 'Snap Clips', href: '#' },
              { name: 'Headbands', href: '#' },
              { name: 'Hair Combs', href: '#' },
              { name: 'Barrettes', href: '#' },
              { name: 'Hair Clips', href: '#' },
            ],
          },
          {
            id: 'hand-accessories',
            name: 'Hand Accessories',
            items: [
              { name: 'Minimalist Watches', href: '#' },
              { name: 'Chain Bracelets', href: '#' },
              { name: 'Cord Bracelets', href: '#' },
              { name: 'Beaded Bracelets', href: '#' },
              { name: 'Rope Bracelets', href: '#' },
              { name: 'Metal Cuffs', href: '#' },
              { name: 'Adjustable Bracelets', href: '#' },
              { name: 'Leather Bands', href: '#' },
              { name: 'Tech Accessories', href: '#' },
            ],
          },
          {
            id: 'workwear-unisex',
            name: 'Workwear',
            items: [
              { name: 'Button-Down Shirts', href: '#' },
              { name: 'Dress Trousers', href: '#' },
              { name: 'Blazers', href: '#' },
              { name: 'Ties or Bowties', href: '#' },
              { name: 'Professional Dresses', href: '#' },
              { name: 'Formal Scarves', href: '#' },
            ],
          },
          {
            id: 'casual-fashion-unisex',
            name: 'Casual Fashion',
            items: [
              { name: 'T-shirts', href: '#' },
              { name: 'Pajamas', href: '#' },
              { name: 'Boxers', href: '#' },
            ],
          },
          {
            id: 'urbanwear-unisex',
            name: 'Urbanwear',
            items: [
              { name: 'Denim Jackets', href: '#' },
              { name: 'Graphic Tees', href: '#' },
              { name: 'Plaid Shirts', href: '#' },
              { name: 'Cargo Pants', href: '#' },
            ],
          },
          {
            id: 'sportswear',
            name: 'Sportswear',
            items: [
              { name: 'Performance Jackets', href: '#' },
              { name: 'Sweatpants', href: '#' },
              { name: 'Sports Socks', href: '#' },
              { name: 'Athletic Backpacks', href: '#' },
              { name: 'Training Gloves', href: '#' },
              { name: 'Performance Shorts', href: '#' },
            ],
          },
          // Additional sections for Unisex...
        ],
      },
      // Additional categories like "Urban Wear", "Sportswear", etc., with their respective items.
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
  };
  
  // The navigation object now contains structured data according to the Insight 360 Products Dataset.
  // This object can be used to render a complex navigation menu in a web application.
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  {/* <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels> */}
                </Tab.Group>

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}

                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
    

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ml-80">
          <div className="border-b border-gray-200 ml-20">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>



              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid  gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-5 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex justify-center">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>

              
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
