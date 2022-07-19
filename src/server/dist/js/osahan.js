(function($) {
"use strict"; // Start of use strict

// Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Categories Slider
$('.categories-slider').slick({
  slidesToScroll: 3,
  slidesToShow: 8,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});

// Categories Slider
$('.promo-slider').slick({
  slidesToShow: 3,
  arrows: true,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Osahan Slider
$('.osahan-slider').slick({
  centerMode: false,
  slidesToShow: 1,
  arrows: false,
  dots: true
});

// Recommend Slider
$('.recommend-slider2').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  centerMode: true,
  arrows: false,
  dots: true,
  autoplay: true
  
});

// Recommend Slider
$('.recommend-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  autoplay: true
});

// Trending Slider
$('.trending-slider').slick({
  centerPadding: '30px',
  slidesToShow: 4,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Sidebar
var $main_nav = $('#main-nav');
  var $toggle = $('.toggle');

  var defaultOptions = {
      disableAt: false,
      customToggle: $toggle,
      levelSpacing: 40,
      navTitle: 'gurdeeposahan',
      levelTitles: true,
      levelTitleAsBack: true,
      pushContent: '#container',
      insertClose: 2
  };

// call our plugin
var Nav = $main_nav.hcOffcanvasNav(defaultOptions);  

// Dark Mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('class', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('class', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {       
       document.documentElement.setAttribute('class', 'light');
          localStorage.setItem('theme', 'light');
    }    
}
// toggleSwitch.addEventListener('change', switchTheme, false);

})(jQuery); // End of use strict 

// Quantity JS
jQuery(document).ready(function(){
  // This button will increment the value
  $('.qtyplus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $('input[name='+fieldName+']').val(currentVal + 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(1);
      }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 1) {
          // Decrement one
          $('input[name='+fieldName+']').val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(1);
      }

    //   $.ajax(
    //     {url:"demo_test.txt",
    //     success:function(result){
    //     $("#div1").html(result);
    // }});

    
  });


// get lon & lat from OpenWeather Onecall API

// function get_lat_lon(lat, lon) {
//   let API_key = "eb00768af5d588e6a02de34686148288";
//   $.ajax({
//     type: "get",
//     dataType: "json",
//     url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${API_key}`,
//     success: function (result) {
//       console.log(result)
//       let dailyArr = result.daily;
//       //console.log(dailyArr)
//       displayData(dailyArr)

//     }
//   });
// }

//update : get lon & lat from OpenWeather Onecall API
 
