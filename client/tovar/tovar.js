Template.tovar.helpers({
    tovarNewCollections:function () {
            return NewCollections.find({}, {sort: {price: 1}});
        }
    
  });

Template.tovar.onRendered(function () {
    $('.colorSquare img').hide();
    $('.hoverImg').hide();
   $('.sizeTovar').hide();
  $( '.modal1' ).hover(
        function() {
            var imgSrc = $(this).find('.mainImgTovar').attr('name');
            $(this).find('.sizeTovar').fadeIn(100);

            $( this ).find('.mainImgTovar').attr('src', imgSrc);
        
        },function() {
              $(this).find('.sizeTovar').fadeOut(100);
            var imgSrc = $(this).find('.mainImgTovar').attr('names');
            $( this ).find('.mainImgTovar').attr('src', imgSrc);         
        }
    );
  $('.tovarBlock').click(function (e) {
    $('.tablSize').attr('src', 's.png');
        var tovarId = $(this).attr('name');
        console.log(this);
        Session.set('tovarId', tovarId);
        console.log(Session.get('tovarId'));
 /*       $('#modal1').openModal();*/
            Router.go('razdelnyy', {name: Session.get('tovarId')});


    })
    $('#materialize-lean-overlay-2').click(function (e) {
        console.log('asdasdasdasd');

    })
$( '.colorSquare' ).hover(
        function() {
            console.log('asdd')
            var name = $(this).attr('name');
            $(this).parent().parent().parent().parent().find('.mainImgTovar').attr('src', name);
            console.log();

        
        },
        function() {
            var img = $(this).parent().parent().parent().parent().find('.mainImgTovar').attr('name');
            $(this).parent().parent().parent().parent().find('.mainImgTovar').attr('src', img);
        
        }
    );
       
});





