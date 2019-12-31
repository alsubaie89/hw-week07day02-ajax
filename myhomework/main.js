let res = {}; let baseURL = "https://api.imgflip.com/get_memes"
function getInfo(){
axios.get(baseURL).then(function(result) {
            res = result.data.data.memes
            console.log(res)
            document.getElementById("con").innerHTML = ""
            res.forEach(element => {
                document.getElementById("con").innerHTML += `<p>${element.name}</p><img width=element.width height=element.height src= ${element.url}>`
            });
                



        })


}  
getInfo()