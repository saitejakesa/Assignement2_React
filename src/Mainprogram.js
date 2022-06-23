import Cards from "./Cards";

export default function Mainprogram({handleClick}) {
  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Cards handleClick={handleClick}
            cardName="Fancy Product"
            Amount="$40.00 - $80.00"
            footer="View options"
          />
          <Cards
            cardName="Special Item"
            Amount="$18.00"
            mutedAmount="$20.00"
            footer="Add to cart"
            saleTag="Sale"
          />
          <Cards
            cardName="Sale Item"
            Amount="$25.00"
            mutedAmount="$50.00"
            footer="Add to cart"
            saleTag="Sale"
          />
          <Cards
          cardName="Popular Item" 
          Amount="$40.00" 
          footer="Add to cart" 
          />
          <Cards
            cardName="Sale Item"
            Amount="$25.00"
            mutedAmount="$50.00"
            footer="Add to cart"
            saleTag="Sale"
          />
          <Cards
            cardName="Fancy Product"
            Amount="$120.00 - $280.00"
            footer="View options"
          />
          <Cards
            cardName="Special Item"
            Amount="$18.00"
            mutedAmount="$20.00"
            footer="Add to cart"
            saleTag="Sale"
          />
          <Cards
          cardName="Popular Item" 
          Amount="$40.00" 
          footer="Add to cart" 
          />
        </div>
      </div>
    </section>
  );
}
