$(document).ready(function(){

    // Function to show/hide cards based on navigation clicks
    function showCard(cardId) {
        // Hide all cards
        $('.card').hide();
        // Show the selected card
        $('#' + cardId).show();
    }

    // Default card to show
    showCard('aboutSection');

    // Navigation click behavior
    $('.sideNavItem').click(function() {
        var sectionId = $(this).find('a').attr('href').substring(1);
        showCard(sectionId);
    })

    // Starting every page load at top
    $('html, body').animate({
        scrollTop: 0
    }, 0);
    $('#sideNav').css('display', 'none');
    $('body').css('display', 'none')
        .fadeIn(2000, function(){
            $('#sideNav').slideDown(1250);
    });

    // sideNavItem click behavior
    $('.sideNavItem').click(function(){
        $(this).addClass("sideNavItemSelected");
        $(this).siblings().removeClass("sideNavItemSelected");
    });

    var colors = new Array(
        [4,0,128], // Navy
        [235,227,0], // Weird Yellow
        [0,227,255], // Sky Blue
        [249,204,255], // Light Pink
        [0,74,255], // Kappa Blue
        [255,255,153]); // Light Yellow
     
      var step = 0;
      //color table indices for:
      // current color left
      // next color left
      // current color right
      // next color right
      var colorIndices = [0,1,2,3];
     
      //transition speed
      var gradientSpeed = 0.002;
     
      function updateGradient()
      {
       
        if ( $===undefined ) return;
       
      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];
     
      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "rgb("+r1+","+g1+","+b1+")";
     
      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "rgb("+r2+","+g2+","+b2+")";
     
       $('#cloudResumeBody').css({
         background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
          background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
       
        step += gradientSpeed;
        if ( step >= 1 )
        {
          step %= 1;
          colorIndices[0] = colorIndices[1];
          colorIndices[2] = colorIndices[3];
         
          //pick two new target color indices
          //do not pick the same as the current one
          colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
         
        }
      }
     
      setInterval(updateGradient,10);
});