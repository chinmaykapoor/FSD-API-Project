 $(document).ready(function () {
        $("#search").click(function () {
            $("#result").empty();
           q = $("#query").val();
            $.ajax(
            {
              url:'http://api.tvmaze.com/search/shows?q=${q}',
              type:"GET",
              dataType:"jsonp",
              success:function(data)
              {
                 if (data.length > 10) {
      for (var i = 0; i < 10; i++) {
        if(data[i].show.image != null){
            var img = data[i].show.image.original;
            $("#result").append(
     `<div class="container"><div class="card" style="width:400px"><img class="card-img-top" src="${data[i].show.image.original}" alt="Card image" style="width:10px height:10px">    <div class="card-body">
      <h4 class="card-title">${data[i].show.name}</h4>
      <p class="card-text">${data[i].show.summary}</p>
      <a href="${data[i].show.officialSite}" class="btn btn-primary ">Watch Here</a>
      <button onclick="moreDetails(${data[i].show.id},\'${img}\')" class="btn btn-warning" >More Details</button>
      <div id="show1234" >${data[i].show.id}</div>
      </div></div>`
                        )
        }
   
                    }
    }
    else{
        for (var i = 0; i < data.length; i++) {

            if(data[i].show.image != null){
                var img = data[i].show.image.original;
            $("#result").append(
     `<div class="container"> <div class="card" style="width:400px"><img class="card-img-top" src="${data[i].show.image.original}" alt="Card image" style="width:100px height:100px">    <div class="card-body">
      <h4 class="card-title">${data[i].show.name}</h4>
      <p class="card-text">${data[i].show.summary}</p>
      <a href="${data[i].show.officialSite}" class="btn btn-primary ">Watch Here</a>
      <button onclick="moreDetails(${data[i].show.id},\'${img}\')" class="btn btn-danger" >More Details</button>
      <div id="showall" >${data[i].show.id}</div>
      </div> </div>`
                        )
        }
            
                    }
    }
              }
            })

        });
    });
    function moreDetails(id,img){
        $("#result").empty();
        alert("Id is " + id);
        $.get('http://api.tvmaze.com/shows/'+id+'/episodes',function(data){

            console.log(img);
            for (var i = 0; i < data.length; i++) {
            $("#result").append(
     `<div class="container"> <div class="card" style="width:400px"><img class="card-img-top" src="${img}" alt="Card image" style="width:400px height:300px">    <div class="card-body">
      <h4 class="card-title">${data[i].name}</h4>
      <h3 class="card-text">Season ${data[i].season}</h3>
      <br>
      Episode : ${data[i].number}
      <a href="${data[i].url}" class="btn btn-primary ">Watch</a>
      </div> </div>`
        ) 
       
        }
    
        }  )
    }
  
    $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'yyyy-mm-dd',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    })

    function date2()
    {
        da = document.getElementById('date').value;
        se = document.getElementById('sel1').value
        $.get('http://api.tvmaze.com/schedule?country='+ se +'&date=' + da , function(data) {
            console.log(data);
        })
    }