
var Top=0,
    Height=$(window).height(),
    AllHeight=1914,
    Containers=$('.container'),
    lenght=Containers.length-1;

$('body').on('mousewheel',function (event) {

    if(event.deltaY>0 & Top!=0){
        Top++;
    }else if(event.deltaY<0 & Containers.eq(lenght).offset().top !=0){
        Top--;
    }

    Containers.each(function (i){
        var $this=$(this),
            index=CurentContainer(),
            N=5;
            if(event.deltaY>0){
                if(i===index & i!=0){
                    if(index===lenght){
                        container(Containers.eq(i),Top*N);
                    }else{
                        if(Containers.eq(index).offset().top + Height <= Containers.eq(index+1).offset().top){
                            container(Containers.eq(i),Top*N);
                        }
                    }

                } else if(i!=0){
                    if(index<i){
                        container(Containers.eq(i),Top*N);
                    }

                }

            }else if(event.deltaY<0){
              if(i===index & i!=0){
              } else if(i!=0){
                  if(index<i){
                      container(Containers.eq(i),Top*N);
                  }
              }

            }
    });

});

function container(el,top) {
    $(el).css(
        {
            "transform": "translate(0px,"+ top+"%)"
        }
    );
};
function  CurentContainer() {
    var newContainer=Containers.map(function(index) {
         if(Containers.eq(index).offset().top<=0){
             return Containers.eq(index);
}
});
    return newContainer.length-1;
};
function  isNumber(number){
   number = ''+ number;
   if(number.length===3){
       number=''+(number/100);
       return number.length === 1 ? true : false;
   }else{
       return false;
   }
};
