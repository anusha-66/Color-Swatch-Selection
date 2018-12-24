
 var result = [];
 var container;
 var sources;

 // Generate Random Color
 function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }

 // Clear Button Functionality in Detail Veiw
 function clearDetail() {
     $("#detail").hide();
     $("#main").show();
 }

 // Search Functionality
 function filterColor(txt) {
     sources = jQuery.grep(result, function (a) {
         return a.toLowerCase().indexOf(txt) >= 0;
     });
     generateUI();
 }

 // Functionality to populate UI with color swatches
 function generateUI() {
     var options = {
         dataSource: sources,
         showPrevious: false,
         showNext: false,
         pageSize: 12,
         callback: function (response, pagination) {
             window.console && console.log(response, pagination);

             var dataHtml = '';

             $.each(response, function (index, item) {
                 dataHtml += "<div class='colordvcon' ><div  class='colordva' style='background-color:" + item + ";'> </div>" + item + "</div>";
             });

             dataHtml += '';

             container.prev().html(dataHtml);
         }
     };
     container.pagination(options);
 }


 $(function () {
     (function (name) {
         container = $('#pagination-' + name);
         sources = function () {
             result = [];
             for (var i = 1; i < 196; i++) {
                 result.push(getRandomColor());
             }
             return result;
         }();
         generateUI();
     })('demo1');
     $(".colordva").click(function (event) {
         $("#detailCard").css('background', event.target.parentElement.innerText);
         $("#colorName")[0].innerText = event.target.parentElement.innerText;
         $("#detail").show();
         $("#main").hide();
     });
 })