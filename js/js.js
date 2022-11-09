

        function showTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(showTime, 1000);
        
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
      showTime()

      let getName = prompt("Lütfen adınızı girin.")           //kullanıcıdan adını alır ve değişkene atar
      let selectName = document.querySelector("#myName")      //ID'si myName olan ilk öğeyi seçer
      selectName.innerHTML = `${getName}`                     //seçtiği öğenin innerHTML'ini Template Literal ile yeniden düzenler.