function get_lat_lon(lat, lon) {
  $(".recommendation").empty();
  let API_key = "eb00768af5d588e6a02de34686148288";
  $.ajax({
    type: "get",
    dataType: "json",
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${API_key}`,
    success: function (result) {
      console.log(result)
      // add weather background in the body
      // const imageUrl = `img/weather/${result.current.weather[0].main}.jpg`;
      // $(".osahan-main-body").css("background-image", "url(" + imageUrl + ")");
      let dailyArr = result.daily;
      let max = -200;
      let min = 200;
 
      dailyArr.forEach(day => {
        const tempMax = day.temp.max;
        const tempMin = day.temp.min;
 
        if (tempMax > max) {
          max = tempMax;
        }
        if (tempMin < min) {
          min = tempMin;
        }
      });
 
      console.log(`MAX: ${max}, MIN: ${min}`);
 
      // min = 10;
      // max = 50;
 
      $.ajax({
        type: "get",
        dataType: "json",
        url: `/api/productNewApi/recommendation?minimum=${min}&maximum=${max}`,
        success: function (result) {
          let recommendation = result.data;
          recommendation = recommendation.slice(0, 8);
          console.log(recommendation);
          recommendation.forEach(item => {
            $(".recommendation").append(getReco(item));
          });
        },
      });
 
      displayData(dailyArr)
 
    }
  });
}
 
//  formatted HTML for recommendation

function getReco(product) {
  const { brand, name, image, price } = product;
  return `<div class="col-6 col-md-3 mb-3">
                   <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                      <div class="list-card-image">
                         <a href="product_details.html" class="text-dark">
                            <!-- <div class="member-plan position-absolute"><span class="badge m-3 badge-danger">5%</span></div> -->
                            <div class="p-3">
                               <img src="img/imageNew/${image[0]}" class="img-fluid item-img w-100 mb-3">
                               <h6>${brand}</h6>
                               <h6>${name}</h6>
                               <div class="d-flex align-items-center">
                                  <h6 class="price m-0 text-success">$${price}</h6>
                         <a data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" class="btn btn-success btn-sm ml-auto">+</a>
                         <div class="collapse qty_show" id="collapseExample7">
                         <div>
                         <span class="ml-auto" href="#">
                         <form id='myform' class="cart-items-number d-flex" method='POST' action='#'>
                         <input type='button' value='-' class='qtyminus btn btn-success btn-sm' field='quantity' />
                         <input type='text' name='quantity' value='1' class='qty form-control' />
                         <input type='button' value='+' class='qtyplus btn btn-success btn-sm' field='quantity' />
                         </form>
                         </span>
                         </div>
                         </div>
                         </div>
                         </div>
                         </a>
                      </div>
                   </div>
                </div>`;
}

// input zip_code or city name in one code 

$("#nav_location").click(function (e) {
  let API_key="eb00768af5d588e6a02de34686148288";
  let country_code = "US";
  let limit  = 1;
  let city_search_value = $("#inlineFormInputGroupUsername2").val()
  console.log(city_search_value)
  console.log(parseInt(city_search_value))
  //console.log($.isnumeric(city_search_value))
  //console.log(Number.isNaN(city_search_value))
  //if ($("#inlineFormInputGroupUsername2").val() = $("#inlineFormInputGroupUsername2").formatNumber())
  //if (typeof city_search_value === 'number') {
    if (isNaN(parseInt(city_search_value))) 
    {//(Number.isNaN(city_search_value)) {
    //var zip_code = $("#inlineFormInputGroupUsername2").val();
      $.ajax
      ({
         type: "get",
         dataType: "json",
         //url: `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},&limit=${limit}&appid=${API_key}`,
         url: `http://api.openweathermap.org/geo/1.0/direct?q=${city_search_value},&limit=${limit}&appid=${API_key}`,
         success: function (result) 
         {
           let lon = result[0].lon
           let lat = result[0].lat
           console.log(result);
           console.log(lon);
           console.log(lat)
           get_lat_lon(lat,lon)
         },
      })
    }
    else {  
    $.ajax
    ({
      type: "get",
      dataType: "json",
      //url: `http://api.openweathermap.org/geo/1.0/zip?zip=${zip_code},${country_code}&appid=${API_key}`,
      url: `http://api.openweathermap.org/geo/1.0/zip?zip=${city_search_value},${country_code}&appid=${API_key}`,
      // data: 
      // {
      //   name: zip_code
      // },
      success: function (result) {
        var lon = result.lon
        var lat = result.lat
        console.log(result);
        console.log(lon);
        console.log(lat);
        get_lat_lon(lat,lon)
      }
    })
  }
   


})

// default city in 8-Day forecast 

function defaultLocation() {
  let location_val = "New York";
  let API_key = "eb00768af5d588e6a02de34686148288";
  let limit = 1;
  $.ajax({
    type: "get",
    dataType: "json",
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${location_val},&limit=${limit}&appid=${API_key}`,
    success: function (result) {
      let lon = result[0].lon;
      let lat = result[0].lat;
      // console.log(result);
      // console.log(lon);
      // console.log(lat);
      get_lat_lon(lat, lon);
      // getAllCities(location_val);
    },
  });
};
defaultLocation()

// UTC change to regular date ,display data and icon in each of container

function displayData(arr) {
  let container = ``;
  arr.forEach((element) => {
    let temp = element.temp;
    let weather = element.weather[0]
    let dayname = new Date(element.dt * 1000).toLocaleDateString("en", {
      month: 'short', 
      day: 'numeric',
      weekday: "short",
    });
    container += `
      <div class="col-c">
      <div class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
         <a href="listing.html">
            <img src=${`http://openweathermap.org/img/w/${weather.icon}.png`
          } icon=${weather.icon} class="img-fluid px-2 mx-auto">
            <p class="m-0 pt-2 text-muted text-center">${dayname}</p> 
            <p class="m-0 pt-2 text-muted text-center">${weather.main}</p>
                  <p class="m-0 pt-2 text-muted text-center"> ${temp.max}°C/${temp.min}°C</p> 
              </a>
            </div>
        </div>
      `;
  })

  document.getElementById("slider").innerHTML = container
}

// click the list of cities get 8-Days forecast 

$("#topCities").click((e) => {
  // let city_name = $("#eachCity").val();
  let city_name = e.target.text;
  let API_key = "eb00768af5d588e6a02de34686148288";
  let limit = 1;
  $.ajax({
    type: "get",
    dataType: "json",
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},&limit=${limit}&appid=${API_key}`,
    success: function (result) {
      let lon = result[0].lon;
      let lat = result[0].lat;
      // console.log(result);
      // console.log(lon);
      // console.log(lat);
      get_lat_lon(lat, lon);
      // getAllCities(location_val);
    },
  });

})

