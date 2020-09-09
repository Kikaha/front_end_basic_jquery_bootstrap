window.addEventListener('load',attachEventListeners)

function attachEventListeners(){

    const arrCourses = [{name:"Java Fundamentals",price:170},{name:"Java Advanced",price:180},
        {name:"Java DB",price:190},{name:"Java WEB",price:480}];
    const types = [{name:"Onsite",discount:0},{name:"Online",discount: 0.06}];
    let totalCost = 0;
    // <li>
    //     <label>
    //         <input type="checkbox" value="java"/>
    //         Java Fundamentals
    //     </label>
    // </li>
    // $('li').css('background', '#DDD');
    const generateCoursesList = function () {
        arrCourses.forEach(x => {
            $('.input').append(
                ` <li>
                  <label>
                      <input type="checkbox" value="java"/>
                      ${x.name}
                  </label>
              </li>`
            )
            totalCost+=x.price;
        })
        $('#cost').text(`Cost: ${totalCost} BGN`);
    }();

















}