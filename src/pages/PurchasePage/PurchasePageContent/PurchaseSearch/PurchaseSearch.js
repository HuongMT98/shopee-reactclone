import "./PurchaseSearch.scss"

function PurchaseSearch() {
  return (
    <>
      <div className='purchase-page-search'>
        <div className='purchase-page-search-input'>
          <input
            type='text'
            placeholder='You can search by Seller Name, Order ID or Product name'
          />
        </div>
      </div>
    </>
  )
}

export default PurchaseSearch