// Get all products
function getAllProducts() {
  $.ajax({
    type: "get",
    dataType: "json",
    url: `/api/productNewApi/query`,
    success: function (result) {
      let data = result.data;
      console.log(data);
      displayAllProducts(data)

    },
  });
}
// getAllProducts()


function displayAllProducts(data) {
  let container = ``;
  data.forEach(item => {
    //console.log(item)
    //console.log(item.image[0])
    container +=`
    <div class="col-6 col-md-3 mb-3">
    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
       <div class="list-card-image">
          <a href="product_details.html" class="text-dark">
             <div class="member-plan position-absolute"><span
                   class="badge m-3 badge-danger"></span></div>
             <div class="p-3">
                <img src="img/imageNew/${item.image[0]}" class="img-fluid item-img w-100 mb-3">
                <h6>${item.brand}</h6>
                <h6>${item.name}</h6>
                <div class="d-flex align-items-center">
                   <h6 class="price m-0 text-success">$ ${item.price}</h6>
                   <a data-toggle="collapse" href="#collapseExample1" role="button"
                      aria-expanded="false" aria-controls="collapseExample1"
                      class="btn btn-success btn-sm ml-auto">+</a>
                   <div class="collapse qty_show" id="collapseExample1">
                      <div>
                         <span class="ml-auto" href="#">
                            <form id='myform' class="cart-items-number d-flex"
                               method='POST' action='#'>
                               <input type='button' value='-'
                                  class='qtyminus btn btn-success btn-sm'
                                  field='quantity' />
                               <input type='text' name='quantity' value='1'
                                  class='qty form-control' />
                               <input type='button' value='+'
                                  class='qtyplus btn btn-success btn-sm'
                                  field='quantity' />
                            </form>
                         </span>
                      </div>
                   </div>
                </div>
             </div>
          </a>
       </div>
    </div>
  </div>
    
    `

  })
  document.getElementById("allProducts").innerHTML = container
}

// Search the products using product brand
// $("#nav_search").click(function (e) {
//   let search_val = $("#inlineFormInputGroupUsername3").val();
//   // console.log(search_val);
//   // console.log(e.target);
//   $.ajax({
//     type: "get",
//     dataType: "json",
//     url: `/api/productNewApi/search/brands?keyword=${search_val}`,
//     success: function (result) {
//       let data = result.data;
//       console.log(data);
//       displayAllProducts(data)
//     },
//   });
// });
// Search the products using products name

// $("#nav_search").click(function (e) {
//   let search_val = $("#inlineFormInputGroupUsername3").val();
//   // console.log(search_val);
//   // console.log(e.target);
//   $.ajax({
//     type: "get",
//     dataType: "json",
//     url: `/api/productNewApi/search/productName?keyword=${search_val}`,
//     success: function (result) {
//       let data = result.data;
//       console.log(data);
//       displayAllProducts(data)
//     },
//   });
// });

// Search the products using products name or brand name 

$("#nav_search").click(function (e) {
  let search_val = $("#inlineFormInputGroupUsername3").val();
  // console.log(search_val);
  // console.log(e.target);
  $.ajax({
    type: "get",
    dataType: "json",
    url: `/api/productNewApi/search/brands?keyword=${search_val}`,
    success: function (result) {
      let data = result.data;
      let data_2 = [];
      console.log(data);
 
      $.ajax({
        type: "get",
        dataType: "json",
        url: `/api/productNewApi/search/productName?keyword=${search_val}`,
        success: function (result) {
          data_2 = result.data;
          console.log(data_2);
          // set is only display distinct value
          let combine = [...new Set([...data ,...data_2])];
          displayAllProducts(combine)
        },
      });
    },
  });
});








})