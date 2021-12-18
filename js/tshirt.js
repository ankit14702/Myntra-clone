function colorFixed() {
  var circles = document.getElementsByClassName("circles");
  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
      for (let j = 0; j < circles.length; j++) {
        circles[j].setAttribute("class", "circles");
      }
      circles[i].setAttribute("class", "circles clicked");
    });
  }
}
colorFixed();
var obj = {
  brand: "Moda Rapido",
  name: "Men Maroon Printed Round Neck T-shirt",
  img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
  price: 649,
  discountPrice: 421,
  discountPercentage: 35,
};
function addtoCart() {
  window.location.href = "login.html";
}
function appendPage() {
  let div = document.getElementById("content");
  let pro = JSON.parse(localStorage.getItem("clickedProduct"))
  div.innerHTML = null;
  div.innerHTML = `<div class="leftcontent">
        <div class="img-grid-container common-clearfix">
          <img
            src= ${pro.img}
          />
          <img
            src=${pro.img}
          />
        </div>
        <div class="img-grid-container common-clearfix">
          <img
            src=${pro.img}
          />
          <img
            src=${pro.img}
          />
        </div>
      </div>
      <div class="rightcontent">
        <h3 class="pdp-title">${pro.brand_name}</h3>
        <h3 class="pdp-name">${pro.T_shirt_name}</h3>
        <div class="ratebox">
          <p class="num">3.7</p>
          <img
            src="https://www.pngkey.com/png/full/894-8942242_blue-star-clipart-blue-star-clip-art-at.png"
          />
          <div class="separator">|</div>
          <span class="ratingnum">12.2k Ratings</span>
        </div>
        <div class="hr"></div>
        <div class="disline">
          <span class="cost">Rs.${Math.ceil(pro.oldprice * (100 - pro.discount) / 100)}</span><s class="totalcost">Rs.${pro.oldprice}</s
          ><span class="discount">(${pro.discount}% OFF)</span>
        </div>
        <div class="smalltext">Inclusive of all taxes</div>
        <div>
          <h4 class="size">SELECT SIZE</h4>
          <h4 class="chart">SIZE CHART</h4>
        </div>
        <span class="size-button-arrow"></span>
        <div class="sizes">
          <div class="circles">S</div>
          <div class="circles">M</div>
          <div class="circles">L</div>
          <div class="circles">XL</div>
          <div class="circles">XXL</div>
        </div>
        <div class="newdiv">
          <button class="cartbtn" onclick="addtoCart()">
            <img src="https://www.svgrepo.com/show/17522/bag.svg" />ADD TO BAG
          </button>
          <button class="wishbtn" onclick="addtoWishList()">
            <img src="https://www.svgrepo.com/show/14970/heart.svg" />WISH LIST
          </button>
        </div>
        <div class="newdiv">
          <h4 class="font" class="van">
            DELIVERY OPTIONS<img
              class="van"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzyqDQ8MGvUA2vcgRENTdAd68IUTv0jZ4Xw&usqp=CAU"
            />
          </h4>
        </div>
        <div class="newdiv">
          <input class="box" type="text" placeholder="Enter a pin code" />
        </div>
        <div>
          <h4 class="pin">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </h4>
        </div>
        <div class="bigtextcontainer">
          <div><h4 class="bigtext">100% Original Products</h4></div>
          <div><h4 class="bigtext">Pay on delivery might be available</h4></div>
          <div><h4 class="bigtext">Easy 30 days returns and exchanges</h4></div>
          <div><h4 class="bigtext">Try & Buy might be available</h4></div>
        </div>
        <div class="newdiv">
          <h4 class="font">
            BEST OFFERS
          </h4>
        </div>
        <div>
          <h4 class="font">Best Price:<span class="orange"> Rs.84</span></h4>
        </div>
        <ul class="items">
          <li>Applicable on: Orders above Rs. 2499 (only on first purchase)</li>
          <li>Coupon code: <b>MYNTRA400</b></li>
          <li>Coupon Discount: Rs. 400 off (check cart for final savings)</li>
        </ul>
        <div class="smalltexter">View Eligible Products</div>
        <div class="newdiv"><h4 class="font">EMI option available</h4></div>
        <ul class="items-s">
          <li>EMI starting from Rs.20/month</li>
        </ul>
        <div class="smalltexter">View Plan</div>
        <div class="hr"></div>
        <div class="newdiv"><h4 class="font">PRODUCT DETAILS</h4></div>
        <div>
          <h4 class="bigtext">
          
            Maroon and black printed T-shirt, has a round neck, long sleeves
          </h4>
        </div>
        <div class="newdiv"><h4 class="font">Size & Fit</h4></div>
        <div>
          <h4 class="bigtext-noGap">
            The model (height 6') is wearing a size M
          </h4>
        </div>
        <div class="newdiv"><h4 class="font">Material & Care</h4></div>
        <div><h4 class="bigtext-noGap">100% cotton</h4></div>
        <div><h4 class="bigtext-noGap">Machine-wash</h4></div>
        <div class="newdiv"><h4 class="font">Specifications</h4></div>
        <div class="index-tableContainer">
          <div class="index-row">
            <div class="index-rowKey">Fabric</div>
            <div class="index-rowValue">Cotton</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Fit</div>
            <div class="index-rowValue">Regular Fit</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Length</div>
            <div class="index-rowValue">Regular</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Main Trend</div>
            <div class="index-rowValue">Abstract</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Multipack Set</div>
            <div class="index-rowValue">Single</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Neck</div>
            <div class="index-rowValue">Round Neck</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Occasion</div>
            <div class="index-rowValue">Casual</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Pattern</div>
            <div class="index-rowValue">Printed</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Pattern Coverage</div>
            <div class="index-rowValue">Full-Front</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Print or Pattern Type</div>
            <div class="index-rowValue">Abstract</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Sleeve Length</div>
            <div class="index-rowValue">Long Sleeves</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Sleeve Styling</div>
            <div class="index-rowValue">Regular Sleeves</div>
          </div>
          <div class="index-row">
            <div class="index-rowKey">Wash Car</div>
            <div class="index-rowValue">Machine Wash</div>
          </div>
        </div>
        <div class="newdiv"><h4 class="font">Complete The Look</h4></div>
        <div>
          <h4 class="bigtext-noGap">
            This tee made by Moda Rapido will definitely become a go-to item in
            your wardrobe. Whether you're running errands or meeting friends for
            coffee, sport this maroon number with slim black jeans or cutoff
            shorts for a relaxed style.
          </h4>
        </div>
        <div class="hr"></div>
      </div>`
}
appendPage()