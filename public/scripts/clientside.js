console.log( 'clientside.js sourced');

$( document ).ready( function(){
  console.log( 'document ready');

  // on click for sendInfo id
  $( '#sendInfo' ).on( 'click', function(){
    console.log( 'sendInfo on click' );
    // get user input
    var xIn = $( '#xIn').val();
    var yIn = $( '#yIn').val();
    var operationIn = $( '#operationIn').val();
    // assemble object to send to server
    var objectToSend={
      x: xIn,
      y: yIn,
      operation: operationIn
    };
    // ajax post that sends object to /calculator route
    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: objectToSend,
      success: function( data ){
        console.log( 'got this from server - ' + data );
      } // end ajax success
    });
  }); // end sendInfo on click
});
