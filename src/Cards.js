import Rating from "./Rating";
export default function Cards(props,{handleClick}) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {props.saleTag}
        </div>
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">https://codesandbox.io/s/keen-glade-q5g7xs?file=/src/App.js:169-177

          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{props.cardName}</h5>
            {/* <!-- Product reviews--> */}

            <div>
              <Rating />
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              {props.mutedAmount}
            </span>
            {props.Amount}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"  value={props}> 
              <button onClick={handleClick}>{props.footer}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
