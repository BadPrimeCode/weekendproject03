console.log('client.js sourced');

// global vars
var x = Number(mathProblem.x);
var y = Number(mathProblem.y);
var type = mathProblem.type;


$(document).ready(function() {
    console.log('document ready');

  // // on click for numbers
  //   $('.number').on('click', function() {
  //     var x = $('.number').on('click', function(){
  //       var what = $(this).data('id');
  //       y = y + what;
  //       console.log(y);
  //       $('.display').html(y);
  //   }); //end numbers
  //
  // // on click for operator
  //   $('.operator').on('click', function() {
  //     type = $(this).data('id');
  //     console.log(type);
  //     x = y;
  //     console.log(x);
  //     y = '';
  //     console.log(y);
  //   }); // end operator button

  // on click for equals
    $('.equals').on('click', function() {
      console.log('equals button clicked');
      // create object to send
      var mathProblem = {
        x: x,
        y: y,
        type: type
      };

      // ajax post
      $.ajax({
          type: 'POST',
          url: '/calc',
          data: mathProblem,
          success: function(data) {
            console.log('got this from server - ' + data);
            $('.display').html(data.result);
          } // end ajax success
        }); //end ajax post

    // switch chooses what URL to go to
    var goTo = 'url'
    switch (type) {
      case 'add':
        goTo = '/add'
        break;
      case 'subtract':
        goTo = '/subtract'
        break;
      case 'multiply':
        goTo = '/multiply'
        break;
      case 'divide':
        goTo = '/divide'
        break;
      default:
        console.log('switch defaulted');
    } //end switch
  }); // end equals button

  // on clear button click
  $('.clear').on('click', function() {
      x = '';
      y = '';
      type = '';
      $('.display').empty();
      console.log('display cleared');
  }); // end clear button
  });
}); //end document ready
